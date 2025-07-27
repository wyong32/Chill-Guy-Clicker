<template>
  <div class="ad-diagnostic">
    <div class="container">
      <h1>AdSense 诊断工具</h1>
      
      <div class="diagnostic-section">
        <h2>账户状态检查</h2>
        <div class="status-grid">
          <div class="status-item">
            <h3>AdSense 脚本</h3>
            <div :class="['status', adsenseLoaded ? 'success' : 'error']">
              {{ adsenseLoaded ? '✅ 已加载' : '❌ 未加载' }}
            </div>
          </div>
          
          <div class="status-item">
            <h3>广告元素</h3>
            <div class="status info">
              📊 找到 {{ adElementsCount }} 个广告元素
            </div>
          </div>
          
          <div class="status-item">
            <h3>剧院模式</h3>
            <div :class="['status', isTheaterMode ? 'warning' : 'success']">
              {{ isTheaterMode ? '⚠️ 已启用' : '✅ 未启用' }}
            </div>
          </div>
        </div>
      </div>
      
      <div class="diagnostic-section">
        <h2>广告元素详情</h2>
        <div class="ad-elements-list">
          <div v-for="(ad, index) in adElements" :key="index" class="ad-element">
            <h3>广告 {{ index + 1 }}</h3>
            <div class="ad-details">
              <p><strong>Slot ID:</strong> {{ ad.slot }}</p>
              <p><strong>状态:</strong> {{ ad.status }}</p>
              <p><strong>可见性:</strong> {{ ad.visible ? '✅ 可见' : '❌ 不可见' }}</p>
              <p><strong>尺寸:</strong> {{ ad.width }}x{{ ad.height }}</p>
              <p><strong>内容:</strong> {{ ad.hasContent ? '✅ 有内容' : '❌ 无内容' }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="diagnostic-section">
        <h2>测试工具</h2>
        <div class="test-buttons">
          <button @click="runDiagnostic" class="btn btn-primary">
            重新诊断
          </button>
          <button @click="testAdSense" class="btn btn-secondary">
            测试 AdSense
          </button>
          <button @click="clearAds" class="btn btn-warning">
            清除广告缓存
          </button>
        </div>
      </div>
      
      <div class="diagnostic-section">
        <h2>常见问题排查</h2>
        <div class="troubleshooting">
          <div class="trouble-item">
            <h3>1. 账户状态</h3>
            <p>检查您的AdSense账户是否已激活且无违规记录</p>
          </div>
          
          <div class="trouble-item">
            <h3>2. 网站审核</h3>
            <p>确保您的网站已通过AdSense审核</p>
          </div>
          
          <div class="trouble-item">
            <h3>3. 广告单元配置</h3>
            <p>确认广告单元ID正确且已激活</p>
          </div>
          
          <div class="trouble-item">
            <h3>4. 内容政策</h3>
            <p>确保网站内容符合AdSense政策</p>
          </div>
          
          <div class="trouble-item">
            <h3>5. 地理位置</h3>
            <p>某些地区可能影响广告填充率</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdDiagnosticView',
  data() {
    return {
      adsenseLoaded: false,
      adElementsCount: 0,
      isTheaterMode: false,
      adElements: []
    }
  },
  mounted() {
    this.runDiagnostic()
  },
  methods: {
    runDiagnostic() {
      // 检查AdSense脚本
      this.adsenseLoaded = !!window.adsbygoogle
      
      // 检查广告元素
      const adElements = document.querySelectorAll('.adsbygoogle')
      this.adElementsCount = adElements.length
      
      // 分析每个广告元素
      this.adElements = Array.from(adElements).map((el, index) => {
        const rect = el.getBoundingClientRect()
        return {
          slot: el.getAttribute('data-ad-slot'),
          status: el.getAttribute('data-adsbygoogle-status') || 'unknown',
          visible: el.offsetParent !== null,
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          hasContent: el.children.length > 0
        }
      })
      
      // 检查剧院模式
      this.isTheaterMode = document.body.classList.contains('theater-mode')
    },
    
    testAdSense() {
      if (window.testAdSense) {
        window.testAdSense()
      } else {
        console.log('测试功能未加载')
      }
    },
    
    clearAds() {
      // 清除所有广告元素的状态
      const adElements = document.querySelectorAll('.adsbygoogle')
      adElements.forEach(el => {
        el.removeAttribute('data-adsbygoogle-status')
      })
      
      console.log('广告缓存已清除')
      this.runDiagnostic()
    }
  }
}
</script>

<style scoped>
.ad-diagnostic {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 20px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.diagnostic-section {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.status-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 8px;
}

.status {
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 10px;
}

.status.success {
  color: #4ade80;
}

.status.error {
  color: #f87171;
}

.status.warning {
  color: #fbbf24;
}

.status.info {
  color: #60a5fa;
}

.ad-elements-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.ad-element {
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 8px;
}

.ad-details p {
  margin: 5px 0;
  font-size: 0.9rem;
}

.test-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-secondary {
  background: #10b981;
  color: white;
}

.btn-warning {
  background: #f59e0b;
  color: white;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.troubleshooting {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.trouble-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 8px;
}

.trouble-item h3 {
  color: #fbbf24;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .status-grid,
  .ad-elements-list,
  .troubleshooting {
    grid-template-columns: 1fr;
  }
  
  .test-buttons {
    flex-direction: column;
  }
}
</style> 