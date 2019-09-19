## 问题记录
1. docs 目录 `yarn install` 失败，报 “<span style="color: red">error</span> /Volumes/develop/wizard-ui/docs/node_modules/sharp: Command failed.”

### 环境
- Node v11.8.0
### 解决办法
降级 Node 版本
```bash
nvm use 10.6.0
```
2. scss 报错问题
```bash
npm rebuild node-sass
```
