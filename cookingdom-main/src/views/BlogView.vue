<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { useBlogPosts } from '@/composables/useBlogPosts'
import { useDeviceDetection } from '@/composables/useDeviceDetection'

const { t, locale } = useI18n()
const { isMobile } = useDeviceDetection()

// Use the composable to get blog posts and loading state
const { blogPosts, isLoading, error } = useBlogPosts()

// 格式化日期函数 (可选)
const formatDate = (dateString) => {
  if (!dateString) return ''
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(locale.value, options)
}

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
  // 加载广告
  setTimeout(loadAds, 1000)
})
</script>

<template>
  <div class="blog-view-main-with-ads">
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
    <main>
      <div class="blog-view">
        <h1>{{ $t('nav.blog') }}</h1>

        <div v-if="isLoading" class="loading-message">
          <p>Loading posts...</p>
        </div>

        <div v-else-if="blogPosts.length > 0" class="blog-post-list">
          <article v-for="post in blogPosts" :key="post.id" class="blog-post-card">
            <a :href="{ name: 'blog-detail', params: { id: post.id } }" class="post-link">
              <img
                v-if="post.imageUrl"
                :src="post.imageUrl"
                :alt="post.listTitle"
                class="post-image"
              />
              <div class="post-content">
                <h2 class="post-title" v-html="post.listTitle"></h2>
                <p class="post-date">{{ formatDate(post.publishDate) }}</p>
                <!-- 可以在这里显示摘要 (如果之后加回 excerpt 字段) -->
                <!-- <p class="post-excerpt">{{ post.excerpt }}</p> -->
              </div>
            </a>
          </article>
        </div>

        <div v-else class="no-posts-message">
          <p>{{ $t('blog.placeholder_text', 'No blog posts available yet.') }}</p>
        </div>
      </div>
    </main>
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
.blog-view {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 20px auto;
}

h1 {
  text-align: center;
  margin-bottom: 2.5rem;
  color: #5b4b8a;
  font-size: 2.2rem;
}

.loading-message,
.no-posts-message {
  text-align: center;
  color: #888;
  font-size: 1.2em;
  padding: 40px 0;
}

.blog-post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.blog-post-card {
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(160, 142, 230, 0.2);
}

.post-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.post-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.post-content {
  padding: 1.5rem;
}

.post-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.4rem;
  line-height: 1.4;
  color: #5b4b8a;
}

.post-date {
  font-size: 0.9rem;
  color: #a08ee6;
  margin-bottom: 1rem;
}

.post-excerpt {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .blog-view {
    padding: 0 1rem;
    margin: 0;
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .blog-post-list {
    grid-template-columns: 1fr; /* Stack on mobile */
    gap: 20px;
  }
  .post-title {
    font-size: 1.2rem;
  }
  .post-content {
    padding: 1rem;
  }
}
</style> 