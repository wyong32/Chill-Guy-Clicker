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
    <!-- 重新设计的稳定Footer -->
    <footer class="stable-footer">
      <div class="footer-container">
        <div class="footer-main">
          <div class="footer-col footer-col-1">
            <h3 class="footer-heading">Chill Guy Clicker</h3>
            <p class="footer-desc">Chill Guy Games is a platform offering various fun casual games. We are dedicated to providing the best gaming experience for players.</p>
          </div>
          <div class="footer-col footer-col-2">
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-list">
              <li><a href="/" class="footer-link">Chill Guy Clicker</a></li>
              <li><a href="/Chill-Guy-Girl" class="footer-link">Chill Guy Girl</a></li>
              <li><a href="/Chill-Guy-Music" class="footer-link">Chill Guy Music</a></li>
              <li><a href="/Chill-Guy-PNG" class="footer-link">Chill Guy PNG</a></li>
              <li><a href="/Chill-Guy-Wallpaper" class="footer-link">Chill Guy Wallpaper</a></li>
            </ul>
          </div>
          <div class="footer-col footer-col-3">
            <h3 class="footer-heading">Game Categories</h3>
            <ul class="footer-list">
              <li><a href="/" class="footer-link">Chill Guy Clicker</a></li>
              <li><a href="/Chill-Girl-Clicker" class="footer-link">Chill Girl Clicker</a></li>
              <li><a href="/Chill-Guy-Clicker-3D" class="footer-link">Chill Guy Clicker 3D</a></li>
              <li><a href="/Chill-Guy-Unification" class="footer-link">Chill Guy: Unification</a></li>
              <li><a href="/Chill-Guy-Evolution" class="footer-link">Chill Guy Evolution</a></li>
            </ul>
          </div>
          <div class="footer-col footer-col-4">
            <h3 class="footer-heading">Legal</h3>
            <ul class="footer-list">
              <li><a href="/privacy-policy" class="footer-link">Privacy Policy</a></li>
              <li><a href="/terms-of-use" class="footer-link">Terms of Use</a></li>
              <li><a href="/copyright" class="footer-link">Copyright</a></li>
              <li><a href="/about" class="footer-link">About Us</a></li>
              <li><a href="/contact" class="footer-link">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copyright">© 2025 chillguymemeclicker.com. All rights reserved.</p>
        </div>
      </div>
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

/* 稳定的Footer样式 - 避免CLS */
.stable-footer {
  background-color: #1a1a2e;
  color: #ffffff;
  padding: 60px 0 30px;
  width: 100%;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-main {
  display: flex;
  margin-bottom: 40px;
}

.footer-col {
  padding: 0 15px;
}

.footer-col-1 {
  width: 40%;
}

.footer-col-2,
.footer-col-3,
.footer-col-4 {
  width: 20%;
}

.footer-heading {
  color: #f39c12;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  line-height: 1.2;
}

.footer-desc {
  color: #cccccc;
  line-height: 1.6;
  font-size: 14px;
  margin: 0;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 12px;
}

.footer-link {
  color: #cccccc;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #f39c12;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 30px;
  text-align: center;
}

.footer-copyright {
  color: #999;
  font-size: 14px;
  margin: 0;
}

/* 移动端适配 - 使用固定布局避免CLS */
@media (max-width: 768px) {
  .stable-footer {
    padding: 40px 0 20px;
  }
  
  .footer-container {
    padding: 0 15px;
  }
  
  .footer-main {
    flex-direction: column;
    margin-bottom: 30px;
  }
  
  .footer-col {
    width: 100% !important;
    margin-bottom: 25px;
    padding: 0;
  }
  
  .footer-heading {
    font-size: 16px;
    margin-bottom: 15px;
  }
  
  .footer-desc {
    font-size: 13px;
  }
  
  .footer-link {
    font-size: 13px;
  }
  
  .footer-list li {
    margin-bottom: 10px;
  }
  
  .footer-bottom {
    padding-top: 20px;
  }
  
  .footer-copyright {
    font-size: 12px;
  }
}
</style>
