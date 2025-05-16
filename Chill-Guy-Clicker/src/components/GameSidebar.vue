<template>
  <aside class="game-sidebar">
    <section class="hot-games">
      <h2 class="section-title">Hot Games</h2>
      <div class="hot-games-list">
        <router-link
          v-for="game in games"
          :key="game.id"
          class="hot-game-card"
          :to="getGameRoute(game)"
          :aria-label="'Play ' + (game.pageTitle || game.title) + ' game'"
        >
          <img
            :src="game.thumbnail || game.imageUrl"
            :alt="game.imageAlt || game.title"
            class="hot-game-img"
          />
          <h3 class="hot-game-title">{{ game.pageTitle || game.title }}</h3>
        </router-link>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'GameSidebar',
  props: {
    games: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getGameRoute(game) {
      return '/' + (game.addressBar || game.id)
    }
  }
}
</script>

<style scoped>
.game-sidebar {
  width: 300px;
}

.hot-games {
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

.hot-games-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
}

.hot-game-card {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none;
  display: block;
  font-size: 0;
}

.hot-game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.hot-game-img {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.hot-game-title {
  font-size: 12px;
  padding: 5px 10px;
  text-align: center;
  color: #333;
  transition: color 0.3s;
}

.hot-game-card:hover .hot-game-title {
  color: var(--primary-color);
}

@media (max-width: 1024px) {
  .hot-games-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .hot-games-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
