# 样式文件组织结构说明

## 📁 新的样式目录结构

```
src/assets/css/
├── base.css          # 基础样式：CSS变量、重置样式、字体配置
├── layout.css        # 布局样式：容器、网格、定位、游戏容器
├── components.css    # 组件样式：按钮、表单、卡片等通用组件
├── ad-style.css      # 广告样式：保持现有的广告相关样式
└── content-styles.css # 内容样式：文章、游戏详情等内容区域样式
```

## 🎯 样式模块说明

### 1. base.css - 基础样式
- CSS 变量定义 (颜色、字体、阴影等)
- 全局重置样式 (*、html、body)
- 基础图片样式
- 字体配置和优化
- 响应式基础设置

### 2. layout.css - 布局样式
- 容器样式 (.container)
- 应用布局 (.app, #app, .main-content)
- 游戏容器布局 (.game-container, .game-iframe-container)
- Header和Footer占位
- 评论区域布局
- 响应式布局调整

### 3. components.css - 组件样式
- 链接样式 (a, a:hover)
- 标题样式 (h1-h6)
- 按钮样式 (button, .button)
- 表单元素样式
- 图片组件样式 (.logo-image, .game-preview-image)
- 加载指示器 (.loading-spinner)
- 可访问性支持 (减少动画、高对比度)

### 4. ad-style.css - 广告样式
- 保持现有的广告相关样式
- 广告容器定位和布局
- 响应式广告调整

### 5. content-styles.css - 内容样式
- 文章内容样式
- 游戏详情页样式
- 特殊内容区域样式

## 🔄 引入方式

所有样式通过 `main.css` 统一引入：
```css
/* 主样式文件 - 统一引入所有模块样式 */
@import './css/base.css';
@import './css/layout.css';
@import './css/components.css';
@import './css/ad-style.css';
@import './css/content-styles.css';
```

在 `main.js` 中只需引入一个文件：
```javascript
import './assets/main.css'
```

## ✅ 规范遵循

- ✅ 公共样式统一存放在 `/src/assets/css/` 目录下
- ✅ 基础样式、组件样式、游戏专用样式按模块拆分
- ✅ 通过 `main.css` 统一引入，禁止在 `main.js` 中直接引入样式文件
- ✅ 保持了所有业务关键功能（广告、SEO等）
- ✅ 移除了重复和过度优化的CLS代码

## 🎯 优化效果

1. **更好的可维护性**：样式按功能模块拆分，便于维护
2. **清晰的结构**：每个文件职责明确，避免样式混乱
3. **减少重复代码**：消除了重复的CLS优化代码
4. **遵循项目规范**：符合项目的样式组织规范要求
5. **保持功能完整性**：所有重要的业务功能样式都得到保留