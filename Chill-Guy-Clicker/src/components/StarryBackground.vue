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
      frameDelay: 50, // 限制帧率，约20fps
    }
  },
  mounted() {
    // 检测设备性能
    this.detectPerformance()
    this.initBackground()
  },
  methods: {
    detectPerformance() {
      // 简单的性能检测，可以根据设备或浏览器特性进行更复杂的检测
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
      this.highPerformance = !isMobile
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
      const height = document.body.offsetHeight

      background.width = width
      background.height = height

      // 设置初始背景
      bgCtx.fillStyle = '#110E19'
      bgCtx.fillRect(0, 0, width, height)

      // 创建实体数组
      const entities = []

      // 星星类
      function Star(options) {
        this.size = Math.random() * 2
        this.speed = Math.random() * 0.05
        this.x = options.x
        this.y = options.y
        this.alpha = Math.random() * 0.5 + 0.5 // 透明度变化
        this.alphaChange = Math.random() * 0.01
      }

      Star.prototype.reset = function () {
        this.size = Math.random() * 2
        this.speed = Math.random() * 0.05
        this.x = width
        this.y = Math.random() * height
        this.alpha = Math.random() * 0.5 + 0.5
      }

      Star.prototype.update = function () {
        this.x -= this.speed

        // 简单的闪烁效果
        this.alpha += this.alphaChange
        if (this.alpha > 1 || this.alpha < 0.5) {
          this.alphaChange = -this.alphaChange
        }

        if (this.x < 0) {
          this.reset()
        } else {
          bgCtx.globalAlpha = this.alpha
          bgCtx.fillRect(this.x, this.y, this.size, this.size)
          bgCtx.globalAlpha = 1
        }
      }

      // 流星类
      function ShootingStar() {
        this.reset()
      }

      ShootingStar.prototype.reset = function () {
        this.x = Math.random() * width
        this.y = 0
        this.len = Math.random() * 80 + 10
        this.speed = Math.random() * 10 + 6
        this.size = Math.random() * 1 + 0.1
        this.waitTime = new Date().getTime() + Math.random() * 5000 + 1000
        this.active = false
      }

      ShootingStar.prototype.update = function () {
        if (this.active) {
          this.x -= this.speed
          this.y += this.speed
          if (this.x < 0 || this.y >= height) {
            this.reset()
          } else {
            bgCtx.lineWidth = this.size
            bgCtx.beginPath()
            bgCtx.moveTo(this.x, this.y)
            bgCtx.lineTo(this.x + this.len, this.y - this.len)
            bgCtx.stroke()
          }
        } else {
          if (this.waitTime < new Date().getTime()) {
            this.active = true
          }
        }
      }

      // 原始地形类 - 静态版本
      function OriginalTerrain(options) {
        options = options || {}
        this.terrain = document.createElement('canvas')
        this.terCtx = this.terrain.getContext('2d')

        this.terrain.width = width
        this.terrain.height = height
        this.fillStyle = options.fillStyle || '#191D4C'
        this.mHeight = options.mHeight || height

        // 生成点
        this.points = []

        var displacement = options.displacement || 140,
          power = Math.pow(2, Math.ceil(Math.log(width) / Math.log(2)))

        // 设置起始高度和结束高度
        this.points[0] = this.mHeight
        this.points[power] = this.points[0]

        // 创建其余点 - 使用原始算法
        for (var i = 1; i < power; i *= 2) {
          for (var j = power / i / 2; j < power; j += power / i) {
            this.points[j] =
              (this.points[j - power / i / 2] + this.points[j + power / i / 2]) / 2 +
              Math.floor(Math.random() * -displacement + displacement)
          }
          displacement *= 0.6
        }

        // 立即绘制地形（只绘制一次）
        this.draw()
      }

      OriginalTerrain.prototype.draw = function () {
        // 绘制地形
        this.terCtx.clearRect(0, 0, width, height)
        this.terCtx.fillStyle = this.fillStyle

        this.terCtx.beginPath()

        // 绘制地形路径 - 使用原始方法
        for (var i = 0; i <= width; i++) {
          if (i === 0) {
            this.terCtx.moveTo(0, this.points[0])
          } else if (this.points[i] !== undefined) {
            this.terCtx.lineTo(i, this.points[i])
          }
        }

        this.terCtx.lineTo(width, this.terrain.height)
        this.terCtx.lineTo(0, this.terrain.height)
        this.terCtx.lineTo(0, this.points[0])
        this.terCtx.fill()
      }

      OriginalTerrain.prototype.update = function () {
        // 只需要将已经绘制好的地形画布绘制到背景画布上
        bgCtx.drawImage(this.terrain, 0, 0, width, height)
      }

      // 初始化星星 - 进一步增加数量，填充更多星空区域
      const starCount = this.highPerformance
        ? Math.min(500, height * 0.8)
        : Math.min(300, height * 0.6)
      for (var i = 0; i < starCount; i++) {
        // 确保星星主要分布在上部2/3的区域
        const starY = Math.random() * height * 0.9 // 让一些星星也出现在地形上方
        entities.push(
          new Star({
            x: Math.random() * width,
            y: starY,
          }),
        )
      }

      // 添加流星 - 增加数量
      const shootingStarCount = this.highPerformance ? 6 : 3
      for (var i = 0; i < shootingStarCount; i++) {
        entities.push(new ShootingStar())
      }

      // 添加原始地形 - 静态版本，降低高度到屏幕三分之一
      const terrainBaseHeight = (height * 2) / 3 // 地形基础高度在屏幕的2/3处（从上往下算）

      if (this.highPerformance) {
        // 高性能模式使用三层地形
        entities.push(
          new OriginalTerrain({
            mHeight: terrainBaseHeight - 40, // 第一层地形
            displacement: 100,
          }),
        )
        entities.push(
          new OriginalTerrain({
            displacement: 80,
            fillStyle: 'rgb(17,20,40)',
            mHeight: terrainBaseHeight - 20, // 第二层地形
          }),
        )
        entities.push(
          new OriginalTerrain({
            displacement: 120,
            fillStyle: 'rgb(10,10,5)',
            mHeight: terrainBaseHeight, // 第三层地形（最底层）
          }),
        )
      } else {
        // 低性能模式使用两层地形
        entities.push(
          new OriginalTerrain({
            mHeight: terrainBaseHeight - 30,
            displacement: 80,
          }),
        )
        entities.push(
          new OriginalTerrain({
            displacement: 100,
            fillStyle: 'rgb(10,10,20)',
            mHeight: terrainBaseHeight,
          }),
        )
      }

      // 优化的动画函数 - 使用时间节流
      const animate = (timestamp) => {
        // 帧率限制
        if (timestamp - this.lastFrameTime < this.frameDelay && this.lastFrameTime !== 0) {
          this.animationFrameId = requestAnimationFrame(animate)
          return
        }

        this.lastFrameTime = timestamp

        bgCtx.fillStyle = '#110E19'
        bgCtx.fillRect(0, 0, width, height)
        bgCtx.fillStyle = '#ffffff'
        bgCtx.strokeStyle = '#ffffff'

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
