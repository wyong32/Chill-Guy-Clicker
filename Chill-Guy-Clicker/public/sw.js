// Service Worker for Chill Guy Clicker
// 提供离线支持和缓存优化

const CACHE_NAME = 'chill-guy-clicker-v1.0.0'
const STATIC_CACHE = 'static-v1'
const DYNAMIC_CACHE = 'dynamic-v1'

// 需要缓存的静态资源
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/images/logo.webp',
  '/images/favicon.ico',
  '/manifest.json'
]

// 需要缓存的动态资源模式
const CACHE_PATTERNS = [
  /\.(?:js|css|woff2?|png|jpg|jpeg|webp|svg)$/,
  /\/api\//
]

// 安装事件 - 预缓存静态资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        // 静态资源缓存完成
      })
      .catch((error) => {
        // 缓存失败处理
      })
  )
})

// 激活事件 - 清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      // 旧缓存清理完成
      return self.clients.claim()
    })
  )
})

// 拦截网络请求
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // 只处理同源请求
  if (url.origin !== location.origin) {
    return
  }

  // 对于导航请求，使用网络优先策略
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // 缓存成功的导航响应
          if (response.status === 200) {
            const responseClone = response.clone()
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, responseClone))
          }
          return response
        })
        .catch(() => {
          // 网络失败时，尝试从缓存获取
          return caches.match(request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse
              }
              // 如果没有缓存，返回离线页面
              return caches.match('/')
            })
        })
    )
    return
  }

  // 对于静态资源，使用缓存优先策略
  if (CACHE_PATTERNS.some(pattern => pattern.test(request.url))) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            // 后台更新缓存
            fetch(request)
              .then((response) => {
                if (response.status === 200) {
                  const responseClone = response.clone()
                  caches.open(DYNAMIC_CACHE)
                    .then((cache) => cache.put(request, responseClone))
                }
              })
              .catch(() => {
                // 网络请求失败，忽略
              })

            return cachedResponse
          }

          // 缓存中没有，从网络获取
          return fetch(request)
            .then((response) => {
              if (response.status === 200) {
                const responseClone = response.clone()
                caches.open(DYNAMIC_CACHE)
                  .then((cache) => cache.put(request, responseClone))
              }
              return response
            })
        })
    )
    return
  }

  // 对于其他请求，使用网络优先策略
  event.respondWith(
    fetch(request)
      .catch(() => {
        return caches.match(request)
      })
  )
})

// 处理消息事件
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

// 后台同步事件
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // 执行后台同步任务
      Promise.resolve()
    )
  }
})
