<template>
  <div class="game-details-wrapper">
    <!-- Game Details from HTML -->
    <!-- 预设高度防止v-html内容导致CLS -->
    <div v-if="game.detailsHtml" class="game-details-html content-html" 
         style="min-height: 400px; overflow: hidden;" 
         v-html="game.detailsHtml"></div>

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
  name: 'GameInfo',
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasGameMeta() {
      return this.game.rating || this.game.playCount;
    },
  },
};
</script>

<style scoped>
.game-details-wrapper {
  color: #333;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 0 0 10px 10px;
  border-top: 1px solid #eee;
}

.game-details-html {
  margin-bottom: 20px;
}

.game-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  color: #555;
}

.game-rating,
.game-plays {
  display: flex;
  align-items: center;
  gap: 5px;
}

.rating-value {
  font-weight: bold;
}

.stars .star {
  color: #ccc;
  font-style: normal;
}

.stars .star.filled:before {
  content: '★';
  color: #ffc107;
}
.stars .star:not(.filled):before {
  content: '☆';
}

.content-html {
  line-height: 1.8;
  font-size: 16px;
  color: #444;
}

.content-html >>> h2,
.content-html >>> h3 {
  color: #333;
  margin-bottom: 0.8em;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.3em;
}

.content-html >>> p {
  margin-bottom: 1em;
}

.content-html >>> ul,
.content-html >>> ol {
  margin-bottom: 1em;
  padding-left: 1.5em;
}

.content-html >>> a {
  color: #41b883;
  text-decoration: none;
  transition: color 0.3s;
}

.content-html >>> a:hover {
  color: #2c8e63;
}

@media (max-width: 768px) {
  .game-details-wrapper{
    padding: 10px;
  }
  .content-html >>> p{
    font-size: 0.8rem;
  }

  .content-html >>> ul,
.content-html >>> ol{
  padding-left: 1rem;
  font-size: 0.8rem;
}
  
}
</style> 