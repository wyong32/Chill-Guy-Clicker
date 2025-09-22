<template>
  <div class="music-view">
    <!-- 页面级Header -->
    <TheHeader />
    <div class="container">
      <h1 class="page-title">Chill Guy Music</h1>
      <h2 class="page-description">
        Discover relaxing and chill music to enhance your mood. Perfect for studying, relaxing, or just vibing.
      </h2>

      <div class="music-grid">
        <div v-for="track in music" :key="track.id" class="music-card">
          <div class="music-image">
            <img :src="track.imageUrl" :alt="track.title" />
            <div class="music-overlay">
              <a :href="'/Chill-Guy-Music/' + track.addressBar" class="listen-button">
                Listen Now
              </a>
            </div>
          </div>
          <div class="music-info">
            <h3 class="music-title">{{ track.title }}</h3>
            <p class="music-artist">{{ track.artist }}</p>
            <div class="music-tags">
              <span v-for="(tag, index) in track.tags" :key="index" class="music-tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页面级Footer -->
    <TheFooter />
  </div>
</template>

<script>
import { music } from '@/data/music.js'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'MusicView',
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      music: music
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  },
}
</script>

<style scoped>
@import '../style/publc.css';

.music-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.music-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.music-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.music-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.music-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.music-card:hover .music-image img {
  transform: scale(1.1);
}

.music-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.music-card:hover .music-overlay {
  opacity: 1;
}

.listen-button {
  background: #41b883;
  color: white;
  padding: 10px 25px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;
  transform: translateY(20px);
}

.music-card:hover .listen-button {
  transform: translateY(0);
}

.listen-button:hover {
  background: #f39c12;
}

.music-info {
  padding: 20px;
}

.music-title {
  font-size: 18px;
  margin: 0 0 5px;
  color: #333;
}

.music-artist {
  font-size: 16px;
  color: #41b883;
  margin: 0 0 10px;
  font-weight: 500;
}

.music-description {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.music-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 14px;
  color: #888;
}

.music-duration {
  display: flex;
  align-items: center;
}

.duration-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 5px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23888' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E");
  background-size: contain;
}

.music-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.music-tag {
  background: rgba(65, 184, 131, 0.1);
  color: #41b883;
  padding: 3px 10px;
  border-radius: 15px;
  font-size: 12px;
}

@media (max-width: 768px) {

  .music-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  
}

@media (max-width: 480px) {
  .music-grid {
    grid-template-columns: 1fr;
  }

  .music-info{
    padding: 10px;
  }

  .music-title{
    font-size: 14px;
  }

  .music-artist{
    font-size: 12px;
    margin-bottom: 5px;
  }

  .music-tags{
    gap: 5px;
  }
}
</style>
