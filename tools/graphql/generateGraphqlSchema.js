#!/usr/bin/env babel-node --optional es7.asyncFunctions
require('babel-polyfill')
require('babel-register')

// eslint-disable-next-line no-void
void ['.graphql'].forEach((ext) => {
  require.extensions[ext] = (module, filename) => {
    // eslint-disable-next-line no-param-reassign
    module.exports = fs.readFileSync(filename, 'utf8')
  }
})

const fs = require('fs-extra')
const path = require('path')

const { graphql } = require('graphql')
const { introspectionQuery, printSchema } = require('graphql/utilities')

const { default: Schema } = require('../../server/graphql/schema')

const target = path.join(process.cwd(), 'generated')

const schemaJsonPath = path.join(target, 'schema.json')
const schemaGraphqlPath = path.join(target, 'schema.graphql')

try {
  fs.removeSync(target)
} catch (err) {
  if (err && err.code !== 'ENOENT') throw err
}

fs.mkdirsSync(target)

fs.writeFileSync(schemaGraphqlPath, printSchema(Schema))

graphql(Schema, introspectionQuery)
.then((result) => {
  if (result.errors) {
    console.error( 'ERROR introspecting schema: ', JSON.stringify(result.errors, null, 2))
  } else {
    fs.writeFileSync(schemaJsonPath, JSON.stringify(result, null, 2))
  }
})
