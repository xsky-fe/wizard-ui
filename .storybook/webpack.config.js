const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // Remove the existing css rule
  config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.css$/'
  );
  config.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: `postcss-loader`,
        options: {
          options: {},
        }
      },
    ],
    include: path.resolve(__dirname, '../')
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../')
  });
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  });
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: ['babel-loader', 'awesome-typescript-loader'],
    include: path.resolve(__dirname, '../')
  });
  config.resolve.extensions.push('.ts', '.tsx')

  // Return the altered config
  return config
}
