## wizard-ui
### A Design System with React

[![Build Status](https://travis-ci.org/xsky-fe/wizard-ui.svg?branch=master)](https://travis-ci.org/xsky-fe/wizard-ui)
[![Codecov](https://img.shields.io/codecov/c/github/xsky-fe/wizard-ui/master.svg?style=flat-square)](https://codecov.io/gh/xsky-fe/wizard-ui/branch/master) 
[![npm package](https://img.shields.io/npm/v/wizard-ui.svg?style=flat-square)](https://www.npmjs.org/package/wizard-ui)

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
  test: /\.(css|scss)$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
}
```

and then you can use like this:
### commonjs
```jsx
import { Icon } from 'wizard-ui';

export default () => <Icon type="os-search-role" />
```
### es
```jsx
import { Icon } from 'wizard-ui/esm';

export default () => <Icon type="os-search-role" />
```