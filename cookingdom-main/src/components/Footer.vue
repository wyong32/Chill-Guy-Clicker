<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { defaultLang } from '@/i18n' // Import defaultLang

const { t, locale } = useI18n()

// 获取当前年份用于版权信息
const currentYear = new Date().getFullYear()

// 辅助函数生成路由对象，处理语言前缀和额外参数
function getLocalizedRoute(name, params = {}) {
  // 接收 params，默认为空对象
  const currentLocale = locale.value
  if (currentLocale === defaultLang) {
    // 合并 name 和 params
    return { name: name, params: params }
  } else {
    // 合并 name-lang, lang 参数, 和其他 params
    return { name: `${name}-lang`, params: { ...params, lang: currentLocale } }
  }
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-about">
          <h3>{{ t('footer.about.title') }}</h3>
          <p>{{ t('footer.about.description') }}</p>
        </div>
        <div class="footer-links">
          <div class="link-column">
            <h4>{{ t('footer.links.quickNav.title') }}</h4>
            <ul>
              <li>
                <a :href="getLocalizedRoute('home')">{{ t('nav.home') }}</a>
              </li>
              <li>
                <a :href="getLocalizedRoute('guides')">{{ t('nav.guides') }}</a>
              </li>
              <li>
                <a :href="getLocalizedRoute('blog')">{{ t('nav.blog') }}</a>
              </li>
              <li>
                <a :href="getLocalizedRoute('download')">{{ t('nav.download') }}</a>
              </li>
            </ul>
          </div>
          <div class="link-column" id="popular-levels-column">
            <h4>{{ t('footer.links.popularLevels.title') }}</h4>
            <ul>
              <li>
                <a
                  :href="getLocalizedRoute('guide-detail', { id: 'cookingdom-game-level-5' })"
                  >{{ t('footer.links.popularLevels.level5') }}</a
                >
              </li>
              <li>
                <a
                  :herf="getLocalizedRoute('guide-detail', { id: 'cookingdom-game-level-7' })"
                  >{{ t('footer.links.popularLevels.level7') }}</a
                >
              </li>
              <li>
                <a
                  :href="getLocalizedRoute('guide-detail', { id: 'cookingdom-game-level-19' })"
                  >{{ t('footer.links.popularLevels.level19') }}</a
                >
              </li>
              <li>
                <a
                  :href="getLocalizedRoute('guide-detail', { id: 'cookingdom-game-level-26' })"
                  >{{ t('footer.links.popularLevels.level26') }}</a
                >
              </li>
            </ul>
          </div>
          <div class="link-column">
            <h4>{{ t('footer.links.help.title') }}</h4>
            <ul>
              <li>
                <a :href="getLocalizedRoute('privacy-policy')">{{
                  t('footer.privacy')
                }}</a>
              </li>
              <li>
                <a :href="getLocalizedRoute('terms-of-service')">{{
                  t('footer.terms')
                }}</a>
              </li>
              <li>
                <a :href="getLocalizedRoute('copyright')">{{
                  t('footer.copyright.linkText')
                }}</a>
              </li>
              <li>
                <a :href="getLocalizedRoute('about')">{{
                  t('footer.about.linkText')
                }}</a>
              </li>
              <li>
                <a :href="getLocalizedRoute('contact')">{{
                  t('footer.contact.linkText')
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          <span v-html="t('footer.bottom.copyright', { year: currentYear })"></span>
          <span class="separator"> | </span>
          <span v-html="t('footer.bottom.credits')"></span>
        </p>
        <p style="font-size: 0.8em; color: #aaa; margin-top: 0.5rem">
          {{ t('footer.bottom.disclaimer') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Original Footer Styles from HomeView.vue */
.footer {
  padding: 3rem 0 1.5rem;
  margin-top: 3rem; /* Ensures space above footer */
  background-color: #5b4b8a; /* Dark purple */
  color: #e8dff5; /* Light purple text */
  border-top: 5px solid #a08ee6; /* Lighter purple border */
  contain: layout style paint; /* 防止布局偏移 */
  min-height: 300px; /* 设置最小高度，防止内容加载时的布局偏移 */
  width: 100%; /* 确保宽度固定 */
  box-sizing: border-box; /* 确保padding不影响总宽度 */
}

/* Container within footer should be centered */
.footer > .container {
  max-width: 1200px; /* Or your preferred max width */
  margin: 0 auto; /* Center the container */
  padding: 0 1rem; /* Horizontal padding */
}

.footer-content {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  justify-content: space-between;
  gap: 2rem;
  /* Removed margin: 0 auto, handled by .container */
  padding-bottom: 2rem;
  margin-bottom: 2rem; /* Space before bottom section */
  border-bottom: 1px solid #7c6f9f; /* Separator line */
  contain: layout style; /* 防止布局偏移 */
  min-height: 200px; /* 设置最小高度 */
  width: 100%; /* 确保宽度固定 */
  box-sizing: border-box; /* 确保padding不影响总宽度 */
}

.footer-about {
  flex: 1 1 300px; /* Flexible width, base 300px */
  min-width: 250px;
}

.footer-about h3 {
  font-size: 1.5rem;
  color: #ff85a2; /* Kawaii pink */
  margin-bottom: 0.8rem;
}

.footer-about p {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.social-icons {
  font-size: 0;
}

.social-icons a {
  display: inline-block;
  color: #fdf6ff;
  background-color: #a08ee6;
  width: 35px;
  height: 35px;
  line-height: 35px; /* Center icon vertically */
  text-align: center;
  border-radius: 50%;
  margin-right: 1rem;
  margin-bottom: 1rem;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  font-size: 1.1rem; /* Adjust icon size */
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.social-icons a:hover {
  transform: scale(1.1);
}

.social-icons img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.footer-links {
  flex: 2 1 500px; /* Takes more space */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.link-column {
  min-width: 120px;
}

.link-column h4 {
  font-size: 1.1rem;
  color: #fdf6ff; /* White-ish */
  margin-bottom: 1rem;
  border-bottom: 1px dashed #a08ee6; /* Dashed accent line */
  padding-bottom: 0.5rem;
  display: inline-block; /* Make border fit content */
}

.link-column ul {
  list-style: none;
  padding: 0;
  margin: 0; /* Reset default margin */
}

.link-column li {
  margin-bottom: 0.6rem;
}

.link-column a,
.link-column .router-link-active,
.link-column .router-link-exact-active {
  color: #e8dff5;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease, padding-left 0.3s ease;
}

.link-column a:hover,
.link-column .router-link-active:hover,
.link-column .router-link-exact-active:hover {
  color: #ffffff;
  padding-left: 5px;
}

.link-column .router-link-active,
.link-column .router-link-exact-active {
  color: #ffffff;
}

.footer-bottom {
  text-align: center;
  font-size: 0.85rem;
  color: #b1a4cc; /* Muted purple */
  padding-top: 1.5rem; /* Use padding instead of margin */
  contain: layout style; /* 防止布局偏移 */
  min-height: 80px; /* 设置最小高度 */
  width: 100%; /* 确保宽度固定 */
  box-sizing: border-box; /* 确保padding不影响总宽度 */
}

.footer-bottom p {
  margin-bottom: 0.3rem;
}

/* Styles for the separator within footer-bottom */
.footer-bottom .separator {
  color: #7c6f9f; /* Match previous styling if needed */
  margin: 0 0.5em; /* Adjust spacing as needed */
}

/* Remove styles for the deleted legal-links paragraph */

/* --- Media Queries --- */

/* Tablet Styles (<= 1024px) */
@media (max-width: 1024px) {
  .footer {
    padding: 2.5rem 0 1rem;
  }
  .footer-content {
    gap: 1.5rem;
  }
  .footer-about {
    flex: 1 1 20px;
  }
  .footer-about h3 {
    font-size: 1.3rem;
  }
  .footer-about p {
    font-size: 0.85rem;
  }
  .link-column h4 {
    font-size: 1rem;
  }
  .link-column a {
    font-size: 0.85rem;
  }
  .footer-bottom {
    font-size: 0.8rem;
  }
}

/* Mobile Styles (<= 767px) */
@media (max-width: 767px) {
  .footer {
    padding: 2rem 0 1rem;
    margin-top: 2rem;
  }
  .footer > .container {
    padding: 0 1rem;
  }
  .footer-content {
    flex-direction: column; /* Stack about and links */
    text-align: center;
    gap: 2rem; /* Increase gap when stacked */
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .footer-about {
    min-width: unset;
    align-items: center; /* Center content within about */
    display: flex;
    flex-direction: column;
  }
  .social-icons {
    margin-top: 0.5rem;
  }
  .footer-links {
    /* Change from flex column to grid */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem; /* Adjust gap for grid */
    width: 100%; /* Take full width */
    justify-items: start; /* Align items in columns to the start */
    flex: 1 1 100%;
    /* Remove flex properties if they conflict */
    /* flex-direction: column; */
    /* align-items: center; */
  }
  /* Hide the popular levels column */
  #popular-levels-column {
    display: none;
  }
  .link-column {
    text-align: left; /* Align text to the left within columns */
    min-width: unset;
  }
  .link-column h4 {
    display: inline-block; /* Keep border fit */
    margin-bottom: 0.5rem;
  }
  .link-column ul {
    padding-left: 0;
  }
  .footer-bottom {
    font-size: 0.75rem;
    padding-top: 1rem;
  }
  .footer-bottom p {
    margin-bottom: 0.2rem;
  }
}
</style>