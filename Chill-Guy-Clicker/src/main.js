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

// 使用 requestIdleCallback 延迟应用初始化
const initializeApp = () => {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  app.mount('#app')

  // 延迟加载非关键资源
  loadNonCriticalResources()
}

// 优化应用启动时机
if ('requestIdleCallback' in window) {
  requestIdleCallback(initializeApp, { timeout: 100 })
} else {
  setTimeout(initializeApp, 0)
}
