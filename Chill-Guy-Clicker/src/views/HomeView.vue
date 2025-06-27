<template>
  <div class="home-wrapper">
    <div class="home" :class="{ 'theater-mode': isTheaterMode }">
      <main class="main-content container">
         <!-- 顶部广告-PC -->
        <aside class="ad-content" v-show="!isTheaterMode" v-if="!isMobile" :key="'top-pc-ad-' + featuredGame.id">
          <ins class="eas6a97888e2" data-zoneid="5647518"></ins>
        </aside>

        <!-- 顶部广告-PH -->
        <aside class="ad-content" v-show="!isTheaterMode" v-if="isMobile" :key="'top-ph-ad-' + featuredGame.id">
          <ins class="eas6a97888e10" data-zoneid="5647530"></ins>
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
              <!-- 中间广告-PH -->
              <aside class="ad-content" v-show="!isTheaterMode" v-if="isMobile" :key="'middle-ph-ad-' + featuredGame.id">
                <ins class="eas6a97888e10" data-zoneid="5657040"></ins>
              </aside>
              <GameInfo :game="featuredGame" v-if="featuredGame.detailsHtml || featuredGame.rating" />
              
              <CommentSection :gameId="featuredGame.id" v-show="!isTheaterMode" />
            </article>
          </section>

          

          <!-- Hot Games Sidebar -->
          <GameSidebar :hotGames="hotGames" :newGames="newGames" v-show="!isTheaterMode" />
        </div>

        <!-- 底部广告 -->
        <aside class="ad-content ad-pc" v-show="!isTheaterMode" :key="'bottom-ad-' + featuredGame.id">
          <ins class="eas6a97888e20" data-zoneid="5647528"></ins>
        </aside>
        
        <!-- More Games Section -->
        <MoreGames :games="moreGames" v-show="!isTheaterMode" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue';
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

const reloadAds = () => {
  // 1. 尝试全局应用 passive 事件监听器来解决性能警告
  // 这是一种 hacky 的方法，因为我们无法控制第三方脚本
  try {
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (type, listener, options) {
      if (type === 'touchstart' || type === 'touchmove') {
        const newOptions = typeof options === 'boolean' ? { capture: options, passive: true } : { ...options, passive: true };
        originalAddEventListener.call(this, type, listener, newOptions);
      } else {
        originalAddEventListener.call(this, type, listener, options);
      }
    };
  } catch (e) {
    console.error('Failed to apply passive event listener patch:', e);
  }

  // 2. 清理旧的广告脚本和全局变量
  const oldScript = document.querySelector('script[src="https://a.magsrv.com/ad-provider.js"]');
  if (oldScript) {
    oldScript.remove();
  }
  if (window.AdProvider) {
    delete window.AdProvider;
  }

  // 3. 在DOM更新后，重新加载脚本并初始化
  nextTick(() => {
    const script = document.createElement('script');
    script.async = true;
    script.type = 'application/javascript';
    script.src = 'https://a.magsrv.com/ad-provider.js';
    script.onload = () => {
      if (window.AdProvider) {
        window.AdProvider.push({ serve: {} });
      }
    };
    document.head.appendChild(script);
  });
};

// --- Watcher ---
// 监听当前游戏的变化，并在首次加载时立即执行
watch(
  currentGame,
  (newGame) => {
    if (newGame) {
      gameStarted.value = false;
      updateSEO();
      reloadAds();
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
