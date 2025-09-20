<script setup>
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
// 导入 i18n 配置中导出的变量
import { supportedLangs, defaultLang } from '@/i18n'
// 导入安全的 router composable
import { useRouterSafe } from '@/composables/useRouterSafe'
// 导入安全的 RouterLink 组件
import SafeRouterLink from '@/components/SafeRouterLink.vue'

const { locale, t } = useI18n() // 获取当前的 locale ref and t function

// 使用安全的 router composable
const { router, route, isRouterAvailable, safePush, safeReplace, currentPath } = useRouterSafe()

// 控制移动端菜单的显示状态
const isMobileMenuOpen = ref(false)

// 切换移动端菜单的显示状态
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// 当前选择的语言，用于 v-model 绑定到 select
const currentLocale = locale // 直接使用 i18n 的 locale ref

// 计算属性，用于动态生成带语言参数的路由对象
const localizedRoute = (name) => {
  return computed(() => {
    try {
      const currentLang = locale.value
      if (currentLang === defaultLang) {
        // 默认语言，使用不带后缀的路由名
        return { name: name }
      } else {
        // 非默认语言，使用带 -lang 后缀的路由名，并传递 lang 参数
        return { name: `${name}-lang`, params: { lang: currentLang } }
      }
    } catch (error) {
      console.warn('Error generating localized route:', error)
      // 返回默认路由
      return { name: name }
    }
  })
}

// 为每个导航链接创建计算属性
const homeRoute = localizedRoute('home')
const guidesRoute = localizedRoute('guides')
const blogRoute = localizedRoute('blog')
const downloadRoute = localizedRoute('download')

// 定义语言选项，包括显示名称
const languageOptions = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'ru', name: 'Русский' },
  { code: 'fil', name: 'Filipino' },
  { code: 'ms', name: 'Bahasa Melayu' },
]

function changeLocale(event) {
  const newLang = event.target.value

  if (!supportedLangs.includes(newLang)) {
    return
  }

  const currentPathValue = currentPath.value
  let basePath = currentPathValue

  // Check if the path starts with any known language prefix (including default)
  for (const lang of supportedLangs) {
    const prefix = `/${lang}`
    if (currentPathValue.startsWith(prefix + '/')) {
      // e.g., /zh/some/path or /en/some/path
      basePath = currentPathValue.substring(prefix.length) // -> /some/path
      break // Found and removed prefix
    } else if (currentPathValue === prefix) {
      // e.g., exactly /zh or /en
      basePath = '/'
      break // Found and removed prefix
    }
  }

  let newPath = basePath
  // If the target language is not the default, add the prefix
  if (newLang !== defaultLang) {
    // Ensure basePath starts with '/', unless it IS '/'
    const pathSegment = basePath === '/' ? '' : basePath
    newPath = `/${newLang}${pathSegment}`
  }

  // Final check: if newPath is empty, make it root
  if (newPath === '') newPath = '/'

  localStorage.setItem('userLanguage', newLang)

  // Only push if the path actually changes to avoid redundant navigation
  if (currentPathValue !== newPath) {
    safePush(newPath)
  } else {
    // Even if path is same, locale might need update if v-model didn't trigger watcher
    // Though unlikely with current setup, we ensure locale sync here
    if (locale.value !== newLang) {
      locale.value = newLang
    }
  }
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo"><img src="/logo.webp" alt="Cookingdom Logo" />{{ t('header.logo') }}</div>

      <!-- 桌面端导航 -->
      <nav class="desktop-nav">
        <ul>
          <li>
            <SafeRouterLink :to="homeRoute" @click="closeMobileMenu">{{
              t('nav.home')
            }}</SafeRouterLink>
          </li>
          <li>
            <SafeRouterLink :to="guidesRoute" @click="closeMobileMenu">{{
              t('nav.guides')
            }}</SafeRouterLink>
          </li>
          <li>
            <SafeRouterLink :to="blogRoute" @click="closeMobileMenu">{{
              t('nav.blog')
            }}</SafeRouterLink>
          </li>
          <li>
            <SafeRouterLink :to="downloadRoute" @click="closeMobileMenu">{{
              t('nav.download')
            }}</SafeRouterLink>
          </li>
        </ul>
      </nav>

      <div class="header-right">
        <div class="mascot-placeholder-header">
          <!-- Placeholder for the small mascot -->
          <img
            src="https://placehold.co/50x50/ff85a2/ffffff?text=:)"
            alt="Cookingdom Mascot Character"
            style="width: 50px; opacity: 0.7"
          />

          <!-- 语言切换下拉框 -->
          <div class="language-switcher">
            <label for="language-select" class="sr-only">{{ t('nav.language') }}</label>
            <select
              id="language-select"
              v-model="currentLocale"
              @change="changeLocale"
              :aria-label="t('nav.language')"
            >
              <option v-for="lang in languageOptions" :key="lang.code" :value="lang.code">
                {{ lang.name }}
              </option>
            </select>
          </div>

          <!-- 汉堡菜单按钮 -->
          <button class="hamburger-menu" @click="toggleMobileMenu" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>

    <!-- 移动端导航抽屉 -->
    <div
      class="mobile-nav-overlay"
      :class="{ active: isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>
    <nav class="mobile-nav" :class="{ open: isMobileMenuOpen }">
      <div class="mobile-nav-header">
        <div class="logo"><img src="/logo.webp" alt="Cookingdom Logo" />{{ t('header.logo') }}</div>
        <button class="close-menu" @click="closeMobileMenu" aria-label="Close menu">×</button>
      </div>
      <ul>
        <li>
          <SafeRouterLink :to="homeRoute" @click="closeMobileMenu">{{
            t('nav.home')
          }}</SafeRouterLink>
        </li>
        <li>
          <SafeRouterLink :to="guidesRoute" @click="closeMobileMenu">{{
            t('nav.guides')
          }}</SafeRouterLink>
        </li>
        <li>
          <SafeRouterLink :to="blogRoute" @click="closeMobileMenu">{{
            t('nav.blog')
          }}</SafeRouterLink>
        </li>
        <li>
          <SafeRouterLink :to="downloadRoute" @click="closeMobileMenu">{{
            t('nav.download')
          }}</SafeRouterLink>
        </li>
      </ul>
      <!-- <div class="mobile-nav-footer">
        <div class="language-switcher">
          <select v-model="currentLocale" @change="changeLocale">
            <option v-for="lang in languageOptions" :key="lang.code" :value="lang.code">
              {{ lang.name }}
            </option>
          </select>
        </div>
      </div> -->
    </nav>
  </header>
</template>

<style scoped>
/* Base Header Styles */
.header {
  padding: 0.8rem 0; /* Slightly reduced padding */
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #fce4ec;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.header > .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  font-size: 1.4rem; /* Slightly smaller logo */
  font-weight: bold;
  color: #ff85a2;
  display: flex;
  align-items: center;
  line-height: 1.2;
  max-width: 400px;
}
.logo img {
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
}

.header-right {
  display: flex;
  align-items: center;
}

/* 桌面端导航样式 */
.desktop-nav ul {
  list-style: none;
  display: flex;
  gap: 1.8rem; /* Slightly reduced gap */
  margin: 0; /* Reset margin */
  padding: 0; /* Reset padding */
}

.desktop-nav a {
  text-decoration: none;
  color: #7c6f9f;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 0.95rem; /* Slightly smaller links */
}

.desktop-nav a:hover {
  color: #ff85a2;
}

.desktop-nav a.router-link-active {
  color: #ff85a2; /* Example active color */
  font-weight: bold;
}

/* 汉堡菜单按钮样式 */
.hamburger-menu {
  display: none; /* 默认隐藏 */
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin-right: 10px;
  z-index: 1001;
}

.hamburger-menu span {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: #7c6f9f;
  border-radius: 3px;
  transition: all 0.3s ease;
}

/* 移动端导航样式 */
.mobile-nav {
  position: fixed;
  top: 0;
  right: -280px; /* 初始位置在屏幕外 */
  width: 280px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1002;
  transition: right 0.3s ease;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.mobile-nav.open {
  right: 0; /* 显示导航 */
}

.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.mobile-nav-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #f0eaff;
}

.close-menu {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #7c6f9f;
  cursor: pointer;
}

.mobile-nav ul {
  list-style: none;
  padding: 1rem;
  margin: 0;
  flex-grow: 1;
}

.mobile-nav li {
  margin-bottom: 1rem;
}

.mobile-nav a {
  display: block;
  text-decoration: none;
  color: #7c6f9f;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.mobile-nav a:hover,
.mobile-nav a.router-link-active {
  color: #ff85a2;
}

.mobile-nav-footer {
  padding: 1rem;
  border-top: 1px solid #f0eaff;
}

.mascot-placeholder-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mascot-placeholder-header img {
  width: 45px; /* Slightly smaller mascot */
  height: 45px;
  opacity: 0.7;
  animation: bounce-small 2s infinite ease-in-out;
}

.language-switcher {
  margin-left: 1rem; /* 在导航和 mascot 之间添加一些间距 */
}

.language-switcher select {
  padding: 0.3rem 0.5rem;
  border: 1px solid #fce4ec;
  border-radius: 4px;
  background-color: #fff;
  color: #7c6f9f;
  font-size: 0.9rem;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.language-switcher select:hover {
  border-color: #ff85a2;
}

/* 屏幕阅读器专用样式 */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* --- Media Queries --- */

/* Tablet Styles (<= 1024px) */
@media (max-width: 1024px) {
  .header > .container {
    max-width: 90%;
    padding: 0 1.5rem; /* More padding */
  }
  .desktop-nav ul {
    gap: 1rem;
  }
  .desktop-nav a {
    font-size: 0.9rem;
  }
  .logo {
    font-size: 1.3rem;
    max-width: 250px;
  }
}

/* Mobile Styles (<= 767px) */
@media (max-width: 767px) {
  .header {
    padding: 0.6rem 0;
  }

  .header > .container {
    padding: 0 0.8rem;
    margin: 0;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 0.85rem;
    line-height: 1.1;
    max-width: 160px;
    flex-shrink: 1;
  }

  .logo img {
    width: 24px;
    height: 24px;
    margin-right: 0.3rem;
  }

  /* 隐藏桌面导航 */
  .desktop-nav {
    display: none;
  }

  /* 显示汉堡菜单按钮 */
  .hamburger-menu {
    display: block;
  }

  .mascot-placeholder-header img {
    display: none; /* 隐藏吉祥物 */
  }

  .mascot-placeholder-header {
    flex-wrap: nowrap;
    justify-content: flex-end;
    gap: 0.3rem;
    align-items: center;
  }

  .language-switcher {
    margin-left: 0;
  }

  .language-switcher select {
    padding: 0.2rem 0.3rem;
    font-size: 0.8rem;
    width: 80px;
  }

  .hamburger-menu {
    padding: 8px;
    margin-right: 0;
  }

  .hamburger-menu span {
    width: 20px;
    height: 2px;
    margin: 4px 0;
  }

  /* 移动端导航样式调整 */
  .mobile-nav {
    width: 250px; /* 稍微窄一点 */
  }

  .mobile-nav-header .logo {
    font-size: 0.9rem;
    line-height: 1.1;
    max-width: 160px;
    word-wrap: break-word;
    hyphens: auto;
  }

  .mobile-nav a {
    font-size: 1rem;
  }
}

@keyframes bounce-small {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  } /* Smaller bounce */
  60% {
    transform: translateY(-3px);
  }
}
</style>