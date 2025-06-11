# .gitignore 文件说明

## 📁 已忽略的文件和文件夹

### 🔧 构建和依赖相关
```
node_modules/          # NPM 依赖包
dist/                  # 构建输出目录
build/                 # 构建输出目录
.output/               # Nuxt 输出目录
.vercel/               # Vercel 部署缓存
coverage/              # 测试覆盖率报告
```

### 📝 日志文件
```
logs/                  # 日志目录
*.log                  # 所有日志文件
npm-debug.log*         # NPM 调试日志
yarn-debug.log*        # Yarn 调试日志
pnpm-debug.log*        # PNPM 调试日志
```

### 🔐 环境变量文件
```
.env                   # 环境变量文件
.env.local             # 本地环境变量
.env.*.local           # 各环境的本地配置
```

### 🧪 测试相关
```
/cypress/videos/       # Cypress 测试视频
/cypress/screenshots/  # Cypress 测试截图
/test-results/         # 测试结果
/playwright-report/    # Playwright 测试报告
```

### 💾 缓存目录
```
.cache/                # 通用缓存
.parcel-cache/         # Parcel 缓存
.eslintcache           # ESLint 缓存
.stylelintcache        # StyleLint 缓存
.npm/                  # NPM 缓存
```

### 🖥️ 操作系统文件
```
.DS_Store              # macOS 系统文件
Thumbs.db              # Windows 缩略图
Desktop.ini            # Windows 桌面配置
```

### 🛠️ 编辑器配置
```
.vscode/*              # VS Code 配置 (除了扩展推荐)
!.vscode/extensions.json  # 保留扩展推荐
.idea/                 # JetBrains IDE 配置
*.sublime-*            # Sublime Text 配置
```

### 📦 项目特定忽略

#### 参考项目 (不提交)
```
cookingdom/            # 参考项目
Dreamy-Room-Level/     # 参考项目
Escape-road/           # 参考项目
Star-Copy-And-Paste/   # 参考项目
```

#### 临时分析文件
```
SEO_Analysis_Report.md # SEO 分析报告
test-new-games.html    # 功能测试文件
```

### 🗄️ 数据库文件
```
*.db                   # SQLite 数据库
*.sqlite               # SQLite 数据库
*.sqlite3              # SQLite 数据库
```

### 📋 备份文件
```
*.bak                  # 备份文件
*.backup               # 备份文件
*.old                  # 旧版本文件
```

### 📦 压缩文件
```
*.zip                  # ZIP 压缩包
*.tar.gz               # TAR.GZ 压缩包
*.rar                  # RAR 压缩包
*.7z                   # 7Z 压缩包
```

## ✅ 需要提交的重要文件

### 配置文件
- `package.json` - 项目依赖和脚本
- `vite.config.js` - Vite 构建配置
- `eslint.config.js` - ESLint 代码规范
- `vercel.json` - Vercel 部署配置

### 源代码
- `src/` - 所有源代码
- `public/` - 静态资源
- `index.html` - 入口 HTML

### 文档
- `README.md` - 项目说明
- `PERFORMANCE_OPTIMIZATION.md` - 性能优化文档

## 🔄 可选忽略的文件

### 锁定文件 (当前保留)
```
# package-lock.json    # NPM 锁定文件
# yarn.lock            # Yarn 锁定文件
# pnpm-lock.yaml       # PNPM 锁定文件
```

**说明**: 锁定文件确保依赖版本一致性，建议在团队开发中保留。

## 🚀 使用建议

### 1. 检查忽略状态
```bash
# 检查文件是否被忽略
git check-ignore filename

# 查看所有被忽略的文件
git status --ignored
```

### 2. 强制添加被忽略的文件
```bash
# 如果需要添加被忽略的文件
git add -f filename
```

### 3. 清理已跟踪但现在被忽略的文件
```bash
# 从 Git 中移除但保留本地文件
git rm --cached filename

# 移除整个目录
git rm -r --cached directory/
```

## 📝 注意事项

1. **环境变量**: 绝对不要提交包含敏感信息的 `.env` 文件
2. **依赖包**: `node_modules` 体积巨大，通过 `package.json` 重新安装即可
3. **构建产物**: `dist` 目录可以通过构建命令重新生成
4. **个人配置**: 编辑器配置因人而异，不应强制团队使用
5. **临时文件**: 日志、缓存等临时文件不需要版本控制

这个 `.gitignore` 配置确保了仓库的整洁性，只包含必要的源代码和配置文件。
