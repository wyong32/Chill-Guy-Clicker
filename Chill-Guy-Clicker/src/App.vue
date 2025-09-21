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
    
  },
  methods: {
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

      // Service Worker 已移除以优化渲染性能
    })

    const preloadCriticalResources = () => {
      const resources = [
        '/images/logo.webp',
        '/images/chill-guy.png'
      ]

      resources.forEach(src => {
        const img = new Image()
        img.src = src
      })
    }

    // Service Worker 注册功能已移除

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
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; */
  line-height: 1.6;
  color: #333;
  font-display: swap;
}

.app {
  display: flex;
  flex-direction: column;
  z-index: 1;
  -webkit-overflow-scrolling: touch;
}

.main-content {
  flex: 1;
  isolation: isolate;
}

.route-container {
  width: 100%;
}

/* 加载状态样式 */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
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
