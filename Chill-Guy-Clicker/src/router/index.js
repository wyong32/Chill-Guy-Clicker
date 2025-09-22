import { createRouter, createWebHistory } from 'vue-router'

// 懒加载组件，提升初始加载性能
const HomeView = () => import('../views/HomeView.vue')
const GirlGamesView = () => import('../views/GirlGamesView.vue')
const MusicView = () => import('../views/MusicView.vue')
const PngView = () => import('../views/PngView.vue')
const PngDetailView = () => import('../views/PngDetailView.vue')
const WallpaperView = () => import('../views/WallpaperView.vue')
const WallpaperDetailView = () => import('../views/WallpaperDetailView.vue')
const MusicDetailView = () => import('../views/MusicDetailView.vue')
const PrivacyPolicyView = () => import('../views/PrivacyPolicyView.vue')
const TermsOfUseView = () => import('../views/TermsOfUseView.vue')
const AboutView = () => import('../views/AboutView.vue')
const ContactView = () => import('../views/ContactView.vue')
const CopyrightView = () => import('../views/CopyrightView.vue')
const AdTestView = () => import('../views/AdTestView.vue')

// 管理页面懒加载
const AdminLoginView = () => import('../views/admin/LoginView.vue')
const AdminDashboardView = () => import('../views/admin/DashboardView.vue')
import { games } from '../data/games.js'
import { music } from '../data/music.js'
import { pngImages } from '../data/png.js'
import { wallpapers } from '../data/wallpapers.js'
import { SITE_DOMAIN, SITE_NAME, DEFAULT_SHARE_IMAGE } from '../config/site.js'

// 默认社交分享图片
const DEFAULT_IMAGE = DEFAULT_SHARE_IMAGE

// 更新规范URL
const updateCanonicalUrl = (path) => {
  // 获取或创建规范URL标签
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }

  // 设置规范URL - 确保路径以/开头
  const canonicalPath = path.startsWith('/') ? path : `/${path}`
  canonicalLink.setAttribute('href', `${SITE_DOMAIN}${canonicalPath}`)
}

// 更新社交媒体标签
// 简化的社交媒体标签更新 - 只保留核心功能
const updateBasicSocialTags = (title, description) => {
  // 只更新最基础的社交媒体标签
  const metaOgTitle = document.querySelector('meta[property="og:title"]')
  if (metaOgTitle) metaOgTitle.setAttribute('content', title)
  
  const metaOgDesc = document.querySelector('meta[property="og:description"]')
  if (metaOgDesc) metaOgDesc.setAttribute('content', description)
}

// 简化的meta标签更新函数
const updateMetaTag = (name, content) => {
  let metaTag = document.querySelector(`meta[name="${name}"]`)
  if (!metaTag) {
    metaTag = document.createElement('meta')
    metaTag.setAttribute('name', name)
    document.head.appendChild(metaTag)
  }
  metaTag.setAttribute('content', content)
}

// 删除复杂的结构化数据生成 - 保留HTML中的基础结构化数据即可

// 根据 addressBar 查找游戏
const findGameByAddressBar = (addressBarParam) => {
  // 如果 addressBarParam 为空或未定义，尝试查找 ID 为 1 的游戏（首页游戏）
  if (!addressBarParam || addressBarParam === '') {
    return games.find((game) => game.id === 1)
  }

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
    (item) => item.addressBar && item.addressBar.toLowerCase() === lowerAddressBarParam,
  )
}

// 删除了复杂的updateMetaTags函数，使用简化的updatePageTDK

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（浏览器前进/后退），则恢复到该位置
    if (savedPosition) {
      return savedPosition
    }
    
    // 如果有锚点，滚动到锚点位置
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    
    // 默认滚动到顶部，使用平滑滚动
    return {
      top: 0,
      behavior: 'smooth'
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        seo: {
          title: 'Chill Guy Games - Play Free Online Games',
          description:
            'Play free online games at Chill Guy Games. Enjoy a collection of fun and relaxing games that you can play directly in your browser.',
          keywords:
            'online games, free games, browser games, chill games, relaxing games, casual games',
        },
      },
    },
    {
      path: '/Chill-Guy-Girl',
      name: 'girlGames',
      component: GirlGamesView,
      meta: {
        seo: {
          title: 'Chill Girl Clicker - Relaxing Meme Idle Game - Play Now Free',
          description:
            'Play Chill Girl Clicker, a relaxing idle game inspired by the chill girl meme. Click to earn points, unlock chill upgrades, and vibe in style!',
          keywords:
            'chill girl clicker, chill girl meme, idle game, clicker game, relaxing game, aesthetic clicker',
        },
      },
    },
    {
      path: '/Chill-Guy-Music',
      name: 'music',
      component: MusicView,
      meta: {
        seo: {
          title: 'Chill Guy Music - Relaxing Music Collection',
          description:
            'Discover the ultimate chill guy girl experience with cozy clicker gameplay, lo-fi vibes, and relaxing upgrades for your aesthetic idle world.',
          keywords:
            'chill music, relaxing music, lofi music, study music, background music, ambient music',
        },
      },
    },
    {
      path: '/Chill-Guy-Music/:addressBar',
      name: 'musicByAddressBar',
      component: MusicDetailView,
      props: (route) => {
        const musicItem = findMusicByAddressBar(route.params.addressBar)
        return {
          id: musicItem ? musicItem.id : null,
          addressBar: route.params.addressBar,
        }
      },
    },
    {
      path: '/:addressBar',
      name: 'game',
      component: HomeView,
      props: true,
      beforeEnter: (to, _from, next) => {
        const addressBar = to.params.addressBar

        // 查找是否是游戏
        const game = findGameByAddressBar(addressBar)

        // 如果 addressBar 为空或未定义，并且游戏是 ID 为 1 的游戏（首页），则导航到 '/'
        if ((!addressBar || addressBar === '') && game && game.id === 1) {
          if (to.path !== '/') {
            // 避免无限重定向
            next('/')
            return
          }
        } else if (!game) {
          // 如果找不到游戏，重定向到首页
          next('/')
          return
        }

        // 设置游戏的SEO信息
        if (game.seo) {
          updatePageTDK(game.seo.title, game.seo.description, game.seo.keywords)
          updateCanonicalUrl(to.fullPath)
        }

        next()
      },
    },
    {
      path: '/Chill-Guy-PNG',
      name: 'png',
      component: PngView,
      beforeEnter: (to, from, next) => {
        // 从 pngImages 数据中获取 SEO 信息
        // 我们可以使用第一个 PNG 图片的 SEO 信息作为列表页的 SEO 信息
        // 或者创建一个专门的 SEO 对象

        // 设置默认 SEO 信息
        let seoInfo = {
          title: 'Chill Guy PNG Images – High Quality Chill Guy Pictures',
          description:
            'Download Chill Guy Clicker - Chill Guy PNG images with transparent backgrounds. Perfect for memes, graphic design, and creative projects featuring Chill Guy.',
          keywords:
            'chill guy png images, chill guy transparent, chill guy png, chill guy pictures, chill guy graphics',
        }

        // 如果 pngImages 数据中有 SEO 信息，使用它
        if (pngImages && pngImages.length > 0 && pngImages[0].seo) {
          // 使用第一个 PNG 图片的 SEO 信息
          seoInfo = pngImages[0].seo
        }

        // 使用简化的TDK更新函数
        updatePageTDK(seoInfo.title, seoInfo.description, seoInfo.keywords)
        updateCanonicalUrl('/Chill-Guy-PNG')

        next()
      },
    },
    {
      path: '/Chill-Guy-PNG/:addressBar',
      name: 'pngDetail',
      component: PngDetailView,
      props: (route) => {
        const pngItem = pngImages.find((item) => item.addressBar === route.params.addressBar)
        return {
          id: pngItem ? pngItem.id : null,
          addressBar: route.params.addressBar,
        }
      },
      // 详情页的 SEO 信息在组件中根据具体内容动态设置
    },
    {
      path: '/Chill-Guy-Wallpaper',
      name: 'wallpaper',
      component: WallpaperView,
      meta: {
        seo: {
          title: 'Chill Guy Wallpapers - Cozy Aesthetic for Phone & Desktop',
          description:
            'Download stylish Chill Guy wallpapers with lo-fi and relaxed vibes. Perfect for your mobile or desktop background. Stay chill with every screen refresh.',
          keywords:
            'chill guy wallpapers, lo-fi chill backgrounds, aesthetic chill guy, phone wallpaper, chill desktop',
        },
      },
    },
    {
      path: '/Chill-Guy-Wallpaper/:addressBar',
      name: 'wallpaperDetail',
      component: WallpaperDetailView,
      props: (route) => {
        const wallpaperItem = wallpapers.find((item) => item.addressBar === route.params.addressBar)
        return {
          id: wallpaperItem ? wallpaperItem.id : null,
          addressBar: route.params.addressBar,
        }
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
          description:
            'Read our privacy policy to understand how we collect, use, and protect your personal information when you use Chill Guy Games.',
          keywords:
            'privacy policy, data protection, personal information, chill guy games privacy',
        },
      },
    },
    {
      path: '/terms-of-use',
      name: 'termsOfUse',
      component: TermsOfUseView,
      meta: {
        seo: {
          title: 'Terms of Use - Chill Guy Games',
          description:
            'Read our terms of use to understand the rules and guidelines for using Chill Guy Games and its services.',
          keywords: 'terms of use, terms and conditions, user agreement, chill guy games terms',
        },
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        seo: {
          title: 'About Us - Chill Guy Games',
          description:
            'Learn about Chill Guy Games, our mission, values, and what we offer to our community of players. Discover our story and commitment to creating relaxing gaming experiences.',
          keywords:
            'about chill guy games, game development, online games, browser games, chill games, relaxing games, casual games',
        },
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        seo: {
          title: 'Contact Us - Chill Guy Games',
          description:
            'Get in touch with the Chill Guy Games team. We welcome your feedback, suggestions, and questions about our games and services.',
          keywords:
            'contact chill guy games, support, feedback, game suggestions, help, customer service, game support',
        },
      },
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: CopyrightView,
      meta: {
        seo: {
          title: 'Copyright Notice - Chill Guy Games',
          description:
            'Read our copyright notice to understand the intellectual property rights and usage terms for Chill Guy Games content.',
          keywords:
            'copyright notice, intellectual property, usage rights, fair use, chill guy games copyright',
        },
      },
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
          keywords: 'admin login, chill guy games admin',
        },
      },
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
          keywords: 'admin dashboard, chill guy games admin',
        },
      },
    },
    {
      path: '/ad-test',
      name: 'adTest',
      component: AdTestView,
      meta: {
        seo: {
          title: 'AdSense 广告测试 - Chill Guy Games',
          description: '测试Google AdSense广告是否正常工作的页面',
          keywords: 'adsense test, google ads, ad testing',
        },
      },
    },
  ],
})

// 简化的TDK更新函数
const updatePageTDK = (title, description, keywords) => {
  // 直接同步更新，避免延迟导致的SEO问题
  document.title = title
  updateMetaTag('description', description)
  if (keywords) updateMetaTag('keywords', keywords)
  updateBasicSocialTags(title, description)
}

// 路由前置守卫，用于更新页面元数据和认证检查
router.beforeEach((to, _from, next) => {
  // 检查是否需要认证
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // 检查是否已登录
    const token = localStorage.getItem('adminToken')
    if (!token) {
      // 未登录，重定向到登录页面
      next({
        path: '/admin/login',
        query: { redirect: to.fullPath },
      })
      return
    }
  }

  // 更新页面 SEO 信息
  if (to.meta.seo) {
    // 使用路由中定义的 SEO 信息
    const seo = to.meta.seo

    // 处理详情页
    if (to.params.addressBar) {
      let item = null

      // 根据路由名称获取对应的数据项
      switch (to.name) {
        case 'game':
          item = findGameByAddressBar(to.params.addressBar)
          break
        case 'pngDetail':
          item = pngImages.find((i) => i.addressBar === to.params.addressBar)
          break
        case 'wallpaperDetail':
          item = wallpapers.find((i) => i.addressBar === to.params.addressBar)
          break
        case 'musicByAddressBar':
          item = findMusicByAddressBar(to.params.addressBar)
          break
      }

      // 如果找到了数据项，使用数据项中的SEO信息
      if (item && item.seo) {
        updatePageTDK(item.seo.title, item.seo.description, item.seo.keywords)
        updateCanonicalUrl(to.fullPath)
        next()
        return
      } else if (item) {
        updatePageTDK(
          item.pageTitle || 'Chill Guy Games',
          item.description || 'Play free online games at Chill Guy Games',
          'online games, free games, browser games, chill games'
        )
        updateCanonicalUrl(to.fullPath)
        next()
        return
      }
    }

    updatePageTDK(seo.title, seo.description, seo.keywords)
    updateCanonicalUrl(to.fullPath)
  } else if (to.meta.title) {
    // 兼容旧的 title 设置
    updatePageTDK(`${to.meta.title} - Chill Guy Games`, '欢迎访问Chill Guy Games', '')
  } else if (to.path === '/') {
    // 首页使用默认游戏的元数据
    const defaultGame = games.find((game) => game.id === 1) || games[0]
    if (defaultGame && defaultGame.seo) {
      updatePageTDK(defaultGame.seo.title, defaultGame.seo.description, defaultGame.seo.keywords)
      updateCanonicalUrl('/')
    } else {
      updatePageTDK(
        'Chill Guy Games',
        'Play free online games at Chill Guy Games',
        'online games, free games, browser games, chill games'
      )
      updateCanonicalUrl('/')
    }
  } else {
    updatePageTDK(
      'Chill Guy Games',
      'Play free online games at Chill Guy Games',
      'online games, free games, browser games, chill games'
    )
    updateCanonicalUrl(to.fullPath)
  }

  next()
})

export default router
