import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { robots } from 'vite-plugin-robots'
import fs from 'fs'
import path from 'path'

// 导入数据文件
import { games } from './src/data/games.js'
import { music } from './src/data/music.js'
import { pngImages } from './src/data/png.js'
import { wallpapers } from './src/data/wallpapers.js'

// 网站域名
const SITE_DOMAIN = 'http://chillguymemeclicker.com'

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
    '/terms-of-use'
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
    sitemap += '    <changefreq>daily</changefreq>\n';
    sitemap += '    <priority>1.0</priority>\n';
    sitemap += '  </url>\n';
  });

  sitemap += '</urlset>';

  // 确保dist目录存在
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }

  // 写入站点地图文件
  fs.writeFileSync('dist/sitemap.xml', sitemap);

  console.log('✅ 站点地图生成成功！');
}



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    robots({
      useProductionFile: true, // 使用.robots.production.txt文件
      sitemap: `${SITE_DOMAIN}/sitemap.xml`,
      disallow: ['/admin/', '/api/'],
    }),
    {
      name: 'generate-sitemap',
      closeBundle() {
        // 在构建完成后生成站点地图
        generateSitemap();
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
})
