<template>
  <div class="png-view">
    <div class="container">
      <h1 class="page-title">Chill Guy PNG Images</h1>
      <p class="page-description">
        Download high-quality PNG images of Chill Guy characters for your projects. All images are free to use.
      </p>
      <div class="waterfall-wrapper">
        <div class="waterfall-container" ref="waterfallContainer">
          <div
            v-for="(column, columnIndex) in columns"
            :key="'column-' + columnIndex"
            class="waterfall-column"
          >
            <router-link
              v-for="image in column"
              :key="image.id"
              :to="'/Chill-Guy-PNG/' + image.addressBar"
              class="png-card"
            >
              <div class="png-image">
                <img
                  :src="image.imageUrl"
                  :alt="image.title"
                  @load="onImageLoad"
                />
                <div class="png-overlay">
                  <span class="view-button desktop-only">
                    View Details
                  </span>
                </div>
              </div>
              <div class="png-title">{{ image.title }}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { pngImages } from '@/data/png.js'

export default {
  name: 'PngView',
  data() {
    return {
      pngImages: pngImages,
      columnCount: 5,
      columns: []
    }
  },
  computed: {
    filteredImages() {
      return this.pngImages
    }
  },
  created() {
    this.distributeImages()
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    distributeImages() {
      // 根据屏幕宽度设置列数
      this.updateColumnCount()

      // 创建空列数组，并初始化每列的高度为0
      this.columns = Array.from({ length: this.columnCount }, () => [])
      const columnHeights = Array(this.columnCount).fill(0)

      // 将图片分配到高度最小的列中，实现真正的瀑布流
      this.filteredImages.forEach((image) => {
        // 找出高度最小的列
        const minHeightIndex = columnHeights.indexOf(Math.min(...columnHeights))

        // 将图片添加到该列
        this.columns[minHeightIndex].push(image)

        // 更新该列的高度（这里我们使用一个估算值，实际项目中可以根据图片实际高度计算）
        // 从图片URL中提取高度信息（如果有的话）
        let estimatedHeight = 300 // 默认高度
        const match = image.imageUrl.match(/\/(\d+)\/(\d+)$/)
        if (match && match[2]) {
          estimatedHeight = parseInt(match[2])
        }

        columnHeights[minHeightIndex] += estimatedHeight
      })
    },
    onImageLoad() {
      // 图片加载完成后，可以在这里添加额外的逻辑
      // 注意：如果需要根据实际图片高度重新布局，可以在这里实现
      // 但为了避免频繁重排，我们不在每张图片加载后都重新布局
    },
    handleResize() {
      const oldColumnCount = this.columnCount
      this.updateColumnCount()

      // 只有当列数变化时才重新分配图片
      if (oldColumnCount !== this.columnCount) {
        this.distributeImages()
      }
    },
    updateColumnCount() {
      const width = window.innerWidth
      if (width <= 480) {
        this.columnCount = 2  // 手机端一行显示2列
      } else if (width <= 768) {
        this.columnCount = 2
      } else if (width <= 992) {
        this.columnCount = 3
      } else if (width <= 1200) {
        this.columnCount = 4
      } else {
        this.columnCount = 5
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-title {
  font-size: 36px;
  color: var(--primary-color);
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  padding-bottom: 15px;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 2px;
}

.page-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #666;
  font-size: 18px;
  line-height: 1.6;
}

.filter-section {
  margin-bottom: 30px;
}

.filter-title {
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.category-tab {
  padding: 8px 16px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 20px;
  color: #555;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-tab:hover {
  background-color: #e0e0e0;
}

.category-tab.active {
  background-color: var(--primary-color);
  color: white;
}

.waterfall-wrapper {
  width: 100%;
  overflow: hidden;
}

.waterfall-container {
  display: flex;
  width: 100%;
  gap: 20px;
}

.waterfall-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.png-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.png-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.png-image {
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.png-image img {
  width: 100%;
  display: block;
  object-fit: contain;
  transition: transform 0.5s ease;
}

.png-card:hover .png-image img {
  transform: scale(1.05);
}

.png-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.png-card:hover .png-overlay {
  opacity: 1;
}

/* 在触摸设备上显示覆盖层 */
@media (hover: none) {
  .png-overlay {
    opacity: 0.5;
    background: rgba(0, 0, 0, 0.2);
  }

  .view-button {
    background-color: var(--primary-color);
    color: white;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  /* 确保在触摸设备上图片有轻微的缩放效果，提示可点击 */
  .png-card:active .png-image img {
    transform: scale(1.02);
  }
}

.view-button {
  background: var(--primary-color);
  color: white;
  padding: 10px 25px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;
  transform: translateY(20px);
}

.png-card:hover .view-button {
  transform: translateY(0);
}

.view-button:hover {
  background: var(--accent-color);
}

.png-info {
  padding: 20px;
}

.png-title {
  font-size: 16px;
  margin: 0;
  color: #333;
  padding: 12px;
  text-align: center;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: white;
}

.png-description {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.png-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 14px;
}

.png-category {
  background: #f0f0f0;
  padding: 3px 10px;
  border-radius: 15px;
  color: #666;
}

.png-dimensions {
  color: #888;
  font-weight: 500;
}

.png-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.png-tag {
  background: rgba(65, 184, 131, 0.1);
  color: var(--primary-color);
  padding: 3px 10px;
  border-radius: 15px;
  font-size: 12px;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 28px;
  }

  .page-description {
    font-size: 16px;
  }

  .filter-section {
    flex-direction: column;
    align-items: center;
  }

  .filter-group {
    margin: 10px 0;
  }

  .waterfall-container {
    gap: 10px;
  }

  .waterfall-column {
    gap: 10px;
  }

  .container {
    padding: 20px 10px;
  }

  .png-title {
    font-size: 14px;
    padding: 8px;
  }
}

/* 桌面端显示，移动端隐藏的元素 */
.desktop-only {
  display: inline-block;
}

@media (max-width: 480px) {
  .page-title {
    font-size: 24px;
  }

  .page-description {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .view-button {
    padding: 8px 16px;
    font-size: 14px;
    transform: translateY(0);
  }

  /* 在移动端隐藏 View Details 按钮 */
  .desktop-only {
    display: none;
  }

  /* 在移动端调整覆盖层样式 */
  .png-overlay {
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>
