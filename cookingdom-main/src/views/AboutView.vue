<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">{{ $t('about.title') }}</h1>

      <div class="about-content">
        <div class="about-section">
          <h2>{{ $t('about.whoWeAre.title') }}</h2>
          <!-- 暂时移除图片引用，因为图片文件不存在 -->
          <div class="about-team-message">
            <p>{{ $t('about.whoWeAre.teamMessage') }}</p>
          </div>
          <p v-html="$t('about.whoWeAre.description')"></p>
        </div>

        <div class="about-section">
          <h2>{{ $t('about.ourMission.title') }}</h2>
          <p v-html="$t('about.ourMission.description')"></p>
        </div>

        <div class="about-section">
          <h2>{{ $t('about.ourValues.title') }}</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">🌟</div>
              <h3>{{ $t('about.ourValues.quality.title') }}</h3>
              <p>{{ $t('about.ourValues.quality.description') }}</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h3>{{ $t('about.ourValues.community.title') }}</h3>
              <p>{{ $t('about.ourValues.community.description') }}</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🎮</div>
              <h3>{{ $t('about.ourValues.fun.title') }}</h3>
              <p>{{ $t('about.ourValues.fun.description') }}</p>
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
  document.title = t('meta.about.title')
  updateMetaTag('description', t('meta.about.description'))
  updateMetaTag('keywords', t('meta.about.keywords'))
})
</script>

<style scoped>
.about-page {
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

.about-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.about-section {
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.about-section h2 {
  color: #a08ee6;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #f0eaff;
  padding-bottom: 0.5rem;
}

.about-team-message {
  width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background-color: #f0eaff;
  padding: 1.5rem;
  text-align: center;
}

.about-team-message p {
  font-size: 1.2rem;
  font-weight: 600;
  color: #5b4b8a;
  margin: 0;
}

.about-section p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.value-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  color: #5b4b8a;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.value-card p {
  font-size: 1rem;
  color: #666;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
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

  .about-section {
    padding: 1.5rem;
  }

  .about-section h2 {
    font-size: 1.5rem;
  }

  .about-section p {
    font-size: 1rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .social-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .social-link {
    width: 80%;
    text-align: center;
  }
}
</style>
