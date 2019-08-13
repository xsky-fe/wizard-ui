import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import '../src/style/index.scss';
import './style.scss';

addDecorator (
  withOptions ({
    name: 'wizard ui',
    url: 'https://github.com/xsky-fe/wizard-ui',
    sidebarAnimations: true,
    // stories 根据字母，数组小到大排序，根据执行顺序排序
    sortStoriesByKind: true,
    showAddonPanel: false,
    hierarchyRootSeparator: /\|/,
  })
);

// automatically import all files ending in *.stories.js
const srcReq = require.context ('../src', true, /.stories.tsx$/);
const storiesReq = require.context ('../stories', true, /.stories.tsx$/);
function loadStories () {
  srcReq.keys().forEach (filename => srcReq (filename));
  storiesReq.keys().forEach (filename => storiesReq (filename));
}

configure (loadStories, module);
