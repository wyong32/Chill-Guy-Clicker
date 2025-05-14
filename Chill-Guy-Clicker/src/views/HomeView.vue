<template>
  <div class="home">
    <StarryBackground />

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
            <!-- If there's no detailsHtml, show GameInfo component -->
            <GameInfo v-if="!featuredGame.detailsHtml" :game="featuredGame" />
            <CommentSection :gameId="featuredGame.id" />
          </article>
        </section>

        <!-- Hot Games Sidebar -->
        <GameSidebar :games="hotGames" />
      </div>

      <!-- More Games Section -->
      <MoreGames :games="moreGames" />
    </main>
  </div>
</template>

<script>
import CommentSection from '@/components/CommentSection.vue'
import StarryBackground from '@/components/StarryBackground.vue'
import GameContainer from '@/components/GameContainer.vue'
import GameInfo from '@/components/GameInfo.vue'
import GameSidebar from '@/components/GameSidebar.vue'
import MoreGames from '@/components/MoreGames.vue'
import { games } from '@/data/games.js'

export default {
  name: 'HomeView',
  components: {
    CommentSection,
    StarryBackground,
    GameContainer,
    GameInfo,
    GameSidebar,
    MoreGames,
  },
  data() {
    return {
      games,
      gameStarted: false,
    }
  },
  computed: {
    // Get current game based on route parameter
    currentGame() {
      const addressBar = this.$route.params.addressBar
      if (addressBar) {
        // Try to find game by addressBar or id
        const game = this.games.find(
          (g) =>
            (g.addressBar && g.addressBar.toLowerCase() === addressBar.toLowerCase()) ||
            (g.id && String(g.id).toLowerCase() === addressBar.toLowerCase()),
        )
        return game || this.games[0] // If not found, return first game
      }
      return this.games[0] // Default to first game
    },
    // Get featured game (current game)
    featuredGame() {
      return this.currentGame
    },
    // Get hot games (excluding current game)
    hotGames() {
      return this.games
        .filter(
          (game) =>
            game.isHot &&
            game.id !== this.currentGame.id &&
            game.addressBar !== this.currentGame.addressBar,
        )
        .slice(0, 4)
    },
    // Get more games (excluding current game)
    moreGames() {
      return this.games
        .filter(
          (game) =>
            (game.isMore || game.isRecommended) &&
            game.id !== this.currentGame.id &&
            game.addressBar !== this.currentGame.addressBar,
        )
        .slice(0, 5)
    },
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
.home {
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

@media (max-width: 1024px) {
  .game-layout {
    flex-direction: column;
  }

  .game-sidebar {
    width: 100%;
  }

  .hot-games-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }

  .recommended-games-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .game-iframe-container {
    padding-bottom: 60%;
  }

  .hot-games-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .recommended-games-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .game-title {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .game-iframe-container {
    padding-bottom: 75%;
  }

  .recommended-games-grid {
    grid-template-columns: repeat(2, 1fr);
  }

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
