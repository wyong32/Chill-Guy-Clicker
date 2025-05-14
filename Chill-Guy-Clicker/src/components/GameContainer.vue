<template>
  <div class="game-container">
    <div class="game-iframe-container">
      <iframe
        v-if="gameUrl"
        :src="gameUrl"
        frameborder="0"
        allowfullscreen
        allow="fullscreen; autoplay; clipboard-write"
        referrerpolicy="origin"
        sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts"
        :title="gameTitle"
        :aria-label="gameTitle + ' Game Interface'"
      ></iframe>
      <div v-if="!gameStarted" class="game-overlay" :class="{ hidden: gameStarted }">
        <button class="play-button" @click="startGame" aria-label="Start Game">
          <svg viewBox="0 0 24 24" width="64" height="64" aria-hidden="true">
            <path fill="#fff" d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Game Details Content -->
    <div v-if="game.detailsHtml" class="game-details-html" v-html="game.detailsHtml"></div>

    <!-- Game Metadata -->
    <div v-if="hasGameMeta" class="game-details">
      <div class="game-meta">
        <div v-if="game.rating" class="game-rating" :aria-label="'Game Rating: ' + game.rating">
          <span class="rating-value">{{ game.rating }}</span>
          <div class="stars" role="img" :aria-label="game.rating + ' star rating'">
            <i
              v-for="n in 5"
              :key="n"
              class="star"
              :class="{ filled: n <= Math.floor(game.rating) }"
            ></i>
          </div>
        </div>
        <div v-if="game.playCount" class="game-plays">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            />
          </svg>
          <span>{{ game.playCount.toLocaleString() }} plays</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameContainer',
  props: {
    game: {
      type: Object,
      required: true,
    },
    gameStarted: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    gameUrl() {
      return this.game.iframeUrl || ''
    },
    gameTitle() {
      return this.game.pageTitle || this.game.title || 'Game'
    },
    // Check if game has metadata
    hasGameMeta() {
      return this.game.rating || this.game.playCount
    },
  },
  methods: {
    startGame() {
      this.$emit('start-game')
    },
  },
}
</script>

<style scoped>
.game-container {
  margin-bottom: 20px;
}

.game-iframe-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 比例 */
  background-color: #000;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 2px solid var(--primary-color);
  box-shadow: 0 0 20px rgba(65, 184, 131, 0.3);
}

.game-iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;
  transition: opacity 0.3s;
}

.game-overlay.hidden {
  opacity: 0;
  pointer-events: none;
}

.play-button {
  width: 80px;
  height: 80px;
  background-color: rgba(65, 184, 131, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    transform 0.3s,
    background-color 0.3s;
  box-shadow: 0 0 20px rgba(65, 184, 131, 0.5);
  border: none;
  cursor: pointer;
  padding: 0;
}

.play-button:hover {
  transform: scale(1.1);
  background-color: var(--primary-color);
}

.game-details-html {
  margin: 20px 0;
  line-height: 1.6;
  color: #333;
}

.game-details-html h2 {
  font-size: 24px;
  margin-bottom: 15px;
  color: var(--secondary-color);
}

.game-details-html h3 {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: var(--secondary-color);
}

.game-details-html h4 {
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 8px;
  color: var(--secondary-color);
}

.game-details-html p {
  margin-bottom: 15px;
}

.game-details-html ul,
.game-details-html ol {
  margin-bottom: 15px;
  padding-left: 20px;
}

.game-details-html li {
  margin-bottom: 5px;
}

.game-details-html img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 15px 0;
}

.game-details-html a {
  color: var(--primary-color);
  text-decoration: none;
}

.game-details-html a:hover {
  text-decoration: underline;
}

.game-details {
  margin-bottom: 20px;
}

.game-meta {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
}

.game-rating {
  display: flex;
  align-items: center;
}

.rating-value {
  font-weight: bold;
  margin-right: 5px;
  color: var(--accent-color);
}

.stars {
  display: flex;
}

.star {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 2px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23ddd' d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E");
  background-size: contain;
}

.star.filled {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFD700' d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E");
}

.game-plays {
  display: flex;
  align-items: center;
  color: #333;
}

.game-plays svg {
  margin-right: 5px;
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .game-iframe-container {
    padding-bottom: 60%;
  }
}

@media (max-width: 480px) {
  .game-iframe-container {
    padding-bottom: 75%;
  }

  .game-meta {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
