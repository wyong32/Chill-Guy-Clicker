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
            <img
              :src="track.imageUrl"
              :alt="track.title"
              loading="lazy"
              :style="{ width: '100%', height: '100%', objectFit: 'cover' }"
            />
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
          <h2 class="section-title" id="music-player">Listen Now</h2>
          <!-- 跳过链接，用于屏幕阅读器用户 -->
          <a href="#music-details" class="skip-link">跳过播放器，查看详情</a>
          <div class="music-player">
            <!-- 延迟加载的 YouTube 播放器 -->
            <button
              v-if="!iframeLoaded && !iframeLoading"
              class="iframe-placeholder"
              @click="loadIframe"
              :aria-label="`加载并播放 ${track.title} - ${track.artist}`"
              type="button"
            >
              <div class="play-button" aria-hidden="true">
                <svg width="68" height="48" viewBox="0 0 68 48" role="img" aria-label="播放按钮">
                  <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                  <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                </svg>
              </div>
              <div class="placeholder-text" aria-hidden="true">点击播放音乐</div>
              <img v-if="track.imageUrl" :src="track.imageUrl" alt="" class="placeholder-image" aria-hidden="true" />
            </button>

            <!-- 加载状态 -->
            <div
              v-if="iframeLoading"
              class="iframe-loading"
              role="status"
              :aria-label="`正在加载 ${track.title} 播放器`"
              aria-live="polite"
            >
              <div class="loading-spinner" aria-hidden="true"></div>
              <div class="loading-text">正在加载播放器...</div>
            </div>
            <iframe
              v-if="iframeLoaded"
              :src="getPrivacyFriendlyUrl(track.iframeUrl)"
              frameborder="0"
              allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              class="music-iframe"
              sandbox="allow-scripts allow-same-origin allow-presentation"
              :title="`播放 ${track.title} - ${track.artist}`"
              :aria-label="`音乐播放器: ${track.title}`"
              role="application"
            ></iframe>
          </div>
        </div>

        <div class="music-details-section" v-if="track.detailsHtml" id="music-details">
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
      track: null,
      iframeLoaded: false,
      iframeLoading: false
    }
  },
  methods: {
    loadIframe() {
      this.iframeLoading = true
      // 延迟一小段时间显示加载状态
      setTimeout(() => {
        this.iframeLoaded = true
        this.iframeLoading = false
      }, 300)
    },
    getPrivacyFriendlyUrl(url) {
      // 转换为 YouTube 无 Cookie 域名，减少跟踪
      if (url && url.includes('youtube.com/embed/')) {
        return url.replace('youtube.com', 'youtube-nocookie.com') + '?rel=0&modestbranding=1&controls=1'
      }
      return url
    },
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
/* CLS 优化 - 预设容器尺寸 */
.music-detail-view {
  min-height: 100vh;
  contain: layout style;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 800px;
}

/* 跳过链接样式 - 可访问性 */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #41b883;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  z-index: 1000;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
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

/* YouTube 延迟加载占位符样式 */
.iframe-placeholder {
  position: relative;
  width: 100%;
  height: 450px;
  background: linear-gradient(135deg, #000, #333);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  border: none;
  padding: 0;
  font-family: inherit;
}

.iframe-placeholder:hover,
.iframe-placeholder:focus {
  transform: scale(1.02);
  outline: 3px solid #41b883;
  outline-offset: 2px;
}

.iframe-placeholder:focus {
  box-shadow: 0 0 0 3px rgba(65, 184, 131, 0.3);
}

.iframe-placeholder .placeholder-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: 1;
}

.play-button {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.iframe-placeholder:hover .play-button {
  transform: scale(1.1);
}

.placeholder-text {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-top: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* 加载状态样式 */
.iframe-loading {
  position: relative;
  width: 100%;
  height: 450px;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px dashed #ddd;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #41b883;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

.loading-text {
  color: #666;
  font-size: 16px;
  font-weight: 500;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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

  .music-iframe,
  .iframe-placeholder,
  .iframe-loading {
    height: 300px;
  }

  .placeholder-text,
  .loading-text {
    font-size: 16px;
  }
}
</style>
