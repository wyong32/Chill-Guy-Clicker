import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { games } from '../data/games.js'

// 根据 addressBar 查找游戏
const findGameByAddressBar = (addressBarParam) => {
  if (!addressBarParam) return null

  const lowerAddressBarParam = addressBarParam.toLowerCase()
  return games.find(
    (game) =>
      (game.addressBar && game.addressBar.toLowerCase() === lowerAddressBarParam) ||
      (game.id && String(game.id).toLowerCase() === lowerAddressBarParam),
  )
}

// 更新页面元数据
const updateMetaTags = (game) => {
  if (!game || !game.seo) return

  // 更新页面标题
  document.title = game.seo.title || game.pageTitle || 'Chill Guy Games'

  // 更新描述
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', game.seo.description || '')

  // 更新关键词
  let metaKeywords = document.querySelector('meta[name="keywords"]')
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    document.head.appendChild(metaKeywords)
  }
  metaKeywords.setAttribute('content', game.seo.keywords || '')
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:addressBar',
      name: 'game',
      component: HomeView,
      props: true,
    },
  ],
})

// 路由前置守卫，用于更新页面元数据
router.beforeEach((to, from, next) => {
  if (to.params.addressBar) {
    const game = findGameByAddressBar(to.params.addressBar)
    if (game) {
      updateMetaTags(game)
    }
  } else {
    // 首页使用默认游戏的元数据
    const defaultGame = games[0]
    if (defaultGame) {
      updateMetaTags(defaultGame)
    }
  }
  next()
})

export default router
