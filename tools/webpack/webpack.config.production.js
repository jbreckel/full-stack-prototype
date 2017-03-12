'strict'

const webpack = require('webpack')

const merge = require('deepmerge')

const base = require('./webpack.config.base')

module.exports = merge(base, {
  devtool: 'cheap-module-source-map',
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
  ],
}, {
  arrayMerge: (a, b) => a.concat(b),
})
