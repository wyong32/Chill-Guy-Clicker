<template>
  <div class="ad-test-page">
    <div class="test-container">
      <h1>Google AdSense 广告测试页面</h1>

      <div class="status info">
        <strong>测试说明：</strong> 此页面用于测试您的Google AdSense广告是否正常工作。
      </div>

      <div class="status info"><strong>广告客户端ID：</strong> ca-pub-4638984121333143</div>

      <div class="control-buttons">
        <button @click="loadAds" class="btn">手动加载广告</button>
        <button @click="checkStatus" class="btn">检查状态</button>
        <button @click="clearAds" class="btn">清除广告</button>
      </div>

      <hr />

      <!-- 横幅广告测试 -->
      <h2>横幅广告测试 (广告位: 3707198686)</h2>
      <div class="ad-test banner">
        <ins
          class="adsbygoogle"
          style="display: block"
          data-ad-client="ca-pub-4638984121333143"
          data-ad-slot="3707198686"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      <div class="ad-layout">
        <!-- 侧边栏广告测试 -->
        <div class="ad-section">
          <h2>侧边栏广告测试 (广告位: 6904540807)</h2>
          <div class="ad-test sidebar">
            <ins
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-4638984121333143"
              data-ad-slot="6904540807"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>

        <!-- 移动端广告测试 -->
        <div class="ad-section">
          <h2>移动端广告测试 (广告位: 3423077907)</h2>
          <div class="ad-test">
            <ins
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-4638984121333143"
              data-ad-slot="3423077907"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>
      </div>

      <div id="status-log" class="status-log"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

function log(message, type = 'info') {
  const logDiv = document.getElementById('status-log')
  const timestamp = new Date().toLocaleTimeString()
  const statusDiv = document.createElement('div')
  statusDiv.className = `status ${type}`
  statusDiv.innerHTML = `<strong>[${timestamp}]</strong> ${message}`
  logDiv.appendChild(statusDiv)
  logDiv.scrollTop = logDiv.scrollHeight
  console.log(`[${timestamp}] ${message}`)
}

function loadAds() {
  log('开始加载广告...', 'info')

  if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
    try {
      const adElements = document.querySelectorAll('.adsbygoogle:not([data-ad-status])')
      log(`找到 ${adElements.length} 个未处理的广告元素`, 'info')

      adElements.forEach((el, index) => {
        try {
          el.setAttribute('data-ad-status', 'loading')
          const adSlot = el.getAttribute('data-ad-slot')
          log(`正在加载广告 ${index + 1} (广告位: ${adSlot})`, 'info')
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (error) {
          log(`广告 ${index + 1} 加载失败: ${error.message}`, 'error')
          el.removeAttribute('data-ad-status')
        }
      })
    } catch (error) {
      log(`广告加载过程中发生错误: ${error.message}`, 'error')
    }
  } else {
    log('Google AdSense 脚本未加载或不可用', 'error')
  }
}

function checkStatus() {
  log('检查当前状态...', 'info')

  // 检查 adsbygoogle 对象
  if (window.adsbygoogle) {
    log('✓ adsbygoogle 对象存在', 'success')
    if (typeof window.adsbygoogle.push === 'function') {
      log('✓ adsbygoogle.push 方法可用', 'success')
    } else {
      log('✗ adsbygoogle.push 方法不可用', 'error')
    }
  } else {
    log('✗ adsbygoogle 对象不存在', 'error')
  }

  // 检查广告元素
  const adElements = document.querySelectorAll('.adsbygoogle')
  log(`总共有 ${adElements.length} 个广告元素`, 'info')

  adElements.forEach((el, index) => {
    const adSlot = el.getAttribute('data-ad-slot')
    const adStatus = el.getAttribute('data-ad-status')
    const hasContent = el.children.length > 0

    log(
      `广告 ${index + 1} (广告位: ${adSlot}): 状态=${adStatus || '未处理'}, 有内容=${hasContent}`,
      hasContent ? 'success' : 'error',
    )
  })

  // 检查网络连接
  fetch('https://pagead2.googlesyndication.com', { mode: 'no-cors' })
    .then(() => {
      log('✓ Google AdSense 域名可访问', 'success')
    })
    .catch((error) => {
      log(`✗ Google AdSense 域名不可访问: ${error.message}`, 'error')
    })
}

function clearAds() {
  log('清除所有广告...', 'info')

  const adElements = document.querySelectorAll('.adsbygoogle')
  adElements.forEach((el) => {
    el.removeAttribute('data-ad-status')
    el.innerHTML = ''
  })

  log('广告已清除', 'success')
}

onMounted(() => {
  log('页面加载完成', 'success')

  // 等待广告脚本加载
  const waitForAdScript = () => {
    if (window.adsbygoogle) {
      log('Google AdSense 脚本已加载', 'success')
      setTimeout(loadAds, 1000)
    } else {
      setTimeout(waitForAdScript, 100)
    }
  }

  waitForAdScript()
})
</script>

<style scoped>
.ad-test-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.test-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.status {
  margin: 15px 0;
  padding: 15px;
  border-radius: 4px;
  font-weight: bold;
}

.status.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.status.info {
  background-color: #d1ecf1;
  color: #0c5460;
  border: 1px solid #bee5eb;
}

.control-buttons {
  margin: 20px 0;
}

.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
  font-size: 14px;
}

.btn:hover {
  background-color: #0056b3;
}

.ad-test {
  margin: 20px 0;
  padding: 20px;
  border: 2px dashed #007bff;
  border-radius: 8px;
  text-align: center;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}

.ad-test.banner {
  min-height: 90px;
}

.ad-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.ad-section {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
}

.ad-test.sidebar {
  width: 100%;
  min-height: 600px;
}

.status-log {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 15px;
  margin: 20px 0;
  font-family: monospace;
  font-size: 12px;
  max-height: 400px;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .ad-layout {
    grid-template-columns: 1fr;
  }

  .test-container {
    padding: 20px;
  }
}
</style>
