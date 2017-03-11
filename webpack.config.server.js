
const production = require('./tools/webpack/server/webpack.config.production')
const development = require('./tools/webpack/server/webpack.config.development')

module.exports = process.env.NODE_ENV === 'production' ? production : development
