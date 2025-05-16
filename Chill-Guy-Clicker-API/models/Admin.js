const { pool } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * Admin 模型
 * 处理管理员用户的认证和授权
 */
class Admin {
  /**
   * 根据用户名查找管理员
   * @param {string} username - 管理员用户名
   * @returns {Promise<Object|null>} 管理员对象或null
   */
  static async findByUsername(username) {
    try {
      const result = await pool.query(
        'SELECT * FROM admin_users WHERE username = $1 AND project_id = $2',
        [username, 'chill_guy']
      );
      return result.rows[0] || null;
    } catch (error) {
      console.error(`Error finding admin with username ${username}:`, error);
      throw error;
    }
  }

  /**
   * 根据ID查找管理员
   * @param {number} id - 管理员ID
   * @returns {Promise<Object|null>} 管理员对象或null
   */
  static async findById(id) {
    try {
      const result = await pool.query(
        'SELECT * FROM admin_users WHERE id = $1 AND project_id = $2',
        [id, 'chill_guy']
      );
      return result.rows[0] || null;
    } catch (error) {
      console.error(`Error finding admin with ID ${id}:`, error);
      throw error;
    }
  }

  /**
   * 验证密码
   * @param {string} password - 明文密码
   * @param {string} hashedPassword - 哈希后的密码
   * @returns {Promise<boolean>} 密码是否匹配
   */
  static async validatePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }

  /**
   * 生成JWT令牌
   * @param {Object} admin - 管理员对象
   * @returns {string} JWT令牌
   */
  static generateToken(admin) {
    const payload = {
      id: admin.id,
      username: admin.username,
      project_id: admin.project_id
    };

    return jwt.sign(
      payload,
      process.env.JWT_SECRET || 'chill_guy_secret',
      { expiresIn: '1d' }
    );
  }

  /**
   * 创建新管理员
   * @param {Object} adminData - 管理员数据
   */
  constructor(adminData) {
    this.validate(adminData);
    this.project_id = 'chill_guy'; // 固定为 'chill_guy'
    this.username = adminData.username;
    this.password = adminData.password;
  }

  /**
   * 验证管理员数据
   * @param {Object} data - 要验证的数据
   * @throws {Error} 如果数据无效
   */
  validate(data) {
    if (!data.username || data.username.trim() === '') {
      throw new Error('Username is required');
    }

    if (!data.password || data.password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
  }

  /**
   * 保存管理员到数据库
   * @returns {Promise<Object>} 保存的管理员
   */
  async save() {
    try {
      // 哈希密码
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);

      const result = await pool.query(
        `INSERT INTO admin_users
         (project_id, username, password_hash, created_at)
         VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
         RETURNING id, project_id, username, created_at`,
        [this.project_id, this.username, hashedPassword]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Error saving admin:', error);
      throw error;
    }
  }
}

module.exports = Admin;
