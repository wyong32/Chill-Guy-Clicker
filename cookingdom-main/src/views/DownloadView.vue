<script setup>
// No script logic needed for now, just displaying static content
import { RouterLink } from 'vue-router' // Ensure RouterLink is imported if not already
import { onMounted } from 'vue'
import { useDeviceDetection } from '@/composables/useDeviceDetection'
// 移除 Adsense 组件导入
// import Adsense from '@/components/Adsense.vue'

const { isMobile } = useDeviceDetection()

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
  <div class="download-main-with-ads">
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
      <div class="download-page-view">
        <!-- Reusing the structure and i18n keys from HomeView's download section -->
        <section class="downloads-section">
          <div class="container">
            <div class="section-header">
              <!-- Using nav.download key for the main title of this page -->
              <h1>{{ $t('nav.download') }}</h1>
            </div>
            <h2>{{ $t('home.downloads.description') }}</h2>
            <div class="downloads-grid">
              <div class="download-card">
                <div class="download-icon">📱</div>
                <h3>{{ $t('home.downloads.ios.title') }}</h3>
                <p>{{ $t('home.downloads.ios.description') }}</p>
                <div class="download-meta">
                  <span class="file-type">{{ $t('home.downloads.ios.meta.type') }}</span>
                  <span class="file-size">{{ $t('home.downloads.ios.meta.size') }}</span>
                </div>
                <a
                  class="btn btn-download"
                  href="https://apps.apple.com/us/app/cookingdom/id6742222069"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ $t('home.downloads.ios.button') }}
                </a>
              </div>

              <div class="download-card">
                <div class="download-icon">🤖</div>
                <h3>{{ $t('home.downloads.android.title') }}</h3>
                <p>{{ $t('home.downloads.android.description') }}</p>
                <div class="download-meta">
                  <span class="file-type">{{ $t('home.downloads.android.meta.type') }}</span>
                  <span class="file-size">{{ $t('home.downloads.android.meta.size') }}</span>
                </div>
                <a
                  class="btn btn-download"
                  href="https://play.google.com/store/apps/details?id=com.joypac.cookingdom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ $t('home.downloads.android.button') }}
                </a>
              </div>

              <div class="download-card mod-access-card">
                <div class="download-icon">✨</div>
                <!-- Using the sparkle icon -->
                <h3>{{ $t('home.downloads.modCard.title') }}</h3>
                <p>{{ $t('home.downloads.modCard.description') }}</p>
                <!-- Meta can be omitted or be very generic if desired -->
                <!-- <div class="download-meta">
                  <span class="file-type">{{ $t('downloadView.modCard.meta.type') }}</span>
                </div> -->
                <a
                  :href="{ name: 'mod-download' }"
                  class="btn btn-download btn-secondary-style"
                >
                  {{ $t('home.downloads.modCard.button') }}
                </a>
              </div>
            </div>
            <div class="disclaimer-section">
              <p>
                <strong>{{ $t('home.downloads.disclaimerTitle') }}</strong>
                {{ $t('home.downloads.disclaimerBody') }}
              </p>
            </div>
          </div>
        </section>
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
/* Styles copied and adapted from HomeView */
.download-page-view {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 20px auto;
}

.downloads-section {
  /* Removed background-color if it was specific to home page context */
  padding: 3rem 0;
  text-align: center;
}

.downloads-section .container {
  max-width: 960px; /* Adjusted max-width for download section */
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  margin-bottom: 1rem;
}

.section-header h1 {
  font-size: 2.2rem;
  color: #5b4b8a; /* Darker purple */
  margin: 0;
}

.section-header h1 .icon {
  margin-right: 0.5rem;
}

.downloads-section > .container > h2 {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2.5rem;
}

.downloads-grid {
  display: grid;
  /* Ensure it can accommodate 3 items gracefully on wider screens */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.download-card {
  background-color: #ffffff;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex; /* Added for better internal alignment */
  flex-direction: column; /* Stack items vertically */
  justify-content: space-between; /* Push button to bottom */
}

.download-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(160, 142, 230, 0.15);
}

.download-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.download-card h3 {
  font-size: 1.5rem;
  color: #5b4b8a;
  margin-bottom: 0.5rem;
}

.download-card p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1; /* Allow description to take available space */
}

.download-meta {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1.5rem;
}

.download-meta .file-type {
  margin-right: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 0;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-decoration: none;
  margin-top: auto; /* Ensure button aligns to bottom if card heights vary */
}

.btn-download {
  background-color: #a08ee6; /* Purple */
  color: white;
}

.btn-download:hover {
  background-color: #8a75c4; /* Darker purple */
  transform: translateY(-2px);
}

/* Optional: A slightly different style for the Mod access card button if desired */
.btn-secondary-style {
  background-color: #ff85a2; /* Kawaii pink or another color */
}
.btn-secondary-style:hover {
  background-color: #f76d91; /* Darker pink */
}

/* Responsive */
@media (max-width: 767px) {
  .section-header h2 {
    font-size: 1.8rem;
  }
  .download-page-view {
    padding: 0;
    margin: 0;
  }

  .downloads-section {
    padding: 0;
    margin: 0;
  }
  .section-header h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .downloads-grid {
    /* For mobile, if DownloadView has 3 cards, auto-fit might make it 1 column */
    /* If 2 columns are still desired for 3 items, you might need to adjust minmax or use repeat(2,1fr) */
    /* Keeping auto-fit for now, it will likely go single column with 3 items */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .downloads-section > .container > h2 {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
  .download-card {
    padding: 1.5rem;
  }
  .download-card h3 {
    font-size: 1.1rem;
  }
  .download-card p {
    font-size: 0.95rem;
    margin-bottom: 1rem; /* Adjust for mobile */
  }
  /* Added styles based on HomeView mobile */
  .download-icon {
    font-size: 2.5rem; /* Slightly smaller icon */
    margin-bottom: 0.8rem;
  }
  .download-meta {
    font-size: 0.8rem; /* Smaller meta text */
    margin-bottom: 1rem; /* Reduced bottom margin */
  }
  .btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

.disclaimer-section {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #666;
  text-align: left;
  padding: 1rem;
  background-color: #f9f9f9;
  border-left: 4px solid #a08ee6; /* Using a theme color for the border */
}

.disclaimer-section p strong {
  display: block;
  margin-bottom: 0.5rem;
  color: #5b4b8a; /* Darker purple for the title */
}
</style> 