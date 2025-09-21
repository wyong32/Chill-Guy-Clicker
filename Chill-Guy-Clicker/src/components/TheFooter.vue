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
          <div class="social-links">
            <!-- 1 -->
            <a href="https://www.indiehackers.com/delldremo" class="social-link" target="_blank">
              <span class="social-icon-container">
                <img src="/images/icon/indiehackers-icon.webp" alt="indiehackers" width="24" height="24" loading="eager" decoding="sync">
              </span>
            </a>
            <!-- 2 -->
            <a href="https://share.evernote.com/note/c880fa8a-a5b4-ca1b-23db-a0f6dfc9475f" class="social-link" target="_blank">
              <span class="social-icon-container">
                <img src="/images/icon/evernote-icon.svg" alt="Evernote logo" width="24" height="24" loading="eager" decoding="sync">
              </span>
            </a>
            <!-- <a href="https://www.notion.so/ChillGuymemeClicker-com-1fb7ae35635d804e8a50fd5e971fd3b8" class="social-link" target="_blank">
              <img src="/images/icon/notion-icon.ico" alt="Notion logo" width="24" height="24">
            </a>
            <a href="https://ko-fi.com/post/Chill-Guy-meme-Clicker-D1D31FCJUT" class="social-link" target="_blank">
              <img src="/images/icon/ko-fi-icon.webp" alt="Ko-fi logo" width="24" height="24">
            </a>
            <a href="https://substack.com/inbox/post/164135785?triedRedirect=true" class="social-link" target="_blank">
              <img src="/images/icon/substack-icon.ico" alt="substack" width="24" height="24">
            </a>
            <a href="https://wenyong3.gumroad.com/l/chillguymemeclicker" class="social-link" target="_blank">
              <img src="/images/icon/gumroad-icon.webp" alt="gumroad" width="24" height="24">
            </a>
            -->
          </div>
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
          <!-- <p class="disclaimer">
            Disclaimer: This website is for entertainment purposes only. All games, images, and content are either owned by Chill Guy Games or used with permission. We are not responsible for any external content linked from this site.
          </p> -->
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
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.footer-section {
  display: inline-block;
  vertical-align: top;
  width: 24%;
  margin-right: 1%;
  margin-bottom: 30px;
}

.footer-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #f39c12;
  position: relative;
  padding-bottom: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.4;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: #41b883;
}

/* 移除固定宽度约束 */

.footer-text {
  color: #fff;
  line-height: 1.6;
  margin-bottom: 20px;
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
  transition: background-color 0.3s;
  box-shadow: 0 0 10px rgba(255, 204, 0, 0.3);
  backface-visibility: hidden;
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
  transition: color 0.3s;
  display: block;
  line-height: 1.4;
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
  .footer-section {
    width: 48%;
    margin-right: 2%;
  }
}

@media (max-width: 767px) {
  .footer{
    padding: 20px 0;
  }
  .footer-title{
    font-size: 16px;
    margin-bottom: 10px;
  }
  .footer-text{
    font-size: 12px;
    margin-bottom: 10px;
  }

  .footer-section {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .footer-link{
    font-size: 12px;
  }

  .copyright{
    font-size: 12px;
  }

  .footer-bottom{
    padding-top: 10px;
  }
}
</style>
