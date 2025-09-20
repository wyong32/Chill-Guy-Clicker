<template>
  <div class="copyright-page">
    <div class="container">
      <h1 class="page-title">{{ $t('copyright.title') }}</h1>

      <div class="copyright-content">
        <div class="copyright-section">
          <p class="last-updated">{{ $t('copyright.lastUpdated') }}</p>

          <p v-html="$t('copyright.intro')"></p>

          <h2>{{ $t('copyright.ownership.title') }}</h2>
          <p v-html="$t('copyright.ownership.description')"></p>

          <h2>{{ $t('copyright.usage.title') }}</h2>
          <p v-html="$t('copyright.usage.description')"></p>

          <h3>{{ $t('copyright.usage.allowed.title') }}</h3>
          <ul class="usage-list">
            <li>{{ $t('copyright.usage.allowed.item1') }}</li>
            <li>{{ $t('copyright.usage.allowed.item2') }}</li>
            <li>{{ $t('copyright.usage.allowed.item3') }}</li>
            <li>{{ $t('copyright.usage.allowed.item4') }}</li>
          </ul>

          <h3>{{ $t('copyright.usage.prohibited.title') }}</h3>
          <ul class="usage-list">
            <li>{{ $t('copyright.usage.prohibited.item1') }}</li>
            <li>{{ $t('copyright.usage.prohibited.item2') }}</li>
            <li>{{ $t('copyright.usage.prohibited.item3') }}</li>
            <li>{{ $t('copyright.usage.prohibited.item4') }}</li>
            <li>{{ $t('copyright.usage.prohibited.item5') }}</li>
          </ul>

          <h2>{{ $t('copyright.thirdParty.title') }}</h2>
          <p v-html="$t('copyright.thirdParty.description')"></p>

          <div class="copyright-footer">
            <p>
              © {{ currentYear }} cookingdom.co
              {{ $t('copyright.allRightsReserved') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { updateMetaTag } from '@/utils/head'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 获取当前年份用于版权信息
const currentYear = new Date().getFullYear()

// Update meta tags when component mounts
onMounted(() => {
  document.title = t('meta.copyright.title')
  updateMetaTag('description', t('meta.copyright.description'))
  updateMetaTag('keywords', t('meta.copyright.keywords'))
})
</script>

<style scoped>
.copyright-page {
  padding: 2rem 0 4rem;
  background-color: #f9f9f9;
  min-height: calc(100vh - 300px);
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-title {
  font-size: 2.2rem;
  color: #5b4b8a;
  text-align: center;
  margin-bottom: 2rem;
}

.copyright-content {
  display: flex;
  flex-direction: column;
}

.copyright-section {
  background-color: #fff;
  border-radius: 8px;
  padding: 2.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  line-height: 1.6;
}

.last-updated {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.copyright-section h2 {
  color: #5b4b8a;
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.copyright-section h2:first-of-type {
  margin-top: 1rem;
}

.copyright-section h3 {
  color: #5b4b8a;
  font-size: 1.2rem;
  margin: 1.5rem 0 0.8rem;
}

.copyright-section p {
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 1rem;
}

.usage-list {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.usage-list li {
  margin-bottom: 0.7rem;
  font-size: 1rem;
  color: #444;
}

.copyright-footer {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  text-align: center;
  color: #777;
  font-size: 0.9rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .page-title {
    font-size: 1.8rem;
  }

  .copyright-section {
    padding: 1.5rem;
  }

  .copyright-section h2 {
    font-size: 1.3rem;
  }

  .copyright-section h3 {
    font-size: 1.1rem;
  }

  .copyright-section p {
    font-size: 0.95rem;
  }

  .usage-list li {
    font-size: 0.95rem;
  }
}
</style>
