﻿<template>
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

    <!-- Player Reviews Section -->
    <section class="player-reviews" v-if="gameId">
      <CommentSection :gameId="gameId" class="sidebar-comment-section" />
    </section>
  </aside>
</template>

<script>
import CommentSection from '@/components/CommentSection.vue'

export default {
  name: 'GameSidebar',
  components: {
    CommentSection
  },
  props: {
    hotGames: {
      type: Array,
      required: true,
    },
    newGames: {
      type: Array,
      default: () => [],
    },
    gameId: {
      type: Number,
      default: null,
    },
    isTheaterMode: {
      type: Boolean,
      default: false,
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
.new-games,
.player-reviews {
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
  background-color: #41b883;
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
  width: 100%;
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
  color: #41b883;
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

.player-reviews .section-title::before {
  background-color: #4285f4; /* 蓝色表示评论区 */
}

/* 右侧评论区样式调整 */
.sidebar-comment-section {
  /* 重置外边距以匹配侧边栏布局 */
  margin-top: 0;
}

/* 在右侧布局中调整评论组件的字体和间距 */
.sidebar-comment-section :deep(.section-title) {
  font-size: 18px;
  margin-bottom: 12px;
  padding-left: 15px;
}

.sidebar-comment-section :deep(.section-title::before) {
  background-color: #4285f4;
  width: 4px;
  height: 16px;
}

/* 调整评论统计区域 - 更紧凑的布局 */
.sidebar-comment-section :deep(.comment-stats) {
  padding: 12px;
  margin-bottom: 15px;
  flex-direction: column;
  gap: 12px;
}

.sidebar-comment-section :deep(.average-rating) {
  padding-right: 0;
  margin-right: 0;
  border-right: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding-bottom: 12px;
  margin-bottom: 12px;
}

.sidebar-comment-section :deep(.rating-number) {
  font-size: 36px;
  margin-right: 12px;
}

/* 调整星星大小和布局 */
.sidebar-comment-section :deep(.star) {
  width: 16px;
  height: 16px;
  margin-right: 2px;
}

.sidebar-comment-section :deep(.rating-count) {
  font-size: 12px;
  padding: 2px 8px;
}

/* 调整评分分布条 */
.sidebar-comment-section :deep(.rating-bars) {
  padding-left: 0;
}

.sidebar-comment-section :deep(.rating-bar-item) {
  margin-bottom: 8px;
}

.sidebar-comment-section :deep(.rating-label) {
  width: 30px;
  font-size: 12px;
  margin-right: 10px;
}

.sidebar-comment-section :deep(.rating-percentage) {
  width: 35px;
  font-size: 11px;
}

/* 调整评论列表 */
.sidebar-comment-section :deep(.comment-item) {
  padding: 12px;
  margin-bottom: 12px;
}

.sidebar-comment-section :deep(.comment-author) {
  font-size: 14px;
}

.sidebar-comment-section :deep(.comment-date) {
  font-size: 11px;
}

.sidebar-comment-section :deep(.comment-rating .star) {
  width: 14px;
  height: 14px;
}

.sidebar-comment-section :deep(.comment-content) {
  margin-bottom: 12px;
  padding: 10px;
  font-size: 13px;
  line-height: 1.5;
}

/* 调整评论表单 */
.sidebar-comment-section :deep(.comment-form) {
  padding: 15px;
}

.sidebar-comment-section :deep(.form-title) {
  font-size: 16px;
  margin-bottom: 15px;
}

/* 调整表单组间距 */
.sidebar-comment-section :deep(.form-group) {
  margin-bottom: 10px;
}

.sidebar-comment-section :deep(.form-group label) {
  margin-bottom: 4px;
  font-size: 13px;
}

.sidebar-comment-section :deep(.form-input),
.sidebar-comment-section :deep(.comment-textarea) {
  padding: 8px 10px;
  font-size: 13px;
}

.sidebar-comment-section :deep(.comment-textarea) {
  /* 移除固定高度 */
}

/* 调整星级输入区域 */
.sidebar-comment-section :deep(.rating-input) {
  flex-direction: column;
  align-items: flex-start;
}

.sidebar-comment-section :deep(.rating-label) {
  margin-right: 0;
  margin-bottom: 5px;
}

.sidebar-comment-section :deep(.stars-input .star) {
  width: 20px;
  height: 20px;
  margin-right: 3px;
}

.sidebar-comment-section :deep(.rating-tooltip) {
  font-size: 11px;
  margin-top: 4px;
}

/* 调整按钮 */
.sidebar-comment-section :deep(.submit-button) {
  padding: 8px 15px;
  font-size: 13px;
}

.sidebar-comment-section :deep(.action-button) {
  padding: 4px 8px;
  font-size: 11px;
}

/* 调整通知组件在侧边栏中的位置 */
.sidebar-comment-section :deep(.message-notification) {
  width: 280px;
  max-width: 95%;
  font-size: 12px;
  padding: 10px 12px;
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

  .player-reviews {
    flex: 2; /* 给评论区更多空间 */
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
  .new-games,
  .player-reviews {
    padding: 12px;
  }

  .section-title{
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  /* 移动端评论区更紧凑的布局 */
  .sidebar-comment-section :deep(.comment-stats) {
    padding: 10px;
    margin-bottom: 12px;
  }
  
  .sidebar-comment-section :deep(.comment-form) {
    padding: 12px;
  }
  
  .sidebar-comment-section :deep(.comment-item) {
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .sidebar-comment-section :deep(.rating-number) {
    font-size: 28px;
  }
  
  .sidebar-comment-section :deep(.stars-input .star) {
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }
}
</style>