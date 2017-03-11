const webpack = require('webpack')

const StartServerPlugin = require('start-server-webpack-plugin')

const merge = require('deepmerge')

const base = require('./webpack.config.base')


module.exports = merge(base, {
  entry: [
    'webpack/hot/poll?1000',
  ],
  watch: true,
  plugins: [
    new StartServerPlugin('server.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],
  output: {
    pathinfo: true,
  },
}, {
  arrayMerge: (a, b) => a.concat(b),
})
