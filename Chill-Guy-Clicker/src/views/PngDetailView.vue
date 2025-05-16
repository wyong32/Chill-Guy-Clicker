<template>
  <div class="png-detail-view">
    <div class="container">
      <div class="back-link">
        <router-link to="/Chill-Guy-PNG" class="back-button">
          <span class="back-icon"></span>
          Back to PNG Images
        </router-link>
      </div>

      <div v-if="pngImage" class="png-detail-content">
        <h1 class="png-title">{{ pngImage.title }}</h1>

        <div class="png-image-container">
          <img :src="getImagePath(pngImage.detailImageUrl || pngImage.imageUrl)" :alt="pngImage.title" class="png-image" />
          <div class="download-container">
            <a :href="getImagePath(pngImage.downloadUrl)" class="download-button" :download="pngImage.title + '.png'" @click="downloadImage">
              Download PNG
            </a>
          </div>
        </div>

        <div class="png-tags">
          <span v-for="(tag, index) in pngImage.tags" :key="index" class="png-tag">
            {{ tag }}
          </span>
        </div>

        <div class="png-description">
          <h2>Description</h2>
          <p>{{ pngImage.description }}</p>
        </div>

        <div v-if="pngImage.detailsHtml" class="png-details content-html" v-html="pngImage.detailsHtml"></div>
      </div>

      <div v-else class="not-found">
        <h2>PNG Image Not Found</h2>
        <p>Sorry, the PNG image you're looking for doesn't exist.</p>
        <router-link to="/Chill-Guy-PNG" class="back-button">Back to PNG Images</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { pngImages } from '@/data/png.js'

export default {
  name: 'PngDetailView',
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
      pngImage: null
    }
  },
  methods: {
    getImagePath(path) {
      // 如果路径已经是绝对路径或完整URL，则直接返回
      if (path.startsWith('http') || path.startsWith('/')) {
        return path
      }

      // 否则，将路径转换为相对于根目录的路径
      return '/' + path
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    },
    loadPngImage() {
      const imageId = parseInt(this.id)
      this.pngImage = pngImages.find(item => item.id === imageId) || null

      if (this.pngImage) {
        // 设置页面标题和SEO信息
        if (this.pngImage.seo) {
          document.title = this.pngImage.seo.title

          // 设置页面描述
          let metaDescription = document.querySelector('meta[name="description"]')
          if (!metaDescription) {
            metaDescription = document.createElement('meta')
            metaDescription.setAttribute('name', 'description')
            document.head.appendChild(metaDescription)
          }
          metaDescription.setAttribute('content', this.pngImage.seo.description)

          // 设置关键词
          let metaKeywords = document.querySelector('meta[name="keywords"]')
          if (!metaKeywords) {
            metaKeywords = document.createElement('meta')
            metaKeywords.setAttribute('name', 'keywords')
            document.head.appendChild(metaKeywords)
          }
          metaKeywords.setAttribute('content', this.pngImage.seo.keywords)
        } else {
          document.title = `${this.pngImage.title} - Chill Guy PNG Images`

          // 设置页面描述
          let metaDescription = document.querySelector('meta[name="description"]')
          if (!metaDescription) {
            metaDescription = document.createElement('meta')
            metaDescription.setAttribute('name', 'description')
            document.head.appendChild(metaDescription)
          }
          metaDescription.setAttribute('content', this.pngImage.description)
        }
      } else {
        document.title = 'PNG Image Not Found - Chill Guy PNG Images'
      }
    },
    downloadImage(event) {
      // 防止默认行为，我们将手动处理下载
      event.preventDefault();

      // 创建一个隐藏的 a 元素
      const link = document.createElement('a');
      link.href = this.getImagePath(this.pngImage.downloadUrl);
      link.download = this.pngImage.title + '.png';

      // 添加到文档中
      document.body.appendChild(link);

      // 触发点击
      link.click();

      // 清理
      document.body.removeChild(link);
    }
  },
  created() {
    this.loadPngImage()

    // 如果有 addressBar 参数，修改 URL
    if (this.addressBar && this.pngImage) {
      // 使用 history.replaceState 修改 URL，但不触发路由变化
      const url = '/Chill-Guy-PNG/' + this.addressBar
      window.history.replaceState(null, '', url)
    }
  },
  watch: {
    id() {
      this.loadPngImage()
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

.png-detail-content {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.png-title {
  font-size: 32px;
  color: #333;
  margin: 0 0 30px;
  text-align: center;
}

.png-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.png-image {
  max-width: 60%;
  max-height: 600px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  padding: 20px;
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

.png-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
}

.png-tag {
  background: rgba(65, 184, 131, 0.1);
  color: var(--primary-color);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
}

.png-description, .png-details {
  margin-bottom: 30px;
}

.png-description h2, .png-details h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 10px;
}

.png-description h2::after, .png-details h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: var(--primary-color);
  border-radius: 2px;
}

.png-description p {
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
  .png-title {
    font-size: 26px;
  }

  .image-meta {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
