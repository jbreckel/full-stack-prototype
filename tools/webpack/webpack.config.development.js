'strict'

const webpack = require('webpack')

const merge = require('deepmerge')

const base = require('./webpack.config.base')

module.exports = merge(base, {
  devtool: '#cheap-source-map',
  devServer: {
    host: 'localhost',
    port: 3001,
    historyApiFallback: true,
    hot: true,
    compress: true,
    contentBase: '.build/public',
  },
  output: {
    pathinfo: true,
    publicPath: 'http://localhost:3001/bundle/',
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
  ],
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BUILD_TARGET: JSON.stringify('client'),
      },
      __DEV__: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader?{ "cacheDirectory": true }',
        exclude: /node_modules/,
      },
    ],
  },
}, {
  arrayMerge: (a, b) => a.concat(b),
})
