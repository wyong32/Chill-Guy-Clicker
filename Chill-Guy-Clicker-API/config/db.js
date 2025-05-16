const { Pool } = require('pg');

/**
 * 数据库配置和连接管理
 */

// 创建数据库连接池
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // 对于 Neon 等服务，需要这个选项
  },
  // 连接超时设置
  connectionTimeoutMillis: 5000, // 5秒连接超时
  idleTimeoutMillis: 30000, // 30秒空闲超时
  max: 20 // 最大连接数
});

/**
 * 初始化数据库连接并创建必要的表
 * @returns {Promise<boolean>} 连接是否成功
 */
const connectDB = async () => {
  try {
    console.log('Connecting to PostgreSQL database...');
    const client = await pool.connect();
    console.log('PostgreSQL database connected successfully');
    client.release();

    // 确保表存在
    await createTablesIfNotExist();
    return true;
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);

    // 在生产环境中，如果数据库连接失败，应用应该退出
    if (process.env.NODE_ENV === 'production') {
      console.error('Exiting application due to database connection failure in production mode');
      process.exit(1);
    }

    return false;
  }
};

/**
 * 创建必要的数据库表
 * @returns {Promise<void>}
 */
const createTablesIfNotExist = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS chill_guy_comments (
        id SERIAL PRIMARY KEY,
        project_id VARCHAR(255) NOT NULL DEFAULT 'chill_guy',
        game_id INTEGER NOT NULL,
        username VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
        email VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE INDEX IF NOT EXISTS idx_chill_guy_comments_game_id ON chill_guy_comments(game_id);

      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        project_id VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE UNIQUE INDEX IF NOT EXISTS idx_admin_users_username_project ON admin_users(username, project_id);
    `;

    await pool.query(createTableQuery);
    console.log('Database tables initialized');
  } catch (error) {
    console.error(`Error creating database tables: ${error.message}`);
    throw error;
  }
};

module.exports = {
  connectDB,
  pool
};
