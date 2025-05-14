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
              <router-link to="/" class="nav-link">Chill Guy Clicker</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Chill Guy Girl</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Chill Guy Music</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Chill Guy PNG</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Chill Guy Wallpaper</router-link>
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
          <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">Home</router-link>
        </li>
        <li class="mobile-nav-item">
          <router-link to="/hot" class="mobile-nav-link" @click="closeMobileMenu"
            >Hot Games</router-link
          >
        </li>
        <li class="mobile-nav-item">
          <router-link to="/new" class="mobile-nav-link" @click="closeMobileMenu"
            >New Games</router-link
          >
        </li>
        <li class="mobile-nav-item">
          <router-link to="/categories" class="mobile-nav-link" @click="closeMobileMenu"
            >Categories</router-link
          >
        </li>
        <li class="mobile-nav-item">
          <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu"
            >About Us</router-link
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
  methods: {
    toggleMobileMenu() {
      this.mobileMenuActive = !this.mobileMenuActive
      document.body.style.overflow = this.mobileMenuActive ? 'hidden' : ''
    },
    closeMobileMenu() {
      this.mobileMenuActive = false
      document.body.style.overflow = ''
    },
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
.router-link-active::after {
  width: 100%;
}

.router-link-active {
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
