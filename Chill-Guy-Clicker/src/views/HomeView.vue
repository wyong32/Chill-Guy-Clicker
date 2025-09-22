<template>
  <div class="home-wrapper">
    <!-- 页面级Header -->
    <TheHeader />
    <div class="home" :class="{ 'theater-mode': isTheaterMode }">
      <!-- 左侧广告 - 简洁悬浮式 -->
      <aside class="ads-left" v-if="!isMobile">
        <ins
          class="adsbygoogle"
          style="display: block"
          data-ad-client="ca-pub-4638984121333143"
          data-ad-slot="6904540807"
          data-ad-format="vertical"
          data-full-width-responsive="true"
        ></ins>
      </aside>

      <main class="main-content container">
        <!-- 头部横幅广告-PC -->
        <aside class="ads-wrapper" v-if="!isMobile">
          <ins
            class="adsbygoogle"
            style="display: block"
            data-ad-client="ca-pub-4638984121333143"
            data-ad-slot="3707198686"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </aside>

        <!-- 移动端横幅广告1 -->
        <aside class="ads-wrapper" v-if="isMobile">
          <ins
            class="adsbygoogle"
            style="display: block"
            data-ad-client="ca-pub-4638984121333143"
            data-ad-slot="3423077907"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </aside>

        <h1 class="game-title" v-show="!isTheaterMode">
          {{ featuredGame?.pageTitle || featuredGame?.title || defaultGame?.pageTitle || defaultGame?.title || 'Chill Guy Clicker' }}
        </h1>
        <div class="game-layout">
          <!-- Main Game Area -->
          <section class="game-main">
            <article class="featured-game">
              <GamePlayer
                :game="featuredGame || defaultGame"
                :gameStarted="gameStarted"
                @start-game="startGame"
                @theater-mode-changed="handleTheaterModeChanged"
              />
              <GameInfo
                :game="featuredGame || defaultGame"
                v-if="(featuredGame?.detailsHtml || featuredGame?.rating) || (defaultGame?.detailsHtml || defaultGame?.rating)"
              />

              <!-- 移动端横幅广告2 -->
              <aside class="ads-wrapper" v-if="isMobile">
                <ins
                  class="adsbygoogle"
                  style="display: block"
                  data-ad-client="ca-pub-4638984121333143"
                  data-ad-slot="5857669556"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                ></ins>
              </aside>
            </article>
          </section>

          <!-- 移动端横幅广告3 -->
          <aside class="ads-wrapper" v-if="isMobile">
            <ins
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-4638984121333143"
              data-ad-slot="8919996910"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </aside>

          <!-- Hot Games Sidebar -->
          <GameSidebar 
            :hotGames="hotGames" 
            :newGames="newGames" 
            :gameId="(featuredGame || defaultGame)?.id"
            :isTheaterMode="isTheaterMode"
            v-show="!isTheaterMode" 
          />
        </div>

        <!-- More Games Section -->
        <MoreGames 
          :games="moreGames"
          :showAllMoreGames="showAllMoreGames"
          :isMobile="isMobile"
          :toggleMoreGames="toggleMoreGames"
          v-show="!isTheaterMode" 
        />
      </main>
      
      <!-- 页面级Footer组件 -->
      <TheFooter />
      
      <!-- 右侧广告 - 简洁悬浮式 -->
      <aside class="ads-right" v-if="!isMobile">
        <ins
          class="adsbygoogle"
          style="display: block"
          data-ad-client="ca-pub-4638984121333143"
          data-ad-slot="5591459134"
          data-ad-format="vertical"
        ></ins>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
// Component imports
import GamePlayer from '@/components/GamePlayer.vue'
import GameInfo from '@/components/GameInfo.vue'
import GameSidebar from '@/components/GameSidebar.vue'
import MoreGames from '@/components/MoreGames.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
// Composable and data imports
import { useDeviceDetection } from '@/utils/useDeviceDetection.js'
import { games } from '@/data/games.js'

// --- State and Route ---
const { isMobile } = useDeviceDetection()
const route = useRoute()
const gameStarted = ref(false)
const isTheaterMode = ref(false)

// --- Computed Properties ---
const currentGame = computed(() => {
  const addressBar = route.params.addressBar
  const isHomePage = route.path === '/'
  const defaultGame = games.find((game) => game.id === 1) || games[0]

  if (isHomePage && (!addressBar || addressBar === '')) {
    return defaultGame
  }

  if (addressBar) {
    const game = games.find(
      (g) =>
        (g.addressBar && g.addressBar.toLowerCase() === addressBar.toLowerCase()) ||
        (g.id && String(g.id).toLowerCase() === addressBar.toLowerCase()),
    )
    return game || defaultGame
  }
  return defaultGame
})

const featuredGame = computed(() => currentGame.value)
const hotGames = computed(() => games.filter((game) => game.isHot))
const newGames = computed(() => games.filter((game) => game.isNew))

// 添加控制More Games显示状态的响应式变量
const showAllMoreGames = ref(false)

// 预加载默认游戏，避免异步计算延迟
const defaultGame = games.find((game) => game.id === 1) || games[0]

// 固定moreGames数组，避免动态长度变化导致CLS
const allMoreGames = games.filter((game) => game.isMore || game.isRecommended)
const moreGames = computed(() => {
  // 始终返回完整数组，通过CSS控制显示
  return allMoreGames
})

// --- Methods ---
const startGame = () => {
  gameStarted.value = true
}

const handleTheaterModeChanged = (value) => {
  isTheaterMode.value = value
}

// 添加切换More Games显示状态的方法
const toggleMoreGames = () => {
  showAllMoreGames.value = !showAllMoreGames.value
}

// 移除本地SEO更新，依赖路由守卫处理
// const updateSEO = () => {
//   // SEO更新已在路由守卫中优化处理
// }

// 优化的广告加载函数
const loadAds = () => {
  if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
    try {
      const adElements = document.querySelectorAll('.adsbygoogle')
      console.log(`发现 ${adElements.length} 个广告位`)
      
      adElements.forEach((el, index) => {
        try {
          // 检查广告是否已经加载
          if (el.getAttribute('data-adsbygoogle-status') !== 'done' && 
              !el.querySelector('iframe') &&
              el.offsetParent !== null) { // 确保元素可见
            ;(window.adsbygoogle = window.adsbygoogle || []).push({})
            console.log(`广告位 ${index + 1} 已触发加载`)
          }
        } catch (pushError) {
          console.error(`广告位 ${index + 1} 加载失败:`, pushError)
        }
      })
    } catch (e) {
      console.error('广告加载失败:', e)
    }
  } else {
    console.log('AdSense脚本还未加载完成')
  }
}

onMounted(() => {
  // 延迟加载广告，确保DOM完全渲染
  setTimeout(() => {
    try {
      // 为所有设备加载广告，使用新的loadAds函数
      loadAds()
    } catch (e) {
      console.error('广告初始化失败:', e)
    }
  }, 1000)
})

// --- Watcher ---
// 监听当前游戏的变化，并在首次加载时立即执行
watch(
  currentGame,
  (newGame) => {
    if (newGame) {
      gameStarted.value = false
      // SEO更新由路由守卫处理，避免重复DOM操作
    }
  },
  { immediate: true },
)
</script>

<style scoped>
/* 包装器样式 */
.home-wrapper {
  width: 100%;
}

.home {
  display: flex;
  flex-direction: column;
  color: #fff;
  z-index: 0;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
}

.main-content {
  flex: 1;
  padding-top: 30px;
  padding-bottom: 50px;
  width: 100%;
  box-sizing: border-box;
}

.game-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
  text-shadow: 0 0 10px rgba(65, 184, 131, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Game Layout */
.game-layout {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  width: 100%;
  box-sizing: border-box;
  /* 预设最小高度防止CLS */
  min-height: 500px;
}

.game-main {
  flex: 1;
  min-width: 0;
  box-sizing: border-box;
}

.game-sidebar {
  width: 300px;
  flex-shrink: 0;
  box-sizing: border-box;
}

/* Featured Game Area */
.featured-game {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #333;
  width: 100%;
  box-sizing: border-box;
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
  font-weight: 600;
  position: relative;
  padding-left: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 20px;
  background-color: #41b883;
  border-radius: 3px;
}

/* Theater 模式样式 */
.home.theater-mode {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9998;
  background-color: #000;
  overflow: hidden;
}

.home.theater-mode .main-content {
  padding: 0;
  margin: 0;
  max-width: none;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home.theater-mode .game-layout {
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home.theater-mode .game-main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home.theater-mode .featured-game {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  margin: 0;
}

/* 广告侧边栏定位样式 */
.ad-sidebar.ad-left.ad-isPc {
  position: fixed;
  top: 90px;
  left: 10px;
  width: 200px;
  z-index: 9999;
  transform: none;
  will-change: auto;
}

@media (max-width: 1024px) {
  .game-layout {
    flex-direction: column;
  }

  .game-sidebar {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .game-title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .featured-game{
    padding: 10px;
  }
  
}

@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }
  .main-content {
    padding-top: 30px;
  }

  .game-meta {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
