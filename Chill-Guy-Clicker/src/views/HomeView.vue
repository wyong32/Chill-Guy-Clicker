<template>
  <div class="home-wrapper">
    <div class="home" :class="{ 'theater-mode': isTheaterMode }">

      <!-- 左侧广告-PC -->
      <aside class="ads-wrapper ads-left" v-if="!isMobile">
          <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4638984121333143"
     data-ad-slot="6904540807"
     data-ad-format="auto"></ins>
        </aside>

        <!-- 右侧广告-PC -->
        <aside class="ads-wrapper ads-right" v-if="!isMobile">
          <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4638984121333143"
     data-ad-slot="5591459134"
     data-ad-format="auto"></ins>
        </aside>

      <main class="main-content container">

        <!-- 头部横幅广告-PC -->
        <aside class="ads-wrapper" v-if="!isMobile">
          <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4638984121333143"
     data-ad-slot="3707198686"
     data-ad-format="auto"></ins>
        </aside>


        <!-- 移动端横幅广告1 -->
        <aside class="ads-wrapper" v-if="isMobile">
          <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4638984121333143"
     data-ad-slot="3423077907"
     data-ad-format="auto"></ins>
        </aside>

        <h1 class="game-title" v-show="!isTheaterMode">{{ featuredGame.pageTitle || featuredGame.title }}</h1>
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
              <GameInfo :game="featuredGame" v-if="featuredGame.detailsHtml || featuredGame.rating" />
              

                      <!-- 移动端横幅广告2 -->
        <aside class="ads-wrapper" v-if="isMobile">
          <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4638984121333143"
     data-ad-slot="5857669556"
     data-ad-format="auto"></ins>
        </aside>

              <CommentSection :gameId="featuredGame.id" v-show="!isTheaterMode" />
            </article>
          </section>

                                <!-- 移动端横幅广告3 -->
        <aside class="ads-wrapper" v-if="isMobile">
          <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4638984121333143"
     data-ad-slot="8919996910"
     data-ad-format="auto"></ins>
        </aside>

          <!-- Hot Games Sidebar -->
          <GameSidebar :hotGames="hotGames" :newGames="newGames" v-show="!isTheaterMode" />
        </div>

        <!-- More Games Section -->
        <MoreGames :games="moreGames" v-show="!isTheaterMode" />
        
        <!-- 调试按钮 - 仅在开发环境显示 -->
        <div v-if="import.meta.env.DEV" style="margin-top: 20px; text-align: center;">
          <button @click="reloadAds" style="padding: 10px 20px; background: #41b883; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;">
            重新加载广告 (调试)
          </button>
          <button @click="diagnoseAdIssues" style="padding: 10px 20px; background: #ff6b6b; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;">
            诊断广告问题
          </button>
          <button @click="addTestAd" style="padding: 10px 20px; background: #ffa500; color: white; border: none; border-radius: 5px; cursor: pointer;">
            添加测试广告
          </button>
        </div>
        
        <!-- 测试广告区域 - 仅在开发环境显示 -->
        <div v-if="import.meta.env.DEV" style="margin-top: 20px; padding: 20px; background: #f0f0f0; border-radius: 10px;">
          <h3>测试广告区域</h3>
          <div id="test-ad-container" style="min-height: 100px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center;">
            <p>点击"添加测试广告"按钮来添加测试广告</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// Component imports
import GamePlayer from '@/components/GamePlayer.vue';
import GameInfo from '@/components/GameInfo.vue';
import GameSidebar from '@/components/GameSidebar.vue';
import MoreGames from '@/components/MoreGames.vue';
import CommentSection from '@/components/CommentSection.vue';
// Composable and data imports
import { useDeviceDetection } from '@/utils/useDeviceDetection.js';
import { games } from '@/data/games.js';

// --- State and Route ---
const { isMobile } = useDeviceDetection();
const route = useRoute();
const gameStarted = ref(false);
const isTheaterMode = ref(false);

// --- Computed Properties ---
const currentGame = computed(() => {
  const addressBar = route.params.addressBar;
  const isHomePage = route.path === '/';
  const defaultGame = games.find(game => game.id === 1) || games[0];

  if (isHomePage && (!addressBar || addressBar === '')) {
    return defaultGame;
  }

  if (addressBar) {
    const game = games.find(
      (g) =>
        (g.addressBar && g.addressBar.toLowerCase() === addressBar.toLowerCase()) ||
        (g.id && String(g.id).toLowerCase() === addressBar.toLowerCase()),
    );
    return game || defaultGame;
  }
  return defaultGame;
});

const featuredGame = computed(() => currentGame.value);
const hotGames = computed(() => games.filter(game => game.isHot));
const newGames = computed(() => games.filter(game => game.isNew));
const moreGames = computed(() => games.filter(game => (game.isMore || game.isRecommended)));

// --- Methods ---
const startGame = () => {
  gameStarted.value = true;
};

const handleTheaterModeChanged = (value) => {
  isTheaterMode.value = value;
};

const updateSEO = () => {
  const game = currentGame.value;
  if (!game || !game.seo) return;

  document.title = game.seo.title;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', game.seo.description);

  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', game.seo.keywords);
};

// 检查AdSense脚本是否加载完成
const waitForAdSense = (callback, maxAttempts = 30) => {
  let attempts = 0
  
  const checkAdSense = () => {
    attempts++
    
    if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
      console.log('AdSense 脚本加载完成')
      callback()
    } else if (attempts < maxAttempts) {
      console.log(`等待 AdSense 脚本加载... (${attempts}/${maxAttempts})`)
      setTimeout(checkAdSense, 1000)
    } else {
      console.error('AdSense 脚本加载超时')
      // 即使超时也尝试加载广告
      callback()
    }
  }
  
  checkAdSense()
}

// 诊断广告问题
const diagnoseAdIssues = () => {
  console.log('=== 广告诊断开始 ===')
  
  // 1. 检查AdSense脚本
  console.log('1. AdSense脚本状态:', {
    adsbygoogle: !!window.adsbygoogle,
    pushFunction: !!(window.adsbygoogle && typeof window.adsbygoogle.push === 'function')
  })
  
  // 2. 检查广告元素
  const adElements = document.querySelectorAll('.adsbygoogle')
  console.log('2. 广告元素数量:', adElements.length)
  
  adElements.forEach((el, index) => {
    console.log(`   广告 ${index + 1}:`, {
      client: el.getAttribute('data-ad-client'),
      slot: el.getAttribute('data-ad-slot'),
      format: el.getAttribute('data-ad-format'),
      status: el.getAttribute('data-adsbygoogle-status'),
      visible: el.offsetWidth > 0 && el.offsetHeight > 0,
      rect: el.getBoundingClientRect()
    })
  })
  
  // 3. 检查网络请求
  console.log('3. 检查网络请求...')
  const performanceEntries = performance.getEntriesByType('resource')
  const adRequests = performanceEntries.filter(entry => 
    entry.name.includes('googlesyndication') || 
    entry.name.includes('googleadservices')
  )
  console.log('   AdSense相关请求:', adRequests)
  
  // 4. 检查控制台错误
  console.log('4. 检查可能的错误...')
  
  // 5. 检查广告拦截器
  console.log('5. 检查广告拦截器...')
  const adBlockerDetected = () => {
    const testAd = document.createElement('div')
    testAd.innerHTML = '&nbsp;'
    testAd.className = 'adsbox'
    testAd.style.position = 'absolute'
    testAd.style.left = '-10000px'
    document.body.appendChild(testAd)
    
    const isBlocked = testAd.offsetHeight === 0
    document.body.removeChild(testAd)
    return isBlocked
  }
  
  console.log('   广告拦截器检测:', adBlockerDetected())
  
  console.log('=== 广告诊断完成 ===')
}

// 手动触发广告加载
const loadAds = () => {
  console.log('开始加载手动广告...')
  
  if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
    try {
      // 获取所有广告元素
      const adElements = document.querySelectorAll('.adsbygoogle')
      console.log(`找到 ${adElements.length} 个广告元素`)
      
      if (adElements.length === 0) {
        console.warn('未找到任何广告元素，可能是页面还未完全加载')
        setTimeout(loadAds, 1000)
        return
      }
      
      // 简单直接的方法：直接调用 push
      console.log('调用 adsbygoogle.push()')
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      
    } catch (e) {
      console.error('广告加载过程中发生错误:', e)
    }
  } else {
    console.log('AdSense 脚本未加载，延迟重试...')
    // 如果 adsbygoogle 还没加载，延迟重试
    setTimeout(loadAds, 1000)
  }
}

// 监听广告加载状态
const checkAdStatus = () => {
  const adElements = document.querySelectorAll('.adsbygoogle')
  let loadedCount = 0
  let failedCount = 0
  
  adElements.forEach((el, index) => {
    const status = el.getAttribute('data-adsbygoogle-status')
    
    if (status === 'done') {
      console.log(`广告元素 ${index + 1} 加载完成`)
      loadedCount++
    } else if (status === 'loading') {
      console.log(`广告元素 ${index + 1} 正在加载中...`)
    } else {
      console.warn(`广告元素 ${index + 1} 未加载`)
      failedCount++
    }
  })
  
  console.log(`广告加载统计: 成功 ${loadedCount} 个, 失败 ${failedCount} 个`)
}

// 强制重新加载广告
const reloadAds = () => {
  console.log('强制重新加载所有广告...')
  const adElements = document.querySelectorAll('.adsbygoogle')
  adElements.forEach(el => {
    el.removeAttribute('data-adsbygoogle-status')
  })
  loadAds()
}

// 添加测试广告
const addTestAd = () => {
  console.log('添加测试广告...')
  const testAdContainer = document.getElementById('test-ad-container')
  if (!testAdContainer) {
    console.error('未找到测试广告容器')
    return
  }

  const testAd = document.createElement('div')
  testAd.innerHTML = `
    <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4638984121333143"
     data-ad-slot="3707198686"
     data-ad-format="auto"></ins>
  `
  testAdContainer.appendChild(testAd)
  console.log('测试广告已添加到容器')
}

onMounted(() => {
  // 等待AdSense脚本加载完成后再加载广告
  waitForAdSense(() => {
    // 先进行诊断
    diagnoseAdIssues()
    
    loadAds()
    // 定期检查广告状态
    setInterval(checkAdStatus, 5000)
    
    // 10秒后再次检查，如果还有未加载的广告，强制重新加载
    setTimeout(() => {
      const unfilledAds = document.querySelectorAll('.adsbygoogle:not([data-adsbygoogle-status="done"])')
      if (unfilledAds.length > 0) {
        console.log(`发现 ${unfilledAds.length} 个未加载的广告，强制重新加载`)
        reloadAds()
      }
    }, 10000)
  })
})

// --- Watcher ---
// 监听当前游戏的变化，并在首次加载时立即执行
watch(
  currentGame,
  (newGame) => {
    if (newGame) {
      gameStarted.value = false;
      updateSEO();
    }
  },
  { immediate: true }
);
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
  .container{
    padding: 0 10px;
  }
  .main-content{
    padding-top: 30px;
  }

  .featured-game{
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
