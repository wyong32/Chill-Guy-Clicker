<template>
  <div class="game-container" :class="{ 'theater-mode': isIframeFullscreen }">
    <div class="game-iframe-container" ref="gameContainer">
      <iframe
        v-if="gameUrl && gameStarted"
        ref="gameIframe"
        :src="gameUrl"
        frameborder="0"
        allowfullscreen
        allow="fullscreen; autoplay; clipboard-write"
        referrerpolicy="origin"
        sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts"
        :title="gameTitle"
        :aria-label="gameTitle + ' Game Interface'"
      ></iframe>
      <div v-if="!gameStarted" class="game-overlay">
        <!-- 优化的背景图片 - 使用懒加载 -->
        <div
          class="game-background"
          :class="{ 'background-loaded': backgroundLoaded }"
          ref="gameBackground"
        ></div>
        <!-- 毛玻璃效果层 -->
        <div class="glass-effect"></div>
        <!-- 游戏预览 -->
        <div class="game-preview">
          <img
            :src="game.imageUrl"
            :alt="gameTitle"
            class="game-preview-image"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            width="150"
            height="150"
            @load="onPreviewImageLoad"
          />
          <button class="play-now-button" @click="startGame" aria-label="Play Now">
            PLAY NOW
          </button>
        </div>
      </div>


    </div>

    <!-- 全屏控制按钮 - 游戏主体下方 -->
    <div class="fullscreen-controls-bottom" v-show="!isIframeFullscreen">
      <button
        class="fullscreen-button"
        @click="handleFullscreenClick"
        title="Browser Fullscreen"
        aria-label="Browser Fullscreen"
      >
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
        </svg>
        Fullscreen
      </button>

      <button
        class="fullscreen-button"
        @click="handleIframeFullscreenClick"
        title="Theater Mode"
        aria-label="Theater Mode"
      >
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V8h14v10z"/>
        </svg>
        Theater
      </button>
    </div>

    <!-- Theater 模式下的控制按钮 - 固定在右上角 -->
    <div class="theater-controls-overlay" v-show="isIframeFullscreen">
      <button
        class="fullscreen-button exit-theater"
        @click="handleIframeFullscreenClick"
        title="Exit Theater Mode"
        aria-label="Exit Theater Mode"
      >
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
        </svg>
        Exit Theater
      </button>
    </div>

    <!-- Game Details Content -->
    <div v-if="game.detailsHtml" class="game-details-html content-html" v-html="game.detailsHtml"></div>

    <!-- 提示消息 -->
    <div v-if="showNotification" class="notification" :class="{ 'show': showNotification }">
      {{ notificationMessage }}
    </div>

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
  data() {
    return {
      isFullscreen: false,
      isIframeFullscreen: false,
      showNotification: false,
      notificationMessage: '',
      notificationTimeout: null,
      backgroundLoaded: false,
    }
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

    // 切换游戏容器全屏
    toggleFullscreen() {
      if (!document.fullscreenElement) {
        // 进入全屏模式
        const container = this.$refs.gameContainer
        if (container.requestFullscreen) {
          container.requestFullscreen()
        } else if (container.mozRequestFullScreen) { // Firefox
          container.mozRequestFullScreen()
        } else if (container.webkitRequestFullscreen) { // Chrome, Safari, Opera
          container.webkitRequestFullscreen()
        } else if (container.msRequestFullscreen) { // IE/Edge
          container.msRequestFullscreen()
        }
        this.isFullscreen = true
      } else {
        // 退出全屏模式
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
        this.isFullscreen = false
      }
    },

    // 切换网页全屏模式（Theater Mode）
    toggleIframeFullscreen() {
      this.isIframeFullscreen = !this.isIframeFullscreen

      // 通知父组件 Theater 模式状态变化
      this.$emit('theater-mode-changed', this.isIframeFullscreen)

      // 使用 nextTick 确保 DOM 更新完成
      this.$nextTick(() => {
        if (this.isIframeFullscreen) {
          // 进入 Theater 模式
          document.body.style.overflow = 'hidden'
          document.documentElement.style.overflow = 'hidden'
        } else {
          // 退出 Theater 模式
          document.body.style.overflow = ''
          document.documentElement.style.overflow = ''
        }
      })
    },

    // 切换浏览器原生全屏
    async toggleBrowserFullscreen() {
      if (!this.gameStarted) {
        this.showNotificationMessage('Please click "PLAY NOW" to start the game first')
        return
      }

      try {
        if (!document.fullscreenElement) {
          await this.enterBrowserFullscreen()
        } else {
          await this.exitBrowserFullscreen()
        }
      } catch (error) {
        console.error('Fullscreen error:', error)
        this.showNotificationMessage('Fullscreen not supported or failed')
      }
    },

    // 进入浏览器全屏
    async enterBrowserFullscreen() {
      const container = this.$refs.gameContainer
      if (!container) return

      try {
        if (container.requestFullscreen) {
          await container.requestFullscreen()
        } else if (container.webkitRequestFullscreen) {
          await container.webkitRequestFullscreen()
        } else if (container.msRequestFullscreen) {
          await container.msRequestFullscreen()
        }

        // 进入浏览器全屏后，退出 Theater 模式
        if (this.isIframeFullscreen) {
          this.isIframeFullscreen = false
          document.body.style.overflow = ''
          document.documentElement.style.overflow = ''
        }
      } catch (error) {
        console.error('Error entering fullscreen:', error)
        throw error
      }
    },

    // 退出浏览器全屏
    async exitBrowserFullscreen() {
      try {
        if (document.exitFullscreen) {
          await document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
          await document.msExitFullscreen()
        }
      } catch (error) {
        console.error('Error exiting fullscreen:', error)
        throw error
      }
    },

    // 显示通知消息
    showNotificationMessage(message) {
      this.showNotification = false
      clearTimeout(this.notificationTimeout)

      this.notificationMessage = message
      this.showNotification = true

      this.notificationTimeout = setTimeout(() => {
        this.showNotification = false
      }, 3000)
    },

    // 监听全屏变化事件
    handleFullscreenChange() {
      this.isFullscreen = !!document.fullscreenElement
    },

    // 处理浏览器全屏按钮点击
    handleFullscreenClick() {
      this.toggleBrowserFullscreen()
    },

    // 处理 Theater 模式按钮点击
    handleIframeFullscreenClick() {
      if (!this.gameStarted) {
        this.showNotificationMessage('Please click "PLAY NOW" to start the game first')
        return
      }

      this.toggleIframeFullscreen()
    },



    // 预览图片加载完成后再加载背景图片
    onPreviewImageLoad() {
      // 延迟加载背景图片，避免阻塞 LCP
      requestIdleCallback(() => {
        this.loadBackgroundImage()
      }, { timeout: 100 })
    },

    // 加载背景图片
    loadBackgroundImage() {
      if (!this.$refs.gameBackground || this.backgroundLoaded) return

      const img = new Image()
      img.onload = () => {
        this.$refs.gameBackground.style.backgroundImage = `url(${this.game.imageUrl})`
        this.backgroundLoaded = true
      }
      img.onerror = () => {
        // 如果背景图片加载失败，使用渐变背景
        this.$refs.gameBackground.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        this.backgroundLoaded = true
      }
      img.src = this.game.imageUrl
    },


  },
  mounted() {
    // 添加全屏变化事件监听
    document.addEventListener('fullscreenchange', this.handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', this.handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', this.handleFullscreenChange)
    document.addEventListener('MSFullscreenChange', this.handleFullscreenChange)


  },
  beforeUnmount() {
    // 移除全屏变化事件监听
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange)
    document.removeEventListener('webkitfullscreenchange', this.handleFullscreenChange)
    document.removeEventListener('mozfullscreenchange', this.handleFullscreenChange)
    document.removeEventListener('MSFullscreenChange', this.handleFullscreenChange)

    // 清理全屏状态
    if (this.isIframeFullscreen) {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.removeEventListener('touchmove', this.preventScroll)
      document.removeEventListener('wheel', this.preventScroll)
    }

    // 清理通知定时器
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout)
    }
  }
}
</script>

<style scoped>
/* 游戏容器组件样式 - 使用 :deep() 选择器针对 v-html 内容 */
.game-container {
  margin-bottom: 20px;
  position: relative;
  /* 防止布局偏移的关键属性 */
  contain: layout style paint;
  min-height: 400px;
  width: 100%;
  box-sizing: border-box;
}

.game-iframe-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  backface-visibility: hidden;
}

/* Theater 模式样式 */
.game-container.theater-mode {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 9999 !important;
  background-color: #000 !important;
  padding: 0 !important;
  margin: 0 !important;
  border-radius: 0 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.game-container.theater-mode .game-iframe-container {
  width: 90vw !important;
  height: auto !important;
  max-width: 1800px !important;
  max-height: 98vh !important;
  aspect-ratio: 16 / 9 !important;
  border-radius: 0 !important;
  border: none !important;
  box-shadow: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Theater 模式下隐藏其他内容 */
.game-container.theater-mode .fullscreen-controls-bottom,
.game-container.theater-mode .game-details-html,
.game-container.theater-mode .game-details {
  display: none !important;
}

.game-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
  backface-visibility: hidden;
}

/* 浏览器原生全屏样式 */
.game-iframe-container:fullscreen {
  max-width: none !important;
  max-height: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  aspect-ratio: unset !important;
}

.game-iframe-container:-webkit-full-screen {
  max-width: none !important;
  max-height: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  aspect-ratio: unset !important;
}

/* 移除重复的全屏样式，已在上方统一定义 */

/* 游戏主体下方全屏控制按钮 */
.fullscreen-controls-bottom {
  display: flex;
  justify-content: right;
  gap: 15px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  /* 防止布局偏移 */
  contain: layout style;
  min-height: 50px;
  box-sizing: border-box;
}

/* 全屏模式下的控制按钮覆盖层 */
.fullscreen-controls-overlay {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999999;
  display: flex;
  gap: 10px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.fullscreen-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 15px;
  border-radius: 6px;
  background-color: #333;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  /* 防止布局偏移 */
  contain: layout paint;
  min-height: 36px;
  min-width: 36px;
  flex-shrink: 0;
}

.fullscreen-button svg {
  width: 18px;
  height: 18px;
}

.fullscreen-button:hover {
  background-color: #555;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* 退出全屏按钮特殊样式 */
.fullscreen-button.exit-fullscreen {
  background-color: #dc3545;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
}

.fullscreen-button.exit-fullscreen:hover {
  background-color: #c82333;
  transform: translateY(-2px);
}

/* Theater 模式下的控制按钮 */
.theater-controls-overlay {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10001;
  padding: 10px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.game-container.theater-mode .theater-controls-overlay {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10001;
}

.fullscreen-button.exit-theater {
  background-color: #dc3545;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.fullscreen-button.exit-theater:hover {
  background-color: #c82333;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* 通知样式 */
.notification {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(-100px);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  z-index: 9999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
}

.notification.show {
  transform: translateX(-50%) translateY(0);
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  overflow: hidden;
}

.game-background {
  position: absolute;
  top: -10px;
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  z-index: -2;
  transform: scale(1.1);
  /* 默认渐变背景，避免空白 */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.game-background.background-loaded {
  opacity: 1;
}

.glass-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: -1;
}

.game-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  /* 防止布局偏移 */
  contain: layout style;
  min-height: 220px;
  justify-content: center;
}

.game-preview-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 3;
  /* 性能优化和防止布局偏移 */
  contain: layout paint;
  flex-shrink: 0;
  display: block;
}

.game-preview-image:hover {
  transform: scale(1.02);
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.4);
}

.play-now-button {
  background-color: #000;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  padding: 12px 40px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.2);
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  z-index: 3;
  /* 防止布局偏移 */
  contain: layout paint;
  min-height: 48px;
  min-width: 140px;
  flex-shrink: 0;
  white-space: nowrap;
}

.play-now-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.7s ease;
}

.play-now-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 255, 255, 0.3);
  background-color: #333;
  border-color: rgba(255, 255, 255, 0.5);
}

.play-now-button:hover::before {
  left: 100%;
}

.game-details-html {
  margin: 35px 0;
  line-height: 1.8;
  color: #333;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(250, 250, 250, 0.9));
  border-radius: 16px;
  padding: 30px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;
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
    padding-bottom: 75%; /* 更接近正方形 */
    border-radius: 8px;
    max-width: 95%;
    margin: 0 auto;
  }

  /* 移动端全屏模式样式继承上方统一定义 */

  .fullscreen-controls-bottom {
    margin: 8px 0;
    padding: 8px;
    gap: 10px;
  }

  .fullscreen-button {
    padding: 6px 12px;
    font-size: 13px;
  }

  .fullscreen-button svg {
    width: 16px;
    height: 16px;
  }

  /* 移动端全屏控制按钮 */
  .fullscreen-controls-overlay {
    bottom: 10px;
    right: 10px;
    padding: 8px;
  }

  .fullscreen-button.exit-fullscreen {
    padding: 8px 16px;
    font-size: 13px;
  }

  .game-preview-image {
    width: 200px;
    height: 200px;
    margin-bottom: 15px;
  }

  .play-now-button {
    padding: 10px 30px;
    font-size: 16px;
  }

  .game-details-html {
    padding: 20px 15px;
    margin: 20px 0;
    border-radius: 12px;
  }

  .game-details-html h2 {
    font-size: 24px;
    margin: 5px 0 15px;
    padding-bottom: 10px;
  }

  .game-details-html h2::after {
    width: 60px;
    height: 3px;
  }

  .game-details-html h3 {
    font-size: 20px;
    margin: 25px 0 15px;
    padding: 10px 15px;
    display: block;
  }

  .game-details-html h4 {
    font-size: 18px;
    margin: 18px 0 10px;
  }

  .game-details-html p {
    font-size: 15px;
    line-height: 1.7;
  }

  .game-details-html table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  .game-details-html blockquote {
    padding: 15px 20px;
  }

  .notification {
    font-size: 13px;
    padding: 10px 15px;
  }
}

@media (max-width: 480px) {
  .game-iframe-container {
    padding-bottom: 170%; /* 正方形比例 */
    max-width: 100%;
    margin: 0 auto;
  }

  /* 小屏幕全屏模式样式继承上方统一定义 */

  .fullscreen-controls-bottom {
    margin: 6px 0;
    padding: 6px;
    gap: 8px;
    flex-direction: row;
  }

  .fullscreen-button {
    padding: 5px 10px;
    font-size: 12px;
  }

  .fullscreen-button svg {
    width: 25px;
    height: 25px;
  }

  /* 小屏幕全屏控制按钮 */
  .fullscreen-controls-overlay {
    bottom: 5px;
    right: 5px;
    padding: 6px;
  }

  .fullscreen-button.exit-fullscreen {
    padding: 6px 12px;
    font-size: 12px;
  }

  .game-preview-image {
    width: 180px;
    height: 180px;
    margin-bottom: 12px;
  }

  .play-now-button {
    padding: 8px 25px;
    font-size: 14px;
  }

  .game-meta {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .game-details-html {
    padding: 15px 12px;
    margin: 15px 0;
    border-radius: 8px;
  }

  .game-details-html h2 {
    font-size: 20px;
    margin: 5px 0 12px;
    padding-bottom: 8px;
  }

  .game-details-html h2::after {
    width: 50px;
    height: 3px;
  }

  .game-details-html h3 {
    font-size: 18px;
    margin: 20px 0 12px;
    padding: 8px 12px;
    width: 100%;
    box-sizing: border-box;
  }

  .game-details-html h4 {
    font-size: 16px;
    margin: 15px 0 8px;
    padding-left: 15px;
  }

  .game-details-html h4::before {
    width: 6px;
    height: 6px;
  }

  .game-details-html p {
    font-size: 14px;
    margin-bottom: 12px;
    line-height: 1.6;
  }

  .game-details-html li {
    margin-bottom: 8px;
    padding-left: 20px;
    font-size: 14px;
  }

  .game-details-html ul li::before {
    width: 5px;
    height: 5px;
    top: 7px;
  }

  .game-details-html img {
    margin: 15px 0;
    border-radius: 6px;
  }

  .game-details-html blockquote {
    padding: 10px 12px;
    margin: 15px 0;
    font-size: 14px;
  }

  .game-details-html pre {
    padding: 10px;
    margin: 12px 0;
    font-size: 13px;
  }

  .game-details-html hr {
    margin: 20px 0;
  }

  .notification {
    font-size: 12px;
    padding: 8px 12px;
    max-width: 90%;
  }

  .star {
    width: 14px;
    height: 14px;
  }

  .rating-value {
    font-size: 14px;
  }

  .game-plays {
    font-size: 14px;
  }

  .game-plays svg {
    width: 14px;
    height: 14px;
  }
}
</style>

<style>
/* 游戏详情 HTML 内容样式 - 使用全局 content-html 样式 */
</style>
