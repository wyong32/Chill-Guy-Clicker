<template>
  <section class="more-games">
    <h2 class="section-title">More Games</h2>
    <div class="more-games-grid">
      <a
        v-for="(game, index) in games"
        :key="game.id"
        class="more-game-card"
        :class="{ 'mobile-hidden': isMobile && !showAllMoreGames && index >= 6 }"
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
    
    <!-- More按钮 - 使用visibility控制避免CLS -->
    <div class="more-button-container" :style="{ visibility: (isMobile && !showAllMoreGames) ? 'visible' : 'hidden', height: (isMobile && !showAllMoreGames) ? 'auto' : '0' }">
      <button class="more-button" @click="toggleMoreGames">
        <span class="more-button-text">More Games</span>
        <span class="more-button-icon">↓</span>
      </button>
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
    showAllMoreGames: {
      type: Boolean,
      default: false,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
    toggleMoreGames: {
      type: Function,
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
  background-color: #41b883;
  border-radius: 3px;
}

.more-games-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.more-game-card {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  overflow: hidden;
  /* 移除transform动画以防止CLS */
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none;
  display: block;
  font-size: 0;
}

.more-game-card:hover {
  /* 移除transform动画，只保留阴影变化 */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.more-game-img {
  width: 100%;
  aspect-ratio: 1/1;
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
  color: #41b883;
}

@media (max-width: 1024px) {
  .more-games-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .more-games-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .more-games-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 移动端隐藏多余游戏的样式 */
.mobile-hidden {
  display: none;
}

/* More按钮样式 */
.more-button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 0 20px;
}

.more-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  /* 移除固定宽度，让内容自然撑开 */
  justify-content: center;
}

.more-button:hover {
  /* 移除transform动画，只保留阴影变化 */
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.more-button:active {
  /* 移除transform动画 */
}

.more-button-text {
  font-size: 14px;
  font-weight: 600;
}

.more-button-icon {
  font-size: 16px;
  transition: transform 0.3s ease;
}

.more-button:hover .more-button-icon {
  /* 移除transform动画 */
}

/* 移动端优化 */
@media (max-width: 768px) {
  .more-button-container{
    margin-top: 10px;
  }

  .more-button {
    padding: 10px 20px;
    font-size: 14px;
  }

  .more-games{
    padding: 10px;
    margin-bottom: 20px;
  }

  .section-title{
    font-size: 18px;
    margin-bottom: 10px;
  }

  
}
</style>
