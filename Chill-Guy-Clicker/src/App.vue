<template>
  <div class="app">
    <!-- 暂时禁用StarryBackground测试CLS -->
    <!-- <StarryBackground /> -->
    <TheHeader />
    <main class="main-content">
      <RouterView v-slot="{ Component, route }">
        <KeepAlive :include="['HomeView']">
          <div class="route-container">
            <component :is="Component" :key="route.path" />
          </div>
        </KeepAlive>
      </RouterView>
    </main>
    <!-- 测试简化版Footer -->
    <footer style="background-color: #1a1a2e; color: white; padding: 20px; text-align: center;">
      <p>© 2025 chillguymemeclicker.com. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { updatePageSEO } from '@/utils/head'

// 同步加载关键组件，避免路由问题
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
// import StarryBackground from '@/components/StarryBackground.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    // StarryBackground
  },
  mounted() {
    
  },
  methods: {
  },
  setup() {
    onMounted(() => {
      // 移除SEO更新，避免与路由守卫冲突
      // updatePageSEO({
      //   title: 'Chill Guy Clicker - Best Clicker Game Experience',
      //   description: 'Experience the most fun Chill Guy clicker game, easy to get started, endless fun awaits you!',
      //   keywords: 'chill guy, clicker game, casual game, web game, online game'
      // })

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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #333;
  font-display: optional; /* 防止字体切换导致CLS */
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
  /* 减少重排 */
  contain: layout;
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
    animation-duration: 0.1s !important;
    transition-duration: 0.1s !important;
    animation-iteration-count: 1 !important;
  }
}
</style>
