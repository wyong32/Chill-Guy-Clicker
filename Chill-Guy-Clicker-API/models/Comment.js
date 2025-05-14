const { pool } = require('../config/db');

class Comment {
  // 获取评论，可以根据条件筛选
  static async find(criteria) {
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
  }

  // 根据ID获取单个评论
  static async findById(id) {
    const result = await pool.query(
      'SELECT * FROM chill_guy_comments WHERE id = $1 AND project_id = $2',
      [id, 'chill_guy']
    );
    return result.rows[0] || null;
  }

  // 创建新评论
  constructor(commentData) {
    this.project_id = 'chill_guy'; // 固定为 'chill_guy'
    this.game_id = commentData.gameId;
    this.username = commentData.username;
    this.rating = commentData.rating;
    this.content = commentData.content;
    this.email = commentData.email || null;
  }

  // 保存评论到数据库
  async save() {
    const result = await pool.query(
      `INSERT INTO chill_guy_comments
       (project_id, game_id, username, content, rating, email, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
       RETURNING *`,
      [this.project_id, this.game_id, this.username, this.content, this.rating, this.email]
    );
    return result.rows[0];
  }

  // 删除评论
  async deleteOne() {
    const result = await pool.query('DELETE FROM chill_guy_comments WHERE id = $1', [this.id]);
    return { acknowledged: true, deletedCount: result.rowCount };
  }
}

module.exports = Comment;
