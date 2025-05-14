/**
 * API 配置文件
 * 根据环境自动选择合适的 API URL
 */

// 开发环境 API URL
const DEV_API_URL = 'http://localhost:3000/api';

// 生产环境 API URL - 部署到 Vercel 后的 URL
const PROD_API_URL = 'https://your-vercel-api-url.vercel.app/api';

// 根据环境变量自动选择 API URL
const API_BASE_URL = import.meta.env.PROD ? PROD_API_URL : DEV_API_URL;

// 评论相关 API 端点
const COMMENTS_API = {
  // 获取所有评论
  GET_ALL: `${API_BASE_URL}/comments`,
  
  // 获取特定游戏的评论
  GET_BY_GAME: (gameId) => `${API_BASE_URL}/comments/game/${gameId}`,
  
  // 获取单个评论
  GET_BY_ID: (commentId) => `${API_BASE_URL}/comments/${commentId}`,
  
  // 添加评论
  ADD: `${API_BASE_URL}/comments`,
  
  // 删除评论
  DELETE: (commentId) => `${API_BASE_URL}/comments/${commentId}`,
};

export { API_BASE_URL, COMMENTS_API };
