<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="static-page">
    <h1>{{ t('page.privacy.title') }}</h1>
    <p>
      <em>{{ t('page.privacy.lastUpdated') }}</em>
    </p>

    <p>{{ t('page.privacy.intro') }}</p>

    <h2>{{ t('page.privacy.section1.title') }}</h2>
    <p>{{ t('page.privacy.section1.p1') }}</p>
    <p>{{ t('page.privacy.section1.p2') }}</p>

    <h2>{{ t('page.privacy.section2.title') }}</h2>
    <p>{{ t('page.privacy.section2.intro') }}</p>
    <ul>
      <li>{{ t('page.privacy.section2.b1') }}</li>
      <li>{{ t('page.privacy.section2.b2') }}</li>
      <li>{{ t('page.privacy.section2.b3') }}</li>
      <li>{{ t('page.privacy.section2.b4') }}</li>
    </ul>

    <h2>{{ t('page.privacy.section3.title') }}</h2>
    <p>{{ t('page.privacy.section3.p1') }}</p>

    <h2>{{ t('page.privacy.section4.title') }}</h2>
    <p>{{ t('page.privacy.section4.intro') }}</p>
    <ul>
      <li>{{ t('page.privacy.section4.b1') }}</li>
      <li>{{ t('page.privacy.section4.b2') }}</li>
    </ul>

    <h2>{{ t('page.privacy.section5.title') }}</h2>
    <p>{{ t('page.privacy.section5.p1') }}</p>

    <h2>{{ t('page.privacy.section6.title') }}</h2>
    <p>{{ t('page.privacy.section6.p1') }}</p>

    <h2>{{ t('page.privacy.section7.title') }}</h2>
    <p>{{ t('page.privacy.section7.p1') }}</p>

    <h2>{{ t('page.privacy.section8.title') }}</h2>
    <p>{{ t('page.privacy.section8.p1') }}</p>

    <h2>{{ t('page.privacy.section9.title') }}</h2>
    <p>{{ t('page.privacy.section9.p1') }}</p>
    <p>Email: maieldilmie223321@gmail.com</p>
  </div>
</template>

<style scoped>
.static-page {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem 2rem; /* Added horizontal padding */
  line-height: 1.6;
  color: #333; /* Adjust text color if needed */
}

.static-page h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #5b4b8a; /* Match footer primary color? */
}

.static-page h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #a08ee6; /* Match footer border? */
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