<template>
  <div class="music-detail-view">
    <div class="container" v-if="track">
      <div class="back-link">
        <router-link to="/Chill-Guy-Music" class="back-button">
          <span class="back-icon"></span>
          Back to Music
        </router-link>
      </div>

      <div class="music-detail-content">
        <div class="music-info-section">
          <div class="music-image">
            <img :src="track.imageUrl" :alt="track.title" />
          </div>
          <div class="music-info">
            <h1 class="music-title">{{ track.title }}</h1>
            <p class="music-artist">{{ track.artist }}</p>
            <p class="music-description">{{ track.description }}</p>
            <!-- <div class="music-meta">
              <div class="meta-item">
                <span class="meta-label">Duration:</span>
                <span class="meta-value">{{ track.duration }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Released:</span>
                <span class="meta-value">{{ formatDate(track.publishDate) }}</span>
              </div>
            </div>
            <div class="music-tags">
              <span v-for="(tag, index) in track.tags" :key="index" class="music-tag">
                {{ tag }}
              </span>
            </div> -->
          </div>
        </div>

        <div class="music-player-section">
          <h2 class="section-title">Listen Now</h2>
          <div class="music-player">
            <iframe
              :src="track.iframeUrl"
              frameborder="0"
              allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              class="music-iframe"
            ></iframe>
          </div>
        </div>

        <div class="music-details-section" v-if="track.detailsHtml">
          <div class="music-details content-html" v-html="track.detailsHtml"></div>
        </div>
      </div>
    </div>

    <div class="not-found" v-else>
      <h2>Track Not Found</h2>
      <p>Sorry, the music track you're looking for doesn't exist.</p>
      <router-link to="/Chill-Guy-Music" class="back-button">Back to Music</router-link>
    </div>
  </div>
</template>

<script>
import { music } from '@/data/music.js'
import { SITE_DOMAIN } from '@/config/site.js'

export default {
  name: 'MusicDetailView',
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
      track: null
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    },
    loadTrack() {
      const trackId = parseInt(this.id)
      this.track = music.find(item => item.id === trackId) || null

      if (this.track) {
        // 设置页面标题和SEO信息
        if (this.track.seo) {
          document.title = this.track.seo.title

          // 设置页面描述
          let metaDescription = document.querySelector('meta[name="description"]')
          if (!metaDescription) {
            metaDescription = document.createElement('meta')
            metaDescription.setAttribute('name', 'description')
            document.head.appendChild(metaDescription)
          }
          metaDescription.setAttribute('content', this.track.seo.description)

          // 设置关键词
          let metaKeywords = document.querySelector('meta[name="keywords"]')
          if (!metaKeywords) {
            metaKeywords = document.createElement('meta')
            metaKeywords.setAttribute('name', 'keywords')
            document.head.appendChild(metaKeywords)
          }
          metaKeywords.setAttribute('content', this.track.seo.keywords)

          // 设置规范URL和社交媒体标签
          this.updateCanonicalUrl()
        } else {
          // 兼容没有SEO字段的旧数据
          document.title = `${this.track.title} - ${this.track.artist || 'ChillGuy Music'} | Chill Guy Music`

          // 设置页面描述
          let metaDescription = document.querySelector('meta[name="description"]')
          if (!metaDescription) {
            metaDescription = document.createElement('meta')
            metaDescription.setAttribute('name', 'description')
            document.head.appendChild(metaDescription)
          }
          metaDescription.setAttribute('content', this.track.description)

          // 设置规范URL和社交媒体标签
          this.updateCanonicalUrl()
        }
      } else {
        document.title = 'Track Not Found | Chill Guy Music'
      }
    },
    updateCanonicalUrl() {
      // 确保使用addressBar而不是ID来生成规范URL
      if (this.track && this.track.addressBar) {
        const canonicalUrl = `${SITE_DOMAIN}/Chill-Guy-Music/${this.track.addressBar}`

        // 获取或创建规范URL标签
        let canonicalLink = document.querySelector('link[rel="canonical"]')
        if (!canonicalLink) {
          canonicalLink = document.createElement('link')
          canonicalLink.setAttribute('rel', 'canonical')
          document.head.appendChild(canonicalLink)
        }

        // 设置规范URL
        canonicalLink.setAttribute('href', canonicalUrl)
      }
    }
  },
  created() {
    this.loadTrack()

    // 如果有 addressBar 参数，修改 URL
    if (this.addressBar && this.track) {
      // 使用 history.replaceState 修改 URL，但不触发路由变化
      const url = '/Chill-Guy-Music/' + this.addressBar
      window.history.replaceState(null, '', url)
    }
  },
  watch: {
    id() {
      this.loadTrack()
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

.music-detail-content {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
}

.music-info-section {
  display: flex;
  padding: 30px;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-bottom: 1px solid #eee;
}

.music-image {
  width: 300px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.music-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.music-info {
  margin-left: 30px;
  flex-grow: 1;
}

.music-title {
  font-size: 32px;
  color: #333;
  margin: 0 0 10px;
}

.music-artist {
  font-size: 20px;
  color: var(--primary-color);
  margin: 0 0 20px;
  font-weight: 500;
}

.music-description {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.music-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.meta-item {
  display: flex;
  align-items: center;
}

.meta-label {
  font-weight: 600;
  color: #555;
  margin-right: 8px;
}

.meta-value {
  color: #777;
}

.music-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.music-tag {
  background: rgba(65, 184, 131, 0.1);
  color: var(--primary-color);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
}

.music-player-section, .music-details-section {
  padding: 30px;
  border-bottom: 1px solid #eee;
}

.section-title {
  font-size: 24px;
  color: #333;
  margin: 0 0 20px;
  position: relative;
  padding-bottom: 10px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--primary-color);
  border-radius: 2px;
}

.music-player {
  width: 80%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

.music-iframe {
  width: 100%;
  height: 450px;
  border: none;
}

.music-details {
  /* 使用全局 content-html 样式 */
}

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
  .music-info-section {
    flex-direction: column;
  }

  .music-image {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    margin-bottom: 20px;
  }

  .music-info {
    margin-left: 0;
  }

  .music-title {
    font-size: 26px;
  }

  .music-artist {
    font-size: 18px;
  }

  .music-iframe {
    height: 300px;
  }
}
</style>
