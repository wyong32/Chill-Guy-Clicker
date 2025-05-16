<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section about">
          <h3 class="footer-title">About Us</h3>
          <p class="footer-text">
            Chill Guy Games is a platform offering various fun casual games. We are dedicated to
            providing the best gaming experience for players.
          </p>
          <div class="social-links">
            <a href="#" class="social-link">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                />
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="currentColor"
                  d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                />
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="footer-section links">
          <h3 class="footer-title">Quick Links</h3>
          <ul class="footer-links">
            <li><router-link to="/" class="footer-link">Chill Guy Clicker</router-link></li>
            <li><router-link to="/Chill-Guy-Girl" class="footer-link">Chill Guy Girl</router-link></li>
            <li><router-link to="/Chill-Guy-Music" class="footer-link">Chill Guy Music</router-link></li>
            <li><router-link to="/Chill-Guy-PNG" class="footer-link">Chill Guy PNG</router-link></li>
            <li><router-link to="/Chill-Guy-Wallpaper" class="footer-link">Chill Guy Wallpaper</router-link></li>
          </ul>
        </div>
        <div class="footer-section categories">
          <h3 class="footer-title">Game Categories</h3>
          <ul class="footer-links">
            <li>
              <router-link to="/" class="footer-link">Chill Guy Clicker</router-link>
            </li>
            <li>
              <router-link to="/Chill-Girl-Clicker" class="footer-link">Chill Girl Clicker</router-link>
            </li>
            <li>
              <router-link to="/Chill-Guy-Clicker-3D" class="footer-link">Chill Guy Clicker 3D</router-link>
            </li>
            <li>
              <router-link to="/Chill-Guy-Unification" class="footer-link">Chill Guy: Unification</router-link>
            </li>
            <li>
              <router-link to="/Chill-Guy-Evolution" class="footer-link">Chill Guy Evolution</router-link>
            </li>
          </ul>
        </div>
        <div class="footer-section legal">
          <h3 class="footer-title">Legal</h3>
          <ul class="footer-links">
            <li><router-link to="/privacy-policy" class="footer-link">Privacy Policy</router-link></li>
            <li><router-link to="/terms-of-use" class="footer-link">Terms of Use</router-link></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">© 2023 Chill Guy Games. All rights reserved.</p>
          <p class="disclaimer">
            Disclaimer: This website is for entertainment purposes only. All games, images, and content are either owned by Chill Guy Games or used with permission. We are not responsible for any external content linked from this site.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
.footer {
  background-color: rgba(17, 14, 25, 0.8);
  padding: 60px 0 20px;
  margin-top: 0;
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
  backdrop-filter: blur(10px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.footer-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--accent-color);
  position: relative;
  padding-bottom: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-text {
  color: #fff;
  line-height: 1.6;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: var(--primary-color);
  border-radius: 50%;
  color: white;
  transition:
    background-color 0.3s,
    transform 0.3s;
  box-shadow: 0 0 10px rgba(255, 204, 0, 0.3);
}

.social-link:hover {
  background-color: var(--accent-color);
  transform: scale(1.1);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: var(--accent-color);
}



.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: 20px;
}

.footer-bottom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
}

.copyright {
  color: #ccc;
  font-size: 14px;
  margin: 0;
}

.disclaimer {
  color: #aaa;
  font-size: 12px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0;
}

@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .disclaimer {
    font-size: 11px;
  }
}
</style>
