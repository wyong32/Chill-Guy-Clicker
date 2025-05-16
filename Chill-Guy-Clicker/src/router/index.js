import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GirlGamesView from '../views/GirlGamesView.vue'
import MusicView from '../views/MusicView.vue'
import PngView from '../views/PngView.vue'
import PngDetailView from '../views/PngDetailView.vue'
import WallpaperView from '../views/WallpaperView.vue'
import WallpaperDetailView from '../views/WallpaperDetailView.vue'
import MusicDetailView from '../views/MusicDetailView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import TermsOfUseView from '../views/TermsOfUseView.vue'
import AdminLoginView from '../views/admin/LoginView.vue'
import AdminDashboardView from '../views/admin/DashboardView.vue'
import { games } from '../data/games.js'
import { music } from '../data/music.js'
import { pngImages } from '../data/png.js'
import { wallpapers } from '../data/wallpapers.js'

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

// 根据 addressBar 查找音乐 - 用于 musicByAddressBar 路由
const findMusicByAddressBar = (addressBarParam) => {
  if (!addressBarParam) return null

  const lowerAddressBarParam = addressBarParam.toLowerCase()
  return music.find(
    (item) => item.addressBar && item.addressBar.toLowerCase() === lowerAddressBarParam
  )
}

// 更新页面元数据
const updateMetaTags = (item) => {
  if (!item || !item.seo) return

  // 更新页面标题
  document.title = item.seo.title || item.pageTitle || 'Chill Guy Games'

  // 更新描述
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', item.seo.description || '')

  // 更新关键词
  let metaKeywords = document.querySelector('meta[name="keywords"]')
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    document.head.appendChild(metaKeywords)
  }
  metaKeywords.setAttribute('content', item.seo.keywords || '')
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        seo: {
          title: 'Chill Guy Games - Play Free Online Games',
          description: 'Play free online games at Chill Guy Games. Enjoy a collection of fun and relaxing games that you can play directly in your browser.',
          keywords: 'online games, free games, browser games, chill games, relaxing games, casual games'
        }
      }
    },
    {
      path: '/Chill-Guy-Girl',
      name: 'girlGames',
      component: GirlGamesView,
      meta: {
        seo: {
          title: 'Chill Girl Games - Play Free Girl Games Online',
          description: 'Play free girl games online at Chill Guy Games. Discover a collection of fun and relaxing games designed for girls of all ages.',
          keywords: 'girl games, games for girls, online girl games, free girl games, chill girl games'
        }
      }
    },
    {
      path: '/Chill-Guy-Music',
      name: 'music',
      component: MusicView,
      meta: {
        seo: {
          title: 'Chill Guy Music - Relaxing Music Collection',
          description: 'Discover relaxing and chill music to enhance your mood. Perfect for studying, relaxing, or just vibing.',
          keywords: 'chill music, relaxing music, lofi music, study music, background music, ambient music'
        }
      }
    },
    {
      path: '/Chill-Guy-Music/:addressBar',
      name: 'musicByAddressBar',
      component: MusicDetailView,
      props: route => {
        const musicItem = findMusicByAddressBar(route.params.addressBar);
        return {
          id: musicItem ? musicItem.id : null,
          addressBar: route.params.addressBar
        };
      }
    },
    {
      path: '/:addressBar',
      name: 'game',
      component: HomeView,
      props: true,
      beforeEnter: (to, _from, next) => {
        const addressBar = to.params.addressBar;

        // 查找是否是游戏
        const game = findGameByAddressBar(addressBar);
        if (game) {
          updateMetaTags(game);
        }

        next();
      }
    },
    {
      path: '/Chill-Guy-PNG',
      name: 'png',
      component: PngView,
      meta: {
        seo: {
          title: 'Chill Guy PNG Images - Free Transparent PNG Downloads',
          description: 'Download free transparent PNG images of Chill Guy characters. High-quality images for your creative projects and designs.',
          keywords: 'png images, transparent png, chill guy png, free png downloads, character png, game assets'
        }
      }
    },
    {
      path: '/Chill-Guy-PNG/:addressBar',
      name: 'pngDetail',
      component: PngDetailView,
      props: route => {
        const pngItem = pngImages.find(item => item.addressBar === route.params.addressBar);
        return {
          id: pngItem ? pngItem.id : null,
          addressBar: route.params.addressBar
        };
      },
      // 详情页的 SEO 信息在组件中根据具体内容动态设置
    },
    {
      path: '/Chill-Guy-Wallpaper',
      name: 'wallpaper',
      component: WallpaperView,
      meta: {
        seo: {
          title: 'Chill Guy Wallpapers - Free HD Wallpaper Downloads',
          description: 'Download free HD wallpapers featuring Chill Guy characters. Perfect for desktop, mobile, and tablet backgrounds.',
          keywords: 'wallpapers, desktop wallpapers, mobile wallpapers, chill guy wallpapers, HD wallpapers, free wallpapers'
        }
      }
    },
    {
      path: '/Chill-Guy-Wallpaper/:addressBar',
      name: 'wallpaperDetail',
      component: WallpaperDetailView,
      props: route => {
        const wallpaperItem = wallpapers.find(item => item.addressBar === route.params.addressBar);
        return {
          id: wallpaperItem ? wallpaperItem.id : null,
          addressBar: route.params.addressBar
        };
      },
      // 详情页的 SEO 信息在组件中根据具体内容动态设置
    },
    {
      path: '/privacy-policy',
      name: 'privacyPolicy',
      component: PrivacyPolicyView,
      meta: {
        seo: {
          title: 'Privacy Policy - Chill Guy Games',
          description: 'Read our privacy policy to understand how we collect, use, and protect your personal information when you use Chill Guy Games.',
          keywords: 'privacy policy, data protection, personal information, chill guy games privacy'
        }
      }
    },
    {
      path: '/terms-of-use',
      name: 'termsOfUse',
      component: TermsOfUseView,
      meta: {
        seo: {
          title: 'Terms of Use - Chill Guy Games',
          description: 'Read our terms of use to understand the rules and guidelines for using Chill Guy Games and its services.',
          keywords: 'terms of use, terms and conditions, user agreement, chill guy games terms'
        }
      }
    },
    // 管理页面路由
    {
      path: '/admin/login',
      name: 'adminLogin',
      component: AdminLoginView,
      meta: {
        title: '管理员登录',
        seo: {
          title: 'Admin Login - Chill Guy Games',
          description: 'Admin login page for Chill Guy Games. Authorized personnel only.',
          keywords: 'admin login, chill guy games admin'
        }
      }
    },
    {
      path: '/admin/dashboard',
      name: 'adminDashboard',
      component: AdminDashboardView,
      meta: {
        title: '管理控制台',
        requiresAuth: true,
        seo: {
          title: 'Admin Dashboard - Chill Guy Games',
          description: 'Admin dashboard for managing Chill Guy Games content and settings.',
          keywords: 'admin dashboard, chill guy games admin'
        }
      }
    },

  ],
})

// 路由前置守卫，用于更新页面元数据和认证检查
router.beforeEach((to, _from, next) => {
  // 检查是否需要认证
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 检查是否已登录
    const token = localStorage.getItem('adminToken')
    if (!token) {
      // 未登录，重定向到登录页面
      next({
        path: '/admin/login',
        query: { redirect: to.fullPath }
      })
      return
    }
  }

  // 更新页面 SEO 信息
  if (to.meta.seo) {
    // 使用路由中定义的 SEO 信息
    const seo = to.meta.seo
    document.title = seo.title

    // 更新描述
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', seo.description || '')

    // 更新关键词
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute('content', seo.keywords || '')
  } else if (to.meta.title) {
    // 兼容旧的 title 设置
    document.title = `${to.meta.title} - Chill Guy Games`
  } else if (to.path === '/') {
    // 首页使用默认游戏的元数据
    const defaultGame = games.find(game => game.id === 1) || games[0]
    updateMetaTags(defaultGame)
  }

  next()
})

export default router
