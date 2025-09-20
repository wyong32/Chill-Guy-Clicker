<script setup>
// Import necessary components
import { RouterView } from 'vue-router'
import AppHeader from '@/components/Header.vue' // Header 保持同步加载，因为是首屏关键内容

// 不再懒加载Footer，避免布局偏移
import AppFooter from '@/components/Footer.vue'
</script>

<template>
  <div class="app-wrapper">
    <AppHeader />
    <main class="main-content-area">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure wrapper takes full viewport height */
}

.main-content-area {
  flex: 1; /* Allow main content to grow and push footer down */
  /* Add padding or other styles if needed */
  padding-top: 60px; /* Example: Adjust based on your header's height */
  min-height: 800px; /* 设置最小高度，防止内容加载时的布局偏移 */
  width: 100%; /* 确保宽度固定 */
  box-sizing: border-box; /* 确保padding不影响总宽度 */
}

@media (max-width: 767px) {
  .main-content-area {
    padding-top: 20px; /* Example: Adjust based on your header's height */
    min-height: 600px; /* 移动端减少最小高度 */
  }
}

/* 全局样式，确保所有图片都有占位符和固定尺寸 */
:deep(img) {
  background-color: #f0f0f0; /* 图片加载前的背景色 */
  transition: opacity 0.3s ease; /* 平滑过渡效果 */
}
</style>
