<template>
  <div
    class="lazy-image-container"
    :class="{ 'loaded': isLoaded, 'loading': isLoading, 'error': hasError }"
    :style="containerStyle"
  >
    <!-- 占位符 -->
    <div
      v-if="!isLoaded && !hasError"
      class="placeholder"
      :style="placeholderStyle"
    >
      <div class="placeholder-content">
        <div v-if="isLoading" class="loading-spinner"></div>
        <div v-else class="placeholder-icon">📷</div>
      </div>
    </div>

    <!-- 实际图片 -->
    <img
      v-show="isLoaded"
      ref="imageRef"
      :src="currentSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :decoding="decoding"
      :fetchpriority="fetchpriority"
      class="lazy-image"
      @load="onLoad"
      @error="onError"
    />

    <!-- 错误状态 -->
    <div v-if="hasError" class="error-placeholder">
      <div class="error-content">
        <span class="error-icon">❌</span>
        <span class="error-text">Image failed to load</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: 'auto'
  },
  height: {
    type: [String, Number],
    default: 'auto'
  },
  loading: {
    type: String,
    default: 'lazy',
    validator: (value) => ['lazy', 'eager'].includes(value)
  },
  decoding: {
    type: String,
    default: 'async',
    validator: (value) => ['async', 'sync', 'auto'].includes(value)
  },
  placeholder: {
    type: String,
    default: ''
  },
  fallback: {
    type: String,
    default: ''
  },
  threshold: {
    type: Number,
    default: 0.1
  },
  rootMargin: {
    type: String,
    default: '50px'
  },
  fetchpriority: {
    type: String,
    default: 'auto',
    validator: (value) => ['high', 'low', 'auto'].includes(value)
  }
})

const emit = defineEmits(['load', 'error', 'intersect'])

// 响应式状态
const imageRef = ref(null)
const isLoading = ref(false)
const isLoaded = ref(false)
const hasError = ref(false)
const isIntersecting = ref(false)

// 当前图片源
const currentSrc = ref('')

// 计算样式
const containerStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  position: 'relative',
  overflow: 'hidden'
}))

const placeholderStyle = computed(() => ({
  backgroundColor: '#f0f0f0',
  backgroundImage: props.placeholder ? `url(${props.placeholder})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))

// Intersection Observer
let observer = null

const createObserver = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // 如果不支持 IntersectionObserver，直接加载图片
    loadImage()
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isIntersecting.value = true
          emit('intersect', entry)
          loadImage()
          observer?.unobserve(entry.target)
        }
      })
    },
    {
      threshold: props.threshold,
      rootMargin: props.rootMargin
    }
  )
}

const loadImage = () => {
  if (isLoading.value || isLoaded.value) return

  isLoading.value = true
  currentSrc.value = props.src
}

const onLoad = (event) => {
  isLoading.value = false
  isLoaded.value = true
  hasError.value = false
  emit('load', event)
}

const onError = (event) => {
  isLoading.value = false
  hasError.value = true

  // 尝试使用 fallback 图片
  if (props.fallback && currentSrc.value !== props.fallback) {
    currentSrc.value = props.fallback
    hasError.value = false
    isLoading.value = true
  } else {
    emit('error', event)
  }
}

// 监听 src 变化
watch(() => props.src, () => {
  isLoaded.value = false
  hasError.value = false
  isLoading.value = false
  currentSrc.value = ''

  if (isIntersecting.value) {
    loadImage()
  }
})

onMounted(() => {
  createObserver()

  if (imageRef.value && observer) {
    observer.observe(imageRef.value.parentElement)
  }

  // 如果设置为 eager 加载，立即加载图片
  if (props.loading === 'eager') {
    loadImage()
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.lazy-image-container {
  display: inline-block;
  background-color: #f5f5f5;
  border-radius: 4px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  min-width: 100px;
  min-height: 100px;
  overflow: hidden;
}

.lazy-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
  backface-visibility: hidden;
}

.placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 4px;
}

.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #999;
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid #e0e0e0;
  border-top: 2px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.placeholder-icon {
  font-size: 24px;
  opacity: 0.5;
}

.error-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  border: 1px dashed #ddd;
  border-radius: 4px;
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #999;
  font-size: 12px;
}

.error-icon {
  font-size: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 加载完成后的动画 */
.lazy-image-container.loaded {
  background-color: transparent;
}

.lazy-image-container.loading .placeholder {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
</style>
