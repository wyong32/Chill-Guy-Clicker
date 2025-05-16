const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

/**
 * 验证JWT令牌的中间件
 * @param {Object} req - Express请求对象
 * @param {Object} res - Express响应对象
 * @param {Function} next - Express下一个中间件函数
 */
module.exports = async function(req, res, next) {
  // 从请求头获取令牌
  const token = req.header('x-auth-token');

  // 检查令牌是否存在
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'No token, authorization denied'
    });
  }

  try {
    // 验证令牌
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'chill_guy_secret');
    
    // 查找管理员
    const admin = await Admin.findById(decoded.id);
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      });
    }

    // 将管理员信息添加到请求对象
    req.admin = {
      id: admin.id,
      username: admin.username,
      project_id: admin.project_id
    };
    
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: 'Token is not valid'
    });
  }
};
