const merge = require('deepmerge')

const base = require('./webpack.config.base')


module.exports = merge(base, {}, {
  arrayMerge: (a, b) => a.concat(b),
})
