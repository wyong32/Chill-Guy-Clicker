<template>
  <div class="contact-page">
    <div class="container">
      <h1 class="page-title">{{ $t('contact.title') }}</h1>

      <div class="contact-content">
        <div class="contact-info-section">
          <h2>{{ $t('contact.getInTouch.title') }}</h2>
          <p v-html="$t('contact.getInTouch.description')"></p>

          <div class="contact-methods">
            <div class="contact-method">
              <div class="contact-icon">📧</div>
              <h3>Email</h3>
              <p>delldremo9898@gmail.com</p>
            </div>

            <!-- <div class="contact-method">
              <div class="contact-icon">💬</div>
              <h3>{{ $t('contact.methods.discord.title') }}</h3>
              <p>{{ $t('contact.methods.discord.value') }}</p>
            </div>

            <div class="contact-method">
              <div class="contact-icon">🐦</div>
              <h3>{{ $t('contact.methods.twitter.title') }}</h3>
              <p>{{ $t('contact.methods.twitter.value') }}</p>
            </div> -->
          </div>
        </div>

        <div class="faq-section">
          <h2>{{ $t('contact.faq.title') }}</h2>

          <div class="faq-items">
            <div class="faq-item">
              <h3>{{ $t('contact.faq.q1.question') }}</h3>
              <p>{{ $t('contact.faq.q1.answer') }}</p>
            </div>

            <div class="faq-item">
              <h3>{{ $t('contact.faq.q2.question') }}</h3>
              <p>{{ $t('contact.faq.q2.answer') }}</p>
            </div>

            <div class="faq-item">
              <h3>{{ $t('contact.faq.q3.question') }}</h3>
              <p>{{ $t('contact.faq.q3.answer') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { updateMetaTag } from '@/utils/head'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Update meta tags when component mounts
onMounted(() => {
  document.title = t('meta.contact.title')
  updateMetaTag('description', t('meta.contact.description'))
  updateMetaTag('keywords', t('meta.contact.keywords'))
})
</script>

<style scoped>
.contact-page {
  padding: 2rem 0 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-title {
  font-size: 2.5rem;
  color: #5b4b8a;
  text-align: center;
  margin-bottom: 2rem;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.contact-info-section,
.faq-section,
.community-section {
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.contact-info-section h2,
.faq-section h2,
.community-section h2 {
  color: #a08ee6;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #f0eaff;
  padding-bottom: 0.5rem;
}

.contact-info-section p,
.faq-section p,
.community-section p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.5rem;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.contact-method {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-method:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.contact-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-method h3 {
  color: #5b4b8a;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.contact-method p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0;
}

.faq-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-3px);
}

.faq-item h3 {
  color: #5b4b8a;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
}

.faq-item p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0;
}

.community-message {
  width: 100%;
  margin: 1.5rem 0;
  border-radius: 8px;
  background-color: #f0eaff;
  padding: 1.5rem;
  text-align: center;
}

.community-message p {
  font-size: 1.2rem;
  font-weight: 600;
  color: #5b4b8a;
  margin: 0;
}

.social-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #a08ee6;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.social-link:hover {
  background-color: #8a78d2;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .contact-info-section,
  .faq-section,
  .community-section {
    padding: 1.5rem;
  }

  .contact-info-section h2,
  .faq-section h2,
  .community-section h2 {
    font-size: 1.5rem;
  }

  .contact-info-section p,
  .faq-section p,
  .community-section p {
    font-size: 1rem;
  }

  .contact-methods {
    grid-template-columns: 1fr;
  }

  .social-links {
    flex-direction: column;
    align-items: center;
  }

  .social-link {
    width: 80%;
    text-align: center;
  }
}
</style>
