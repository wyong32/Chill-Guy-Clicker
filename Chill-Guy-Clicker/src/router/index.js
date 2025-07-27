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
const AdDiagnosticView = () => import('../views/AdDiagnosticView.vue')

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
const updateSocialTags = (title, description, image = DEFAULT_IMAGE, url, contentType = 'website') => {
  // 确保URL是完整的
  const fullUrl = url.startsWith('http') ? url : `${SITE_DOMAIN}${url.startsWith('/') ? url : `/${url}`}`

  // Open Graph标签 (Facebook, 微信等)
  updateMetaTag('property', 'og:title', title)
  updateMetaTag('property', 'og:description', description)
  updateMetaTag('property', 'og:image', image)
  updateMetaTag('property', 'og:url', fullUrl)
  updateMetaTag('property', 'og:type', contentType)
  updateMetaTag('property', 'og:site_name', SITE_NAME)

  // 音乐特定的Open Graph标签
  if (contentType === 'music.song') {
    // 尝试从URL中提取音乐信息
    const addressBar = url.split('/').pop()
    const musicItem = findMusicByAddressBar(addressBar)
    if (musicItem && musicItem.artist) {
      updateMetaTag('property', 'music:musician', musicItem.artist)
    }
  }

  // Twitter Card标签
  updateMetaTag('name', 'twitter:card', 'summary_large_image')
  updateMetaTag('name', 'twitter:title', title)
  updateMetaTag('name', 'twitter:description', description)
  updateMetaTag('name', 'twitter:image', image)
}

// 辅助函数：更新或创建meta标签
const updateMetaTag = (attrName, attrValue, content) => {
  let metaTag = document.querySelector(`meta[${attrName}="${attrValue}"]`)
  if (!metaTag) {
    metaTag = document.createElement('meta')
    metaTag.setAttribute(attrName, attrValue)
    document.head.appendChild(metaTag)
  }
  metaTag.setAttribute('content', content)
}

// 更新结构化数据的函数
const updateStructuredData = (gameData) => {
  // 移除现有的游戏结构化数据
  const existingScript = document.querySelector('script[type="application/ld+json"]')
  if (existingScript && existingScript.textContent.includes('"@type": "Game"')) {
    existingScript.remove()
  }

  // 创建新的结构化数据
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": gameData.pageTitle || gameData.title,
    "description": gameData.seo?.description || "Play this exciting chill guy game online for free",
    "genre": ["Idle Game", "Clicker Game", "Casual Game"],
    "gamePlatform": "Web Browser",
    "operatingSystem": ["Windows", "macOS", "Linux", "iOS", "Android"],
    "applicationCategory": "Game",
    "url": window.location.href,
    "image": gameData.imageUrl ? `https://chillguymemeclicker.com${gameData.imageUrl}` : "https://chillguymemeclicker.com/images/logo.png",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chill Guy Games",
      "url": "https://chillguymemeclicker.com"
    },
    "datePublished": gameData.publishDate || "2025-01-15",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "featureList": [
      "Free to play",
      "Browser-based gaming",
      "Mobile-friendly",
      "No download required"
    ]
  }

  // 如果是热门游戏，添加评分
  if (gameData.isHot) {
    structuredData.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "850",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // 创建并插入新的结构化数据脚本
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(structuredData, null, 2)
  document.head.appendChild(script)
}

// 根据 addressBar 查找游戏
const findGameByAddressBar = (addressBarParam) => {
  // 如果 addressBarParam 为空或未定义，尝试查找 ID 为 1 的游戏（首页游戏）
  if (!addressBarParam || addressBarParam === '') {
    return games.find(game => game.id === 1);
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
    (item) => item.addressBar && item.addressBar.toLowerCase() === lowerAddressBarParam
  )
}

// 更新页面元数据
const updateMetaTags = (item, path = null, contentType = 'website') => {
  if (!item) return

  // 如果item是SEO对象，直接使用
  const seo = item.seo || item

  // 更新页面标题
  const title = seo.title || item.pageTitle || 'Chill Guy Games'
  document.title = title

  // 更新描述
  const description = seo.description || ''
  updateMetaTag('name', 'description', description)

  // 更新关键词
  updateMetaTag('name', 'keywords', seo.keywords || '')

  // 获取路径和图片
  const urlPath = path || (item.addressBar ? `/${item.addressBar}` : '/')
  const image = item.imageUrl || item.thumbnail || DEFAULT_IMAGE

  // 更新规范URL
  updateCanonicalUrl(urlPath)

  // 更新社交媒体标签
  updateSocialTags(title, description, image, urlPath, contentType)
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
          title: 'Chill Girl Clicker - Relaxing Meme Idle Game - Play Now Free',
          description:
            'Play Chill Girl Clicker, a relaxing idle game inspired by the chill girl meme. Click to earn points, unlock chill upgrades, and vibe in style!',
          keywords:
            'chill girl clicker, chill girl meme, idle game, clicker game, relaxing game, aesthetic clicker',
        },
      }
    },
    {
      path: '/Chill-Guy-Music',
      name: 'music',
      component: MusicView,
      meta: {
        seo: {
          title: 'Chill Guy Music - Relaxing Music Collection',
          description: 'Discover the ultimate chill guy girl experience with cozy clicker gameplay, lo-fi vibes, and relaxing upgrades for your aesthetic idle world.',
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

        // 如果 addressBar 为空或未定义，并且游戏是 ID 为 1 的游戏（首页），则导航到 '/'
        if ((!addressBar || addressBar === '') && game && game.id === 1) {
          if (to.path !== '/') { // 避免无限重定向
            next('/');
            return;
          }
        } else if (!game) {
          // 如果找不到游戏，重定向到首页
          next('/');
          return;
        }

        // 设置游戏的SEO信息
        if (game.seo) {
          document.title = game.seo.title;

          // 更新描述
          let metaDescription = document.querySelector('meta[name="description"]');
          if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
          }
          metaDescription.setAttribute('content', game.seo.description);

          // 更新关键词
          let metaKeywords = document.querySelector('meta[name="keywords"]');
          if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
          }
          metaKeywords.setAttribute('content', game.seo.keywords);

          // 更新结构化数据
          updateStructuredData(game);
        }

        next();
      }
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
          title: "Chill Guy PNG Images – High Quality Chill Guy Pictures",
          description: "Download Chill Guy Clicker - Chill Guy PNG images with transparent backgrounds. Perfect for memes, graphic design, and creative projects featuring Chill Guy.",
          keywords: "chill guy png images, chill guy transparent, chill guy png, chill guy pictures, chill guy graphics"
        };

        // 如果 pngImages 数据中有 SEO 信息，使用它
        if (pngImages && pngImages.length > 0 && pngImages[0].seo) {
          // 使用第一个 PNG 图片的 SEO 信息
          seoInfo = pngImages[0].seo;
        }

        // 设置页面标题
        document.title = seoInfo.title;

        // 更新描述
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
          metaDescription = document.createElement('meta');
          metaDescription.setAttribute('name', 'description');
          document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', seoInfo.description);

        // 更新关键词
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
          metaKeywords = document.createElement('meta');
          metaKeywords.setAttribute('name', 'keywords');
          document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', seoInfo.keywords);

        // 更新规范URL
        updateCanonicalUrl('/Chill-Guy-PNG');

        // 更新社交媒体标签
        updateSocialTags(
          seoInfo.title,
          seoInfo.description,
          pngImages && pngImages.length > 0 ? pngImages[0].imageUrl || DEFAULT_IMAGE : DEFAULT_IMAGE,
          '/Chill-Guy-PNG',
          'website'
        );

        next();
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
          title: 'Chill Guy Wallpapers - Cozy Aesthetic for Phone & Desktop',
          description: 'Download stylish Chill Guy wallpapers with lo-fi and relaxed vibes. Perfect for your mobile or desktop background. Stay chill with every screen refresh.',
          keywords: 'chill guy wallpapers, lo-fi chill backgrounds, aesthetic chill guy, phone wallpaper, chill desktop'
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
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        seo: {
          title: 'About Us - Chill Guy Games',
          description: 'Learn about Chill Guy Games, our mission, values, and what we offer to our community of players. Discover our story and commitment to creating relaxing gaming experiences.',
          keywords: 'about chill guy games, game development, online games, browser games, chill games, relaxing games, casual games'
        }
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        seo: {
          title: 'Contact Us - Chill Guy Games',
          description: 'Get in touch with the Chill Guy Games team. We welcome your feedback, suggestions, and questions about our games and services.',
          keywords: 'contact chill guy games, support, feedback, game suggestions, help, customer service, game support'
        }
      }
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: CopyrightView,
      meta: {
        seo: {
          title: 'Copyright Notice - Chill Guy Games',
          description: 'Read our copyright notice to understand the intellectual property rights and usage terms for Chill Guy Games content.',
          keywords: 'copyright notice, intellectual property, usage rights, fair use, chill guy games copyright'
        }
      }
    },
    {
      path: '/ad-diagnostic',
      name: 'adDiagnostic',
      component: AdDiagnosticView,
      meta: {
        title: 'AdSense 诊断工具',
        seo: {
          title: 'AdSense Diagnostic Tool - Chill Guy Games',
          description: 'Diagnose and troubleshoot AdSense issues on Chill Guy Games.',
          keywords: 'adsense diagnostic, ad troubleshooting, google adsense help'
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

    // 获取图片和内容类型
    let image = DEFAULT_IMAGE
    let contentType = 'website'

    // 处理详情页
    if (to.params.addressBar) {
      let item = null;

      // 根据路由名称获取对应的数据项
      switch (to.name) {
        case 'game':
          item = findGameByAddressBar(to.params.addressBar);
          break;
        case 'pngDetail':
          item = pngImages.find(i => i.addressBar === to.params.addressBar);
          break;
        case 'wallpaperDetail':
          item = wallpapers.find(i => i.addressBar === to.params.addressBar);
          break;
        case 'musicByAddressBar':
          item = findMusicByAddressBar(to.params.addressBar);
          contentType = 'music.song';
          break;
      }

      // 如果找到了数据项，使用数据项中的SEO信息
      if (item && item.seo) {
        // 使用数据项中的SEO信息
        document.title = item.seo.title;

        // 更新描述
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
          metaDescription = document.createElement('meta');
          metaDescription.setAttribute('name', 'description');
          document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', item.seo.description);

        // 更新关键词
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
          metaKeywords = document.createElement('meta');
          metaKeywords.setAttribute('name', 'keywords');
          document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', item.seo.keywords);

        // 获取图片URL
        const imageUrl = item.detailImageUrl || item.imageUrl || item.thumbnailUrl;
        const image = imageUrl ? (imageUrl.startsWith('http') ? imageUrl : `${SITE_DOMAIN}/${imageUrl}`) : DEFAULT_IMAGE;

        // 更新规范URL
        updateCanonicalUrl(to.fullPath);

        // 更新社交媒体标签
        updateSocialTags(
          item.seo.title,
          item.seo.description,
          image,
          to.fullPath,
          contentType
        );

        next(); // 继续路由导航
        return;
      } else if (item) {
        // 如果数据项没有SEO信息，但有标题和描述
        document.title = item.pageTitle || 'Chill Guy Games';

        // 更新描述
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
          metaDescription = document.createElement('meta');
          metaDescription.setAttribute('name', 'description');
          document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', item.description || 'Play free online games at Chill Guy Games');

        // 更新关键词
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
          metaKeywords = document.createElement('meta');
          metaKeywords.setAttribute('name', 'keywords');
          document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', 'online games, free games, browser games, chill games');

        // 获取图片URL
        const imageUrl = item.detailImageUrl || item.imageUrl || item.thumbnailUrl;
        const image = imageUrl ? (imageUrl.startsWith('http') ? imageUrl : `${SITE_DOMAIN}/${imageUrl}`) : DEFAULT_IMAGE;

        // 更新规范URL
        updateCanonicalUrl(to.fullPath);

        // 更新社交媒体标签
        updateSocialTags(
          item.pageTitle || 'Chill Guy Games',
          item.description || 'Play free online games at Chill Guy Games',
          image,
          to.fullPath,
          contentType
        );

        next(); // 继续路由导航
        return;
      }
    }

    // 如果不是详情页或没有找到数据项，使用路由中定义的SEO信息
    document.title = seo.title;

    // 更新描述
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo.description);

    // 更新关键词
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seo.keywords || '');

    // 更新规范URL
    updateCanonicalUrl(to.fullPath);

    // 更新社交媒体标签
    updateSocialTags(
      seo.title,
      seo.description,
      image,
      to.fullPath,
      contentType
    );
  } else if (to.meta.title) {
    // 兼容旧的 title 设置
    const title = `${to.meta.title} - Chill Guy Games`
    const metaData = {
      title: title,
      description: '欢迎访问Chill Guy Games'
    }
    updateMetaTags(metaData, to.fullPath)
  } else if (to.path === '/') {
    // 首页使用默认游戏的元数据
    const defaultGame = games.find(game => game.id === 1) || games[0]
    if (defaultGame && defaultGame.seo) {
      // 使用默认游戏的SEO信息
      document.title = defaultGame.seo.title;

      // 更新描述
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', defaultGame.seo.description);

      // 更新关键词
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', defaultGame.seo.keywords);

      // 更新规范URL
      updateCanonicalUrl('/');

      // 更新社交媒体标签
      updateSocialTags(
        defaultGame.seo.title,
        defaultGame.seo.description,
        defaultGame.imageUrl || DEFAULT_IMAGE,
        '/',
        'website'
      );
    } else {
      // 如果默认游戏没有SEO信息，使用基本信息
      document.title = 'Chill Guy Games';

      // 更新描述
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', 'Play free online games at Chill Guy Games');

      // 更新关键词
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', 'online games, free games, browser games, chill games');

      // 更新规范URL
      updateCanonicalUrl('/');

      // 更新社交媒体标签
      updateSocialTags(
        'Chill Guy Games',
        'Play free online games at Chill Guy Games',
        DEFAULT_IMAGE,
        '/',
        'website'
      );
    }
  } else {
    // 其他页面也需要设置规范URL和基本的社交媒体标签
    document.title = 'Chill Guy Games';

    // 更新描述
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Play free online games at Chill Guy Games');

    // 更新关键词
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'online games, free games, browser games, chill games');

    // 更新规范URL
    updateCanonicalUrl(to.fullPath);

    // 更新社交媒体标签
    updateSocialTags(
      'Chill Guy Games',
      'Play free online games at Chill Guy Games',
      DEFAULT_IMAGE,
      to.fullPath,
      'website'
    );
  }

  next()
})

export default router
