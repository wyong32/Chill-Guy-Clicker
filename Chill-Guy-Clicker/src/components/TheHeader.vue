<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <img
              src="@/assets/logo-chill-guy-game.svg"
              alt="Chill Guy Clicker"
              class="logo-image"
            />
          </router-link>
        </div>
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <router-link to="/" class="nav-link" :class="{ 'custom-active': isActive('home') }">Chill Guy Clicker</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Chill-Guy-Girl" class="nav-link" :class="{ 'custom-active': isActive('girl') }">Chill Guy Girl</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Chill-Guy-Music" class="nav-link" :class="{ 'custom-active': isActive('music') }">Chill Guy Music</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Chill-Guy-PNG" class="nav-link" :class="{ 'custom-active': isActive('png') }">Chill Guy PNG</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Chill-Guy-Wallpaper" class="nav-link" :class="{ 'custom-active': isActive('wallpaper') }">Chill Guy Wallpaper</router-link>
            </li>
          </ul>
        </nav>
        <div class="mobile-menu-toggle" @click="toggleMobileMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
    </div>
    <div class="mobile-menu" :class="{ active: mobileMenuActive }">
      <ul class="mobile-nav-list">
        <li class="mobile-nav-item">
          <router-link to="/" class="mobile-nav-link" :class="{ 'custom-active': isActive('home') }" @click="closeMobileMenu"
            >Chill Guy Clicker</router-link
          >
        </li>
        <li class="mobile-nav-item">
          <router-link to="/Chill-Guy-Girl" class="mobile-nav-link" :class="{ 'custom-active': isActive('girl') }" @click="closeMobileMenu"
            >Chill Guy Girl</router-link
          >
        </li>
        <li class="mobile-nav-item">
          <router-link to="/Chill-Guy-Music" class="mobile-nav-link" :class="{ 'custom-active': isActive('music') }" @click="closeMobileMenu"
            >Chill Guy Music</router-link
          >
        </li>
        <li class="mobile-nav-item">
          <router-link to="/Chill-Guy-PNG" class="mobile-nav-link" :class="{ 'custom-active': isActive('png') }" @click="closeMobileMenu"
            >Chill Guy PNG</router-link
          >
        </li>
        <li class="mobile-nav-item">
          <router-link to="/Chill-Guy-Wallpaper" class="mobile-nav-link" :class="{ 'custom-active': isActive('wallpaper') }" @click="closeMobileMenu"
            >Chill Guy Wallpaper</router-link
          >
        </li>
      </ul>
    </div>
  </header>
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
      document.body.style.overflow = this.mobileMenuActive ? 'hidden' : ''
    },
    closeMobileMenu() {
      this.mobileMenuActive = false
      document.body.style.overflow = ''
    },
    // 判断导航链接是否应该激活
    isActive(type) {
      return this.currentRouteType === type
    }
  },
}
</script>

<style scoped>
.header {
  background-color: rgba(17, 14, 25, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-image {
  height: 50px;
  margin-right: 10px;
  filter: drop-shadow(0 0 5px rgba(255, 204, 0, 0.5));
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
  color: var(--accent-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s;
}

.nav-link:hover::after,
.custom-active::after {
  width: 100%;
}

.custom-active {
  color: var(--primary-color);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.bar {
  height: 3px;
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  transition: all 0.3s;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: var(--secondary-color);
  z-index: 99;
  transform: translateX(-100%);
  transition: transform 0.3s;
}

.mobile-menu.active {
  transform: translateX(0);
}

.mobile-nav-list {
  list-style: none;
  padding: 20px;
  margin: 0;
}

.mobile-nav-item {
  margin-bottom: 20px;
}

.mobile-nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  display: block;
  padding: 10px 0;
  transition: color 0.3s;
}

.mobile-nav-link:hover {
  color: var(--accent-color);
}

.mobile-nav-link.custom-active {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }
}
</style>
