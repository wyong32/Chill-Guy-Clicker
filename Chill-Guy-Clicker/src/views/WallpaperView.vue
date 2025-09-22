<template>
  <div class="wallpaper-view">
    <!-- 页面级Header -->
    <TheHeader />
    <div class="container">
      <h1 class="page-title">Chill Guy Wallpapers</h1>
      <h2 class="page-description">
        Download high-resolution wallpapers featuring Chill Guy characters for your desktop, tablet, or phone.
      </h2>

      <div class="filter-section">
        <h2 class="filter-title">Categories</h2>
        <div class="category-tabs">
          <button
            class="category-tab"
            :class="{ active: selectedCategory === '' }"
            @click="selectedCategory = ''"
          >
            All Chill Guy Wallpaper
          </button>
          <button
            v-for="category in categories"
            :key="category"
            class="category-tab"
            :class="{ active: selectedCategory === category }"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div class="wallpaper-grid">
        <a
          v-for="wallpaper in filteredWallpapers"
          :key="wallpaper.id"
          :href="'/Chill-Guy-Wallpaper/' + wallpaper.addressBar"
          class="wallpaper-card"
        >
          <div class="wallpaper-image">
            <img :src="wallpaper.thumbnailUrl" :alt="wallpaper.title" />
            <div class="wallpaper-overlay">
              <div class="overlay-buttons">
                <span class="view-button desktop-only">
                  View Details
                </span>
              </div>
            </div>
          </div>
          <div class="wallpaper-info">
            <h3 class="wallpaper-title">{{ wallpaper.title }}</h3>
            <div class="wallpaper-meta">
              <span class="wallpaper-resolution">{{ wallpaper.resolution }}</span>
              <span class="wallpaper-resolution">{{ formatDate(wallpaper.publishDate) }}</span>
            </div>
            <div class="wallpaper-tags">
              <span v-for="(tag, index) in wallpaper.tags" :key="index" class="wallpaper-tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- 页面级Footer -->
    <TheFooter />
  </div>
</template>

<script>
import { wallpapers } from '@/data/wallpapers.js'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'WallpaperView',
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      wallpapers: wallpapers,
      selectedCategory: ''
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  },
  computed: {
    categories() {
      // 获取所有唯一的分类
      const categoriesSet = new Set(this.wallpapers.map(wallpaper => wallpaper.category))
      return Array.from(categoriesSet)
    },
    filteredWallpapers() {
      if (!this.selectedCategory) {
        return this.wallpapers
      }
      return this.wallpapers.filter(wallpaper => wallpaper.category === this.selectedCategory)
    }
  },
  // SEO 信息已在路由中设置
}
</script>

<style scoped>
@import '../style/publc.css';

.filter-section {
  margin-bottom: 30px;
}

.filter-title {
  font-size: 20px;
  color: #fff;
  margin-bottom: 15px;
  text-align: center;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.category-tab {
  padding: 8px 16px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 20px;
  color: #555;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-tab:hover {
  background-color: #e0e0e0;
}

.category-tab.active {
  background-color: #41b883;
  color: white;
}

.wallpaper-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.wallpaper-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.wallpaper-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.wallpaper-image {
  position: relative;
  height: 206px;
  overflow: hidden;
}

.wallpaper-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;
}

.wallpaper-card:hover .wallpaper-image img {
  transform: scale(1.1);
}

.wallpaper-overlay {
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

.wallpaper-card:hover .wallpaper-overlay {
  opacity: 1;
}

.overlay-buttons {
  display: flex;
  gap: 15px;
}

.view-button {
  padding: 8px 20px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;
  transform: translateY(20px);
  font-size: 14px;
  background: #41b883;
  color: white;
}

.wallpaper-card:hover .view-button {
  transform: translateY(0);
}

.view-button:hover {
  background: #f39c12;
}

.wallpaper-info {
  padding: 20px;
}

.wallpaper-title {
  font-size: 18px;
  margin: 0 0 10px;
  color: #333;
}

.wallpaper-description {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.wallpaper-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 14px;
}

.wallpaper-resolution {
  background: #f0f0f0;
  padding: 3px 10px;
  border-radius: 15px;
  color: #666;
}

.wallpaper-size {
  color: #888;
  font-weight: 500;
}

.wallpaper-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.wallpaper-tag {
  background: rgba(65, 184, 131, 0.1);
  color: #41b883;
  padding: 3px 10px;
  border-radius: 15px;
  font-size: 12px;
}

@media (max-width: 768px) {

  .filter-section{
    margin-bottom: 15px;
  }

  .category-tabs{
    margin-bottom: 0;
  }

  .category-tab{
    font-size: 12px;
    padding: 5px 10px;
  }

  .wallpaper-grid{
    gap: 10px;
  }

  .wallpaper-info{
    padding: 10px;
  }

  .wallpaper-title{
    font-size: 14px;
    margin-bottom: 5px;
  }

  .wallpaper-meta{
    font-size: 12px;
    margin-bottom: 5px;
  }

  .wallpaper-resolution{
    padding: 2px 8px;
    font-size: 12px;
  }

  .wallpaper-tags{
    gap: 3px;
  }

  .wallpaper-tag{
    font-size: 10px;
    padding: 2px 8px;
  }

  .filter-section {
    flex-direction: column;
    align-items: center;
  }

  .filter-group {
    margin: 10px 0;
  }

  .desktop-only{
    display: none;
  }
}

/* 桌面端显示，移动端隐藏的元素 */
.desktop-only {
  display: inline-block;
}

</style>
