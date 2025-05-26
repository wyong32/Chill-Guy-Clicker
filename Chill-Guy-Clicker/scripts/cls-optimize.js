/**
 * CLS 优化脚本 - 进一步减少累积布局偏移
 */

// 在页面加载完成后运行的优化脚本
(function() {
  'use strict';

  // 等待 DOM 加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCLSOptimizations);
  } else {
    initCLSOptimizations();
  }

  function initCLSOptimizations() {
    // 1. 预设图片尺寸
    presetImageDimensions();

    // 2. 系统字体优化
    optimizeSystemFonts();

    // 3. 稳定化动态内容
    stabilizeDynamicContent();

    // 4. 监控布局偏移
    monitorLayoutShifts();
  }

  /**
   * 预设图片尺寸，防止图片加载导致的布局偏移
   */
  function presetImageDimensions() {
    const images = document.querySelectorAll('img:not([width]):not([height])');

    images.forEach(img => {
      // 为没有设置尺寸的图片添加默认尺寸
      if (!img.width && !img.height) {
        const container = img.closest('.game-preview, .lazy-image-container, .optimized-image-container');

        if (container) {
          const containerRect = container.getBoundingClientRect();
          if (containerRect.width > 0 && containerRect.height > 0) {
            img.style.width = containerRect.width + 'px';
            img.style.height = containerRect.height + 'px';
            img.style.objectFit = 'cover';
          }
        }
      }
    });
  }

  /**
   * 系统字体优化 - 参考 Cookingdom
   */
  function optimizeSystemFonts() {
    // 使用系统字体，无需字体加载优化
    // 系统字体天然稳定，零布局偏移
    document.body.classList.add('system-font-optimized');
    console.log('Using system fonts - zero layout shift from font loading');
  }

  /**
   * 稳定化动态内容
   */
  function stabilizeDynamicContent() {
    // 为动态内容容器设置最小高度
    const dynamicContainers = document.querySelectorAll(
      '.comment-section, .game-details, .footer-content, .game-sidebar'
    );

    dynamicContainers.forEach(container => {
      if (!container.style.minHeight) {
        const rect = container.getBoundingClientRect();
        if (rect.height > 0) {
          container.style.minHeight = rect.height + 'px';
        }
      }
    });

    // 使用 ResizeObserver 监控容器尺寸变化
    if ('ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
          const element = entry.target;
          const newHeight = entry.contentRect.height;

          // 如果高度变化超过阈值，更新最小高度
          if (Math.abs(newHeight - parseFloat(element.style.minHeight || 0)) > 50) {
            element.style.minHeight = newHeight + 'px';
          }
        });
      });

      dynamicContainers.forEach(container => {
        resizeObserver.observe(container);
      });
    }
  }

  /**
   * 监控布局偏移
   */
  function monitorLayoutShifts() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        let clsValue = 0;

        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }

        if (clsValue > 0) {
          console.log('Layout shift detected:', clsValue);

          // 在开发环境中显示详细信息
          if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.warn('CLS value:', clsValue);
            console.log('Layout shift entries:', list.getEntries());
          }
        }
      });

      observer.observe({ type: 'layout-shift', buffered: true });
    }
  }

  /**
   * 延迟加载非关键资源
   */
  function deferNonCriticalResources() {
    // 延迟加载非关键图片
    const nonCriticalImages = document.querySelectorAll('img[data-defer]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-defer');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px'
      });

      nonCriticalImages.forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  /**
   * 优化动画和过渡效果
   */
  function optimizeAnimations() {
    // 检查用户是否偏好减少动画
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // 禁用或减少动画
      document.body.classList.add('reduce-motion');

      // 添加 CSS 规则来减少动画
      const style = document.createElement('style');
      style.textContent = `
        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  /**
   * 预加载关键资源
   */
  function preloadCriticalResources() {
    const criticalImages = [
      '/images/logo.png',
      '/images/games/game-01.webp'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });
  }

  // 初始化所有优化
  setTimeout(() => {
    deferNonCriticalResources();
    optimizeAnimations();
    preloadCriticalResources();
  }, 100);

})();
