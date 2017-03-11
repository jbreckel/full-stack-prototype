import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'

import typeDefs from './typeDefs'

const schema = makeExecutableSchema({
  typeDefs,
})

addMockFunctionsToSchema({
  schema,
  // added static mock values, to allow snapshot testing of query results
  mocks: {
    Int: () => 1,
    Float: () => 1.5,
    String: (x, y, z, { fieldName }) => fieldName,
    Boolean: () => true,
    ID: (x, y, z, { fieldName }) => `id-${fieldName}`,
  },
})

export default schema
