/**
 * AdSense 辅助工具
 * 提供稳定的广告加载和错误处理机制
 */

export class AdSenseHelper {
  constructor() {
    this.isInitialized = false
    this.loadAttempts = 0
    this.maxAttempts = 3
    this.retryDelay = 1000
  }

  /**
   * 检查AdSense脚本是否已加载
   */
  isAdSenseLoaded() {
    return typeof window.adsbygoogle !== 'undefined' && window.adsbygoogle !== null
  }

  /**
   * 安全地推送广告配置
   */
  pushAd(element) {
    if (!this.isAdSenseLoaded()) {
      return false
    }

    try {
      // 检查元素是否已经被处理
      if (this.isAdProcessed(element)) {
        return true
      }

      // 推送广告配置
      (window.adsbygoogle = window.adsbygoogle || []).push({})
      return true
    } catch (error) {
      console.warn('AdSense push failed:', error.message)
      return false
    }
  }

  /**
   * 检查广告元素是否已被处理
   */
  isAdProcessed(element) {
    return (
      element.getAttribute('data-adsbygoogle-status') === 'done' ||
      element.getAttribute('data-ad-status') === 'filled' ||
      element.querySelector('iframe') !== null ||
      element.children.length > 0
    )
  }

  /**
   * 批量加载页面上的所有广告
   */
  loadAllAds() {
    if (!this.isAdSenseLoaded()) {
      return false
    }

    const adElements = document.querySelectorAll('.adsbygoogle')
    let processedCount = 0

    adElements.forEach((element, index) => {
      if (!this.isAdProcessed(element)) {
        // 为避免同时处理太多广告，添加延迟
        setTimeout(() => {
          if (this.pushAd(element)) {
            processedCount++
          }
        }, index * 150) // 每个广告间隔150ms
      }
    })

    return processedCount > 0
  }

  /**
   * 等待AdSense脚本加载并初始化广告
   */
  initializeAds(callback = null) {
    const checkAndLoad = () => {
      if (this.isAdSenseLoaded()) {
        // AdSense已加载，延迟一下再加载广告
        setTimeout(() => {
          this.loadAllAds()
          this.isInitialized = true
          if (callback) callback(true)
        }, 500)
      } else if (this.loadAttempts < this.maxAttempts) {
        // 继续等待
        this.loadAttempts++
        setTimeout(checkAndLoad, this.retryDelay)
      } else {
        // 超过最大尝试次数
        console.warn('AdSense script failed to load after maximum attempts')
        if (callback) callback(false)
      }
    }

    // 重置计数器并开始检查
    this.loadAttempts = 0
    setTimeout(checkAndLoad, 200)
  }

  /**
   * 刷新广告（用于路由变化等场景）
   */
  refreshAds() {
    if (!this.isAdSenseLoaded()) {
      return false
    }

    // 延迟一段时间再刷新，确保DOM稳定
    setTimeout(() => {
      this.loadAllAds()
    }, 800)

    return true
  }

  /**
   * 页面可见性变化时的处理
   */
  handleVisibilityChange() {
    if (!document.hidden && this.isAdSenseLoaded()) {
      setTimeout(() => {
        this.loadAllAds()
      }, 600)
    }
  }
}

// 创建全局实例
export const adSenseHelper = new AdSenseHelper()

// 默认导出
export default adSenseHelper