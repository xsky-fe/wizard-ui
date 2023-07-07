
const path = require('path');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const sassModuleRegex = /\.module\.(scss|sass)$/;

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // Remove the existing css rule
  config.module.rules = config.module.rules.filter(
    (rule) => !String(rule.test).includes('.css')
  );

config.module.rules.push({
  test: /\.css$/,
  use: ['style-loader', 'css-loader', 'postcss-loader'],
  include: path.resolve(__dirname, '../'),
});

config.module.rules.push({
  test: /\.scss$/,
  exclude: sassModuleRegex,
  use: ['style-loader', 'css-loader', 'sass-loader'],
  include: path.resolve(__dirname, '../'),
});

config.module.rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
});

config.module.rules.push({
  test: /\.(ts|tsx)$/,
  use: [
    'babel-loader',
    {
      loader: 'awesome-typescript-loader',
      options: {
        // Specify any TypeScript-specific options here
      },
    },
  ],
  include: path.resolve(__dirname, '../'),
});

config.module.rules.push({
  test: sassModuleRegex,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        modules: {
          getLocalIdent: getCSSModuleLocalIdent,
        },
      },
    },
    'sass-loader',
  ],
});

config.resolve.extensions.push('.ts', '.tsx');

// Return the altered config
return config;
};
