/**
 * 创建管理员用户脚本
 * 
 * 使用方法：
 * 1. 确保已安装所有依赖：npm install
 * 2. 运行脚本：node scripts/create-admin.js
 */

const { pool } = require('../config/db');
const bcrypt = require('bcryptjs');

// 管理员用户信息
const adminUser = {
  username: 'admin',
  password: '123456',  // 这是一个简单的密码，实际使用时应该更复杂
  project_id: 'chill_guy'
};

/**
 * 创建管理员用户
 */
async function createAdmin() {
  try {
    console.log('开始创建管理员用户...');
    
    // 检查用户是否已存在
    const checkResult = await pool.query(
      'SELECT * FROM admin_users WHERE username = $1 AND project_id = $2',
      [adminUser.username, adminUser.project_id]
    );
    
    if (checkResult.rows.length > 0) {
      console.log(`用户 ${adminUser.username} 已存在，无需创建。`);
      process.exit(0);
    }
    
    // 生成密码哈希
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminUser.password, salt);
    
    // 插入用户数据
    const result = await pool.query(
      `INSERT INTO admin_users
       (project_id, username, password_hash, created_at)
       VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
       RETURNING id, project_id, username, created_at`,
      [adminUser.project_id, adminUser.username, hashedPassword]
    );
    
    console.log('管理员用户创建成功:');
    console.log(`ID: ${result.rows[0].id}`);
    console.log(`用户名: ${result.rows[0].username}`);
    console.log(`项目ID: ${result.rows[0].project_id}`);
    console.log(`创建时间: ${result.rows[0].created_at}`);
    console.log('\n登录信息:');
    console.log(`用户名: ${adminUser.username}`);
    console.log(`密码: ${adminUser.password}`);
    
  } catch (error) {
    console.error('创建管理员用户失败:', error);
  } finally {
    // 关闭数据库连接
    pool.end();
  }
}

// 执行创建管理员用户
createAdmin();
