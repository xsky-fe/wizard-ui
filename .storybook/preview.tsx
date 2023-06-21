import type { Preview } from '@storybook/react'
import '../src/style/index.scss';
import './style.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/,
      },
    },
  },
};

export default preview;