<template>
  <section class="game-info-section">
    <h2 class="section-title">Game Introduction</h2>
    <div class="game-info-content">
      <p>{{ game.description || 'No game description available' }}</p>
      <div v-if="game.tags && game.tags.length > 0" class="game-tags" aria-label="Game Tags">
        <span v-for="(tag, index) in game.tags" :key="index" class="tag">{{ tag }}</span>
      </div>
      <dl class="game-meta-info">
        <div v-if="game.publishDate || game.releaseDate" class="meta-item">
          <dt class="meta-label">Release Date:</dt>
          <dd class="meta-value">{{ game.publishDate || game.releaseDate }}</dd>
        </div>
        <div v-if="game.developer" class="meta-item">
          <dt class="meta-label">Developer:</dt>
          <dd class="meta-value">{{ game.developer }}</dd>
        </div>
        <div v-if="game.category" class="meta-item">
          <dt class="meta-label">Category:</dt>
          <dd class="meta-value">{{ game.category }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GameInfo',
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.game-info-section {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: var(--shadow);
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

.game-info-content {
  line-height: 1.6;
  color: #333;
}

.game-tags {
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
}

.tag {
  background-color: rgba(65, 184, 131, 0.2);
  color: var(--secondary-color);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid var(--primary-color);
}

.game-meta-info {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
}

.meta-item {
  margin-right: 20px;
  margin-bottom: 10px;
  display: flex;
}

.meta-label {
  font-weight: 600;
  margin-right: 5px;
  color: var(--secondary-color);
  margin: 0;
}

.meta-value {
  margin: 0;
}
</style>
