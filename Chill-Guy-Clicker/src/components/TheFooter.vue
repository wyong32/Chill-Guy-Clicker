<template>
  <footer class="footer">
    <div class="container">
      <!-- 极简版Footer测试CLS -->
      <div class="footer-content-simple">
        <p class="copyright">© 2025 chillguymemeclicker.com. All rights reserved.</p>
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

.footer-content-simple {
  text-align: center;
  padding: 20px 0;
  width: 100%;
  box-sizing: border-box;
  contain: layout style;
}

.footer-section {
  display: block;
  box-sizing: border-box;
  /* 确保内容稳定渲染 */
  contain: layout style;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media (max-width: 767px) {
  .footer{
    padding: 20px 0;
  }
  .footer-content {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .footer-title{
    font-size: 16px;
    margin-bottom: 10px;
    /* 稳定的行高防止字体渲染偏移 */
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
