<template>
  <aside class="game-sidebar">
    <!-- Hot Games Section -->
    <section class="hot-games">
      <h2 class="section-title">Hot Games</h2>
      <div class="games-list">
        <a
          v-for="game in hotGames"
          :key="'hot-' + game.id"
          class="game-card"
          :href="getGameRoute(game)"
          :aria-label="'Play ' + (game.pageTitle || game.title) + ' game'"
        >
          <img
            :src="game.thumbnail || game.imageUrl"
            :alt="game.imageAlt || game.title"
            class="game-img"
          />
          <h3 class="game-title">{{ game.pageTitle || game.title }}</h3>
        </a>
      </div>
    </section>

    <!-- New Games Section -->
    <section v-if="newGames && newGames.length > 0" class="new-games">
      <h2 class="section-title">New Games</h2>
      <div class="games-list">
        <a
          v-for="game in newGames"
          :key="'new-' + game.id"
          class="game-card"
          :href="getGameRoute(game)"
          :aria-label="'Play ' + (game.pageTitle || game.title) + ' game'"
        >
          <img
            :src="game.thumbnail || game.imageUrl"
            :alt="game.imageAlt || game.title"
            class="game-img"
          />
          <h3 class="game-title">{{ game.pageTitle || game.title }}</h3>
          <span class="new-badge">NEW</span>
        </a>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'GameSidebar',
  props: {
    hotGames: {
      type: Array,
      required: true,
    },
    newGames: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getGameRoute(game) {
      if (game.id === 1 && game.addressBar === '') {
        return '/'
      }
      return '/' + (game.addressBar || game.id)
    },
  },
}
</script>

<style scoped>
.game-sidebar {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hot-games,
.new-games {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #333;
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
  position: relative;
  padding-left: 15px;
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

.games-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
}

.game-card {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none;
  display: block;
  font-size: 0;
  position: relative;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.game-img {
  aspect-ratio: 1/1;
  object-fit: cover;
}

.game-title {
  font-size: 12px;
  padding: 5px 10px;
  text-align: center;
  color: #333;
  transition: color 0.3s;
}

.game-card:hover .game-title {
  color: var(--primary-color);
}

/* New Games 特有样式 */
.new-games .section-title::before {
  background-color: #ff6b6b; /* 红色表示新游戏 */
}

.new-badge {
  position: absolute;
  top: 5px;
  right: 5px;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  color: white;
  font-size: 8px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

@media (max-width: 1024px) {
  .game-sidebar {
    width: 100%;
    flex-direction: row;
    gap: 20px;
  }

  .hot-games,
  .new-games {
    flex: 1;
  }

  .games-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .game-sidebar {
    flex-direction: column;
  }

  .games-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .hot-games,
  .new-games {
    padding: 10px;
  }

  .section-title{
    font-size: 18px;
    margin-bottom: 10px;
  }
  

  
  
}
</style>