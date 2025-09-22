<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">Chill Guy Clicker</h3>
          <p class="footer-text">
            Chill Guy Games is a platform offering various fun casual games. We are dedicated to
            providing the best gaming experience for players.
          </p>
        </div>
        <div class="footer-section links">
          <h3 class="footer-title">Quick Links</h3>
          <ul class="footer-links">
            <li><a href="/" class="footer-link">Chill Guy Clicker</a></li>
            <li><a href="/Chill-Guy-Girl" class="footer-link">Chill Guy Girl</a></li>
            <li><a href="/Chill-Guy-Music" class="footer-link">Chill Guy Music</a></li>
            <li><a href="/Chill-Guy-PNG" class="footer-link">Chill Guy PNG</a></li>
            <li><a href="/Chill-Guy-Wallpaper" class="footer-link">Chill Guy Wallpaper</a></li>
          </ul>
        </div>
        <div class="footer-section categories">
          <h3 class="footer-title">Game Categories</h3>
          <ul class="footer-links">
            <li>
              <a href="/" class="footer-link">Chill Guy Clicker</a>
            </li>
            <li>
              <a href="/Chill-Girl-Clicker" class="footer-link">Chill Girl Clicker</a>
            </li>
            <li>
              <a href="/Chill-Guy-Clicker-3D" class="footer-link">Chill Guy Clicker 3D</a>
            </li>
            <li>
              <a href="/Chill-Guy-Unification" class="footer-link">Chill Guy: Unification</a>
            </li>
            <li>
              <a href="/Chill-Guy-Evolution" class="footer-link">Chill Guy Evolution</a>
            </li>
          </ul>
        </div>
        <div class="footer-section legal">
          <h3 class="footer-title">Legal</h3>
          <ul class="footer-links">
            <li><a href="/privacy-policy" class="footer-link">Privacy Policy</a></li>
            <li><a href="/terms-of-use" class="footer-link">Terms of Use</a></li>
            <li><a href="/copyright" class="footer-link">Copyright</a></li>
            <li><a href="/about" class="footer-link">About Us</a></li>
            <li><a href="/contact" class="footer-link">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">© 2025 chillguymemeclicker.com. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  mounted() {}
}
</script>

<style scoped>
.footer {
  background-color: #1a1a2e;
  color: #ffffff;
  padding: 60px 0 30px;
  width: 100%;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section:first-child {
  flex: 2;
  min-width: 300px;
}

.footer-section:not(:first-child) {
  flex: 1;
  min-width: 200px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  color: #f39c12;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  line-height: 1.2;
}

.footer-text {
  color: #cccccc;
  line-height: 1.6;
  font-size: 14px;
  margin: 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-link {
  color: #cccccc;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #f39c12;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 30px;
}

.footer-bottom-content {
  text-align: center;
}

.copyright {
  color: #999;
  font-size: 14px;
  margin: 0;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 30px;
  }
  
  .footer-section:first-child,
  .footer-section:not(:first-child) {
    flex: none;
    min-width: auto;
  }
  
  .footer-section {
    text-align: left;
  }
  
  .footer-title {
    font-size: 16px;
    margin-bottom: 15px;
  }
  
  .footer-text {
    font-size: 13px;
  }
  
  .footer-link {
    font-size: 13px;
  }
  
  .footer-links li {
    margin-bottom: 10px;
  }
  
  .footer-bottom {
    padding-top: 20px;
  }
  
  .copyright {
    font-size: 12px;
  }
}

</style>