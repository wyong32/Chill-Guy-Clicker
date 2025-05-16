# 管理员用户设置

本目录包含用于设置管理员用户的脚本。

## 方法 1: 使用 SQL 脚本

如果您有权限直接访问数据库，可以执行 `add-admin.sql` 脚本来添加管理员用户：

```sql
-- 添加管理员用户
-- 密码: 123456 (已哈希)
INSERT INTO admin_users (project_id, username, password_hash, created_at)
VALUES ('chill_guy', 'admin', '$2a$10$yfYkMzDfFNNV9S.9X8pcEeQBuLHuqHDyFBp.m/QBzejfzXVxvTLfm', CURRENT_TIMESTAMP)
ON CONFLICT (username, project_id) DO NOTHING;
```

## 方法 2: 使用 API 注册端点

您也可以使用 API 的注册端点来添加管理员用户：

```bash
curl -X POST -H "Content-Type: application/json" -d '{"username":"admin","password":"123456"}' https://chill-guy-clicker-api.vercel.app/api/auth/register
```

## 方法 3: 使用 Node.js 脚本

如果您有 Node.js 环境，可以运行 `create-admin.js` 脚本来添加管理员用户：

```bash
node scripts/create-admin.js
```

## 默认登录信息

- 用户名: `admin`
- 密码: `123456`

**注意:** 在生产环境中，请务必更改默认密码以提高安全性。
