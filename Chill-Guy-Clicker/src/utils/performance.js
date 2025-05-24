/**
 * Performance optimization utility class
 * Used to detect device performance and provide corresponding optimization strategies
 */

export class PerformanceOptimizer {
  constructor() {
    this.deviceInfo = this.detectDevice()
    this.performanceLevel = this.calculatePerformanceLevel()
  }

  /**
   * Detect device information
   */
  detectDevice() {
    const userAgent = navigator.userAgent
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    const isTablet = /iPad|Android(?=.*Mobile)/i.test(userAgent)
    const isLowEndDevice = this.isLowEndDevice()

    return {
      isMobile,
      isTablet,
      isLowEndDevice,
      deviceMemory: navigator.deviceMemory || 4, // Default 4GB
      hardwareConcurrency: navigator.hardwareConcurrency || 4, // Default 4 cores
      connection: navigator.connection || { effectiveType: '4g' }
    }
  }

  /**
   * Detect if it's a low-end device
   */
  isLowEndDevice() {
    // Check device memory
    if (navigator.deviceMemory && navigator.deviceMemory < 4) {
      return true
    }

    // Check CPU cores
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      return true
    }

    // Check network connection
    if (navigator.connection) {
      const slowConnections = ['slow-2g', '2g', '3g']
      if (slowConnections.includes(navigator.connection.effectiveType)) {
        return true
      }
    }

    return false
  }

  /**
   * Calculate performance level
   * @returns {string} 'high' | 'medium' | 'low'
   */
  calculatePerformanceLevel() {
    const { isMobile, isLowEndDevice, deviceMemory, hardwareConcurrency } = this.deviceInfo

    // Low-end devices return low performance directly
    if (isLowEndDevice) {
      return 'low'
    }

    // High-end device detection
    if (!isMobile && deviceMemory >= 8 && hardwareConcurrency >= 8) {
      return 'high'
    }

    // Mid-range mobile devices
    if (isMobile && deviceMemory >= 6 && hardwareConcurrency >= 6) {
      return 'high'
    }

    // Default medium performance
    return 'medium'
  }

  /**
   * Get animation configuration
   */
  getAnimationConfig() {
    switch (this.performanceLevel) {
      case 'high':
        return {
          starCount: 1500,
          shootingStarCount: 10,
          frameRate: 60,
          enableGlow: true,
          enableComplexAnimations: true
        }
      case 'medium':
        return {
          starCount: 800,
          shootingStarCount: 5,
          frameRate: 30,
          enableGlow: false,
          enableComplexAnimations: true
        }
      case 'low':
        return {
          starCount: 400,
          shootingStarCount: 2,
          frameRate: 20,
          enableGlow: false,
          enableComplexAnimations: false
        }
      default:
        return this.getAnimationConfig.call({ performanceLevel: 'medium' })
    }
  }

  /**
   * Get image optimization configuration
   */
  getImageConfig() {
    const { isMobile, connection } = this.deviceInfo
    const isSlowConnection = connection && ['slow-2g', '2g', '3g'].includes(connection.effectiveType)

    return {
      useWebP: this.supportsWebP(),
      quality: isSlowConnection ? 'low' : isMobile ? 'medium' : 'high',
      lazyLoad: true,
      placeholder: true
    }
  }

  /**
   * Detect WebP support
   */
  supportsWebP() {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
  }

  /**
   * Debounce function
   */
  debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  /**
   * Throttle function
   */
  throttle(func, limit) {
    let inThrottle
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources(resources) {
    const config = this.getImageConfig()

    resources.forEach(resource => {
      if (resource.type === 'image') {
        const img = new Image()
        img.src = resource.src

        // Preload thumbnails in low quality mode
        if (config.quality === 'low' && resource.thumbnail) {
          const thumb = new Image()
          thumb.src = resource.thumbnail
        }
      } else if (resource.type === 'font') {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'font'
        link.type = 'font/woff2'
        link.crossOrigin = 'anonymous'
        link.href = resource.src
        document.head.appendChild(link)
      }
    })
  }



}

// Create global instance
export const performanceOptimizer = new PerformanceOptimizer()

// Export common optimization configurations
export const PERFORMANCE_CONFIG = {
  ANIMATION: performanceOptimizer.getAnimationConfig(),
  IMAGE: performanceOptimizer.getImageConfig(),
  DEVICE: performanceOptimizer.deviceInfo
}
