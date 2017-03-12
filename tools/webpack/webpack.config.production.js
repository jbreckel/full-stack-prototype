'strict'

const webpack = require('webpack')

const merge = require('deepmerge')

const base = require('./webpack.config.base')

module.exports = merge(base, {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BUILD_TARGET: JSON.stringify('client'),
      },
      __DEV__: false,
    }),
  ],
}, {
  arrayMerge: (a, b) => a.concat(b),
})
