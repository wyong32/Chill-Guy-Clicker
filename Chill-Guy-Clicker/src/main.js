// 使用 requestIdleCallback 延迟加载非关键资源
const loadNonCriticalResources = () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      import('./assets/css/content-styles.css')
    }, { timeout: 2000 })
  } else {
    setTimeout(() => {
      import('./assets/css/content-styles.css')
    }, 500)
  }
}

import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 优化应用初始化 - 减少 LCP 渲染延迟
const app = createApp(App)

app.use(createPinia())
app.use(router)

// 优化挂载过程
const mountApp = () => {
  // 移除加载指示器
  const loadingSpinner = document.querySelector('.loading-spinner')
  if (loadingSpinner) {
    loadingSpinner.style.display = 'none'
  }

  // 挂载应用
  app.mount('#app')

  // 标记应用已加载
  document.body.classList.add('app-loaded')
  console.log('Vue app mounted - LCP optimized')

  // 延迟加载非关键资源
  requestIdleCallback(() => {
    loadNonCriticalResources()
  }, { timeout: 1000 })
}

// 立即挂载，不等待其他资源
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp)
} else {
  mountApp()
}
