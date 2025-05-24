<template>
  <div class="starry-background">
    <canvas ref="bgCanvas" class="bg-canvas"></canvas>
    <!-- <div class="performance-toggle" @click="togglePerformanceMode">
      <span v-if="highPerformance">切换到流畅模式</span>
      <span v-else>切换到更多星星模式</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'StarryBackground',
  data() {
    return {
      highPerformance: false,
      animationFrameId: null,
      lastFrameTime: 0,
      frameDelay: 66, // 限制帧率，约15fps，大幅减少CPU使用
      resizeObserver: null, // 用于监听文档高度变化
      documentHeight: 0, // 记录当前文档高度
    }
  },
  mounted() {
    // 检测设备性能
    this.detectPerformance()

    // 使用 Intersection Observer 检测组件是否可见
    this.setupVisibilityObserver()

    this.initBackground()

    // 设置一个定时器，每隔一段时间检查文档高度是否变化
    this.heightCheckInterval = setInterval(() => {
      const newHeight = Math.max(window.innerHeight, document.body.offsetHeight);
      if (Math.abs(newHeight - this.documentHeight) > 100) { // 如果高度变化超过100px
        this.documentHeight = newHeight;
        this.handleResize();
      }
    }, 2000); // 每2秒检查一次
  },
  methods: {
    setupVisibilityObserver() {
      // 使用 Intersection Observer 检测组件是否可见，优化性能
      if ('IntersectionObserver' in window) {
        this.visibilityObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // 组件可见时恢复动画
                if (!this.animationFrameId) {
                  this.initBackground()
                }
              } else {
                // 组件不可见时暂停动画
                if (this.animationFrameId) {
                  cancelAnimationFrame(this.animationFrameId)
                  this.animationFrameId = null
                }
              }
            })
          },
          { threshold: 0.1 }
        )

        this.visibilityObserver.observe(this.$el)
      }
    },
    detectPerformance() {
      // 更复杂的性能检测，考虑设备类型和硬件能力
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )

      // 检查是否是高端移动设备
      const isHighEndMobile = () => {
        // 检查设备内存（如果可用）
        if (navigator.deviceMemory) {
          return navigator.deviceMemory >= 4; // 4GB或更多内存被视为高端设备
        }

        // 检查逻辑处理器数量（如果可用）
        if (navigator.hardwareConcurrency) {
          return navigator.hardwareConcurrency >= 4; // 4核或更多被视为高端设备
        }

        // 如果无法确定，默认为低性能
        return false;
      }

      // 非移动设备或高端移动设备使用高性能模式
      this.highPerformance = !isMobile || isHighEndMobile();

      // 根据性能调整帧率
      if (!this.highPerformance) {
        this.frameDelay = 100; // 低性能设备使用10fps
      } else {
        this.frameDelay = 66; // 高性能设备使用15fps
      }
    },
    togglePerformanceMode() {
      this.highPerformance = !this.highPerformance

      // 重新初始化背景
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId)
      }
      this.$nextTick(() => {
        this.initBackground()
      })
    },
    initBackground() {
      const background = this.$refs.bgCanvas
      const bgCtx = background.getContext('2d')
      const width = window.innerWidth
      // 使用视口高度或文档高度中的较大值，确保背景覆盖整个页面
      const height = Math.max(window.innerHeight, document.body.offsetHeight)

      background.width = width
      background.height = height

      // 设置初始背景
      bgCtx.fillStyle = '#110E19'
      bgCtx.fillRect(0, 0, width, height)

      // 创建实体数组
      const entities = []

      // 增强版星星类 - 更小更清晰
      function Star(options) {
        // 星星大小更小，大部分是小点
        const sizeRandom = Math.random();
        if (sizeRandom > 0.98) {
          // 只有2%的星星稍大一点
          this.size = Math.random() * 0.8 + 1.2;
        } else if (sizeRandom > 0.85) {
          // 13%的星星中等大小
          this.size = Math.random() * 0.5 + 0.8;
        } else {
          // 85%的星星都是小点
          this.size = Math.random() * 0.4 + 0.4;
        }

        this.speed = Math.random() * 0.01 + 0.002; // 非常慢的移动速度，让星空看起来更稳定
        this.x = options.x;
        this.y = options.y;
        this.alpha = Math.random() * 0.2 + 0.8; // 高透明度，使星星更明亮
        this.alphaChange = Math.random() * 0.003 + 0.001; // 非常缓慢的闪烁

        // 所有星星都是圆形，不再使用不同形状

        // 添加颜色变化 - 更鲜明的颜色
        this.colorType = Math.floor(Math.random() * 10); // 0-9的随机数决定颜色类型
        if (this.colorType < 7) {
          // 70%的星星是纯白色
          this.color = 'rgb(255, 255, 255)';
          this.glowColor = 'rgba(255, 255, 255, 0.08)';
        } else if (this.colorType < 9) {
          // 20%的星星是淡蓝色
          this.color = 'rgb(240, 248, 255)';
          this.glowColor = 'rgba(200, 230, 255, 0.08)';
        } else {
          // 10%的星星是淡黄色
          this.color = 'rgb(255, 255, 240)';
          this.glowColor = 'rgba(255, 255, 200, 0.08)';
        }
      }

      Star.prototype.reset = function () {
        // 星星大小更小，大部分是小点
        const sizeRandom = Math.random();
        if (sizeRandom > 0.98) {
          // 只有2%的星星稍大一点
          this.size = Math.random() * 0.8 + 1.2;
        } else if (sizeRandom > 0.85) {
          // 13%的星星中等大小
          this.size = Math.random() * 0.5 + 0.8;
        } else {
          // 85%的星星都是小点
          this.size = Math.random() * 0.4 + 0.4;
        }

        this.speed = Math.random() * 0.01 + 0.002; // 非常慢的移动速度
        this.x = width;
        this.y = Math.random() * height;
        this.alpha = Math.random() * 0.2 + 0.8; // 高透明度
        this.alphaChange = Math.random() * 0.003 + 0.001; // 非常缓慢的闪烁

        // 所有星星都是圆形，不再使用不同形状

        // 重置颜色
        this.colorType = Math.floor(Math.random() * 10);
        if (this.colorType < 7) {
          // 70%的星星是纯白色
          this.color = 'rgb(255, 255, 255)';
          this.glowColor = 'rgba(255, 255, 255, 0.08)';
        } else if (this.colorType < 9) {
          // 20%的星星是淡蓝色
          this.color = 'rgb(240, 248, 255)';
          this.glowColor = 'rgba(200, 230, 255, 0.08)';
        } else {
          // 10%的星星是淡黄色
          this.color = 'rgb(255, 255, 240)';
          this.glowColor = 'rgba(255, 255, 200, 0.08)';
        }
      }

      Star.prototype.update = function () {
        this.x -= this.speed

        // 简单的闪烁效果
        this.alpha += this.alphaChange
        if (this.alpha > 1 || this.alpha < 0.7) {
          this.alphaChange = -this.alphaChange
        }

        if (this.x < 0) {
          this.reset()
        } else {
          // 设置全局透明度
          bgCtx.globalAlpha = this.alpha;

          // 只对较大的星星绘制非常淡的光晕
          if (this.size > 0.8) {
            bgCtx.beginPath();
            bgCtx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
            bgCtx.fillStyle = this.glowColor;
            bgCtx.fill();
          }

          // 所有星星都使用圆形 - 更清晰锐利
          bgCtx.fillStyle = this.color;
          bgCtx.beginPath();

          // 使用整数坐标和大小，避免抗锯齿导致的模糊
          const x = Math.round(this.x);
          const y = Math.round(this.y);
          const radius = Math.max(0.5, this.size / 2); // 最小半径0.5像素

          bgCtx.arc(x, y, radius, 0, Math.PI * 2);
          bgCtx.fill();

          // 重置全局透明度
          bgCtx.globalAlpha = 1;
        }
      }

      // 增强版流星类
      function ShootingStar() {
        this.reset()
      }

      ShootingStar.prototype.reset = function () {
        this.x = Math.random() * width * 1.5 // 更大的生成范围
        this.y = Math.random() * height * 0.3 - height * 0.1 // 从屏幕上方开始
        this.len = Math.random() * 150 + 30 // 更长的流星尾巴
        this.speed = Math.random() * 12 + 5 // 更多样的速度
        this.size = Math.random() * 2 + 0.5 // 更粗的流星
        this.waitTime = new Date().getTime() + Math.random() * 8000 + 1000 // 更长的等待时间
        this.active = false

        // 随机流星颜色
        const colorType = Math.floor(Math.random() * 10);
        if (colorType < 6) {
          // 60%的流星是白色
          this.color = 'rgba(255, 255, 255, 0.7)';
          this.tailColor = 'rgba(255, 255, 255, 0.1)';
        } else if (colorType < 8) {
          // 20%的流星是淡蓝色
          this.color = 'rgba(200, 220, 255, 0.7)';
          this.tailColor = 'rgba(200, 220, 255, 0.1)';
        } else if (colorType < 9) {
          // 10%的流星是淡黄色
          this.color = 'rgba(255, 255, 220, 0.7)';
          this.tailColor = 'rgba(255, 255, 220, 0.1)';
        } else {
          // 10%的流星是淡红色
          this.color = 'rgba(255, 220, 220, 0.7)';
          this.tailColor = 'rgba(255, 220, 220, 0.1)';
        }

        // 随机角度（主要是向下，但有一些变化）
        this.angle = Math.PI / 4 + (Math.random() * Math.PI / 8 - Math.PI / 16);
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
      }

      ShootingStar.prototype.update = function () {
        if (this.active) {
          this.x -= this.vx;
          this.y += this.vy;

          if (this.x < -this.len || this.y >= height + this.len) {
            this.reset();
          } else {
            // 绘制流星尾巴（发光效果）
            const gradient = bgCtx.createLinearGradient(
              this.x, this.y,
              this.x + Math.cos(this.angle) * this.len,
              this.y - Math.sin(this.angle) * this.len
            );
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, this.tailColor);

            bgCtx.strokeStyle = gradient;
            bgCtx.lineWidth = this.size;
            bgCtx.beginPath();
            bgCtx.moveTo(this.x, this.y);
            bgCtx.lineTo(
              this.x + Math.cos(this.angle) * this.len,
              this.y - Math.sin(this.angle) * this.len
            );
            bgCtx.stroke();

            // 绘制流星头部（亮点）
            bgCtx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            bgCtx.beginPath();
            bgCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            bgCtx.fill();
          }
        } else {
          if (this.waitTime < new Date().getTime()) {
            this.active = true;
          }
        }
      }

      // 移除了地形类，只保留星星和流星

      // 大幅减少星星数量，优化性能
      const starCount = this.highPerformance
        ? Math.min(300, height * 0.4) // 高性能模式下减少星星
        : Math.min(150, height * 0.2)  // 低性能模式下大幅减少星星

      // 分批创建星星，避免阻塞主线程
      const createStarsInBatches = (count, batchSize = 50) => {
        let created = 0
        const createBatch = () => {
          const batchEnd = Math.min(created + batchSize, count)
          for (let i = created; i < batchEnd; i++) {
            const starY = Math.random() * height
            entities.push(
              new Star({
                x: Math.random() * width,
                y: starY,
              }),
            )
          }
          created = batchEnd

          if (created < count) {
            // 使用 requestIdleCallback 或 setTimeout 继续创建
            if ('requestIdleCallback' in window) {
              requestIdleCallback(createBatch, { timeout: 16 })
            } else {
              setTimeout(createBatch, 0)
            }
          }
        }
        createBatch()
      }

      createStarsInBatches(starCount)

      // 减少流星数量
      const shootingStarCount = this.highPerformance ? 3 : 2
      for (var i = 0; i < shootingStarCount; i++) {
        entities.push(new ShootingStar())
      }

      // 不再添加地形，全部是星空

      // 优化的动画函数 - 使用时间节流
      const animate = (timestamp) => {
        // 帧率限制
        if (timestamp - this.lastFrameTime < this.frameDelay && this.lastFrameTime !== 0) {
          this.animationFrameId = requestAnimationFrame(animate)
          return
        }

        this.lastFrameTime = timestamp

        // 创建深空背景渐变
        const gradient = bgCtx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#0B0B1A'); // 深蓝色顶部
        gradient.addColorStop(0.5, '#0F0E1A'); // 中间色
        gradient.addColorStop(1, '#13101C'); // 底部略微亮一点

        bgCtx.fillStyle = gradient;
        bgCtx.fillRect(0, 0, width, height);

        // 默认填充和描边样式（会被各实体自己的样式覆盖）
        bgCtx.fillStyle = '#ffffff';
        bgCtx.strokeStyle = '#ffffff';

        var entLen = entities.length

        while (entLen--) {
          entities[entLen].update()
        }

        this.animationFrameId = requestAnimationFrame(animate)
      }

      // 开始动画
      this.animationFrameId = requestAnimationFrame(animate)

      // 监听窗口大小变化
      window.addEventListener('resize', this.handleResize)
    },
    handleResize() {
      // 取消当前动画
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId)
      }

      // 重新初始化背景
      this.$nextTick(() => {
        this.initBackground()
      })
    },
  },
  beforeUnmount() {
    // 清理
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId)
    }
    window.removeEventListener('resize', this.handleResize)

    // 清理高度检查定时器
    if (this.heightCheckInterval) {
      clearInterval(this.heightCheckInterval);
    }

    // 清理 Intersection Observer
    if (this.visibilityObserver) {
      this.visibilityObserver.disconnect()
    }
  },
}
</script>

<style scoped>
.starry-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none; /* 确保背景不会阻止用户与页面交互 */
}

.bg-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.performance-toggle {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  z-index: 100;
  transition: background-color 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.performance-toggle:hover {
  background-color: rgba(65, 184, 131, 0.7);
}
</style>
