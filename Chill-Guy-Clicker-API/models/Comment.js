const { pool } = require('../config/db');

/**
 * Comment 模型
 * 处理评论数据的存储和验证
 */
class Comment {
  /**
   * 获取评论，可以根据条件筛选
   * @param {Object} criteria - 筛选条件
   * @returns {Promise<Array>} 评论列表
   */
  static async find(criteria) {
    try {
      if (criteria && criteria.gameId) {
        const result = await pool.query(
          'SELECT * FROM chill_guy_comments WHERE project_id = $1 AND game_id = $2 ORDER BY created_at DESC',
          ['chill_guy', criteria.gameId]
        );
        return result.rows;
      } else {
        const result = await pool.query(
          'SELECT * FROM chill_guy_comments WHERE project_id = $1 ORDER BY created_at DESC',
          ['chill_guy']
        );
        return result.rows;
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw error;
    }
  }

  /**
   * 根据ID获取单个评论
   * @param {number} id - 评论ID
   * @returns {Promise<Object|null>} 评论对象或null
   */
  static async findById(id) {
    try {
      const result = await pool.query(
        'SELECT * FROM chill_guy_comments WHERE id = $1 AND project_id = $2',
        [id, 'chill_guy']
      );
      return result.rows[0] || null;
    } catch (error) {
      console.error(`Error fetching comment with ID ${id}:`, error);
      throw error;
    }
  }

  /**
   * 创建新评论
   * @param {Object} commentData - 评论数据
   */
  constructor(commentData) {
    this.validate(commentData);
    this.project_id = 'chill_guy'; // 固定为 'chill_guy'
    this.game_id = parseInt(commentData.gameId);
    this.username = commentData.username;
    this.rating = parseInt(commentData.rating);
    this.content = commentData.content;
    this.email = commentData.email || null;
    this.created_at = commentData.created_at || null; // 允许自定义创建时间
  }

  /**
   * 验证评论数据
   * @param {Object} data - 要验证的数据
   * @throws {Error} 如果数据无效
   */
  validate(data) {
    if (!data.gameId) {
      throw new Error('Game ID is required');
    }

    if (!data.username || data.username.trim() === '') {
      throw new Error('Username is required');
    }

    if (data.email && !this.isValidEmail(data.email)) {
      throw new Error('Valid email is required');
    }

    if (!data.rating || data.rating < 1 || data.rating > 5) {
      throw new Error('Rating must be between 1 and 5');
    }

    if (!data.content || data.content.trim() === '') {
      throw new Error('Comment content is required');
    }
  }

  /**
   * 验证邮箱格式
   * @param {string} email - 邮箱地址
   * @returns {boolean} 是否有效
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * 保存评论到数据库
   * @returns {Promise<Object>} 保存的评论
   */
  async save() {
    try {
      let query;
      let params;

      if (this.created_at) {
        // 使用自定义时间
        query = `INSERT INTO chill_guy_comments
                (project_id, game_id, username, content, rating, email, created_at, updated_at)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $7)
                RETURNING *`;
        params = [this.project_id, this.game_id, this.username, this.content, this.rating, this.email, this.created_at];
      } else {
        // 使用当前时间
        query = `INSERT INTO chill_guy_comments
                (project_id, game_id, username, content, rating, email, created_at, updated_at)
                VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
                RETURNING *`;
        params = [this.project_id, this.game_id, this.username, this.content, this.rating, this.email];
      }

      const result = await pool.query(query, params);
      return result.rows[0];
    } catch (error) {
      console.error('Error saving comment:', error);
      throw error;
    }
  }

  /**
   * 删除评论
   * @param {number} id - 评论ID
   * @returns {Promise<boolean>} 是否成功删除
   */
  static async deleteById(id) {
    try {
      const result = await pool.query(
        'DELETE FROM chill_guy_comments WHERE id = $1 AND project_id = $2 RETURNING id',
        [id, 'chill_guy']
      );
      return result.rowCount > 0;
    } catch (error) {
      console.error(`Error deleting comment with ID ${id}:`, error);
      throw error;
    }
  }

  /**
   * 更新评论
   * @param {number} id - 评论ID
   * @param {Object} updateData - 更新的数据
   * @returns {Promise<Object>} 更新后的评论
   */
  static async update(id, updateData) {
    try {
      const { username, content, rating, email, created_at } = updateData;

      let query;
      let params;

      if (created_at) {
        // 更新包括创建时间
        query = `UPDATE chill_guy_comments
                SET username = $1, content = $2, rating = $3, email = $4, created_at = $5, updated_at = CURRENT_TIMESTAMP
                WHERE id = $6 AND project_id = $7
                RETURNING *`;
        params = [username, content, rating, email, created_at, id, 'chill_guy'];
      } else {
        // 不更新创建时间
        query = `UPDATE chill_guy_comments
                SET username = $1, content = $2, rating = $3, email = $4, updated_at = CURRENT_TIMESTAMP
                WHERE id = $5 AND project_id = $6
                RETURNING *`;
        params = [username, content, rating, email, id, 'chill_guy'];
      }

      const result = await pool.query(query, params);

      if (result.rowCount === 0) {
        throw new Error(`Comment with ID ${id} not found`);
      }

      return result.rows[0];
    } catch (error) {
      console.error(`Error updating comment with ID ${id}:`, error);
      throw error;
    }
  }
}

module.exports = Comment;
