## wizard-ui
### A Design System with React

[![Build Status](https://travis-ci.org/xsky-fe/wizard-ui.svg?branch=master)](https://travis-ci.org/xsky-fe/wizard-ui)

- React 16+
- Typescript
- Sass
- UI Development Environment with [React Storybook](https://storybook.js.org/)
- [Documentation With  Gatsby (WIP)](https://xsky-fe.github.io/wizard-ui/)

## Install and Usage
Add in package.json
```bash
yarn add wizard-ui
# sass dep && loader
yarn add --dev node-sass style-loader css-loader sass-loader
```
if you not use [create-react-app](https://github.com/facebook/create-react-app), you need set webpack config:
```js
{
  test: /\.scss$/,
  use: [
    'style-loader', 
    'css-loader',
    'sass-loader'
  ]
},
// choosed
{
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
  ]
}
```