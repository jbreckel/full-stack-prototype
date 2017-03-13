const webpack = require('webpack')

const nodeExternals = require('webpack-node-externals')

const stats = require('../stats')

module.exports = {
  stats,
  entry: [
    './server/index',
  ],
  watch: false,
  target: 'node',
  node: {
    __filename: false,
    __dirname: false,
  },
  externals: [
    nodeExternals({ whitelist: ['webpack/hot/poll?1000'] }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        use: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.graphql?$/,
        use: 'raw-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BUILD_TARGET: JSON.stringify('server'),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  output: {
    path: '.build',
    filename: 'server.js',
  },
}
