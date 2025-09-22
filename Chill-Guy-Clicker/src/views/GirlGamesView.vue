<template>
  <div class="girl-games-view">
    <!-- 页面级Header -->
    <TheHeader />
    <main class="main-content container">
      <h1 class="game-title">{{ featuredGame.pageTitle || featuredGame.title }}</h1>

      <div class="game-layout">
        <!-- Main Game Area -->
        <section class="game-main">
          <article class="featured-game">
            <GameContainer
              :game="featuredGame"
              :gameStarted="gameStarted"
              @start-game="startGame"
            />
          </article>
        </section>

        <!-- Chill Girl Clicker Skins Sidebar -->
        <aside class="game-sidebar">
          <GirlSkinsSidebar />
        </aside>
      </div>
    </main>
    <!-- 页面级Footer -->
    <TheFooter />
  </div>
</template>

<script>
import GameContainer from '@/components/GameContainer.vue'
import GirlSkinsSidebar from '@/components/GirlSkinsSidebar.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { girlGames } from '@/data/girlGames.js'

export default {
  name: 'GirlGamesView',
  components: {
    GameContainer,
    GirlSkinsSidebar,
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      girlGames,
      gameStarted: false,
    }
  },
  computed: {
    // Get current game based on route parameter
    currentGame() {
      const addressBar = this.$route.params.addressBar

      // 获取默认游戏（ID为2的游戏 - Chill Girl Clicker）
      const defaultGame = this.girlGames.find(game => game.id === 2) || this.girlGames[0]

      if (addressBar) {
        // Try to find game by addressBar
        const game = this.girlGames.find(
          (g) => g.addressBar && g.addressBar.toLowerCase() === addressBar.toLowerCase()
        )
        return game || defaultGame // If not found, return default game
      }
      return defaultGame // Default to Chill Girl Clicker (ID: 2)
    },
    // Get featured game (current game)
    featuredGame() {
      return this.currentGame
    },
    // Get hot games
    hotGames() {
      return this.girlGames.filter(game => game.isHot)
    }
  },
  methods: {
    startGame() {
      this.gameStarted = true
    },
  },
  // Watch for route changes to reset game state
  watch: {
    '$route.params.addressBar'() {
      this.gameStarted = false
    },
  },
}
</script>

<style scoped>
.girl-games-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
  z-index: 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  z-index: 1;
}

.main-content {
  flex: 1;
  padding-top: 30px;
  padding-bottom: 50px;
}

.game-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
  text-shadow: 0 0 10px rgba(65, 184, 131, 0.8);
}

/* Game Layout */
.game-layout {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
}

.game-main {
  flex: 1;
}

.game-sidebar {
  width: 300px;
}

/* Featured Game Area */

.featured-game {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #333;
}

.game-details {
  margin-top: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* 其他样式使用全局 content-html 样式 */
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
  .container{
    padding: 0 10px;
  }
  .main-content{
    padding-top: 30px;
  }

  .game-sidebar{
    display: none;
  }

  .featured-game{
    padding: 20px 10px;
  }

  .game-title {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .game-title {
    font-size: 24px;
  }
}
</style>
