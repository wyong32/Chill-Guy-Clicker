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
  background-color: rgb(17, 14, 25);
  padding: 60px 0 20px;
  margin-top: 0;
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  box-sizing: border-box;
  contain: layout style;
  /* 预定义网格高度防止CLS */
  grid-template-rows: minmax(180px, auto);
}

.footer-section {
  display: block;
  box-sizing: border-box;
  contain: layout style;
  /* 确保每列有稳定的最小高度 */
  min-height: 180px;
}

.footer-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #f39c12;
  position: relative;
  padding-bottom: 10px;
  /* 稳定的行高和字体渲染 */
  line-height: 1.2;
  font-display: swap;
}

/* 移除伪元素以防止CLS */
/* .footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: #41b883;
} */

/* 移除固定宽度约束 */

.footer-text {
  color: #fff;
  line-height: 1.4;
  margin-bottom: 20px;
  font-display: swap;
}

.social-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #41b883;
  border-radius: 50%;
  color: white;
  /* 移除所有动画和transition以防止CLS */
  flex-shrink: 0;
}

.social-icon-container {
  display: block;
  width: 24px;
  height: 24px;
}

.social-link img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.social-link:hover {
  background-color: #f39c12;
  /* 移除transform动画以防止CLS */
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
  /* 移除transition动画以防止CLS */
  display: block;
  line-height: 1.4;
  font-display: swap;
}

.footer-link:hover {
  color: #f39c12;
}

.footer-bottom {
  border-top: 1px solid #ddd;
  padding-top: 20px;
}

.footer-bottom-content {
  text-align: center;
}

.copyright {
  color: #ccc;
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
  font-display: swap;
}

.disclaimer {
  color: #aaa;
  font-size: 12px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0;
  /* 防止文字渲染导致的布局偏移 */
  contain: layout style;
}



@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(160px, auto);
  }
  .footer-section {
    min-height: 160px;
  }
}

@media (max-width: 767px) {
  .footer{
    padding: 20px 0;
  }
  .footer-content {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, minmax(120px, auto));
    grid-gap: 15px;
  }
  .footer-section {
    min-height: 120px;
  }
  .footer-title{
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 1.2;
  }
  .footer-text{
    font-size: 12px;
    margin-bottom: 10px;
    line-height: 1.4;
  }

  .footer-link{
    font-size: 12px;
    line-height: 1.4;
  }

  .copyright{
    font-size: 12px;
    line-height: 1.4;
  }

  .footer-bottom{
    padding-top: 10px;
  }
}
</style>
