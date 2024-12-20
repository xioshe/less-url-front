# 🔗 LessURL - 简洁高效的短链接服务

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)
![Naive UI](https://img.shields.io/badge/Naive%20UI-2.x-18A058?style=flat-square&logo=naive-ui)
![Mock Service Worker](https://img.shields.io/badge/Mock%20Service%20Worker-2.x-FF6F61?style=flat-square&logo=msw)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

LessURL 是一个简单而强大的短链接服务，使用 Vue 3 和 Vite 构建。它提供了一个直观的用户界面，让用户可以轻松创建、管理和分析短链接。

## 🖼️ 预览

![HomePage](./public/home.png)

[在线预览地址](https://lu.prochase.top)（使用 Mock 接口，仅展示数据。）

## 🔗 相关项目

- [LessURL](https://github.com/xioshe/less-url) - 搭配的后端项目

## ✨ 主要功能

- 🔗 创建短链接
- 🎨 自定义别名
- ⏰ 设置链接过期时间
- 🔐 用户认证与授权
- 📊 访问记录可视化
- 🔍 高级搜索和过滤
- 📱 响应式设计，支持移动端和桌面端
- 🌓 暗黑模式支持
- 🚀 支持 Mock API

## 🛠️ 技术栈

- Vue 3
- TypeScript
- Vite
- Pinia (状态管理)
- Vue Router
- Naive UI (UI 组件库)
- Axios (HTTP 客户端)
- ECharts (图表库)
- Day.js (日期处理)

## 📁 项目结构

```plain
less-url-front/
├── mocks/
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── plugins/
│   ├── router/
│   ├── stores/
│   ├── types/
│   ├── views/
│   ├── App.vue
│   └── main.ts
├── mocks/
├── .env
├── .eslintrc.cjs
├── .prettierrc.json
├── index.html
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## 🚀 安装和运行

1. 克隆仓库

   ```bash
   git clone https://github.com/xioshe/less-url-front.git
   cd less-url-front
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

3. 运行开发服务器：

   ```bash
   npm run dev
   ```

4. 访问应用

   打开浏览器，访问 [http://localhost:5173](http://localhost:5173)

5. 构建生产版本：

   ```bash
   npm run build
   ```

6. 切换真实后端

   默认使用 [Mock Service Worker](https://mswjs.io/) 提供的 Mock API，如果需要切换到真实后端，修改 `.env` 或 `.env.production` 文件

   ```dotenv
   VITE_MOCK_SERVER_ENABLE=false
   VITE_API_BASE_URL=https://your-backend-url
   VITE_MOCK_URL_PREFIX=https://your-short-url-prefix
   ```

## 🤝 贡献指南

我们欢迎所有形式的贡献！如果您想为 LessURL 做出贡献，请遵循以下步骤：

1. Fork 本仓库
2. 创建您的特性分支 (git checkout -b feature/AmazingFeature)
3. 提交您的更改 (git commit -m 'Add some AmazingFeature')
4. 推送到分支 (git push origin feature/AmazingFeature)
5. 开启一个 Pull Request

在提交之前，请确保遵循现有的代码风格。

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解更多详情。

---

💖 感谢使用 LessURL！如果您觉得这个项目有帮助，请给我们一个星标 ⭐️
