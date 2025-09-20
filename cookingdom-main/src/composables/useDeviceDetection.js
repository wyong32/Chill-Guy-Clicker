import { ref, onMounted, onUnmounted } from 'vue'

export function useDeviceDetection() {
  const isMobile = ref(false)

  const updateDeviceStatus = () => {
    if (typeof window !== 'undefined') {
      isMobile.value = window.innerWidth <= 767
    }
  }

  onMounted(() => {
    updateDeviceStatus()
    window.addEventListener('resize', updateDeviceStatus)
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateDeviceStatus)
    }
  })

  return { isMobile }
}
