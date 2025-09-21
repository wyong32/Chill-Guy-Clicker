<template>
  <div class="header-wrapper">
    <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <a href="/">
            <div class="logo-image-container">
              <img
                src="/images/logo.webp"
                alt="Chill Guy Clicker"
                class="logo-image"
                width="50"
                height="50"
                loading="eager"
                fetchpriority="high"
                decoding="sync"
              />
            </div>
            <span>Chill Guy Clicker</span>
          </a>
        </div>
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="/" class="nav-link" :class="{ 'custom-active': isActive('home') }">Chill Guy Clicker</a>
            </li>
            <li class="nav-item">
              <a href="/Chill-Guy-Girl" class="nav-link" :class="{ 'custom-active': isActive('girl') }">Chill Guy Girl</a>
            </li>
            <li class="nav-item">
              <a href="/Chill-Guy-Music" class="nav-link" :class="{ 'custom-active': isActive('music') }">Chill Guy Music</a>
            </li>
            <li class="nav-item">
              <a href="/Chill-Guy-PNG" class="nav-link" :class="{ 'custom-active': isActive('png') }">Chill Guy PNG</a>
            </li>
            <li class="nav-item">
              <a href="/Chill-Guy-Wallpaper" class="nav-link" :class="{ 'custom-active': isActive('wallpaper') }">Chill Guy Wallpaper</a>
            </li>
          </ul>
        </nav>
        <button
          class="mobile-menu-toggle"
          @click="toggleMobileMenu"
          :aria-label="mobileMenuActive ? '关闭菜单' : '打开菜单'"
          :aria-expanded="mobileMenuActive"
          type="button"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>


      </div>
    </div>

  </header>

  <!-- Simple Mobile Menu -->
  <Teleport to="body">
    <!-- Backdrop -->
    <div
      v-if="mobileMenuActive"
      class="mobile-backdrop"
      @click="closeMobileMenu"
    ></div>

    <!-- Menu Panel -->
    <nav
      class="mobile-menu"
      :class="{ 'mobile-menu-open': mobileMenuActive }"
    >
      <!-- Close Button -->
      <button
        class="mobile-menu-close"
        @click.stop="closeMobileMenu"
        aria-label="Close menu"
        type="button"
      >
        ×
      </button>

      <ul class="mobile-nav-list">
        <li class="mobile-nav-item">
          <a href="/"
            class="mobile-nav-link"
            :class="{ 'active': isActive('home') }"
            @click="closeMobileMenu"
          >
            Chill Guy Clicker
          </a>
        </li>
        <li class="mobile-nav-item">
          <a href="/Chill-Guy-Girl"
            class="mobile-nav-link"
            :class="{ 'active': isActive('girl') }"
            @click="closeMobileMenu"
          >
            Chill Guy Girl
          </a>
        </li>
        <li class="mobile-nav-item">
          <a href="/Chill-Guy-Music"
            class="mobile-nav-link"
            :class="{ 'active': isActive('music') }"
            @click="closeMobileMenu"
          >
            Chill Guy Music
          </a>
        </li>
        <li class="mobile-nav-item">
          <a href="/Chill-Guy-PNG"
            class="mobile-nav-link"
            :class="{ 'active': isActive('png') }"
            @click="closeMobileMenu"
          >
            Chill Guy PNG
          </a>
        </li>
        <li class="mobile-nav-item">
          <a href="/Chill-Guy-Wallpaper"
            class="mobile-nav-link"
            :class="{ 'active': isActive('wallpaper') }"
            @click="closeMobileMenu"
          >
            Chill Guy Wallpaper
          </a>
        </li>
      </ul>
    </nav>
  </Teleport>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      mobileMenuActive: false,
    }
  },
  computed: {
    // 计算当前路由的类型，用于确定导航栏的激活状态
    currentRouteType() {
      const path = this.$route.path

      // 检查路径是否匹配特定的模式
      if (path === '/' || path.match(/^\/[^/]+$/) && !path.startsWith('/Chill-Guy-')) {
        return 'home' // 首页或游戏详情页
      } else if (path.startsWith('/Chill-Guy-Girl')) {
        return 'girl'
      } else if (path.startsWith('/Chill-Guy-Music')) {
        return 'music'
      } else if (path.startsWith('/Chill-Guy-PNG')) {
        return 'png'
      } else if (path.startsWith('/Chill-Guy-Wallpaper')) {
        return 'wallpaper'
      }

      return 'home' // 默认返回首页
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuActive = !this.mobileMenuActive
      // Prevent body scroll when menu is open
      document.body.style.overflow = this.mobileMenuActive ? 'hidden' : ''
    },
    closeMobileMenu() {
      this.mobileMenuActive = false
      document.body.style.overflow = ''
    },
    // Check if navigation link should be active
    isActive(type) {
      return this.currentRouteType === type
    }
  },
}
</script>

<style scoped>
.header-wrapper {
  /* 确保包装器不影响布局 */
  display: block;
}

.header {
  background-color: rgba(17, 14, 25, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 70px;
  width: 100%;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  width: 100%;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  box-sizing: border-box;
}

.logo {
  display: flex;
  align-items: center;
  color: #fff;
  min-width: 200px;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-image-container {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  backface-visibility: hidden;
  perspective: 1000px;
  flex-shrink: 0;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 0 5px rgba(255, 204, 0, 0.5));
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.logo span{
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  /* 防止文字渲染导致的布局偏移 */
  /* contain: layout style; */
  white-space: nowrap; /* 防止文字换行 */
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-left: 30px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s;
  position: relative;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.nav-link:hover {
  color: #f39c12;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #41b883;
  transition: width 0.3s;
}

.nav-link:hover::after,
.custom-active::after {
  width: 100%;
}

.custom-active {
  color: #41b883;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  min-width: 30px;
  min-height: 20px;
  width: 30px;
  height: 20px;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 102;
  background: transparent;
  border: none;
  outline: none;
}

.bar {
  height: 3px;
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  transition: all 0.3s;
  pointer-events: none;
}

.mobile-menu-toggle:hover .bar,
.mobile-menu-toggle:focus .bar {
  background-color: #f39c12;
}

.mobile-menu-toggle:focus {
  outline: 2px solid #41b883;
  outline-offset: 2px;
}



/* Simple Mobile Menu - Performance Optimized */
.mobile-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  background-color: #2c3e50;
  z-index: 1000;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  /* will-change: transform; */
}

.mobile-menu-open {
  transform: translateX(0);
}

.mobile-menu-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  line-height: 1;
  transition: color 0.2s ease;
  z-index: 1001;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu-close:hover {
  color: #3498db;
}

.mobile-nav-list {
  list-style: none;
  padding: 80px 0 0 0;
  margin: 0;
}

.mobile-nav-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav-link {
  display: block;
  padding: 20px 30px;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.mobile-nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.mobile-nav-link.active {
  background-color: #3498db;
  color: #fff;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }
}
</style>
