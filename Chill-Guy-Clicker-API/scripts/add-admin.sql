-- 添加管理员用户
-- 密码: 123456 (已哈希)
INSERT INTO admin_users (project_id, username, password_hash, created_at)
VALUES ('chill_guy', 'admin', '$2a$10$yfYkMzDfFNNV9S.9X8pcEeQBuLHuqHDyFBp.m/QBzejfzXVxvTLfm', CURRENT_TIMESTAMP)
ON CONFLICT (username, project_id) DO NOTHING;
