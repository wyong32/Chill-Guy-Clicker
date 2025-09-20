<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useBlogPosts } from '@/composables/useBlogPosts'
import { useDeviceDetection } from '@/composables/useDeviceDetection'
import { updateMetaTag, updateCanonicalTag } from '@/utils/head'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()
const { isMobile } = useDeviceDetection()

const { blogPosts, isLoading: isLoadingList, error: listError } = useBlogPosts()

const postId = computed(() => route.params.id)

const currentPost = computed(() => {
  if (
    !postId.value ||
    isLoadingList.value ||
    listError.value ||
    !blogPosts.value ||
    blogPosts.value.length === 0
  ) {
    return null
  }
  return blogPosts.value.find((p) => p.id === postId.value)
})

watch(
  currentPost,
  (newPost, oldPost) => {
    if (isLoadingList.value) return

    if (newPost) {
      // 更新基础meta标签
      document.title = newPost.seo?.title || t('meta.blogDetail.title', 'Blog Post')
      updateMetaTag('description', newPost.seo?.description)
      updateMetaTag('keywords', newPost.seo?.keywords)

      // 更新Open Graph标签
      updateMetaTag('og:title', newPost.seo?.title || newPost.detailTitle)
      updateMetaTag('og:description', newPost.seo?.description)
      updateMetaTag('og:type', 'article')
      updateMetaTag('og:url', window.location.href)
      updateMetaTag('og:image', newPost.imageUrl)

      // 更新Twitter标签
      updateMetaTag('twitter:card', 'summary_large_image')
      updateMetaTag('twitter:title', newPost.seo?.title || newPost.detailTitle)
      updateMetaTag('twitter:description', newPost.seo?.description)
      updateMetaTag('twitter:image', newPost.imageUrl)

      // 更新canonical URL
      updateCanonicalTag(window.location.href)

      // 添加结构化数据
      addBlogStructuredData(newPost)
    } else if (!isLoadingList.value && postId.value && !listError.value) {
      document.title = t('meta.notFoundTitle', 'Post Not Found')
      updateMetaTag(
        'description',
        t('meta.notFoundDescription', 'The blog post you are looking for could not be found.')
      )
      updateMetaTag('keywords', '')
      updateCanonicalTag(window.location.href)
    }
  },
  { immediate: true, deep: true }
)

watch(listError, (newError) => {
  if (newError) {
    document.title = t('meta.errorTitle', 'Error Loading Post')
    updateMetaTag('description', 'There was an error loading the blog content.')
    updateMetaTag('keywords', '')
  }
})

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
  setTimeout(loadAds, 1000)
})

// 添加博客结构化数据函数
const addBlogStructuredData = (post) => {
  if (typeof document === 'undefined') return

  // 移除现有的结构化数据
  const existingScript = document.querySelector('script[data-structured-data="blog"]')
  if (existingScript) {
    existingScript.remove()
  }

  // 创建新的结构化数据
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seo?.title || post.detailTitle,
    description: post.seo?.description,
    image: post.imageUrl,
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
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': window.location.href,
    },
    about: {
      '@type': 'VideoGame',
      name: 'Cookingdom',
      genre: 'Cooking Simulation',
    },
    articleSection: 'Blog',
    keywords: post.seo?.keywords || 'Cookingdom, blog, news, gaming',
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
        name: 'Blog',
        item: 'https://www.cookingdom.co/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.detailTitle,
        item: window.location.href,
      },
    ],
  }

  // 创建script标签并添加到head
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-structured-data', 'blog')
  script.textContent = JSON.stringify([structuredData, breadcrumbData])
  document.head.appendChild(script)
}
</script>

<template>
  <div class="blog-detail-page">
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
    <div class="blog-detail-content">
      <div class="blog-detail-view">
        <div v-if="isLoadingList && !currentPost" class="loading-message">
          <p>Loading post...</p>
        </div>

        <div v-else-if="listError" class="error-message">
          <p>
            {{ listError.message || 'Error loading blog posts.' }}
            <RouterLink :to="{ name: 'blog' }">Back to Blog</RouterLink>
          </p>
        </div>

        <div v-else-if="!isLoadingList && !currentPost && postId" class="error-message">
          <p>
            {{ t('blog.postNotFound', 'Post not found.') }}
            <RouterLink :to="{ name: 'blog' }">Back to Blog</RouterLink>
          </p>
        </div>

        <article v-else-if="currentPost" class="blog-post-content">
          <h1>{{ currentPost.detailTitle }}</h1>
          <p class="subtitle">{{ currentPost.detailSubtitle }}</p>
          <hr />
          <div v-html="currentPost.detailContentHtml" class="post-body"></div>
          <div class="back-link-container">
            <RouterLink :to="{ name: 'blog' }" class="back-link">
              ← {{ t('guideDetail.backLink', 'Back to Blog') }}
            </RouterLink>
          </div>
        </article>

        <div v-else-if="!postId" class="error-message">
          <p>
            {{ t('blog.invalidPostId', 'No post ID specified.') }}
            <RouterLink :to="{ name: 'blog' }">Back to Blog</RouterLink>
          </p>
        </div>
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

<style scoped>
.blog-detail-content {
  /* 页面级主内容区样式已在 base.css 中定义 */
  padding: 40px 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  contain: layout style paint;
  min-height: 800px;
  width: 100%;
  box-sizing: border-box;
}

.loading-message,
.error-message {
  text-align: center;
  color: #888;
  font-size: 1.2em;
  padding: 40px 0;
}

.error-message a {
  color: #a08ee6;
  text-decoration: underline;
}

.blog-post-content {
  contain: layout style paint;
  min-height: 600px;
}

.blog-post-content h1 {
  font-size: 2.5rem;
  color: #5b4b8a;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  height: auto;
  min-height: 3.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 2rem;
  line-height: 1.5;
}

hr {
  border: none;
  border-top: 1px solid #eee;
  margin: 2rem 0;
}

.post-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  contain: layout style;
  min-height: 400px;
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}

/* Target elements within v-html */
.post-body :deep(h2) {
  font-size: 1.8rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #5b4b8a;
}

.post-body :deep(p) {
  margin-bottom: 1.5rem;
}

.post-body :deep(ul),
.post-body :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.post-body :deep(li) {
  margin-bottom: 0.5rem;
}

.post-body :deep(a) {
  color: #a08ee6;
  text-decoration: underline;
}

.post-body :deep(strong) {
  font-weight: bold;
  color: #5b4b8a;
}

.back-link-container {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  text-align: center;
}

.back-link {
  color: #a08ee6;
  text-decoration: none;
  font-weight: 500;
}
.back-link:hover {
  text-decoration: underline;
}

@media (max-width: 767px) {
  .blog-detail-page {
    flex-direction: column;
    padding: 0;
  }
  .blog-detail-content {
    padding: 1rem;
    margin: 0;
    min-height: 600px;
  }
  .blog-post-content {
    min-height: 400px;
  }
  .blog-post-content h1 {
    font-size: 1.5rem;
    min-height: 2.5rem;
  }
  .subtitle {
    font-size: 1.1rem;
  }
  .post-body {
    font-size: 1rem;
    line-height: 1.7;
    min-height: 300px;
  }
}
</style>