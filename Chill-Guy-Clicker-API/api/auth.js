const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

/**
 * @route   POST /api/auth/login
 * @desc    登录管理员账户
 * @access  Public
 */
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // 验证请求体
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide username and password'
      });
    }

    // 查找管理员
    const admin = await Admin.findByUsername(username);
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // 验证密码
    const isMatch = await Admin.validatePassword(password, admin.password_hash);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // 生成JWT令牌
    const token = Admin.generateToken(admin);

    // 返回令牌
    res.json({
      success: true,
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        project_id: admin.project_id
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: process.env.NODE_ENV === 'production' ? 'An unexpected error occurred' : error.message
    });
  }
});

/**
 * @route   GET /api/auth/me
 * @desc    获取当前登录的管理员信息
 * @access  Private
 */
router.get('/me', async (req, res) => {
  try {
    // 从请求头获取令牌
    const token = req.header('x-auth-token');
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token, authorization denied'
      });
    }

    // 验证令牌
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'chill_guy_secret');

      // 查找管理员
      const admin = await Admin.findById(decoded.id);
      if (!admin) {
        return res.status(401).json({
          success: false,
          message: 'Invalid token'
        });
      }

      // 返回管理员信息
      res.json({
        success: true,
        admin: {
          id: admin.id,
          username: admin.username,
          project_id: admin.project_id
        }
      });
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: 'Token is not valid'
      });
    }
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: process.env.NODE_ENV === 'production' ? 'An unexpected error occurred' : error.message
    });
  }
});

/**
 * @route   POST /api/auth/register
 * @desc    注册新管理员账户（仅在开发环境可用）
 * @access  Public
 */
router.post('/register', async (req, res) => {
  // 允许在任何环境中注册，方便初始设置
  // 在实际生产环境中，应该限制此功能
  try {
    const { username, password } = req.body;

    // 检查用户名是否已存在
    const existingAdmin = await Admin.findByUsername(username);
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: 'Username already exists'
      });
    }

    // 创建新管理员
    const newAdmin = new Admin({ username, password });
    const savedAdmin = await newAdmin.save();

    res.status(201).json({
      success: true,
      message: 'Admin registered successfully',
      admin: {
        id: savedAdmin.id,
        username: savedAdmin.username,
        project_id: savedAdmin.project_id
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to register admin'
    });
  }
});



module.exports = router;
