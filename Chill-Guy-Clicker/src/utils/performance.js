/**
 * 性能优化工具类
 * 用于检测设备性能并提供相应的优化策略
 */

export class PerformanceOptimizer {
  constructor() {
    this.deviceInfo = this.detectDevice()
    this.performanceLevel = this.calculatePerformanceLevel()
  }

  /**
   * 检测设备信息
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
      deviceMemory: navigator.deviceMemory || 4, // 默认4GB
      hardwareConcurrency: navigator.hardwareConcurrency || 4, // 默认4核
      connection: navigator.connection || { effectiveType: '4g' }
    }
  }

  /**
   * 检测是否为低端设备
   */
  isLowEndDevice() {
    // 检查设备内存
    if (navigator.deviceMemory && navigator.deviceMemory < 4) {
      return true
    }

    // 检查CPU核心数
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      return true
    }

    // 检查网络连接
    if (navigator.connection) {
      const slowConnections = ['slow-2g', '2g', '3g']
      if (slowConnections.includes(navigator.connection.effectiveType)) {
        return true
      }
    }

    return false
  }

  /**
   * 计算性能等级
   * @returns {string} 'high' | 'medium' | 'low'
   */
  calculatePerformanceLevel() {
    const { isMobile, isLowEndDevice, deviceMemory, hardwareConcurrency } = this.deviceInfo

    // 低端设备直接返回低性能
    if (isLowEndDevice) {
      return 'low'
    }

    // 高端设备判断
    if (!isMobile && deviceMemory >= 8 && hardwareConcurrency >= 8) {
      return 'high'
    }

    // 中端移动设备
    if (isMobile && deviceMemory >= 6 && hardwareConcurrency >= 6) {
      return 'high'
    }

    // 默认中等性能
    return 'medium'
  }

  /**
   * 获取动画配置
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
   * 获取图片优化配置
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
   * 检测WebP支持
   */
  supportsWebP() {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
  }

  /**
   * 防抖函数
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
   * 节流函数
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
   * 预加载关键资源
   */
  preloadCriticalResources(resources) {
    const config = this.getImageConfig()

    resources.forEach(resource => {
      if (resource.type === 'image') {
        const img = new Image()
        img.src = resource.src

        // 如果是低质量模式，可以预加载缩略图
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

// 创建全局实例
export const performanceOptimizer = new PerformanceOptimizer()

// 导出常用的优化配置
export const PERFORMANCE_CONFIG = {
  ANIMATION: performanceOptimizer.getAnimationConfig(),
  IMAGE: performanceOptimizer.getImageConfig(),
  DEVICE: performanceOptimizer.deviceInfo
}
