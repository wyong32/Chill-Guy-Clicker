<template>
  <div class="optimized-image-container" :style="containerStyle">
    <!-- 占位符 -->
    <div
      v-if="showPlaceholder"
      class="image-placeholder"
      :style="placeholderStyle"
    >
      <div class="placeholder-content">
        <div class="loading-spinner"></div>
      </div>
    </div>

    <!-- 实际图片 -->
    <img
      v-show="imageLoaded"
      ref="image"
      :src="optimizedSrc"
      :alt="alt"
      :loading="lazyLoad ? 'lazy' : 'eager'"
      :fetchpriority="priority"
      class="optimized-image"
      :style="imageStyle"
      @load="onImageLoad"
      @error="onImageError"
    />

    <!-- 错误状态 -->
    <div v-if="hasError" class="image-error">
      <span>图片加载失败</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptimizedImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
      default: 'auto'
    },
    height: {
      type: [Number, String],
      default: 'auto'
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    priority: {
      type: String,
      default: 'auto', // 'high' | 'low' | 'auto'
      validator: value => ['high', 'low', 'auto'].includes(value)
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    aspectRatio: {
      type: String,
      default: null // 例如 '16/9', '4/3'
    }
  },
  data() {
    return {
      imageLoaded: false,
      hasError: false,
      showPlaceholder: true
    }
  },
  computed: {
    imageConfig() {
      return {
        useWebP: this.supportsWebP(),
        quality: 'high',
        lazyLoad: true,
        placeholder: true
      }
    },
    optimizedSrc() {
      const { useWebP, quality } = this.imageConfig
      let src = this.src

      // 如果支持WebP且原图不是WebP，尝试使用WebP版本
      if (useWebP && !src.includes('.webp')) {
        // 这里可以根据实际情况调整WebP图片的路径规则
        const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
        // 在实际项目中，你可能需要检查WebP版本是否存在
        src = webpSrc
      }

      // 根据质量设置调整图片参数（如果使用CDN）
      if (quality === 'low') {
        // 可以添加质量参数，例如：?quality=60
        src += src.includes('?') ? '&quality=60' : '?quality=60'
      } else if (quality === 'medium') {
        src += src.includes('?') ? '&quality=80' : '?quality=80'
      }

      return src
    },
    containerStyle() {
      const style = {}

      if (this.width !== 'auto') {
        style.width = typeof this.width === 'number' ? `${this.width}px` : this.width
      }

      if (this.height !== 'auto') {
        style.height = typeof this.height === 'number' ? `${this.height}px` : this.height
      }

      if (this.aspectRatio) {
        style.aspectRatio = this.aspectRatio
      }

      return style
    },
    placeholderStyle() {
      return {
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      }
    },
    imageStyle() {
      return {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'opacity 0.3s ease'
      }
    }
  },
  mounted() {
    // 为了彻底消除 CLS，强制立即加载所有图片
    this.startLoading()

    // 注释掉懒加载逻辑，防止布局偏移
    // if (!this.lazyLoad) {
    //   this.startLoading()
    // } else {
    //   this.setupIntersectionObserver()
    // }
  },
  methods: {
    setupIntersectionObserver() {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                this.startLoading()
                this.observer.unobserve(this.$el)
              }
            })
          },
          {
            rootMargin: '50px' // 提前50px开始加载
          }
        )

        this.observer.observe(this.$el)
      } else {
        // 不支持IntersectionObserver时直接加载
        this.startLoading()
      }
    },
    startLoading() {
      // 图片已经在模板中，这里只是触发加载过程
      if (this.$refs.image) {
        this.$refs.image.src = this.optimizedSrc
      }
    },
    onImageLoad() {
      this.imageLoaded = true
      this.showPlaceholder = false
      this.hasError = false
      this.$emit('load')
    },
    onImageError() {
      this.hasError = true
      this.showPlaceholder = false
      this.$emit('error')
    },

    supportsWebP() {
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 1
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
    }
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }
}
</script>

<style scoped>
.optimized-image-container {
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

.placeholder-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #e0e0e0;
  border-top: 2px solid #999;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.optimized-image {
  display: block;
  max-width: 100%;
  height: auto;
}

.image-error {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #999;
  font-size: 14px;
}

@keyframes loading {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 响应式优化 */
@media (max-width: 768px) {
  .loading-spinner {
    width: 16px;
    height: 16px;
  }

  .image-error {
    font-size: 12px;
  }
}
</style>
