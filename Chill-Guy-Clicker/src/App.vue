<template>
  <div class="app">
    <!-- 添加星空背景到所有页面 -->
    <StarryBackground />
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import StarryBackground from '@/components/StarryBackground.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    StarryBackground
  },
}
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}
</style>
