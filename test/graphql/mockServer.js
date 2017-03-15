import fs from 'fs-extra'

import { graphql } from 'graphql'
import { print } from 'graphql/language/printer'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'

const Schema = fs.readFileSync('generated/schema.graphql', 'utf8')

const schema = makeExecutableSchema({
  typeDefs: Schema,
})

addMockFunctionsToSchema({
  schema,
  mocks: {
    Int: () => 1,
    Float: () => 1.5,
    String: (x, y, z, { fieldName }) => fieldName,
    Boolean: () => true,
    ID: (x, y, z, { fieldName }) => fieldName,
  },
})

export default (query, variables = {}) =>
  graphql(schema, print(query), null, null, variables)
