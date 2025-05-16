<template>
  <div class="wallpaper-detail-view">
    <div class="container">
      <div class="back-link">
        <router-link to="/Chill-Guy-Wallpaper" class="back-button">
          <span class="back-icon"></span>
          Back to Wallpapers
        </router-link>
      </div>

      <div v-if="wallpaper" class="wallpaper-detail-content">
        <h1 class="wallpaper-title">{{ wallpaper.title }}</h1>

        <div class="wallpaper-image-container">
          <img :src="wallpaper.detailImageUrl || wallpaper.imageUrl" :alt="wallpaper.title" class="wallpaper-image" />
          <div class="download-container">
            <a :href="wallpaper.downloadUrl" class="download-button" :download="wallpaper.title + getFileExtension(wallpaper.downloadUrl)" @click="downloadWallpaper">
              Download Wallpaper
            </a>
            <div class="image-meta">
              <span class="meta-item">
                <strong>Resolution:</strong> {{ wallpaper.resolution }}
              </span>
              <span class="meta-item">
                <strong>Size:</strong> {{ wallpaper.fileSize }}
              </span>
              <span class="meta-item">
                <strong>Category:</strong> {{ wallpaper.category }}
              </span>
              <span class="meta-item">
                <strong>Published:</strong> {{ formatDate(wallpaper.publishDate) }}
              </span>
            </div>
          </div>
        </div>

        <div class="wallpaper-tags">
          <span v-for="(tag, index) in wallpaper.tags" :key="index" class="wallpaper-tag">
            {{ tag }}
          </span>
        </div>

        <div class="wallpaper-description">
          <h2>Description</h2>
          <p>{{ wallpaper.description }}</p>
        </div>

        <div v-if="wallpaper.detailsHtml" class="wallpaper-details content-html" v-html="wallpaper.detailsHtml"></div>
      </div>

      <div v-else class="not-found">
        <h2>Wallpaper Not Found</h2>
        <p>Sorry, the wallpaper you're looking for doesn't exist.</p>
        <router-link to="/wallpaper" class="back-button">Back to Wallpapers</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { wallpapers } from '@/data/wallpapers.js'

export default {
  name: 'WallpaperDetailView',
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    addressBar: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      wallpaper: null
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    },
    getFileExtension(url) {
      // 从URL中提取文件扩展名
      const match = url.match(/\.([a-z0-9]+)(?:[\?#]|$)/i);
      return match ? '.' + match[1] : '.jpg';
    },
    loadWallpaper() {
      const wallpaperId = parseInt(this.id)
      this.wallpaper = wallpapers.find(item => item.id === wallpaperId) || null

      if (this.wallpaper) {
        // 设置页面标题和SEO信息
        if (this.wallpaper.seo) {
          document.title = this.wallpaper.seo.title

          // 设置页面描述
          let metaDescription = document.querySelector('meta[name="description"]')
          if (!metaDescription) {
            metaDescription = document.createElement('meta')
            metaDescription.setAttribute('name', 'description')
            document.head.appendChild(metaDescription)
          }
          metaDescription.setAttribute('content', this.wallpaper.seo.description)

          // 设置关键词
          let metaKeywords = document.querySelector('meta[name="keywords"]')
          if (!metaKeywords) {
            metaKeywords = document.createElement('meta')
            metaKeywords.setAttribute('name', 'keywords')
            document.head.appendChild(metaKeywords)
          }
          metaKeywords.setAttribute('content', this.wallpaper.seo.keywords)
        } else {
          document.title = `${this.wallpaper.title} - Chill Guy Wallpapers`

          // 设置页面描述
          let metaDescription = document.querySelector('meta[name="description"]')
          if (!metaDescription) {
            metaDescription = document.createElement('meta')
            metaDescription.setAttribute('name', 'description')
            document.head.appendChild(metaDescription)
          }
          metaDescription.setAttribute('content', this.wallpaper.description)
        }
      } else {
        document.title = 'Wallpaper Not Found - Chill Guy Wallpapers'
      }
    },
    downloadWallpaper(event) {
      // 防止默认行为，我们将手动处理下载
      event.preventDefault();

      // 创建一个隐藏的 a 元素
      const link = document.createElement('a');
      link.href = this.wallpaper.downloadUrl;
      link.download = this.wallpaper.title + this.getFileExtension(this.wallpaper.downloadUrl);

      // 添加到文档中
      document.body.appendChild(link);

      // 触发点击
      link.click();

      // 清理
      document.body.removeChild(link);
    }
  },
  created() {
    this.loadWallpaper()

    // 如果有 addressBar 参数，修改 URL
    if (this.addressBar && this.wallpaper) {
      // 使用 history.replaceState 修改 URL，但不触发路由变化
      const url = '/Chill-Guy-Wallpaper/' + this.addressBar
      window.history.replaceState(null, '', url)
    }
  },
  watch: {
    id() {
      this.loadWallpaper()
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.back-link {
  margin-bottom: 30px;
}

.back-button {
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.back-button:hover {
  color: var(--accent-color);
}

.back-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2341b883' d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'/%3E%3C/svg%3E");
  background-size: contain;
}

.wallpaper-detail-content {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.wallpaper-title {
  font-size: 32px;
  color: #333;
  margin: 0 0 30px;
  text-align: center;
}

.wallpaper-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.wallpaper-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.download-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.download-button {
  background: var(--primary-color);
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;
  margin-bottom: 20px;
  font-size: 16px;
}

.download-button:hover {
  background: var(--accent-color);
}

.image-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.meta-item {
  color: #666;
  font-size: 14px;
}

.wallpaper-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
}

.wallpaper-tag {
  background: rgba(65, 184, 131, 0.1);
  color: var(--primary-color);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
}

.wallpaper-description, .wallpaper-details {
  margin-bottom: 30px;
}

.wallpaper-description h2, .wallpaper-details h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 10px;
}

.wallpaper-description h2::after, .wallpaper-details h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: var(--primary-color);
  border-radius: 2px;
}

.wallpaper-description p {
  color: #555;
  line-height: 1.6;
  font-size: 16px;
}

/* 使用全局 content-html 样式 */

.not-found {
  text-align: center;
  padding: 100px 20px;
}

.not-found h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 15px;
}

.not-found p {
  color: #666;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .wallpaper-title {
    font-size: 26px;
  }

  .image-meta {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
