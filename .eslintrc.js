module.exports = {
  extends: 'signavio',
  rules: {
    'import/no-extraneous-dependencies': [ 'error', {
      devDependencies: ['**/webpack.config.**'],
    }],
  },
}
