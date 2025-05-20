const rateLimit = require('express-rate-limit');

// 创建评论频率限制器
const commentLimiter = rateLimit({
  windowMs: 60 * 1000, // 1分钟
  max: 1, // 限制每个IP在windowMs内最多只能发送1个请求
  message: {
    success: false,
    message: 'Comments too frequently, please try again later',
    retryAfter: 60 // 重试等待时间（秒）
  },
  standardHeaders: true, // 返回标准的RateLimit头信息
  legacyHeaders: false, // 禁用X-RateLimit-*头信息
  keyGenerator: (req) => {
    // 使用IP地址和游戏ID作为限制键
    return `${req.ip}-${req.body.gameId}`;
  }
});

module.exports = {
  commentLimiter
}; 