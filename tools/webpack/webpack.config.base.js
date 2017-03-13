'strict'

const path = require('path')

const webpack = require('webpack')

const stats = require('./stats')

module.exports = {
  stats,
  entry: [
    path.resolve('client/index'),
  ],
  output: {
    path: path.resolve('.build/public/bundle'),
    filename: 'bundle.js',
    publicPath: '/bundle/',
  },
  target: 'web',
  cache: true,
  resolve: {
    extensions: ['.js', '.less', '.json', '.txt'],
    alias: {
      'jquery.ui.widget': 'jquery-ui',
    },
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BUILD_TARGET: JSON.stringify('client'),
      },
    }),
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
        test: /\.js$/,
        use: 'babel-loader?{ "cacheDirectory": true }',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|svg|woff|woff2|eot|ttf|gif)($|\?)/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(md|txt)$/,
        use: ['raw-loader'],
      },
      {
        test: /\.po$/,
        use: ['json-loader', 'po-loader'],
      },
      {
        test: /\.(graphql|gql)$/,
        loader: 'graphql-tag/loader',
        exclude: /node_modules/,
      },
    ],
  },
}
