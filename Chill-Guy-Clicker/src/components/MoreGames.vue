<template>
  <section class="more-games">
    <h2 class="section-title">More Games</h2>
    <div class="more-games-grid">
      <a
        v-for="game in games"
        :key="game.id"
        class="more-game-card"
        :href="getGameRoute(game)"
        :aria-label="'Play ' + (game.pageTitle || game.title) + ' game'"
      >
        <img
          :src="game.thumbnail || game.imageUrl"
          :alt="game.imageAlt || game.title"
          class="more-game-img"
        />
        <h3 class="more-game-title">{{ game.pageTitle || game.title }}</h3>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MoreGames',
  props: {
    games: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getGameRoute(game) {
      // 如果是ID为1的游戏（Chill Guy Clicker），跳转到首页
      if (game.id === 1) {
        return '/'
      }
      // 如果是ID为2的游戏（Chill Girl Clicker），跳转到GirlGamesView页面
      else if (game.id === 2) {
        return '/Chill-Guy-Girl'
      }
      // 其他游戏保持原有的路由逻辑
      else {
        return '/' + (game.addressBar || game.id)
      }
    }
  }
}
</script>

<style scoped>
.more-games {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 50px;
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

.more-games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px;
}

.more-game-card {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
  box-shadow: var(--shadow);
  cursor: pointer;
  text-decoration: none;
  display: block;
  font-size: 0;
}

.more-game-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.more-game-img {
  width: 100%;
  height: 140px;
  object-fit: cover;
}

.more-game-title {
  font-size: 12px;
  padding: 5px 10px;
  text-align: center;
  color: #333;
  font-weight: 600;
  transition: color 0.3s;
}

.more-game-card:hover .more-game-title {
  color: var(--primary-color);
}

@media (max-width: 1024px) {
  .more-games-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .more-games-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
