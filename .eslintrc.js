module.exports = {
  extends: 'signavio',
  rules: {
    'import/no-extraneous-dependencies': [ 'error', {
      devDependencies: ['webpack.config.**', '**/test/**', '**/tools/**'],
    }],
    'graphql/template-strings': ['error', {
      env: 'literal',
      schemaJson: require('./generated/schema.json'),
    }],
  },
  plugins: [
    'graphql'
  ],
}
