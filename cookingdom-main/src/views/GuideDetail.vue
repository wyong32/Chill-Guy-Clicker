<template>
  <div class="guide-detail-page">
    <!-- Left Ad -->
    <aside class="ads-left" v-if="!isMobile">
      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-4224010041977181"
        data-ad-slot="7552815638"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </aside>

    <!-- Main Content Container -->
    <div class="guide-detail-content">
      <!-- Optional: Breadcrumbs can go here -->
      <div v-if="currentGuide" class="guide-layout">
        <!-- Main Content Area (Left) -->
        <main class="main-content">
          <!-- Back link -->
          <router-link :to="{ name: 'guides' }" class="back-link">{{
            $t('guideDetail.backLink')
          }}</router-link>

          <!-- New H1 using pageTitle -->
          <h1 class="page-main-title">{{ currentGuide.pageTitle }}</h1>

          <aside class="ads-wrapper" v-if="isMobile">
            <ins
              class="adsbygoogle"
              style="display: inline-block; width: 300px; height: 100px"
              data-ad-client="ca-pub-4224010041977181"
              data-ad-slot="3712377621"
            ></ins>
          </aside>

          <!-- New Subtitle -->
          <p class="page-subtitle" v-if="currentGuide.pageSubtitle">
            {{ currentGuide.pageSubtitle }}
          </p>

          <!-- Display YouTube video if iframeUrl exists -->
          <div v-if="currentGuide.iframeUrl" class="iframe-container">
            <YouTubeFacade
              :videoUrl="currentGuide.iframeUrl"
              :title="$t('guideDetail.iframeTitle')"
              :customThumbnail="getVideoThumbnail(currentGuide)"
            />
          </div>

          <!-- 移动端横幅广告 -->
          <aside class="ads-content" v-if="isMobile">
            <ins
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-4224010041977181"
              data-ad-slot="6083907013"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </aside>

          <!-- Render HTML content using v-html (Now last) -->
          <div v-html="currentGuide.detailsHtml" class="guide-html-content"></div>

          <!-- Popular Special Levels Section -->
          <section v-if="specialGuides.length > 0" class="popular-special-levels">
            <h2>{{ $t('guideDetail.popularSpecialLevelsTitle', 'Popular Special Levels') }}</h2>
            <div class="special-levels-grid">
              <router-link
                v-for="guide in specialGuides"
                :key="guide.id"
                :to="guide.routeObject"
                class="special-level-card"
              >
                <div class="special-level-image-placeholder">
                  <img
                    :src="guide.imageUrl"
                    :alt="guide.title"
                    class="special-level-image"
                    width="300"
                    height="150"
                    loading="lazy"
                  />
                </div>
                <div class="special-level-content">
                  <h3 v-html="guide.title"></h3>
                </div>
              </router-link>
            </div>
          </section>

          <!-- You could add more sections here, e.g., comments -->
        </main>

        <!-- Sidebar Area (Right) -->
        <aside class="sidebar">
          <!-- Sidebar Image -->
          <div class="sidebar-image-container">
            <img
              :src="currentGuide.sidebarData.sidebarImageUrl"
              :alt="currentGuide.title"
              class="sidebar-image"
              width="300"
              height="200"
              loading="lazy"
            />
          </div>

          <!-- Level Info -->
          <div class="level-info" v-html="currentGuide.sidebarData.levelInfoHtml"></div>

          <aside class="ads-wrapper">
            <ins
              class="adsbygoogle"
              style="display: inline-block; width: 300px; height: 300px"
              data-ad-client="ca-pub-4224010041977181"
              data-ad-slot="4968753003"
            ></ins>
          </aside>

          <!-- Featured Guides -->
          <div class="featured-guides">
            <h3>{{ $t('guideDetail.featuredLevelsTitle') }}</h3>
            <div class="featured-guides-list">
              <router-link
                v-for="guide in currentGuide.sidebarData.featuredGuides"
                :key="guide.id"
                :to="guide.detailsRoute"
                class="featured-guide-item"
              >
                <img
                  :src="guide.imageUrl"
                  :alt="guide.title"
                  class="featured-guide-image"
                  width="80"
                  height="60"
                  loading="lazy"
                />
                <div class="featured-guide-info">
                  <h4 v-html="guide.title"></h4>
                </div>
              </router-link>
            </div>
          </div>
        </aside>
      </div>

      <!-- Loading or Error States -->
      <div v-else-if="isLoadingList" class="loading-or-not-found">
        <p>{{ $t('guideDetail.loadingOrNotFound') }}</p>
      </div>
      <div v-else-if="listError" class="loading-or-not-found">
        <p>{{ listError.message || 'Error loading guides.' }}</p>
        <router-link :to="{ name: 'guides' }" class="back-link">{{
          $t('guideDetail.backLink')
        }}</router-link>
      </div>
      <div v-else-if="!isLoadingList && !currentGuide && guideId" class="loading-or-not-found">
        <p>{{ $t('guideDetail.loadingOrNotFound') }}</p>
        <p>{{ $t('guideDetail.idNotFound', { id: guideId }) }}</p>
        <router-link :to="{ name: 'guides' }" class="back-link">{{
          $t('guideDetail.backLink')
        }}</router-link>
      </div>
      <div v-else-if="!guideId" class="loading-or-not-found">
        <p>
          {{ t('guide.invalidGuideId', 'No guide ID specified.') }}
          <a :href="{ name: 'guides' }">Back to Guides</a>
        </p>
      </div>
    </div>

    <!-- Right Ad -->
    <aside class="ads-right" v-if="!isMobile">
      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-4224010041977181"
        data-ad-slot="1956039879"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </aside>
  </div>
</template>

<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useGuides } from '@/composables/useGuides'
import { defaultLang } from '@/i18n'
import { updateMetaTag, updateCanonicalTag } from '@/utils/head'
import YouTubeFacade from '@/components/YouTubeFacade.vue'
import { useDeviceDetection } from '@/composables/useDeviceDetection'

const route = useRoute()
const { t, locale } = useI18n()
const { isMobile } = useDeviceDetection()

// Use the composable for guides list, loading state, and error state
const { guides, isLoading: isLoadingList, error: listError, load } = useGuides()

const guideId = computed(() => route.params.id)

// Computed property to find the current guide from the loaded list
const currentGuide = computed(() => {
  if (
    !guideId.value ||
    isLoadingList.value ||
    listError.value ||
    !guides.value ||
    guides.value.length === 0
  ) {
    return null
  }
  return guides.value.find((g) => g.id === guideId.value)
})

// Computed property to get special guides (excluding current guide)
const specialGuides = computed(() => {
  if (!guides.value || guides.value.length === 0) return []

  return guides.value
    .filter((guide) => guide.isSpecial === true && guide.id !== guideId.value)
    .map((guide) => ({
      ...guide,
      routeObject: guide.routeObject,
    }))
})

// Helper function to get video thumbnail
const getVideoThumbnail = (guide) => {
  if (!guide || !guide.iframeUrl) return null
  // Extract video ID from YouTube URL and generate thumbnail
  const videoIdMatch = guide.iframeUrl.match(/embed\/([^?]+)/)
  if (videoIdMatch) {
    return `https://img.youtube.com/vi/${videoIdMatch[1]}/maxresdefault.jpg`
  }
  return null
}

// 添加结构化数据函数
const addStructuredData = (guide) => {
  if (typeof document === 'undefined') return

  // 移除现有的结构化数据
  const existingScript = document.querySelector('script[data-structured-data="guide"]')
  if (existingScript) {
    existingScript.remove()
  }

  // 创建新的结构化数据
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.seo?.title || guide.title,
    description: guide.seo?.description,
    image: guide.imageUrl,
    author: {
      '@type': 'Organization',
      name: 'Cookingdom Fansite',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cookingdom Fansite',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.cookingdom.co/logo.webp',
      },
    },
    datePublished: guide.publishDate,
    dateModified: guide.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': window.location.href,
    },
    about: {
      '@type': 'VideoGame',
      name: 'Cookingdom',
      genre: 'Cooking Simulation',
    },
    articleSection: 'Game Guides',
    keywords: guide.seo?.keywords || 'Cookingdom, game guide, walkthrough',
  }

  // 添加面包屑结构化数据
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.cookingdom.co/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: 'https://www.cookingdom.co/guides',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.title,
        item: window.location.href,
      },
    ],
  }

  // 创建script标签并添加到head
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-structured-data', 'guide')
  script.textContent = JSON.stringify([structuredData, breadcrumbData])
  document.head.appendChild(script)
}

// Watch for guide changes and update meta tags
watch(
  currentGuide,
  (newGuide, oldGuide) => {
    if (isLoadingList.value) return

    if (newGuide) {
      // 立即更新meta标签，确保SEO
      document.title = newGuide.seo?.title || t('meta.guideDetail.title', 'Guide Detail')
      updateMetaTag('description', newGuide.seo?.description)
      updateMetaTag('keywords', newGuide.seo?.keywords)

      // 更新Open Graph标签
      updateMetaTag('og:title', newGuide.seo?.title || newGuide.title)
      updateMetaTag('og:description', newGuide.seo?.description)
      updateMetaTag('og:type', 'article')
      updateMetaTag('og:url', window.location.href)
      updateMetaTag('og:image', newGuide.imageUrl)

      // 更新Twitter标签
      updateMetaTag('twitter:card', 'summary_large_image')
      updateMetaTag('twitter:title', newGuide.seo?.title || newGuide.title)
      updateMetaTag('twitter:description', newGuide.seo?.description)
      updateMetaTag('twitter:image', newGuide.imageUrl)

      // 更新canonical URL
      updateCanonicalTag(window.location.href)

      // 添加结构化数据
      addStructuredData(newGuide)
    } else if (!isLoadingList.value && guideId.value && !listError.value) {
      document.title = t('meta.notFoundTitle', 'Guide Not Found')
      updateMetaTag(
        'description',
        t('meta.notFoundDescription', 'The guide you are looking for could not be found.')
      )
      updateMetaTag('keywords', '')
    }
  },
  { immediate: true, deep: true }
)

// Watch for list errors
watch(listError, (newError) => {
  if (newError) {
    document.title = t('meta.errorTitle', 'Error Loading Guide')
    updateMetaTag('description', 'There was an error loading the guide content.')
    updateMetaTag('keywords', '')
  }
})

// 手动触发广告加载
const loadAds = () => {
  if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
    try {
      // 直接处理所有广告元素，但添加错误处理
      const adElements = document.querySelectorAll('.adsbygoogle')
      adElements.forEach((el) => {
        try {
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (pushError) {
          // 忽略重复加载错误
          if (!pushError.message.includes('already have ads')) {
            console.error('广告加载失败:', pushError)
          }
        }
      })
    } catch (e) {
      console.error('广告加载失败:', e)
    }
  } else {
    // 如果 adsbygoogle 还没加载，延迟重试
    setTimeout(loadAds, 1000)
  }
}

onMounted(() => {
  // 加载指南数据（如果还没有加载的话）
  if (!guides.value.length && !isLoadingList.value) {
    load(locale.value)
  }

  // 加载广告
  setTimeout(loadAds, 1000)
})
</script>

<style scoped>
.guide-detail-content {
  /* 页面级主内容区样式已在 base.css 中定义 */
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  min-height: 100vh;
  display: block;
}

.guide-layout {
  display: flex;
  gap: 2rem;
  min-height: 800px;
}

.main-content {
  flex: 1;
  min-width: 0;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.sidebar {
  flex: 0 0 300px;
}

.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  color: #a08ee6;
  text-decoration: none;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}

.sidebar-image-container img {
  width: 100%;
  border-radius: 8px;
  display: block;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.level-info-box {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid #eee;
}

.level-info-box h3 {
  margin-top: 0;
  margin-bottom: 0.8rem;
  color: #5b4b8a;
  font-size: 1.2rem;
}

.level-info-box p {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.level-info-box p strong {
  color: #333;
}

.featured-guides {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #eee;
  min-height: 200px;
  width: 100%;
  box-sizing: border-box;
}

.featured-guides h4 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #5b4b8a;
  font-size: 1.1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.featured-guides ul {
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 50px;
}

.featured-guides li {
  margin-bottom: 0.8rem;
  height: 60px;
}

.featured-guide-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: #333;
  transition: background-color 0.2s ease;
  padding: 0.4rem;
  border-radius: 4px;
  height: 100%;
  box-sizing: border-box;
}

.featured-guide-link:hover {
  background-color: #eee;
}

.featured-guide-img {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  background-color: #f0f0f0;
}

.featured-guide-link span {
  font-size: 0.9rem;
  line-height: 1.3;
}

/* Styles for HTML content and iframe remain largely the same */
.guide-html-content {
  line-height: 1.7;
  color: #333;
}

.guide-html-content :deep(h1),
.guide-html-content :deep(h2),
.guide-html-content :deep(h3) {
  color: #5b4b8a;
  margin-top: 1.8em;
  margin-bottom: 0.8em;
}

.guide-html-content :deep(h1) {
  font-size: 1.8rem;
}
.guide-html-content :deep(h2) {
  font-size: 1.5rem;
}
.guide-html-content :deep(h3) {
  font-size: 1.3rem;
}
.guide-html-content :deep(p) {
  margin-bottom: 1em;
}
.guide-html-content :deep(ul),
.guide-html-content :deep(ol) {
  padding-left: 1.5em;
  margin-bottom: 1em;
}
.guide-html-content :deep(li) {
  margin-bottom: 0.5em;
}
.guide-html-content :deep(a) {
  color: #a08ee6;
  text-decoration: underline;
}

/* Table Styles for Guide HTML Content */
.guide-html-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  font-size: 0.95rem;
  line-height: 1.5;
}

.guide-html-content :deep(table thead) {
  background-color: #a08ee6;
  color: #ffffff;
}

.guide-html-content :deep(table thead th) {
  padding: 1rem 1.2rem;
  text-align: left;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  position: relative;
}

.guide-html-content :deep(table thead th:first-child) {
  border-top-left-radius: 8px;
}

.guide-html-content :deep(table thead th:last-child) {
  border-top-right-radius: 8px;
}

.guide-html-content :deep(table tbody tr) {
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s ease;
}

.guide-html-content :deep(table tbody tr:last-child) {
  border-bottom: none;
}

.guide-html-content :deep(table tbody tr:hover) {
  background-color: #f8f9ff;
}

.guide-html-content :deep(table tbody td) {
  padding: 1rem 1.2rem;
  border: none;
  color: #333;
  vertical-align: top;
}

.guide-html-content :deep(table tbody td:first-child) {
  font-weight: 500;
  color: #5b4b8a;
}

/* Responsive table styles */
@media (max-width: 767px) {
  .guide-html-content :deep(table) {
    font-size: 0.85rem;
    margin: 1rem 0;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }

  .guide-html-content :deep(table thead th),
  .guide-html-content :deep(table tbody td) {
    padding: 0.6rem 0.8rem;
  }

  .guide-html-content :deep(table thead th) {
    font-size: 0.9rem;
    font-weight: 600;
  }

  .guide-html-content :deep(table tbody td) {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  /* 移动端表格横向滚动处理 */
  .guide-html-content :deep(.table-responsive) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }

  .guide-html-content :deep(.table-responsive table) {
    min-width: 500px;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
  }
}

/* 小屏幕手机端优化 */
@media (max-width: 480px) {
  .guide-html-content :deep(table) {
    font-size: 0.8rem;
    margin: 0.8rem 0;
  }

  .guide-html-content :deep(table thead th),
  .guide-html-content :deep(table tbody td) {
    padding: 0.5rem 0.6rem;
  }

  .guide-html-content :deep(table thead th) {
    font-size: 0.85rem;
  }

  .guide-html-content :deep(table tbody td) {
    font-size: 0.8rem;
  }

  /* 超小屏幕表格卡片化处理 */
  .guide-html-content :deep(.table-mobile-cards) {
    display: block;
  }

  .guide-html-content :deep(.table-mobile-cards thead) {
    display: none;
  }

  .guide-html-content :deep(.table-mobile-cards tbody) {
    display: block;
  }

  .guide-html-content :deep(.table-mobile-cards tbody tr) {
    display: block;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    border: 1px solid #f0f0f0;
  }

  .guide-html-content :deep(.table-mobile-cards tbody tr:last-child) {
    margin-bottom: 0;
  }

  .guide-html-content :deep(.table-mobile-cards tbody td) {
    display: block;
    padding: 0.3rem 0;
    border: none;
    text-align: left;
  }

  .guide-html-content :deep(.table-mobile-cards tbody td:before) {
    content: attr(data-label) ': ';
    font-weight: 600;
    color: #5b4b8a;
    display: inline-block;
    min-width: 80px;
  }

  .guide-html-content :deep(.table-mobile-cards tbody td:first-child) {
    font-weight: 500;
    color: #5b4b8a;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .guide-html-content :deep(.table-mobile-cards tbody td:first-child:before) {
    display: none;
  }
}

/* Table with borders variant */
.guide-html-content :deep(table.table-bordered) {
  border: 1px solid #e0e0e0;
}

.guide-html-content :deep(table.table-bordered th),
.guide-html-content :deep(table.table-bordered td) {
  border: 1px solid #e0e0e0;
}

/* Striped table variant */
.guide-html-content :deep(table.table-striped tbody tr:nth-child(even)) {
  background-color: #fafafa;
}

.guide-html-content :deep(table.table-striped tbody tr:nth-child(even):hover) {
  background-color: #f0f0ff;
}

/* Compact table variant */
.guide-html-content :deep(table.table-compact thead th),
.guide-html-content :deep(table.table-compact tbody td) {
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
}

/* Table caption styles */
.guide-html-content :deep(table caption) {
  caption-side: bottom;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-style: italic;
}

.iframe-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  aspect-ratio: 16 / 12;
}

.loading-or-not-found {
  text-align: center;
  padding: 3rem 1rem;
  color: #666;
}

/* Popular Special Levels Section Styles */
.popular-special-levels {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #f0f0f0;
}

.popular-special-levels h2 {
  font-size: 1.8rem;
  color: #a08ee6;
  margin-bottom: 2rem;
  text-align: center;
}

.special-levels-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
}

.special-level-card {
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;
}

.special-level-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(160, 142, 230, 0.2);
}

.special-level-image-placeholder {
  width: 100%;
  height: 150px;
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;
  contain: layout paint;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  content-visibility: auto;
  contain-intrinsic-size: 0 150px;
}

.special-level-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.special-level-content {
  padding: 0.5rem 1rem;
}

.special-level-content h3 {
  margin: 0;
  font-size: 0.9rem;
  color: #5b4b8a;
  line-height: 1.4;
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .guide-layout {
    flex-direction: column;
  }
  .sidebar {
    flex: 0 0 auto;
    width: 100%;
  }
  .special-levels-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 767px) {
  /* 页面布局调整 */
  .guide-detail-page {
    flex-direction: column;
    padding: 0 !important;
    width: 100%;
    overflow-x: hidden;
  }
  .guide-detail-content {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
  .guide-layout {
    padding: 0;
    margin: 0;
    min-height: 600px;
    width: 100%;
    overflow-x: hidden;
  }
  .main-content {
    padding: 0 1rem;
    margin: 0;
    min-height: 400px;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .sidebar {
    padding: 0 1rem;
    margin: 0;
    min-height: 200px;
    width: 100%;
    box-sizing: border-box;
  }

  /* 标题样式调整 */
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .page-main-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  .page-subtitle {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  /* 特色指南调整 */
  .featured-guides {
    min-height: 150px;
  }
  .featured-guides li {
    height: 50px;
  }

  /* 热门关卡网格调整 */
  .special-levels-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.8rem;
  }
  .special-level-image-placeholder {
    height: 120px;
  }
  .special-level-content {
    padding: 0.6rem;
  }
  .special-level-content h3 {
    font-size: 0.8rem;
    line-height: 1.3;
  }
  .popular-special-levels h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  /* HTML内容样式调整 */
  .guide-html-content :deep(h2) {
    font-size: 1.2em;
    margin: 0.5em 0;
    line-height: 1;
  }
  .guide-html-content :deep(h3) {
    font-size: 1em;
    margin: 0.5em 0;
    line-height: 1;
  }
  .guide-html-content :deep(p) {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  /* 确保所有内容都在容器内 */
  .guide-html-content {
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  /* 确保图片不会超出容器 */
  .guide-html-content :deep(img) {
    max-width: 100%;
    height: auto;
  }

  /* 确保iframe不会超出容器 */
  .iframe-container {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }
}

/* 超小屏幕设备优化 */
@media (max-width: 480px) {
  .guide-detail-page {
    padding: 0 !important;
  }
  .guide-detail-content {
    padding: 0;
    margin: 0;
  }
  .main-content {
    padding: 0 0.8rem;
  }
  .sidebar {
    padding: 0 0.8rem;
  }
  .page-main-title {
    font-size: 1.3rem;
  }
  .page-subtitle {
    font-size: 0.75rem;
  }

  /* 确保所有文本内容都不会换行导致横向滚动 */
  .guide-html-content :deep(*) {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  /* 确保长单词也能正确换行 */
  .guide-html-content :deep(p),
  .guide-html-content :deep(div),
  .guide-html-content :deep(span) {
    word-break: break-word;
  }
}
</style>