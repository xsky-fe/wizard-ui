const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(css|scss)$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
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
