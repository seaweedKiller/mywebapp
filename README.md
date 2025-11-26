
# 我的网页 App（GitHub Pages 入门）

这是一个零后端、零打包的纯静态网页应用示例，适合第一次用 GitHub 发布网站。

## 本地预览
1. 直接双击 `index.html` 在浏览器打开。
2. 或使用 VS Code 的 Live Server 扩展进行本地预览。

## 发布到 GitHub Pages
1. 在 GitHub 新建一个仓库（例如 `my-web-app`）。
2. 把本项目的所有文件上传到仓库的默认分支（通常是 `main`）。
3. 在仓库的 **Settings → Pages**：
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `main`，文件夹选择 `/root`（或 `/docs` 如果你把文件放在 docs 目录）
   - 保存后等待几分钟，GitHub 会生成一个网址：`https://<你的用户名>.github.io/<仓库名>/`

## 目录结构
```
webapp-starter/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 常见问题
- 如果页面 404：确认 Pages 的 Source/Branch 配置正确，并且仓库是 public。
- CSS/JS 没有加载：确认相对路径是否正确（示例里是同目录）。

## 进阶：使用构建工具（如 Vite）
当你需要模块化、打包、压缩、React/Vue 等框架时，再考虑使用 Vite：
```bash
# 需要 Node.js 环境
npm create vite@latest my-app -- --template vanilla
cd my-app
npm install
npm run dev   # 本地开发
npm run build # 生成 dist 静态文件
```
之后将 `dist/` 目录里的文件上传到 GitHub Pages 即可。
