// 延迟加载非关键 CSS
const loadCSS = (href) => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}

// 使用 requestIdleCallback 延迟加载非关键资源
const loadNonCriticalResources = () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      import('./assets/css/content-styles.css')
    })
  } else {
    setTimeout(() => {
      import('./assets/css/content-styles.css')
    }, 100)
  }
}

import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 延迟加载非关键资源
loadNonCriticalResources()
