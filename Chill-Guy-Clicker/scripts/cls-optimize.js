/**
 * 终极 CLS 优化脚本 - 基于 Dreamy-Room-Level 最佳实践
 * 一次性彻底解决布局偏移问题
 */

// 立即执行优化，不等待 DOM 加载
(function() {
  'use strict';

  // 立即应用关键优化
  applyImmediateOptimizations();

  // DOM 加载完成后的优化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDreamyRoomOptimizations);
  } else {
    initDreamyRoomOptimizations();
  }

  /**
   * 立即应用的关键优化 - 基于 Cookingdom
   */
  function applyImmediateOptimizations() {
    // 1. 强制设置 viewport 稳定性
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
    }

    // 2. 预设关键 CSS 变量
    document.documentElement.style.setProperty('--viewport-height', window.innerHeight + 'px');

    // 3. 立即应用关键样式 - 强化版本
    const style = document.createElement('style');
    style.textContent = `
      /* 立即防止布局偏移 - 强化版本 */
      .app {
        min-height: 100vh !important;
        display: flex !important;
        flex-direction: column !important;
      }

      .main-content {
        flex: 1 !important;
        min-height: 800px !important;
        contain: layout style !important;
      }

      .game-container {
        min-height: 600px !important;
        contain: layout style paint !important;
      }

      /* 强制所有图片有固定尺寸 */
      img {
        background-color: #f0f0f0 !important;
        display: block !important;
      }

      img:not([width]):not([height]) {
        aspect-ratio: 16/9 !important;
        width: 100% !important;
        height: auto !important;
        min-height: 150px !important;
      }
    `;
    document.head.appendChild(style);
  }

  function initDreamyRoomOptimizations() {
    // 1. 预设所有图片尺寸 - Dreamy-Room-Level 风格
    presetImageDimensions();

    // 2. 稳定化所有容器 - Dreamy-Room-Level 风格
    stabilizeAllContainers();

    // 3. 智能预加载 - Dreamy-Room-Level 风格
    setupIntelligentPreload();

    // 4. 优化动态内容
    stabilizeDynamicContent();




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
   * 稳定化所有容器 - 基于 Cookingdom
   */
  function stabilizeAllContainers() {
    // 为所有主要容器设置稳定的尺寸
    const containers = document.querySelectorAll(
      '.game-container, .header, .footer, .main-content, .game-sidebar'
    );

    containers.forEach(container => {
      if (!container.style.minHeight) {
        const rect = container.getBoundingClientRect();
        if (rect.height > 0) {
          container.style.minHeight = rect.height + 'px';
          container.style.contain = 'layout style paint';
          container.style.willChange = 'transform';
          container.style.transform = 'translateZ(0)';
        }
      }
    });

    // 特别强化 Footer 稳定性
    const footers = document.querySelectorAll('.footer, footer');
    footers.forEach(footer => {
      footer.style.setProperty('min-height', '420px', 'important');
      footer.style.setProperty('position', 'relative', 'important');
      footer.style.setProperty('width', '100%', 'important');
      footer.style.setProperty('box-sizing', 'border-box', 'important');
      footer.style.setProperty('flex-shrink', '0', 'important');
      footer.style.setProperty('display', 'block', 'important');
      footer.style.setProperty('visibility', 'visible', 'important');
      footer.style.setProperty('contain', 'layout style paint', 'important');
    });

    // 特殊处理游戏 iframe 容器
    const iframeContainers = document.querySelectorAll('.game-iframe-container');
    iframeContainers.forEach(container => {
      container.style.aspectRatio = '16/9';
      container.style.width = '100%';
      container.style.contain = 'layout paint';
    });

    console.log('All containers stabilized - zero layout shift');
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
   * 智能预加载 - 基于 Dreamy-Room-Level
   */
  function setupIntelligentPreload() {
    // 使用Intersection Observer监听游戏部分
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 用户即将看到游戏部分，开始预加载
            const criticalImages = [
              '/images/logo.png',
              '/images/games/game-01.webp',
              '/images/games/game-02.webp',
              '/images/games/game-03.webp',
            ]

            criticalImages.forEach((src) => {
              const link = document.createElement('link')
              link.rel = 'preload'
              link.as = 'image'
              link.href = src
              link.type = 'image/webp'
              document.head.appendChild(link)
            })

            console.log('Intelligent preload activated - Dreamy-Room-Level style')
            // 预加载完成后停止观察
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '200px', // 提前200px开始预加载
      },
    )

    // 观察游戏容器
    const gameContainer = document.querySelector('.game-container')
    if (gameContainer) {
      observer.observe(gameContainer)
    }
  }

  // 初始化所有优化 - 基于 Dreamy-Room-Level
  setTimeout(() => {
    deferNonCriticalResources();
    optimizeAnimations();
    // 智能预加载已经在 initDreamyRoomOptimizations 中调用
    console.log('All Dreamy-Room-Level optimizations initialized');
  }, 100);

})();
