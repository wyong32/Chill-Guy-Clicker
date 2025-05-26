<template>
  <div class="app">
    <!-- 添加星空背景到所有页面 -->
    <StarryBackground />
    <TheHeader />
    <main class="main-content">
      <RouterView v-slot="{ Component, route }">
        <!-- 移除 Suspense 组件，防止布局偏移 -->
        <KeepAlive :include="['HomeView']">
          <div class="route-container">
            <component :is="Component" :key="route.path" />
          </div>
        </KeepAlive>
      </RouterView>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { updatePageSEO } from '@/utils/head'

// 同步加载关键组件，避免路由问题
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import StarryBackground from '@/components/StarryBackground.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    StarryBackground
  },
  mounted() {
    // 在 App 级别强制修复 Footer，防止路由切换导致的 CLS
    this.$nextTick(() => {
      this.fixAppFooter()
    })
  },
  methods: {
    fixAppFooter() {
      // 查找所有 Footer 元素
      const footers = document.querySelectorAll('.footer, footer')
      footers.forEach(footer => {
        footer.style.setProperty('min-height', '420px', 'important')
        footer.style.setProperty('height', '420px', 'important')
        footer.style.setProperty('max-height', '420px', 'important')
        footer.style.setProperty('overflow', 'hidden', 'important')
        footer.style.setProperty('flex-shrink', '0', 'important')
        footer.style.setProperty('contain', 'layout style paint', 'important')
        footer.style.setProperty('position', 'relative', 'important')
        footer.style.setProperty('width', '100%', 'important')
        footer.style.setProperty('box-sizing', 'border-box', 'important')
        footer.style.setProperty('display', 'block', 'important')
        footer.style.setProperty('visibility', 'visible', 'important')
        console.log('App-level Footer fixed:', footer.getBoundingClientRect())
      })
    }
  },
  setup() {
    onMounted(() => {
      // 设置基础 SEO
      updatePageSEO({
        title: 'Chill Guy Clicker - Best Clicker Game Experience',
        description: 'Experience the most fun Chill Guy clicker game, easy to get started, endless fun awaits you!',
        keywords: 'chill guy, clicker game, casual game, web game, online game'
      })

      // 预加载关键资源
      preloadCriticalResources()

      // 注册 Service Worker
      registerServiceWorker()
    })

    const preloadCriticalResources = () => {
      const resources = [
        '/images/logo.png',
        '/images/chill-guy.png'
      ]

      resources.forEach(src => {
        const img = new Image()
        img.src = src
      })
    }

    const registerServiceWorker = () => {
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

    return {}
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

.route-container {
  /* 确保路由组件有正确的容器 */
  width: 100%;
  min-height: 100%;
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
