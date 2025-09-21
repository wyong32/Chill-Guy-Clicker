<template>
  <aside class="girl-skins-sidebar">
    <h2 class="skins-title">Chill Guy Girl Skins</h2> 

    <div class="skins-grid">
      <div v-for="skin in girlSkins" :key="skin.id" class="skin-card">
        <div class="skin-image">
          <img :src="skin.imageUrl" :alt="skin.imageAlt" />
          <div class="skin-name">{{ skin.name }}</div>
        </div>
        <div class="skin-info">
          <h3 class="skin-title">{{ skin.title }}</h3>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { girlSkins } from '@/data/girlSkins.js'

export default {
  name: 'GirlSkinsSidebar',
  data() {
    return {
      girlSkins
    }
  }
}
</script>

<style scoped>
.girl-skins-sidebar {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #333;
  width: 100%;
}

.skins-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  position: relative;
  padding-bottom: 10px;
}

.skins-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #41b883;
  border-radius: 3px;
}

.skins-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
}

.skin-card {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.skin-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.skin-image {
  height: 180px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  position: relative;
}

.skin-name {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
}

.skin-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.skin-card:hover .skin-image img {
  transform: scale(1.05);
}

.skin-info {
  padding: 5px;
}

.skin-title {
  font-size: 12px;
  font-weight: 600;
  color: #333;
  text-align: center;
}

.skin-description {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .skins-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .skin-image {
    height: 120px;
  }

  .skin-title {
    font-size: 16px;
  }

  .skin-description {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .skins-grid {
    grid-template-columns: 1fr;
  }

  .skin-image {
    height: 140px;
  }
}
</style>
