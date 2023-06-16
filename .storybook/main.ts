import type { StorybookConfig } from '@storybook/react-webpack5';
const path = require('path');

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss',
  ],
  framework: {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    // Remove the existing css rule
  config.module.rules = config.module.rules.filter(rule => {
    if (rule.test && rule.test.toString() === '/\\.css$/') {
      return false;
    }
    return true;
  });

  config.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {},
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: ['babel-loader', 'awesome-typescript-loader'],
    include: path.resolve(__dirname, '../'),
  });


    return config;
  },
};
export default config;