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
const distDir = path.join(__dirname, '../dist')

console.log('🚀 开始构建后优化...')

/**
 * 压缩HTML文件
 */
function optimizeHTML() {
  console.log('📄 优化HTML文件...')
  
  const htmlFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.html'))
  
  htmlFiles.forEach(file => {
    const filePath = path.join(distDir, file)
    let content = fs.readFileSync(filePath, 'utf8')
    
    // 移除多余的空白字符
    content = content
      .replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
      .replace(/\s+>/g, '>')
      .replace(/<\s+/g, '<')
      .trim()
    
    fs.writeFileSync(filePath, content)
    console.log(`✅ 优化完成: ${file}`)
  })
}

/**
 * 生成资源清单
 */
function generateAssetManifest() {
  console.log('📋 生成资源清单...')
  
  const manifest = {
    version: Date.now(),
    assets: {},
    critical: [],
    preload: []
  }
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir)
    
    items.forEach(item => {
      const itemPath = path.join(dir, item)
      const relativePath = path.join(basePath, item).replace(/\\/g, '/')
      
      if (fs.statSync(itemPath).isDirectory()) {
        scanDirectory(itemPath, relativePath)
      } else {
        const stats = fs.statSync(itemPath)
        const ext = path.extname(item).toLowerCase()
        
        manifest.assets[relativePath] = {
          size: stats.size,
          type: getAssetType(ext),
          critical: isCriticalAsset(relativePath),
          preload: shouldPreload(relativePath, ext)
        }
        
        if (manifest.assets[relativePath].critical) {
          manifest.critical.push(relativePath)
        }
        
        if (manifest.assets[relativePath].preload) {
          manifest.preload.push(relativePath)
        }
      }
    })
  }
  
  scanDirectory(distDir)
  
  fs.writeFileSync(
    path.join(distDir, 'asset-manifest.json'),
    JSON.stringify(manifest, null, 2)
  )
  
  console.log(`✅ 资源清单生成完成，共 ${Object.keys(manifest.assets).length} 个文件`)
}

/**
 * 获取资源类型
 */
function getAssetType(ext) {
  const types = {
    '.js': 'script',
    '.css': 'style',
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
  
  return types[ext] || 'other'
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
function generatePerformanceReport() {
  console.log('📊 生成性能报告...')
  
  const manifestPath = path.join(distDir, 'asset-manifest.json')
  if (!fs.existsSync(manifestPath)) {
    console.log('❌ 资源清单不存在，跳过性能报告生成')
    return
  }
  
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  const assets = manifest.assets
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalAssets: Object.keys(assets).length,
      totalSize: 0,
      criticalAssets: manifest.critical.length,
      preloadAssets: manifest.preload.length
    },
    breakdown: {
      scripts: { count: 0, size: 0 },
      styles: { count: 0, size: 0 },
      images: { count: 0, size: 0 },
      fonts: { count: 0, size: 0 },
      other: { count: 0, size: 0 }
    },
    recommendations: []
  }
  
  // 统计各类型资源
  Object.entries(assets).forEach(([filePath, asset]) => {
    const type = asset.type
    report.summary.totalSize += asset.size
    
    if (report.breakdown[type]) {
      report.breakdown[type].count++
      report.breakdown[type].size += asset.size
    } else {
      report.breakdown.other.count++
      report.breakdown.other.size += asset.size
    }
  })
  
  // 生成建议
  if (report.breakdown.scripts.size > 500 * 1024) {
    report.recommendations.push('JavaScript 文件较大，建议进一步代码分割')
  }
  
  if (report.breakdown.images.size > 2 * 1024 * 1024) {
    report.recommendations.push('图片文件较大，建议使用 WebP 格式或压缩图片')
  }
  
  if (report.summary.totalSize > 5 * 1024 * 1024) {
    report.recommendations.push('总文件大小较大，建议启用 Gzip 压缩')
  }
  
  fs.writeFileSync(
    path.join(distDir, 'performance-report.json'),
    JSON.stringify(report, null, 2)
  )
  
  // 输出简要报告
  console.log('📊 性能报告:')
  console.log(`   总文件数: ${report.summary.totalAssets}`)
  console.log(`   总大小: ${(report.summary.totalSize / 1024 / 1024).toFixed(2)} MB`)
  console.log(`   关键资源: ${report.summary.criticalAssets} 个`)
  console.log(`   预加载资源: ${report.summary.preloadAssets} 个`)
  
  if (report.recommendations.length > 0) {
    console.log('💡 优化建议:')
    report.recommendations.forEach(rec => console.log(`   - ${rec}`))
  }
}

/**
 * 主函数
 */
async function main() {
  try {
    if (!fs.existsSync(distDir)) {
      console.log('❌ dist 目录不存在，请先运行构建命令')
      process.exit(1)
    }
    
    // 执行优化步骤
    optimizeHTML()
    generateAssetManifest()
    generatePerformanceReport()
    
    console.log('✅ 构建优化完成！')
    
  } catch (error) {
    console.error('❌ 构建优化失败:', error)
    process.exit(1)
  }
}

// 运行主函数
main()
