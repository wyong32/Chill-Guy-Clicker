<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'
import GuidesSection from '@/components/GuidesSection.vue'
import { useGuides } from '@/composables/useGuides'
import { useDeviceDetection } from '@/composables/useDeviceDetection'

const { locale } = useI18n()
const { isMobile } = useDeviceDetection()

// Use the composable to get reactive data
// Pass locale ref to composable. It will handle reactivity.
const { guides, isLoading, error, load } = useGuides()

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
  // 立即加载攻略数据，因为这是攻略页面
  load(locale.value)

  // 加载广告
  setTimeout(loadAds, 1000)
})
</script>

<template>
  <div class="guide-view-main-with-ads">
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
      <div class="guide-view">
        <!-- Added fallback text -->
        <h1>{{ $t('guides.title') }}</h1>

        <aside class="ads-wrapper" v-if="isMobile">
          <ins
            class="adsbygoogle"
            style="display: inline-block; width: 300px; height: 100px"
            data-ad-client="ca-pub-4224010041977181"
            data-ad-slot="3712377621"
          ></ins>
        </aside>

        <h2>{{ $t('guides.title1') }}</h2>

        <!-- Use the GuidesSection component, passing the reactive data as props -->
        <!-- Note: prop names are kebab-case in template -->
        <GuidesSection :guides="guides" :is-loading="isLoading" :error="error" />

        <aside class="ads-wrapper" v-if="isMobile">
          <ins
            class="adsbygoogle"
            style="display: inline-block; width: 300px; height: 300px"
            data-ad-client="ca-pub-4224010041977181"
            data-ad-slot="4968753003"
          ></ins>
        </aside>
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
/* Keep only styles specific to GuideView's container and title */
.guide-view {
  padding: 40px 0;
  margin: 20px auto;
  max-width: 1200px;
}

h1 {
  text-align: center;
  margin-bottom: 2.5rem;
  color: #5b4b8a;
  font-size: 2.2rem;
}

/* Added style for h2 in guide-view */
.guide-view h1 {
  text-align: center;
  font-size: 2rem;
  color: #ff85a2; /* Pink color, consistent with HomeView */
  margin-bottom: 1.5rem;
}
.guide-view h2 {
  text-align: center;
  font-size: 1.5rem;
  color: #5b4b8a;
}
</style> 