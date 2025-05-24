<template>
  <div class="app">
    <!-- 添加星空背景到所有页面 -->
    <StarryBackground />
    <TheHeader />
    <main class="main-content">
      <RouterView v-slot="{ Component, route }">
        <!-- 使用 KeepAlive 缓存组件，提升性能 -->
        <KeepAlive :include="['HomeView']">
          <Suspense>
            <template #default>
              <component :is="Component" :key="route.path" />
            </template>
            <template #fallback>
              <div class="loading-container">
                <div class="loading-spinner"></div>
                <p>加载中...</p>
              </div>
            </template>
          </Suspense>
        </KeepAlive>
      </RouterView>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

// 异步加载组件，提升初始加载性能
const TheHeader = defineAsyncComponent(() => import('@/components/TheHeader.vue'))
const TheFooter = defineAsyncComponent(() => import('@/components/TheFooter.vue'))
const StarryBackground = defineAsyncComponent(() => import('@/components/StarryBackground.vue'))

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    StarryBackground
  },
  mounted() {
    // 预加载关键资源
    this.preloadCriticalResources()

    // 注册 Service Worker
    this.registerServiceWorker()
  },
  methods: {
    preloadCriticalResources() {
      // 预加载关键图片
      const img = new Image()
      img.src = '/images/logo.png'

      // 预加载关键字体
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
      link.href = 'https://fonts.gstatic.com/s/notosanssc/v36/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnYxNbPzS5HE.woff2'

      // 添加错误处理
      link.onerror = () => {
        console.warn('字体预加载失败，将使用系统字体')
      }

      document.head.appendChild(link)
    },

    registerServiceWorker() {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        // 使用 requestIdleCallback 延迟注册，避免阻塞主线程
        const registerSW = () => {
          navigator.serviceWorker.register('/sw.js')
            .then(registration => {
              console.log('SW registered: ', registration)
            })
            .catch(registrationError => {
              console.log('SW registration failed: ', registrationError)
            })
        }

        if ('requestIdleCallback' in window) {
          requestIdleCallback(registerSW, { timeout: 2000 })
        } else {
          setTimeout(registerSW, 1000)
        }
      }
    }
  }
}
</script>

<style>
/* 全局样式重置和优化 */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  /* 启用硬件加速 */
  transform: translateZ(0);
  /* 优化字体渲染 */
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 防止iOS缩放 */
  -webkit-text-size-adjust: 100%;
}

body {
  /* 使用系统字体栈，提升性能 */
  font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #333;
  /* 防止字体加载导致的布局偏移 */
  font-display: swap;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  /* 启用 GPU 加速 */
  will-change: transform;
  /* 优化滚动性能 */
  -webkit-overflow-scrolling: touch;
}

.main-content {
  flex: 1;
  /* 创建新的层叠上下文 */
  isolation: isolate;
  /* 优化重绘性能 */
  contain: layout style paint;
}

/* 加载状态样式 */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: #fff;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #41b883;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* 响应式优化 */
@media (max-width: 768px) {
  .loading-spinner {
    width: 32px;
    height: 32px;
  }
}

/* 减少动画在低性能设备上的影响 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* 高对比度模式支持 */
@media (prefers-contrast: high) {
  .app {
    filter: contrast(1.2);
  }
}
</style>
