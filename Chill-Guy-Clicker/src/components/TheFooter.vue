<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section about">
          <h3 class="footer-title">Chill Guy Clicker</h3>
          <p class="footer-text">
            Chill Guy Games is a platform offering various fun casual games. We are dedicated to
            providing the best gaming experience for players.
          </p>
          <div class="social-links">
            <!-- 1 -->
            <a href="https://www.indiehackers.com/delldremo" class="social-link" target="_blank">
              <img src="/images/icon/indiehackers-icon.webp" alt="indiehackers" width="24" height="24">
            </a>
            <!-- 2 -->
            <a href="https://share.evernote.com/note/c880fa8a-a5b4-ca1b-23db-a0f6dfc9475f" class="social-link" target="_blank">
              <img src="/images/icon/evernote-icon.svg" alt="Evernote logo" width="24" height="24">
            </a>
            <!-- 3 -->
            <a href="https://www.notion.so/ChillGuymemeClicker-com-1fb7ae35635d804e8a50fd5e971fd3b8" class="social-link" target="_blank">
              <img src="/images/icon/notion-icon.ico" alt="Notion logo" width="24" height="24">
            </a>
            <!-- 4 -->
            <a href="https://ko-fi.com/post/Chill-Guy-meme-Clicker-D1D31FCJUT" class="social-link" target="_blank">
              <img src="/images/icon/ko-fi-icon.webp" alt="Ko-fi logo" width="24" height="24">
            </a>
            <!-- 5 -->
            <a href="https://substack.com/inbox/post/164135785?triedRedirect=true" class="social-link" target="_blank">
              <img src="/images/icon/substack-icon.ico" alt="substack" width="24" height="24">
            </a>
            <!-- 6 -->
            <a href="https://wenyong3.gumroad.com/l/chillguymemeclicker" class="social-link" target="_blank">
              <img src="/images/icon/gumroad-icon.webp" alt="gumroad" width="24" height="24">
            </a>
            <!-- 7 -->
            <a href="https://cookingdom.podia.com/blog/6d6cd40b-5af0-4659-b494-06f9fed4c072" class="social-link" target="_blank">
              <img src="/images/icon/podia-icon.ico" alt="podia" width="24" height="24">
            </a>
            <!-- 8 -->
            <a href="https://jimmy11.kit.com/0a9818835d" class="social-link" target="_blank">
              <img src="/images/icon/kit-icon.png" alt="kit" width="24" height="24">
            </a>
            <!-- 9 -->
            <a href="https://www.pinterest.com/wenyong3124/chill-guy" class="social-link" target="_blank">
              <img src="/images/icon/pinterest-icon.png" alt="pinimg" width="24" height="24">
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
            <li><router-link to="/copyright" class="footer-link">Copyright</router-link></li>
            <li><router-link to="/about" class="footer-link">About Us</router-link></li>
            <li><router-link to="/contact" class="footer-link">Contact Us</router-link></li>
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
  mounted() {
    // 强制设置 Footer 尺寸，防止 CLS
    this.$nextTick(() => {
      const footer = this.$el;
      if (footer) {
        footer.style.setProperty('min-height', '420px', 'important');
        footer.style.setProperty('height', '420px', 'important');
        footer.style.setProperty('max-height', '420px', 'important');
        footer.style.setProperty('overflow', 'hidden', 'important');
        footer.style.setProperty('flex-shrink', '0', 'important');
        footer.style.setProperty('contain', 'layout style paint', 'important');
      }
    });
  }
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
  /* 防止布局偏移的关键属性 - 强化版本 */
  contain: layout style paint;
  min-height: 420px !important;
  height: 420px !important;
  max-height: 420px !important;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  /* 防止布局偏移 */
  contain: layout style;
  box-sizing: border-box;
  width: 100%;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  /* 防止布局偏移 */
  contain: layout style;
  min-height: 200px;
  width: 100%;
  box-sizing: border-box;
}

.footer-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--accent-color);
  position: relative;
  padding-bottom: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  /* 防止文字渲染导致的布局偏移 */
  contain: layout style;
  min-height: 28px;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--primary-color);
  /* 防止伪元素导致的布局偏移 */
  /* will-change: transform; */
  /* transform: translateZ(0); */
}

.footer-section {
  /* 防止布局偏移 */
  contain: layout style;
  min-height: 180px;
  box-sizing: border-box;
}

.about{
  width: 320px;
}

.footer-text {
  color: #fff;
  line-height: 1.6;
  margin-bottom: 20px;
  /* 防止文字渲染导致的布局偏移 */
  contain: layout style;
  min-height: 60px;
}

.social-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  /* 防止布局偏移 */
  contain: layout style;
  min-height: 36px;
  align-items: center;
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
  /* 防止布局偏移 */
  contain: layout paint;
  /* will-change: transform; */
  /* transform: translateZ(0); */
  backface-visibility: hidden;
  flex-shrink: 0;
}

.social-link:hover {
  background-color: var(--accent-color);
  transform: scale(1.1);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  /* 防止布局偏移 */
  contain: layout style;
  min-height: 120px;
}

.footer-links li {
  margin-bottom: 10px;
  /* 防止布局偏移 */
  contain: layout style;
  min-height: 20px;
}

.footer-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
  /* 防止文字渲染导致的布局偏移 */
  contain: layout style;
  display: block;
  line-height: 1.4;
}

.footer-link:hover {
  color: var(--accent-color);
}



.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: 20px;
  /* 防止布局偏移 */
  contain: layout style;
  min-height: 80px;
  width: 100%;
  box-sizing: border-box;
}

.footer-bottom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  /* 防止布局偏移 */
  contain: layout style;
}

.copyright {
  color: #ccc;
  font-size: 14px;
  margin: 0;
  /* 防止文字渲染导致的布局偏移 */
  contain: layout style;
  white-space: nowrap;
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

  .footer-bottom {
    min-height: 60px; /* 调整移动端最小高度 */
  }
}
</style>
