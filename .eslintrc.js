const { specifiedRules } = require('graphql')
const { without } = require('lodash')

module.exports = {
  extends: 'signavio',
  rules: {
    'import/no-extraneous-dependencies': [ 'error', {
      devDependencies: ['webpack.config.**', '**/test/**', '**/tools/**'],
    }],
    'graphql/template-strings': ['error', {
      env: 'literal',
      schemaJson: require('./generated/schema.json'),
      validators: without(specifiedRules.map(({ name }) => name),
        // imports of fragments does not work in this env
        'KnownFragmentNames',
        // fragments will be imported and used in queries
        'NoUnusedFragments',
        // variables that are used inside fragments are not recognized
        'NoUnusedVariables'
      ),
    }],
  },
  plugins: [
    'graphql'
  ],
}
