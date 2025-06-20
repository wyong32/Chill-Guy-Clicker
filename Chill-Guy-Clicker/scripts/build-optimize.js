#!/usr/bin/env node

/**
 * 构建优化脚本
 * 在构建完成后执行额外的优化操作
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 开始构建后优化
async function optimizeBuild() {
  try {
    const distPath = path.join(__dirname, '..', 'dist')
    
    if (!fs.existsSync(distPath)) {
      throw new Error('dist 目录不存在，请先运行构建命令')
    }

    // 优化HTML文件
    await optimizeHtmlFiles(distPath)
    
    // 生成资源清单
    await generateAssetManifest(distPath)
    
    // 生成性能报告
    await generatePerformanceReport(distPath)
    
  } catch (error) {
    throw error
  }
}

/**
 * 压缩HTML文件
 */
async function optimizeHtmlFiles(distPath) {
  const htmlFiles = fs.readdirSync(distPath).filter(file => file.endsWith('.html'))
  
  for (const file of htmlFiles) {
    const filePath = path.join(distPath, file)
    let content = fs.readFileSync(filePath, 'utf8')
    
    // 优化HTML内容
    content = content
      .replace(/\s+/g, ' ') // 压缩空白字符
      .replace(/>\s+</g, '><') // 移除标签间空白
      .replace(/<!--[\s\S]*?-->/g, '') // 移除注释
    
    fs.writeFileSync(filePath, content)
  }
}

/**
 * 生成资源清单
 */
async function generateAssetManifest(distPath) {
  const manifest = {
    version: Date.now(),
    assets: {},
    summary: {
      totalFiles: 0,
      totalSize: 0,
      categories: {}
    }
  }
  
  // 扫描所有文件
  function scanDirectory(dir, relativePath = '') {
    const files = fs.readdirSync(dir)
    
    for (const file of files) {
      const fullPath = path.join(dir, file)
      const relativeFilePath = path.join(relativePath, file)
      
      if (fs.statSync(fullPath).isDirectory()) {
        scanDirectory(fullPath, relativeFilePath)
      } else {
        const stats = fs.statSync(fullPath)
        const size = stats.size
        const ext = path.extname(file).toLowerCase()
        
        manifest.assets[relativeFilePath] = {
          size,
          lastModified: stats.mtime.toISOString(),
          type: getFileType(ext)
        }
        
        manifest.summary.totalFiles++
        manifest.summary.totalSize += size
        
        // 按类型统计
        const category = getFileCategory(ext)
        if (!manifest.summary.categories[category]) {
          manifest.summary.categories[category] = { count: 0, size: 0 }
        }
        manifest.summary.categories[category].count++
        manifest.summary.categories[category].size += size
      }
    }
  }
  
  scanDirectory(distPath)
  
  // 写入清单文件
  const manifestPath = path.join(distPath, 'asset-manifest.json')
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
}

/**
 * 获取资源类型
 */
function getFileType(ext) {
  const typeMap = {
    '.js': 'script',
    '.css': 'style',
    '.html': 'html',
    '.png': 'image',
    '.jpg': 'image',
    '.jpeg': 'image',
    '.webp': 'image',
    '.svg': 'image',
    '.woff': 'font',
    '.woff2': 'font',
    '.ttf': 'font',
    '.eot': 'font'
  }
  return typeMap[ext] || 'other'
}

/**
 * 判断是否为关键资源
 */
function isCriticalAsset(filePath) {
  const criticalPatterns = [
    /index\.html$/,
    /main\.[a-f0-9]+\.js$/,
    /main\.[a-f0-9]+\.css$/,
    /logo\.png$/,
    /favicon\.ico$/
  ]
  
  return criticalPatterns.some(pattern => pattern.test(filePath))
}

/**
 * 判断是否应该预加载
 */
function shouldPreload(filePath, ext) {
  // 字体文件应该预加载
  if (['.woff', '.woff2'].includes(ext)) {
    return true
  }
  
  // 关键图片应该预加载
  if (ext === '.png' && filePath.includes('logo')) {
    return true
  }
  
  return false
}

/**
 * 生成性能报告
 */
async function generatePerformanceReport(distPath) {
  const manifestPath = path.join(distPath, 'asset-manifest.json')
  
  if (!fs.existsSync(manifestPath)) {
    return
  }
  
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  
  const report = {
    summary: {
      totalAssets: manifest.summary.totalFiles,
      totalSize: manifest.summary.totalSize,
      criticalAssets: 0,
      preloadAssets: 0
    },
    recommendations: []
  }
  
  // 分析资源并生成建议
  Object.entries(manifest.assets).forEach(([path, info]) => {
    if (info.size > 1024 * 1024) { // 大于1MB
      report.recommendations.push(`Consider optimizing large file: ${path} (${(info.size / 1024 / 1024).toFixed(2)}MB)`)
    }
  })
  
  // 写入性能报告
  const reportPath = path.join(distPath, 'performance-report.json')
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
}

// 辅助函数
function getFileCategory(ext) {
  const categoryMap = {
    '.js': 'scripts',
    '.css': 'styles',
    '.html': 'html',
    '.png': 'images',
    '.jpg': 'images',
    '.jpeg': 'images',
    '.webp': 'images',
    '.svg': 'images',
    '.woff': 'fonts',
    '.woff2': 'fonts',
    '.ttf': 'fonts',
    '.eot': 'fonts'
  }
  return categoryMap[ext] || 'other'
}

// 运行主函数
optimizeBuild()
