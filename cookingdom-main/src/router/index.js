import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
// 只有首页同步加载，其他页面都懒加载
import HomeView from '../views/HomeView.vue'

// 懒加载所有其他视图组件 - 简化错误处理
const GuideDetail = () =>
  import('../views/GuideDetail.vue').catch((err) => {
    console.error('Failed to load GuideDetail:', err)
    return import('../views/HomeView.vue')
  })
const GuideView = () =>
  import('../views/GuideView.vue').catch((err) => {
    console.error('Failed to load GuideView:', err)
    return import('../views/HomeView.vue')
  })
const BlogView = () =>
  import('../views/BlogView.vue').catch((err) => {
    console.error('Failed to load BlogView:', err)
    return import('../views/HomeView.vue')
  })
const BlogDetailView = () =>
  import('../views/BlogDetailView.vue').catch((err) => {
    console.error('Failed to load BlogDetailView:', err)
    return import('../views/HomeView.vue')
  })
const DownloadView = () =>
  import('../views/DownloadView.vue').catch((err) => {
    console.error('Failed to load DownloadView:', err)
    return import('../views/HomeView.vue')
  })
const PrivacyPolicyView = () =>
  import('../views/PrivacyPolicyView.vue').catch((err) => {
    console.error('Failed to load PrivacyPolicyView:', err)
    return import('../views/HomeView.vue')
  })
const TermsOfServiceView = () =>
  import('../views/TermsOfServiceView.vue').catch((err) => {
    console.error('Failed to load TermsOfServiceView:', err)
    return import('../views/HomeView.vue')
  })
const ModDownloadView = () =>
  import('../views/ModDownloadView.vue').catch((err) => {
    console.error('Failed to load ModDownloadView:', err)
    return import('../views/HomeView.vue')
  })
const AboutView = () =>
  import('../views/AboutView.vue').catch((err) => {
    console.error('Failed to load AboutView:', err)
    return import('../views/HomeView.vue')
  })
const ContactView = () =>
  import('../views/ContactView.vue').catch((err) => {
    console.error('Failed to load ContactView:', err)
    return import('../views/HomeView.vue')
  })
const CopyrightView = () =>
  import('../views/CopyrightView.vue').catch((err) => {
    console.error('Failed to load CopyrightView:', err)
    return import('../views/HomeView.vue')
  })
import { i18n, supportedLangs, defaultLang } from '@/i18n'
import { updateMetaTag, updateCanonicalTag } from '@/utils/head'

// Helper function to get translated meta tags
// Note: This is a simple example. You might need a more robust solution
// if i18n instance is not ready or if translations are complex.
const getMeta = (titleKey, descriptionKey, keywordsKey = 'meta.defaultKeywords') => {
  return {
    title: () => i18n.global.t(titleKey),
    description: () => i18n.global.t(descriptionKey),
    keywords: () => i18n.global.t(keywordsKey),
  }
}

const nonDefaultLangs = supportedLangs.filter((lang) => lang !== defaultLang)
const langParamRegex = nonDefaultLangs.join('|')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // TDK for Home page. Keys defined in i18n files:
      // Title: meta.home.title
      // Description: meta.home.description
      // Keywords: meta.home.keywords
      meta: getMeta('meta.home.title', 'meta.home.description', 'meta.home.keywords'),
    },
    {
      path: '/guides',
      name: 'guides',
      component: GuideView,
      // TDK for Guides list page. Keys defined in i18n files:
      // Title: meta.guides.title
      // Description: meta.guides.description
      // Keywords: meta.guides.keywords
      meta: getMeta('meta.guides.title', 'meta.guides.description', 'meta.guides.keywords'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      // TDK for Blog list page. Keys defined in i18n files:
      // Title: meta.blog.title
      // Description: meta.blog.description
      // Keywords: meta.blog.keywords
      meta: getMeta('meta.blog.title', 'meta.blog.description', 'meta.blog.keywords'),
    },
    {
      path: '/blog/:id',
      name: 'blog-detail',
      component: BlogDetailView,
      props: true,
      // TDK for Blog Detail pages.
      // Uses placeholder keys from i18n (meta.blogDetail.title, meta.blogDetail.description).
      // IMPORTANT: These are dynamically overridden by the component using data from blog-posts-xx.js -> seo object.
      // Keywords fallback to meta.defaultKeywords if not specified in data.
      meta: getMeta('meta.blogDetail.title', 'meta.blogDetail.description'),
    },
    {
      path: '/download',
      name: 'download',
      component: DownloadView,
      // TDK for Download page. Keys defined in i18n files:
      // Title: meta.download.title
      // Description: meta.download.description
      // Keywords: meta.download.keywords
      meta: getMeta('meta.download.title', 'meta.download.description', 'meta.download.keywords'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
      // TDK for Privacy Policy page. Keys defined in i18n files:
      // Title: meta.privacy.title
      // Description: meta.privacy.description
      // Keywords: meta.privacy.keywords
      meta: getMeta('meta.privacy.title', 'meta.privacy.description', 'meta.privacy.keywords'),
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsOfServiceView,
      // TDK for Terms of Service page. Keys defined in i18n files:
      // Title: meta.terms.title
      // Description: meta.terms.description
      // Keywords: meta.terms.keywords
      meta: getMeta('meta.terms.title', 'meta.terms.description', 'meta.terms.keywords'),
    },
    {
      path: '/mod-download',
      name: 'mod-download',
      component: ModDownloadView,
      // TDK for Mod Download page. Keys to be defined in i18n files:
      // Title: meta.modDownload.title
      // Description: meta.modDownload.description
      // Keywords: meta.modDownload.keywords
      meta: getMeta(
        'meta.modDownload.title',
        'meta.modDownload.description',
        'meta.modDownload.keywords',
      ),
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      // TDK for About page. Keys defined in i18n files:
      // Title: meta.about.title
      // Description: meta.about.description
      // Keywords: meta.about.keywords
      meta: getMeta('meta.about.title', 'meta.about.description', 'meta.about.keywords'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      // TDK for Contact page. Keys defined in i18n files:
      // Title: meta.contact.title
      // Description: meta.contact.description
      // Keywords: meta.contact.keywords
      meta: getMeta('meta.contact.title', 'meta.contact.description', 'meta.contact.keywords'),
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: CopyrightView,
    },
    {
      path: '/:id',
      beforeEnter: (_, __, next) => {
        // 允许任何ID格式，只要它存在于guides数据中
        // 这里我们简单地允许所有ID通过，实际验证将在组件中进行
        next()
      },
      name: 'guide-detail',
      component: GuideDetail,
      props: true,
      // TDK for Guide Detail pages.
      // Uses placeholder keys from i18n (meta.guideDetail.title, meta.guideDetail.description).
      // IMPORTANT: These are dynamically overridden by the component using data from guides-xx.js -> seo object.
      // Keywords fallback to meta.defaultKeywords if not specified in data.
      meta: getMeta('meta.guideDetail.title', 'meta.guideDetail.description'),
    },
    {
      path: `/:lang(${langParamRegex})/`,
      name: 'home-lang',
      component: HomeView,
      props: true,
      // TDK Keys: meta.home.title, meta.home.description, meta.home.keywords
      meta: getMeta('meta.home.title', 'meta.home.description', 'meta.home.keywords'),
    },
    {
      path: `/:lang(${langParamRegex})/guides`,
      name: 'guides-lang',
      component: GuideView,
      props: true,
      // TDK Keys: meta.guides.title, meta.guides.description, meta.guides.keywords
      meta: getMeta('meta.guides.title', 'meta.guides.description', 'meta.guides.keywords'),
    },
    {
      path: `/:lang(${langParamRegex})/blog`,
      name: 'blog-lang',
      component: BlogView,
      props: true,
      // TDK Keys: meta.blog.title, meta.blog.description, meta.blog.keywords
      meta: getMeta('meta.blog.title', 'meta.blog.description', 'meta.blog.keywords'),
    },
    {
      path: `/:lang(${langParamRegex})/blog/:id`,
      name: 'blog-detail-lang',
      component: BlogDetailView,
      props: true,
      // TDK Keys: meta.blogDetail.title, meta.blogDetail.description (Placeholder, overridden by component)
      // Keywords fallback to meta.defaultKeywords if not specified in data.
      meta: getMeta('meta.blogDetail.title', 'meta.blogDetail.description'),
    },
    {
      path: `/:lang(${langParamRegex})/download`,
      name: 'download-lang',
      component: DownloadView,
      props: true,
      // TDK Keys: meta.download.title, meta.download.description, meta.download.keywords
      meta: getMeta('meta.download.title', 'meta.download.description', 'meta.download.keywords'),
    },
    {
      path: `/:lang(${langParamRegex})/privacy-policy`,
      name: 'privacy-policy-lang',
      component: PrivacyPolicyView,
      props: true,
      // TDK Keys: meta.privacy.title, meta.privacy.description, meta.privacy.keywords
      meta: getMeta('meta.privacy.title', 'meta.privacy.description', 'meta.privacy.keywords'),
    },
    {
      path: `/:lang(${langParamRegex})/terms-of-service`,
      name: 'terms-of-service-lang',
      component: TermsOfServiceView,
      props: true,
      // TDK Keys: meta.terms.title, meta.terms.description, meta.terms.keywords
      meta: getMeta('meta.terms.title', 'meta.terms.description', 'meta.terms.keywords'),
    },
    {
      path: `/:lang(${langParamRegex})/mod-download`,
      name: 'mod-download-lang',
      component: ModDownloadView,
      props: true,
      // TDK Keys: meta.modDownload.title, meta.modDownload.description, meta.modDownload.keywords
      meta: getMeta(
        'meta.modDownload.title',
        'meta.modDownload.description',
        'meta.modDownload.keywords',
      ),
    },
    {
      path: `/:lang(${langParamRegex})/about`,
      name: 'about-lang',
      component: AboutView,
      props: true,
      // TDK Keys: meta.about.title, meta.about.description, meta.about.keywords
      meta: getMeta('meta.about.title', 'meta.about.description', 'meta.about.keywords'),
    },
    {
      path: `/:lang(${langParamRegex})/contact`,
      name: 'contact-lang',
      component: ContactView,
      props: true,
      // TDK Keys: meta.contact.title, meta.contact.description, meta.contact.keywords
      meta: getMeta('meta.contact.title', 'meta.contact.description', 'meta.contact.keywords'),
    },
    {
      path: `/:lang(${langParamRegex})/copyright`,
      name: 'copyright-lang',
      component: CopyrightView,
      props: true,
    },
    {
      path: '/:lang/:id',
      beforeEnter: (to, _, next) => {
        const langIsValid = nonDefaultLangs.includes(to.params.lang)

        // 只验证语言参数，不验证ID格式
        if (langIsValid) {
          next()
        } else {
          next({
            name: 'home',
            params: {},
          })
        }
      },
      name: 'guide-detail-lang',
      component: GuideDetail,
      props: true,
      meta: getMeta('meta.guideDetail.title', 'meta.guideDetail.description'),
    },
  ],
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, _, next) => {
  const paramsLang = to.params.lang
  const pathFirstPart = to.path.split('/')[1]
  const storedLang = localStorage.getItem('userLanguage')
  let targetLang = defaultLang

  // 1. Check URL parameter
  if (paramsLang && supportedLangs.includes(paramsLang)) {
    targetLang = paramsLang
  }
  // 2. Check first path segment
  else if (supportedLangs.includes(pathFirstPart) && pathFirstPart !== defaultLang) {
    targetLang = pathFirstPart
  }
  // 3. Check localStorage
  else if (storedLang && supportedLangs.includes(storedLang)) {
    targetLang = storedLang
  }
  // 4. Fallback
  // targetLang remains defaultLang

  // Update i18n locale if needed
  if (i18n.global.locale.value !== targetLang) {
    i18n.global.locale.value = targetLang
    localStorage.setItem('userLanguage', targetLang)
  }

  // --- URL Prefix Handling ---
  const requiresPrefix = targetLang !== defaultLang
  const pathStartsWithCorrectLang = pathFirstPart === targetLang
  const pathHasAnyLangPrefix = supportedLangs.includes(pathFirstPart)

  // Scenario 1: Add prefix redirect
  if (requiresPrefix && !pathStartsWithCorrectLang) {
    let newPath = ''
    if (pathHasAnyLangPrefix) {
      newPath = to.path.substring(('/' + pathFirstPart).length) || '/'
    } else {
      newPath = to.path
    }
    newPath = '/' + targetLang + newPath
    const query = to.query ? '?' + new URLSearchParams(to.query).toString() : ''
    const hash = to.hash || ''
    const fullRedirectPath = newPath + query + hash
    return next(fullRedirectPath) // RETURN here prevents further execution
  }

  // Scenario 2: Remove prefix redirect
  if (!requiresPrefix && pathHasAnyLangPrefix) {
    const toPathWithoutLang = to.path.substring(('/' + pathFirstPart).length) || '/'
    const query = to.query ? '?' + new URLSearchParams(to.query).toString() : ''
    const hash = to.hash || ''
    const fullRedirectPath = toPathWithoutLang + query + hash
    if (to.fullPath !== fullRedirectPath) {
      return next(fullRedirectPath) // RETURN here prevents further execution
    }
  }

  // --- Calculate Canonical URL ---
  const calculateCanonicalUrl = () => {
    const siteBase = (window.location.origin + (import.meta.env.BASE_URL || '/')).replace(/\/$/, '') // Retain siteBase
    let canonicalPath = to.path

    // Ensure the path is not null or undefined and handle empty string case
    if (canonicalPath === null || typeof canonicalPath === 'undefined' || canonicalPath === '') {
      canonicalPath = '/'
    }
    // Ensure the path starts with a single slash
    else if (canonicalPath.startsWith('//')) {
      canonicalPath = canonicalPath.substring(1) // Remove one leading slash if two are present
    } else if (!canonicalPath.startsWith('/')) {
      canonicalPath = '/' + canonicalPath // Add leading slash if missing
    }

    return siteBase + canonicalPath
  }

  // --- Update Meta Tags, Canonical URL, and Default Social Tags ---
  const routeWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  nextTick(() => {
    // --- 1. Calculate core Meta content ---
    const meta = routeWithMeta ? routeWithMeta.meta : {}
    const pageTitle = meta.title ? meta.title() : 'Cookingdom'
    const pageDescription = meta.description
      ? meta.description()
      : i18n.global.t('meta.defaultDescription')
    const pageKeywords = meta.keywords ? meta.keywords() : i18n.global.t('meta.defaultKeywords')

    // --- 2. Calculate Canonical URL ---
    const finalCanonicalUrl = calculateCanonicalUrl()

    // --- 3. Determine social tag type and default image ---
    const isDetailPage = to.name?.includes('detail')
    const ogType = isDetailPage ? 'article' : 'website'
    const twitterCard = isDetailPage ? 'summary_large_image' : 'summary_large_image' // 统一使用大图

    // 根据页面类型选择最佳社交分享图片
    let socialImageUrl
    if (to.name === 'home' || to.name === 'home-lang') {
      // 首页使用banner图片
      socialImageUrl = `${window.location.origin}${import.meta.env.BASE_URL || '/'}images/banner1.webp`
    } else if (to.name === 'guides' || to.name === 'guides-lang') {
      // 指南页面使用指南相关图片
      socialImageUrl = `${window.location.origin}${import.meta.env.BASE_URL || '/'}images/guides_01.webp`
    } else if (to.name === 'blog' || to.name === 'blog-lang') {
      // 博客页面使用博客图片
      socialImageUrl = `${window.location.origin}${import.meta.env.BASE_URL || '/'}images/blog_01.webp`
    } else {
      // 其他页面使用logo
      socialImageUrl = `${window.location.origin}${import.meta.env.BASE_URL || '/'}images/logo.webp`
    }

    // --- 4. Update all Head tags using imported helpers ---
    document.title = pageTitle
    updateCanonicalTag(finalCanonicalUrl) // Use imported helper
    updateMetaTag('description', pageDescription) // Use imported helper
    updateMetaTag('keywords', pageKeywords)

    // Update Open Graph (OG) tags
    updateMetaTag('og:title', pageTitle)
    updateMetaTag('og:description', pageDescription)
    updateMetaTag('og:url', finalCanonicalUrl)
    updateMetaTag('og:type', ogType)
    updateMetaTag('og:image', socialImageUrl) // 页面特定图片
    updateMetaTag('og:image:width', '1200')
    updateMetaTag('og:image:height', '630')
    updateMetaTag('og:site_name', 'Cookingdom Fansite')

    // Update Twitter Card tags
    updateMetaTag('twitter:card', twitterCard)
    updateMetaTag('twitter:title', pageTitle)
    updateMetaTag('twitter:description', pageDescription)
    updateMetaTag('twitter:image', socialImageUrl) // 页面特定图片
  })

  // Proceed with navigation if no redirect occurred
  next()
})

export default router
