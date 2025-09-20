<script setup>
import { onMounted } from 'vue'
import { useDeviceDetection } from '@/composables/useDeviceDetection'
// No script logic needed for now, just displaying static content
// Version and size are now directly in i18n files

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
  <div class="mod-download-main-with-ads">
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
      <div class="mod-download-page-view download-page-view">
        <section class="mod-content-section">
          <div class="container">
            <div class="section-header">
              <h1>{{ $t('modDownload.pageHeadline') }}</h1>
            </div>
            <p class="page-intro">{{ $t('modDownload.pageIntro') }}</p>

            <!-- Main Mod Download Card -->
            <div class="main-mod-card">
              <div class="card-header">
                <span class="mod-icon">✨</span>
                <h3>{{ $t('modDownload.mainMod.title') }}</h3>
              </div>
              <p>{{ $t('modDownload.mainMod.description') }}</p>

              <div class="mod-features-box">
                <h4>{{ $t('modDownload.modInfo.title') }}</h4>
                <ul>
                  <li v-for="feature in $tm('modDownload.modInfo.features')" :key="feature">
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <div class="download-meta-detailed">
                <span>{{ $t('modDownload.mainMod.meta.type') }}</span>
                <span>{{ $t('modDownload.mainMod.meta.size') }}</span>
              </div>
              <a
                :href="$t('modDownload.mainMod.downloadLink')"
                class="btn btn-download btn-prominent"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('modDownload.mainMod.button') }}
              </a>
            </div>

            <!-- APK Details Section -->
            <div class="details-section apk-details-section">
              <h2>{{ $t('modDownload.apkDetails.title') }}</h2>
              <ul>
                <li>
                  <strong>{{ $t('modDownload.apkDetails.version') }}:</strong>
                  {{ $t('modDownload.apkDetails.versionValue') }}
                </li>
                <li>
                  <strong>{{ $t('modDownload.apkDetails.lastUpdated') }}:</strong>
                  {{ $t('modDownload.apkDetails.lastUpdatedValue') }}
                </li>
                <li>
                  <strong>{{ $t('modDownload.apkDetails.size') }}:</strong>
                  {{ $t('modDownload.apkDetails.sizeValue') }}
                </li>
                <li>
                  <strong>{{ $t('modDownload.apkDetails.price') }}:</strong>
                  {{ $t('modDownload.apkDetails.priceValue') }}
                </li>
                <li>
                  <strong>{{ $t('modDownload.apkDetails.category') }}:</strong>
                  {{ $t('modDownload.apkDetails.categoryValue') }}
                </li>
                <li>
                  <strong>{{ $t('modDownload.apkDetails.contentRating') }}:</strong>
                  {{ $t('modDownload.apkDetails.contentRatingValue') }}
                </li>
                <li>
                  <strong>{{ $t('modDownload.apkDetails.supportAndroid') }}:</strong>
                  {{ $t('modDownload.apkDetails.supportAndroidValue') }}
                </li>
                <li>
                  <strong>{{ $t('modDownload.apkDetails.appPackage') }}:</strong>
                  {{ $t('modDownload.apkDetails.appPackageValue') }}
                </li>
                <li>
                  <strong>{{ $t('modDownload.apkDetails.rootRequired') }}:</strong>
                  {{ $t('modDownload.apkDetails.rootRequiredValue') }}
                </li>
                <li>
                  <strong>{{ $t('modDownload.apkDetails.inAppPurchases') }}:</strong>
                  {{ $t('modDownload.apkDetails.inAppPurchasesValue') }}
                </li>
              </ul>
            </div>

            <!-- Other Download Links Section -->
            <div class="details-section other-links-section">
              <h2>{{ $t('modDownload.otherLinks.title') }}</h2>
              <div class="other-links-grid">
                <a
                  :href="$t('modDownload.otherLinks.originalApk.link')"
                  class="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ $t('modDownload.otherLinks.originalApk.text') }}</a
                >
                <a
                  :href="$t('modDownload.otherLinks.googlePlay.link')"
                  class="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ $t('modDownload.otherLinks.googlePlay.text') }}</a
                >
              </div>
            </div>

            <!-- All Versions Section -->
            <div class="details-section all-versions-section">
              <h2>{{ $t('modDownload.allVersions.title') }}</h2>
              <ul>
                <li v-for="version in $tm('modDownload.allVersions.versions')" :key="version.name">
                  <a :href="version.link" target="_blank" rel="noopener noreferrer">{{
                    version.name
                  }}</a>
                  ({{ version.size }})
                </li>
              </ul>
            </div>

            <!-- Developer Description Section -->
            <div class="details-section developer-description-section">
              <h2>{{ $t('modDownload.developerDescription.title') }}</h2>
              <p>{{ $t('modDownload.developerDescription.text') }}</p>
            </div>
            <div class="disclaimer-section">
              <p>
                <strong>{{ $t('modDownload.disclaimerTitle') }}</strong>
                {{ $t('modDownload.disclaimerBody') }}
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
/* General page view class for consistent padding/margin */
.download-page-view {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 20px auto;
  color: #333; /* General text color */
}

.mod-content-section {
  padding: 2rem 0;
  text-align: center;
}

.mod-content-section .container {
  max-width: 900px; /* Slightly wider for more content */
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  margin-bottom: 1rem;
}

.section-header h1 {
  font-size: 2.2rem;
  color: #5b4b8a; /* Darker purple */
  margin-bottom: 0.5rem;
}

.page-intro {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

/* Main Mod Card Styling */
.main-mod-card {
  background-color: #ffffff;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(160, 142, 230, 0.15);
  text-align: left; /* Align text to left for better readability */
  margin-bottom: 3rem;
  border: 1px solid #e8dff5;
}

.main-mod-card .card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.main-mod-card .mod-icon {
  font-size: 2.5rem;
  margin-right: 1rem;
  color: #ff85a2; /* Accent color */
}

.main-mod-card h3 {
  font-size: 1.8rem;
  color: #5b4b8a;
  margin: 0;
}

.main-mod-card > p {
  /* Direct P child for description */
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.mod-features-box {
  background-color: #f9f7ff; /* Light lavender background */
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px dashed #d1c4e9;
}

.mod-features-box h4 {
  font-size: 1.1rem;
  color: #5b4b8a;
  margin-top: 0;
  margin-bottom: 0.8rem;
}

.mod-features-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mod-features-box li {
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 0.4rem;
  padding-left: 1.2em;
  position: relative;
}
.mod-features-box li::before {
  content: '✓'; /* Checkmark icon */
  position: absolute;
  left: 0;
  color: #81c784; /* Green checkmark */
  font-weight: bold;
}

.download-meta-detailed {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1.5rem; /* Space between type and size */
}
.download-meta-detailed span {
  background-color: #eee;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
}

.btn-prominent {
  font-size: 1.1rem !important;
  padding: 0.9rem 2rem !important;
  background-color: #ff85a2 !important; /* Kawaii pink */
  color: white !important;
  display: block; /* Make it full width in its context */
  text-align: center;
  margin-bottom: 1rem;
}
.btn-prominent:hover {
  background-color: #f76d91 !important; /* Darker pink */
}

.source-reference {
  font-size: 0.85rem;
  color: #888;
  text-align: center;
  margin-top: 1.5rem;
}
.source-reference a {
  color: #a08ee6;
  text-decoration: underline;
}

/* Details Sections (APK, Other Links, All Versions) */
.details-section {
  background-color: #fdfcff; /* Very light purple/off-white */
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;
  border: 1px solid #eee;
}

.details-section h2 {
  font-size: 1.5rem;
  color: #5b4b8a;
  margin-top: 0;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
}

.details-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.details-section li {
  font-size: 0.95rem;
  color: #454545;
  margin-bottom: 0.6rem;
  line-height: 1.5;
}
.details-section li strong {
  color: #333;
  margin-right: 0.5em;
}

.other-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.all-versions-section li a {
  color: #a08ee6;
  text-decoration: none;
  font-weight: 500;
}
.all-versions-section li a:hover {
  text-decoration: underline;
  color: #5b4b8a;
}

.developer-description-section p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #555;
}

/* General Button Styles (copied & adapted if needed) */
.btn {
  display: inline-block;
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-decoration: none;
  color: white; /* Default button text color */
}

.btn-download {
  /* Base download button style */
  background-color: #a08ee6; /* Purple */
}
.btn-download:hover {
  background-color: #8a75c4; /* Darker purple */
  transform: translateY(-2px);
}

.btn-secondary {
  /* For less prominent buttons like original APK */
  background-color: #b0bec5; /* Greyish */
  color: #37474f;
}
.btn-secondary:hover {
  background-color: #90a4ae;
  transform: translateY(-2px);
}

/* Style for buttons in Other Download Options to be more vibrant with two colors */
.other-links-section .other-links-grid a.btn:nth-child(1) {
  background-color: #64d8cb; /* Vibrant teal/cyan for the first button */
  color: white;
}

.other-links-section .other-links-grid a.btn:nth-child(1):hover {
  background-color: #50c1b3; /* Slightly darker teal/cyan on hover */
}

.other-links-section .other-links-grid a.btn:nth-child(2) {
  background-color: #ffab73; /* Vibrant orange for the second button */
  color: white;
}

.other-links-section .other-links-grid a.btn:nth-child(2):hover {
  background-color: #ff9248; /* Slightly darker orange on hover */
}

/* Responsive */
@media (max-width: 767px) {
  .download-page-view {
    padding: 20px 10px;
  }
  .mod-content-section .container {
    padding: 0 0.5rem;
  }
  .section-header h1 {
    font-size: 1.8rem;
  }
  .page-intro {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  .main-mod-card {
    padding: 1.5rem;
  }
  .main-mod-card h3 {
    font-size: 1.5rem;
  }
  .main-mod-card .mod-icon {
    font-size: 2rem;
  }
  .mod-features-box {
    padding: 0.8rem;
  }
  .mod-features-box h4 {
    font-size: 1rem;
  }
  .mod-features-box li {
    font-size: 0.9rem;
  }
  .btn-prominent {
    font-size: 1rem !important;
    padding: 0.8rem 1.5rem !important;
  }
  .details-section {
    padding: 1rem;
  }
  .details-section h2 {
    font-size: 1.3rem;
  }
  .details-section li {
    font-size: 0.9rem;
  }
  .other-links-grid {
    grid-template-columns: 1fr; /* Stack buttons on mobile */
  }
}

.disclaimer-section {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #666;
  text-align: left;
  padding: 1rem;
  background-color: #f9f9f9;
  border-left: 4px solid #ff85a2; /* Using a theme accent color for the border */
  border-radius: 4px;
}

.disclaimer-section p strong {
  display: block;
  margin-bottom: 0.5rem;
  color: #5b4b8a; /* Darker purple for the title, consistent with other headers */
}
</style> 