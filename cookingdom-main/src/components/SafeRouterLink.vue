<template>
  <a :href="computedHref" @click="handleClick" :class="linkClass" v-bind="$attrs">
    <slot />
  </a>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'
import { useRouterSafe } from '@/composables/useRouterSafe'

// 定义 props
const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  replace: {
    type: Boolean,
    default: false,
  },
  activeClass: {
    type: String,
    default: 'router-link-active',
  },
  exactActiveClass: {
    type: String,
    default: 'router-link-exact-active',
  },
})

// 定义 emits
const emit = defineEmits(['click'])

// 使用简化的 router
const { safePush, safeReplace, currentPath } = useRouterSafe()

// 计算 href
const computedHref = computed(() => {
  try {
    if (typeof props.to === 'string') {
      return props.to
    } else if (props.to && typeof props.to === 'object') {
      const toValue = props.to.value || props.to

      if (toValue.path) {
        return toValue.path
      } else if (toValue.name) {
        // 简化的路由名称到路径的映射
        const routeMap = {
          home: '/',
          guides: '/guides',
          blog: '/blog',
          download: '/download',
          'home-lang': (params) => `/${params.lang}`,
          'guides-lang': (params) => `/${params.lang}/guides`,
          'blog-lang': (params) => `/${params.lang}/blog`,
          'download-lang': (params) => `/${params.lang}/download`,
        }

        const routeHandler = routeMap[toValue.name]
        if (typeof routeHandler === 'function') {
          return routeHandler(toValue.params || {})
        } else if (typeof routeHandler === 'string') {
          return routeHandler
        }
      }
    }
  } catch (error) {
    console.warn('SafeRouterLink: 计算 href 失败:', error)
  }
  return '#'
})

// 计算链接的 class
const linkClass = computed(() => {
  const classes = []
  const currentPathValue = currentPath.value
  const href = computedHref.value

  // 检查是否为活动链接
  if (href === currentPathValue) {
    classes.push(props.exactActiveClass)
    classes.push(props.activeClass)
  } else {
    // 简化的导航激活状态逻辑
    const isGuideDetailPage = /\/cookingdom-game-level-\d+$/.test(currentPathValue)
    const isGuidesLink = href.endsWith('/guides')
    const isHomeLink = href === '/' || /^\/[a-z]{2,3}\/?$/.test(href)

    if (isGuideDetailPage && isGuidesLink) {
      classes.push(props.activeClass)
    } else if (isHomeLink && !isGuideDetailPage) {
      const pathAfterLang = currentPathValue.replace(/^\/[a-z]{2,3}/, '') || '/'
      const hrefAfterLang = href.replace(/^\/[a-z]{2,3}/, '') || '/'
      if (pathAfterLang === '/' && hrefAfterLang === '/') {
        classes.push(props.activeClass)
      }
    }
  }

  return classes
})

// 处理点击事件
const handleClick = (event) => {
  emit('click', event)

  if (event.defaultPrevented) {
    return
  }

  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) {
    return
  }

  event.preventDefault()

  const href = computedHref.value
  if (href && href !== '#') {
    if (props.replace) {
      safeReplace(href)
    } else {
      safePush(href)
    }
  }
}
</script>

<style scoped>
/* 继承父组件的样式 */
a {
  color: inherit;
  text-decoration: inherit;
}
</style>
