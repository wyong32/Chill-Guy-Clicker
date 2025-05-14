const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');

// 加载环境变量
dotenv.config();

// 连接数据库
connectDB();

const app = express();

// 中间件
// 配置 CORS，允许前端应用访问
const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*', // 在生产环境中设置为前端URL
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' })); // 限制请求体大小

// 日志
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 路由
app.use('/api/comments', require('./api/comments'));

// 首页路由
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Chill Guy Clicker API',
    endpoints: {
      getAllComments: 'GET /api/comments',
      getGameComments: 'GET /api/comments/game/:gameId',
      getCommentById: 'GET /api/comments/:id',
      addComment: 'POST /api/comments',
      deleteComment: 'DELETE /api/comments/:id',
    },
  });
});

// 处理 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error', error: err.message });
});

// 设置端口并启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
