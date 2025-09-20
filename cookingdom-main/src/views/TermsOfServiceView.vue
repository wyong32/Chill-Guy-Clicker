<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="static-page">
    <h1>{{ t('page.terms.title') }}</h1>
    <p>
      <em>{{ t('page.terms.lastUpdated') }}</em>
    </p>

    <p>{{ t('page.terms.intro') }}</p>

    <h2>{{ t('page.terms.section1.title') }}</h2>
    <p>{{ t('page.terms.section1.p1') }}</p>

    <h2>{{ t('page.terms.section2.title') }}</h2>
    <p>{{ t('page.terms.section2.p1') }}</p>

    <h2>{{ t('page.terms.section3.title') }}</h2>
    <p>{{ t('page.terms.section3.intro') }}</p>
    <ul>
      <li>{{ t('page.terms.section3.b1') }}</li>
      <li>{{ t('page.terms.section3.b2') }}</li>
      <li>{{ t('page.terms.section3.b3') }}</li>
    </ul>
    <p>{{ t('page.terms.section3.p1') }}</p>

    <h2>{{ t('page.terms.section4.title') }}</h2>
    <p>{{ t('page.terms.section4.p1') }}</p>
    <p>{{ t('page.terms.section4.p2') }}</p>

    <h2>{{ t('page.terms.section5.title') }}</h2>
    <p>{{ t('page.terms.section5.p1') }}</p>

    <h2>{{ t('page.terms.section6.title') }}</h2>
    <p>{{ t('page.terms.section6.p1') }}</p>

    <h2>{{ t('page.terms.section7.title') }}</h2>
    <p>{{ t('page.terms.section7.p1') }}</p>

    <h2>{{ t('page.terms.section8.title') }}</h2>
    <p>{{ t('page.terms.section8.p1') }}</p>

    <h2>{{ t('page.terms.section9.title') }}</h2>
    <p>{{ t('page.terms.section9.p1') }}</p>

    <h2>{{ t('page.terms.section10.title') }}</h2>
    <p>{{ t('page.terms.section10.p1') }}</p>

    <h2>{{ t('page.terms.section11.title') }}</h2>
    <p>{{ t('page.terms.section11.p1') }}</p>

    <h2>{{ t('page.terms.section12.title') }}</h2>
    <p>{{ t('page.terms.section12.p1') }}</p>
    <p>Email: maieldilmie223321@gmail.com</p>
  </div>
</template>

<style scoped>
/* Apply same styles as PrivacyPolicyView.vue */
.static-page {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  line-height: 1.6;
  color: #333;
}

.static-page h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #5b4b8a;
}

.static-page h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #a08ee6;
  color: #5b4b8a;
}

.static-page p {
  margin-bottom: 1rem;
}

.static-page ul {
  margin-left: 2rem;
  margin-bottom: 1rem;
}

.static-page em {
  display: block;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 0.9em;
  color: #666;
}
</style> 