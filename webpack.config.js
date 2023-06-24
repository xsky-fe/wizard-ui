const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const LodashModuleReplacementPlugin = require ('lodash-webpack-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const sassModuleRegex = /\.module\.(scss|sass)$/;
module.exports = {
  mode: 'production',
   optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'awesome-typescript-loader'],
        include: __dirname
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        exclude: sassModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: require.resolve('sass-loader'),
            options: {
              sassOptions:{
                precision: 8,
              }
            }
          },
        ],
      },
      {
        test: sassModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                getLocalIdent: getCSSModuleLocalIdent,
              },
            },
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
                precision: 8,
            }
          },
        ],
      },
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin,
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/),
    new MiniCssExtractPlugin({
      filename: "wizard-ui.min.css",
      ignoreOrder: true
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'wizard-ui.min.js',
    library: 'wizard-ui',
    libraryTarget: 'umd',
  },
}