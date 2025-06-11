<template>
  <div class="home" :class="{ 'theater-mode': isTheaterMode }">
    <main class="main-content container">
      <h1 class="game-title" v-show="!isTheaterMode">{{ featuredGame.pageTitle || featuredGame.title }}</h1>

      <div class="game-layout">
        <!-- Main Game Area -->
        <section class="game-main">
          <article class="featured-game">
            <GameContainer
              :game="featuredGame"
              :gameStarted="gameStarted"
              @start-game="startGame"
              @theater-mode-changed="handleTheaterModeChanged"
            />
            <!-- GameInfo component removed -->
            <CommentSection :gameId="featuredGame.id" v-show="!isTheaterMode" />
          </article>
        </section>

        <!-- Hot Games Sidebar -->
        <GameSidebar :hotGames="hotGames" :newGames="newGames" v-show="!isTheaterMode" />
      </div>

      <!-- More Games Section -->
      <MoreGames :games="moreGames" v-show="!isTheaterMode" />
    </main>
  </div>
</template>

<script>
import CommentSection from '@/components/CommentSection.vue'
import GameContainer from '@/components/GameContainer.vue'
import GameSidebar from '@/components/GameSidebar.vue'
import MoreGames from '@/components/MoreGames.vue'
import { games } from '@/data/games.js'

export default {
  name: 'HomeView',
  components: {
    CommentSection,
    GameContainer,
    GameSidebar,
    MoreGames,
  },
  data() {
    return {
      games,
      gameStarted: false,
      isTheaterMode: false,
    }
  },
  computed: {
    // Get current game based on route parameter
    currentGame() {
      const addressBar = this.$route.params.addressBar
      const isHomePage = this.$route.path === '/'

      // 获取默认游戏（Chill-Guy-Clicker，ID为1）
      const defaultGame = this.games.find(game => game.id === 1) || this.games[0]

      // 如果在首页，并且 addressBar 为空或未定义，则显示默认游戏 (ID 1)
      if (isHomePage && (!addressBar || addressBar === '')) {
        return defaultGame;
      }

      if (addressBar) {
        // Try to find game by addressBar or id
        const game = this.games.find(
          (g) =>
            (g.addressBar && g.addressBar.toLowerCase() === addressBar.toLowerCase()) ||
            (g.id && String(g.id).toLowerCase() === addressBar.toLowerCase()),
        )
        return game || defaultGame // If not found, return default game
      }
      return defaultGame // Default to Chill-Guy-Clicker
    },
    // Get featured game (current game)
    featuredGame() {
      return this.currentGame
    },
    // Get hot games (including current game if it's hot)
    hotGames() {
      return this.games
        .filter(
          (game) => game.isHot
        )
    },
    // Get new games
    newGames() {
      return this.games
        .filter(
          (game) => game.isNew
        )
    },
    // Get more games (including current game if it's in more games)
    moreGames() {
      return this.games
        .filter(
          (game) => (game.isMore || game.isRecommended)
        )
    },
  },
  methods: {
    startGame() {
      this.gameStarted = true
    },

    // 处理 Theater 模式状态变化
    handleTheaterModeChanged(isTheaterMode) {
      this.isTheaterMode = isTheaterMode
    },

    // 更新SEO信息
    updateSEO() {
      const game = this.currentGame;
      if (game && game.seo) {
        // 更新标题
        document.title = game.seo.title;

        // 更新描述
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
          metaDescription = document.createElement('meta');
          metaDescription.setAttribute('name', 'description');
          document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', game.seo.description);

        // 更新关键词
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
          metaKeywords = document.createElement('meta');
          metaKeywords.setAttribute('name', 'keywords');
          document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', game.seo.keywords);
      }
    }
  },
  // 组件挂载时更新SEO信息
  mounted() {
    this.updateSEO();
  },

  // Watch for route changes to reset game state and update SEO
  watch: {
    '$route.params.addressBar'() {
      this.gameStarted = false
      this.updateSEO();
    },

    // 监听当前游戏变化，更新SEO信息
    currentGame: {
      immediate: true,
      handler(newGame) {
        if (newGame) {
          this.updateSEO();
        }
      }
    }
  },
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
  z-index: 0;
  /* 防止布局偏移的关键属性 - 基于 Cookingdom */
  contain: layout style paint;
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
  contain: layout style;
  width: 100%;
  box-sizing: border-box;
}

.main-content {
  flex: 1;
  padding-top: 30px;
  padding-bottom: 50px;
  /* 防止布局偏移 */
  contain: layout style;
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
  contain: layout style;
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
  contain: layout style;
  min-height: 600px;
  width: 100%;
  box-sizing: border-box;
}

.game-main {
  flex: 1;
  /* 防止布局偏移 */
  contain: layout style;
  min-width: 0; /* 防止 flex 子项溢出 */
  box-sizing: border-box;
}

.game-sidebar {
  width: 300px;
  /* 防止布局偏移 */
  contain: layout style;
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
  contain: layout style paint;
  min-height: 500px;
  width: 100%;
  box-sizing: border-box;
  will-change: transform;
  transform: translateZ(0);
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
