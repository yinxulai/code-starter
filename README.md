# Code Starter

> 这是一个 claude code 和 codex 的启动器，支持自动安装和环境配置，一键切换供应商、MCP 管理等功能。

## ✨ 功能特性

- 🚀 **一键启动**：快速启动 Claude Code 和 Codex
- 🔧 **自动安装**：自动处理依赖安装和环境配置
- 🔄 **供应商切换**：支持一键切换不同的 AI 服务提供商
- 🛠️ **MCP 管理**：集成 Model Context Protocol 管理功能
- 🖥️ **友好界面**：基于 Electron 的桌面应用，操作简单直观
- 📡 **内置 API 服务**：使用 Fastify 提供高性能 API 接口

## 🏗️ 技术栈

### 前端

- **Vite** - 快速的前端构建工具
- **Electron** - 跨平台桌面应用框架
- **TypeScript** - 类型安全的 JavaScript

### 后端

- **Zod** - TypeScript 优先的模式验证
- **Fastify** - 高性能 Node.js Web 框架
- **Scalar API Reference** - 优雅的 API 文档

### 开发工具

- **ESLint** - 代码质量检查
- **Electron Forge** - Electron 应用打包和分发

## 📦 安装

```bash
# 克隆项目
git clone https://github.com/yinxulai/code-starter.git

# 进入项目目录
cd code-starter

# 安装依赖
npm install
```

## 🚀 使用

### 开发模式

```bash
npm run start
```

启动后应用将运行在开发模式，并启动内置的 API 服务器（默认端口：配置文件中指定）。

### 构建应用

```bash
# 打包应用
npm run package

# 生成分发包
npm run make
```

### 代码检查

```bash
npm run lint
```

## 📁 项目结构

```text
code-starter/
├── server/              # 后端服务
│   ├── main.ts         # Electron 主进程入口
│   ├── config/         # 配置文件
│   ├── helpers/        # 工具函数
│   ├── modules/        # 功能模块
│   │   ├── execution/  # 执行管理
│   │   ├── package/    # 包管理
│   │   └── storage/    # 存储服务
│   └── plugins/        # Fastify 插件
│       ├── openapi.ts  # OpenAPI 文档
│       └── response.ts # 响应处理
├── view/               # 前端视图
│   ├── index.css      # 样式文件
│   ├── preload.ts     # Electron 预加载脚本
│   └── renderer.ts    # 渲染进程入口
└── index.html         # 应用主页面
```

## 🔧 配置

项目配置文件位于 `server/config/` 目录，可以根据需要调整服务端口、API 设置等参数。

## 📝 开发说明

- 使用 TypeScript 进行类型安全的开发
- 遵循 ESLint 代码规范
- API 文档通过 Scalar 自动生成，启动后可访问查看

## 📄 许可证

MIT © [Alain](https://github.com/yinxulai)

## 👤 作者

- **Alain**
- Email: <yinxulai@hotmail.com>
- GitHub: [@yinxulai](https://github.com/yinxulai)
