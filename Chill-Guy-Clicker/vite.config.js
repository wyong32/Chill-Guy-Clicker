import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { robots } from 'vite-plugin-robots'
// import ViteSitemapPlugin from 'vite-plugin-sitemap'
import { VitePWA } from 'vite-plugin-pwa'

// 导入数据文件
import { games } from './src/data/games.js'
import { music } from './src/data/music.js'
import { pngImages } from './src/data/png.js'
import { wallpapers } from './src/data/wallpapers.js'

// 网站域名
const SITE_DOMAIN = 'https://chillguymemeclicker.com'

// 获取所有路由（静态+动态）
const getAllRoutes = () => {
  // 使用Set来存储路由，自动去重
  const routesSet = new Set([
    // 静态路由
    '/',
    '/Chill-Guy-Girl',
    '/Chill-Guy-Music',
    '/Chill-Guy-PNG',
    '/Chill-Guy-Wallpaper',
    '/privacy-policy',
    '/terms-of-use',
    '/about',
    '/contact',
    '/copyright'
  ]);

  // 添加游戏路由
  games.forEach(game => {
    if (game.addressBar && game.addressBar !== '') {
      // 避免添加空路由或根路由
      if (game.addressBar !== '/') {
        routesSet.add(`/${game.addressBar}`);
      }
    }
  });

  // 添加音乐路由
  music.forEach(item => {
    if (item.addressBar) {
      routesSet.add(`/Chill-Guy-Music/${item.addressBar}`);
    }
  });

  // 添加PNG图片路由
  pngImages.forEach(item => {
    if (item.addressBar) {
      routesSet.add(`/Chill-Guy-PNG/${item.addressBar}`);
    }
  });

  // 添加壁纸路由
  wallpapers.forEach(item => {
    if (item.addressBar) {
      routesSet.add(`/Chill-Guy-Wallpaper/${item.addressBar}`);
    }
  });

  // 转换为数组并返回
  return Array.from(routesSet);
}

// 生成站点地图
const generateSitemap = () => {
  const routes = getAllRoutes();
  const today = new Date().toISOString().slice(0, 10);

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${SITE_DOMAIN}${route}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += '    <changefreq>weekly</changefreq>\n';
    sitemap += '    <priority>0.8</priority>\n';
    sitemap += '  </url>\n';
  });

  sitemap += '</urlset>';

  // 确保dist目录存在
  import('fs').then(fs => {
    if (!fs.existsSync('dist')) {
      fs.mkdirSync('dist');
    }
    // 写入站点地图文件
    fs.writeFileSync('dist/sitemap.xml', sitemap);
    console.log('✅ 站点地图生成成功！');
  });
}





// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDev = command === 'serve' || mode === 'development'

  const plugins = [
    vue(),
    vueJsx(),
    // 只在开发环境加载 DevTools
    ...(isDev ? [vueDevTools()] : []),
    // 优化预加载的插件
    {
      name: 'optimize-preload',
      transformIndexHtml: {
        order: 'post',
        handler(html, context) {
          if (isDev) {
            // 开发环境：移除可能导致警告的预加载
            return html.replace(/<link[^>]*rel="preload"[^>]*>/g, '')
          }
          // 生产环境：保持原有的预加载逻辑
          return html
        }
      }
    },
    // 手动生成sitemap的插件
    {
      name: 'generate-sitemap',
      closeBundle() {
        // 在构建完成后生成站点地图
        generateSitemap();
      }
    },
    robots({
      content: `# robots.txt for Chill Guy Clicker

# Allow all crawlers access to all content by default
User-agent: *
Allow: /
Crawl-delay: 1

# Sitemap location
Sitemap: ${SITE_DOMAIN}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$
Disallow: /src/

# --- Specific rules for search engine crawlers ---
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

User-agent: Slurp
Allow: /
Crawl-delay: 2`,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,webmanifest,txt,xml}'],
        cleanupOutdatedCaches: true,
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
        skipWaiting: true,
        clientsClaim: true,
      },
      includeAssets: ['images/favicon.ico', 'images/logo.png'],
      manifest: {
        name: 'Chill Guy Clicker Games',
        short_name: 'Chill Guy',
        description: 'Play relaxing Chill Guy clicker games online for free. Multiple games available!',
        theme_color: '#41b883',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/images/logo.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/images/logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
        ],
      },
    }),
  ]

  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      // 启用代码分割和优化
      rollupOptions: {
        output: {
          // 手动分割代码块
          manualChunks: {
            // Vue 核心库单独打包
            'vue-vendor': ['vue', 'vue-router', 'pinia'],
            // 游戏数据单独打包
            'game-data': ['./src/data/games.js', './src/data/music.js', './src/data/wallpapers.js'],
          },
          // 优化文件名
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const fileName = assetInfo.names?.[0] || 'asset'
            const info = fileName.split('.')
            const ext = info[info.length - 1]
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(fileName)) {
              return `media/[name]-[hash].${ext}`
            }
            if (/\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(fileName)) {
              return `images/[name]-[hash].${ext}`
            }
            if (ext === 'css') {
              return `css/[name]-[hash].${ext}`
            }
            return `assets/[name]-[hash].${ext}`
          },
        },
      },
      // 配置预加载策略
      modulePreload: {
        polyfill: false, // 禁用 polyfill，减少包大小
        resolveDependencies: (filename, deps) => {
          // 只预加载关键依赖
          return deps.filter(dep => {
            // 预加载 Vue 相关的核心模块
            return dep.includes('vue-vendor') || dep.includes('main')
          })
        }
      },
      // 图片优化配置
      assetsInclude: ['**/*.webp', '**/*.avif'],
      // 启用高级压缩
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
          passes: 2
        },
        mangle: {
          safari10: true
        }
      },
      // 启用 CSS 代码分割
      cssCodeSplit: true,
      // 设置 chunk 大小警告限制
      chunkSizeWarningLimit: 1000,
      // 设置资源内联限制
      assetsInlineLimit: 2048,
      // 启用源码映射（仅开发环境）
      sourcemap: false,
    },
    // 优化依赖预构建
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia'],
    },
  }
})
