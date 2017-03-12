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
  ],
  module: {
    rules: [
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
