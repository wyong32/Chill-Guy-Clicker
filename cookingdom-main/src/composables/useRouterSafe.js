import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue'

/**
 * 简化的 router 和 route 使用 composable
 */
export function useRouterSafe() {
  let router = null
  let route = null
  let isRouterAvailable = false

  try {
    router = useRouter()
    route = useRoute()
    isRouterAvailable = true
  } catch (error) {
    console.warn('useRouterSafe: Router 不可用:', error)

    // 简化的 fallback router
    router = {
      push: (to) => {
        if (typeof to === 'string') {
          window.location.href = to
        } else if (to.path) {
          window.location.href = to.path
        }
      },
      replace: (to) => {
        if (typeof to === 'string') {
          window.location.replace(to)
        } else if (to.path) {
          window.location.replace(to.path)
        }
      }
    }

    // 简化的 fallback route
    route = ref({
      path: window.location.pathname,
      name: 'home',
      params: {},
      query: {},
      hash: window.location.hash,
      fullPath: window.location.pathname + window.location.search + window.location.hash,
      matched: [],
      meta: {}
    })
  }

  // 简化的导航函数
  const safePush = (to) => {
    try {
      if (isRouterAvailable && router.push) {
        return router.push(to)
      } else {
        if (typeof to === 'string') {
          window.location.href = to
        } else if (to.path) {
          window.location.href = to.path
        }
      }
    } catch (error) {
      console.error('导航失败:', error)
      if (typeof to === 'string') {
        window.location.href = to
      } else if (to.path) {
        window.location.href = to.path
      }
    }
  }

  const safeReplace = (to) => {
    try {
      if (isRouterAvailable && router.replace) {
        return router.replace(to)
      } else {
        if (typeof to === 'string') {
          window.location.replace(to)
        } else if (to.path) {
          window.location.replace(to.path)
        }
      }
    } catch (error) {
      console.error('替换失败:', error)
      if (typeof to === 'string') {
        window.location.replace(to)
      } else if (to.path) {
        window.location.replace(to.path)
      }
    }
  }

  // 获取当前路径
  const currentPath = computed(() => {
    try {
      return route?.path || window.location.pathname
    } catch (error) {
      return window.location.pathname
    }
  })

  return {
    router,
    route,
    isRouterAvailable,
    safePush,
    safeReplace,
    currentPath
  }
}
