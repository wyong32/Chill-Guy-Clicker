const { Pool } = require('pg');

// 创建数据库连接池
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // 对于 Neon 等服务，可能需要这个选项
  }
});

// 测试数据库连接
const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('PostgreSQL Connected');
    client.release();

    // 确保表存在
    await createTablesIfNotExist();
  } catch (error) {
    console.error(`Error connecting to PostgreSQL: ${error.message}`);
    process.exit(1);
  }
};

// 创建必要的表
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
    `;

    await pool.query(createTableQuery);
    console.log('Tables checked/created');
  } catch (error) {
    console.error(`Error creating tables: ${error.message}`);
    throw error;
  }
};

module.exports = {
  connectDB,
  pool
};
