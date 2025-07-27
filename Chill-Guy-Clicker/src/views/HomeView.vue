<template>
  <div class="home-wrapper">
    <!-- 广告测试信息 -->
    <div
      style="
        position: fixed;
        top: 10px;
        left: 10px;
        background: red;
        color: white;
        padding: 10px;
        z-index: 999999;
      "
    >
      设备类型: {{ isMobile ? '移动设备' : '桌面设备' }}<br />
      AdSense: {{ adsenseStatus }}<br />
      <button
        @click="loadAds"
        style="background: blue; color: white; border: none; padding: 5px; margin-top: 5px"
      >
        手动加载广告
      </button>
      <button
        @click="checkAdsense"
        style="background: green; color: white; border: none; padding: 5px; margin-top: 5px"
      >
        检查AdSense
      </button>
    </div>

    <div class="home" :class="{ 'theater-mode': isTheaterMode }">
      <!-- 左侧广告-PC -->
      <aside class="ads-wrapper ads-left" v-if="!isMobile">
        <div style="background: yellow; padding: 10px; margin: 5px">左侧广告容器</div>
        <ins
          class="adsbygoogle"
          style="display: block"
          data-ad-client="ca-pub-4638984121333143"
          data-ad-slot="6904540807"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </aside>

      <!-- 右侧广告-PC -->
      <aside class="ads-wrapper ads-right" v-if="!isMobile">
        <ins
          class="adsbygoogle"
          style="display: block"
          data-ad-client="ca-pub-4638984121333143"
          data-ad-slot="5591459134"
          data-ad-format="auto"
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
          {{ featuredGame.pageTitle || featuredGame.title }}
        </h1>
        <div class="game-layout">
          <!-- Main Game Area -->
          <section class="game-main">
            <article class="featured-game">
              <GamePlayer
                :game="featuredGame"
                :gameStarted="gameStarted"
                @start-game="startGame"
                @theater-mode-changed="handleTheaterModeChanged"
              />
              <GameInfo
                :game="featuredGame"
                v-if="featuredGame.detailsHtml || featuredGame.rating"
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

              <CommentSection :gameId="featuredGame.id" v-show="!isTheaterMode" />
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
          <GameSidebar :hotGames="hotGames" :newGames="newGames" v-show="!isTheaterMode" />
        </div>

        <!-- More Games Section -->
        <MoreGames :games="moreGames" v-show="!isTheaterMode" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'
// Component imports
import GamePlayer from '@/components/GamePlayer.vue'
import GameInfo from '@/components/GameInfo.vue'
import GameSidebar from '@/components/GameSidebar.vue'
import MoreGames from '@/components/MoreGames.vue'
import CommentSection from '@/components/CommentSection.vue'
// Composable and data imports
import { useDeviceDetection } from '@/utils/useDeviceDetection.js'
import { games } from '@/data/games.js'

// --- State and Route ---
const { isMobile } = useDeviceDetection()
const route = useRoute()
const gameStarted = ref(false)
const isTheaterMode = ref(false)
const adsenseStatus = ref('检查中...')

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
const moreGames = computed(() => games.filter((game) => game.isMore || game.isRecommended))

// --- Methods ---
const startGame = () => {
  gameStarted.value = true
}

const handleTheaterModeChanged = (value) => {
  isTheaterMode.value = value
}

const checkAdsense = () => {
  alert('检查AdSense按钮被点击了！')
  console.log('检查 AdSense 状态...')
  console.log('window.adsbygoogle:', window.adsbygoogle)
  console.log('typeof window.adsbygoogle:', typeof window.adsbygoogle)

  if (window.adsbygoogle) {
    console.log('adsbygoogle.push:', typeof window.adsbygoogle.push)
    adsenseStatus.value = '已加载'
  } else {
    console.log('AdSense 脚本未加载')
    adsenseStatus.value = '未加载'
  }
}

const updateSEO = () => {
  const game = currentGame.value
  if (!game || !game.seo) return

  document.title = game.seo.title

  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', game.seo.description)

  let metaKeywords = document.querySelector('meta[name="keywords"]')
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    document.head.appendChild(metaKeywords)
  }
  metaKeywords.setAttribute('content', game.seo.keywords)
}

// 手动触发广告加载
const loadAds = () => {
  alert('手动加载广告按钮被点击了！')
  console.log('=== HomeView 广告加载诊断 ===')
  console.log('设备类型:', isMobile.value ? '移动设备' : '桌面设备')

  if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
    try {
      // 只处理当前页面中的广告元素
      const homeContainer = document.querySelector('.home-wrapper')
      if (!homeContainer) {
        console.log('未找到 .home-wrapper 容器')
        return
      }

      const adElements = homeContainer.querySelectorAll('.adsbygoogle')
      console.log('HomeView找到广告元素数量:', adElements.length)

      // 详细检查每个广告元素
      adElements.forEach((el, index) => {
        const adSlot = el.getAttribute('data-ad-slot')
        const status = el.getAttribute('data-ad-status')
        const hasContent = el.children.length > 0
        const isVisible = el.offsetWidth > 0 && el.offsetHeight > 0
        const computedStyle = window.getComputedStyle(el)

        console.log(`广告 ${index + 1} (${adSlot}):`)
        console.log(`  - 状态: ${status || '未处理'}`)
        console.log(`  - 有内容: ${hasContent}`)
        console.log(`  - 可见: ${isVisible}`)
        console.log(`  - 显示: ${computedStyle.display}`)
        console.log(`  - 尺寸: ${el.offsetWidth}x${el.offsetHeight}`)
        console.log(`  - 父元素: ${el.parentElement?.className}`)
      })

      // 检查哪些广告需要重新加载
      const adsToReload = []
      adElements.forEach((el, index) => {
        const status = el.getAttribute('data-ad-status')
        const hasContent = el.children.length > 0

        if (!status || status === 'unfilled' || !hasContent) {
          adsToReload.push({ element: el, index })
        } else {
          console.log(`HomeView广告 ${index + 1} 已有内容，跳过重新加载`)
        }
      })

      if (adsToReload.length === 0) {
        console.log('HomeView所有广告都已加载完成，无需重新加载')
        return
      }

      console.log(`HomeView需要重新加载 ${adsToReload.length} 个广告`)

      adsToReload.forEach(({ element, index }) => {
        try {
          // 标记广告元素已处理
          element.setAttribute('data-ad-status', 'loading')
          console.log(`正在加载HomeView广告 ${index + 1}:`, element.getAttribute('data-ad-slot'))
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (pushError) {
          // 忽略重复加载错误
          if (!pushError.message.includes('already have ads')) {
            console.error('HomeView广告加载失败:', pushError)
          }
          // 移除标记，允许重试
          element.removeAttribute('data-ad-status')
        }
      })
    } catch (e) {
      console.error('HomeView广告加载失败:', e)
    }
  } else {
    // 如果 adsbygoogle 还没加载，延迟重试
    console.log('广告脚本未加载，延迟重试...')
    setTimeout(loadAds, 1000)
  }
}

// 监听广告脚本加载完成
const waitForAdScript = () => {
  console.log('waitForAdScript 被调用，检查 adsbygoogle...')
  if (window.adsbygoogle) {
    console.log('Google AdSense 脚本已加载')
    // 延迟加载广告，确保页面完全渲染
    setTimeout(loadAds, 3000)
  } else {
    console.log('adsbygoogle 还未加载，100ms后重试...')
    setTimeout(waitForAdScript, 100)
  }
}

// 监听页面可见性变化，重新加载广告
const handleVisibilityChange = () => {
  if (!document.hidden) {
    console.log('页面变为可见，重新检查广告')
    setTimeout(loadAds, 1000)
  }
}

onMounted(() => {
  console.log('HomeView onMounted 被调用')

  // 初始化 AdSense 状态检查
  setTimeout(() => {
    checkAdsense()
  }, 1000)

  // 等待广告脚本加载完成后立即加载广告
  waitForAdScript()

  // 监听页面可见性变化
  document.addEventListener('visibilitychange', handleVisibilityChange)

  // 监听路由变化
  const unwatch = watch(
    () => route.path,
    () => {
      console.log('路由变化，重新加载广告')
      setTimeout(loadAds, 2000)
    },
  )

  // 清理监听器
  onUnmounted(() => {
    console.log('HomeView onUnmounted 被调用')
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    unwatch()
  })
})

// --- Watcher ---
// 监听当前游戏的变化，并在首次加载时立即执行
watch(
  currentGame,
  (newGame) => {
    if (newGame) {
      gameStarted.value = false
      updateSEO()
    }
  },
  { immediate: true },
)
</script>

<style scoped>
/* 包装器样式 */
.home-wrapper {
  width: 100%;
  min-height: 100vh;
}

.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  z-index: 0;
  position: relative;
  /* 防止布局偏移的关键属性 - 基于 Cookingdom */
  /* contain: layout style paint; */
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
  /* 防止布局偏移 */
  /* contain: layout style; */
  width: 100%;
  box-sizing: border-box;
}

.main-content {
  flex: 1;
  padding-top: 30px;
  padding-bottom: 50px;
  /* 防止布局偏移 */
  /* contain: layout style; */
  min-height: calc(100vh - 380px); /* 减去 header 和 footer 的高度 */
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
  /* 防止文字渲染导致的布局偏移 */
  /* contain: layout style; */
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Game Layout */
.game-layout {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  /* 防止布局偏移 */
  /* contain: layout style; */
  min-height: 600px;
  width: 100%;
  box-sizing: border-box;
}

.game-main {
  flex: 1;
  /* 防止布局偏移 */
  /* contain: layout style; */
  min-width: 0; /* 防止 flex 子项溢出 */
  box-sizing: border-box;
}

.game-sidebar {
  width: 300px;
  /* 防止布局偏移 */
  /* contain: layout style; */
  flex-shrink: 0; /* 防止收缩 */
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
  /* 防止布局偏移 */
  /* contain: layout style paint; */
  min-height: 500px;
  width: 100%;
  box-sizing: border-box;
  /* will-change: transform; */
  /* transform: translateZ(0); */
  backface-visibility: hidden;
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
  background-color: var(--primary-color);
  border-radius: 3px;
}

/* Theater 模式样式 */
.home.theater-mode {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 9998 !important;
  background-color: #000 !important;
  overflow: hidden !important;
}

.home.theater-mode .main-content {
  padding: 0 !important;
  margin: 0 !important;
  max-width: none !important;
  height: 100vh !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.home.theater-mode .game-layout {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.home.theater-mode .game-main {
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.home.theater-mode .featured-game {
  width: 100% !important;
  height: 100% !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* 强制广告固定定位 - 覆盖父级影响 */
.ad-sidebar.ad-left.ad-isPc {
  position: fixed !important;
  top: 90px !important;
  left: 10px !important;
  width: 200px !important;
  min-height: 600px !important;
  z-index: 9999 !important;
  transform: none !important;
  will-change: auto !important;
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
  .game-iframe-container {
    padding-bottom: 60%;
  }

  /* 移除未使用的 CSS 类 */

  .game-title {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }
  .main-content {
    padding-top: 30px;
  }

  .featured-game {
    padding: 20px 10px;
  }

  /* 移除未使用的 CSS 类 */

  .game-meta {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .game-title {
    font-size: 24px;
  }
}
</style>
