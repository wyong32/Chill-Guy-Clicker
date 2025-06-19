import './assets/main.css'
import './assets/css/ad-style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 创建应用实例
const app = createApp(App)

app.use(createPinia())
app.use(router)

// 挂载应用
app.mount('#app')
