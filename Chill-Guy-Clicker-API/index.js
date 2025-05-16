/**
 * Chill Guy Clicker API
 * 主入口文件
 */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');

// 加载环境变量
dotenv.config();

// 创建 Express 应用
const app = express();

// 中间件配置
// CORS 配置，允许前端应用访问
const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token'],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' })); // 限制请求体大小为 1MB

// 日志中间件 - 仅在开发环境中使用详细日志
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// 连接数据库
(async () => {
  try {
    await connectDB();
  } catch (error) {
    console.error('Failed to connect to database:', error);
  }
})();

// API 路由
app.use('/api/comments', require('./api/comments'));
app.use('/api/auth', require('./api/auth'));

// 首页路由 - API 文档
app.get('/', (_, res) => {
  res.json({
    name: 'Chill Guy Clicker API',
    version: '1.0.0',
    description: 'Backend API for Chill Guy Clicker game comments and admin management',
    endpoints: {
      // 评论相关
      getAllComments: 'GET /api/comments',
      getGameComments: 'GET /api/comments/game/:gameId',
      getCommentById: 'GET /api/comments/:id',
      addComment: 'POST /api/comments',
      deleteComment: 'DELETE /api/comments/:id (requires authentication)',
      getGameRatingStats: 'GET /api/comments/stats/game/:gameId',
      getAllRatingStats: 'GET /api/comments/stats/all (requires authentication)',

      // 认证相关
      login: 'POST /api/auth/login',
      getCurrentAdmin: 'GET /api/auth/me',
      register: 'POST /api/auth/register (development only)',
    },
  });
});

// 404 处理
app.use((_, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// 全局错误处理中间件
app.use((err, _, res, __) => {
  console.error('Server error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Server error',
    error: process.env.NODE_ENV === 'production' ? 'An unexpected error occurred' : err.message
  });
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
