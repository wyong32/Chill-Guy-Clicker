# Chill Guy Clicker API

这是 Chill Guy Clicker 游戏的后端 API，用于管理游戏评论数据。

## 功能

- 获取所有评论
- 获取特定游戏的评论
- 添加新评论
- 获取单个评论详情
- 删除评论

## 技术栈

- Node.js
- Express
- MongoDB (Mongoose)
- Vercel 部署

## 开始使用

### 前提条件

- Node.js 18.x 或更高版本
- MongoDB 账户 (可以使用 MongoDB Atlas 免费层)

### 安装

1. 克隆仓库
2. 安装依赖
   ```
   npm install
   ```
3. 创建 `.env` 文件并设置环境变量
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   NODE_ENV=development
   ```

### 运行

开发模式:
```
npm run dev
```

生产模式:
```
npm start
```

## API 端点

### 获取所有评论
```
GET /api/comments
```

### 获取特定游戏的评论
```
GET /api/comments/game/:gameId
```

### 添加新评论
```
POST /api/comments
```
请求体:
```json
{
  "gameId": 1,
  "username": "用户名",
  "rating": 5,
  "content": "评论内容",
  "email": "user@example.com" // 可选
}
```

### 获取单个评论
```
GET /api/comments/:id
```

### 删除评论
```
DELETE /api/comments/:id
```

## 部署

此 API 设计为可以部署在 Vercel 上。只需将代码推送到 GitHub 仓库，然后在 Vercel 中导入该仓库即可。

确保在 Vercel 中设置以下环境变量:
- `MONGODB_URI`: MongoDB 连接字符串
- `NODE_ENV`: 设置为 "production"
