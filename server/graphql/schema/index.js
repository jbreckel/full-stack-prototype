import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'

import typeDefs from './typeDefs'

const schema = makeExecutableSchema({
  typeDefs,
})

const mocks = {
  String: (x, y, z, { parentType, fieldName }) => `${parentType}-${fieldName}`,
}

const testMocks = {
  ...mocks,
  ID: (x, y, z, { parentType, fieldName }) => `${parentType}-${fieldName}`,
  Boolean: () => true,
  Int: () => 1,
  Float: () => 1.5,
}

const serverMocks = {
  ...mocks,
  Int: () => Math.abs(Math.round(Math.random() * 200) - 100),
  Float: () => Math.abs((Math.random() * 200) - 100).toFixed(2),
  Boolean: () => Math.random() > 0.5,
}

addMockFunctionsToSchema({
  schema,
  // added static mock values, to allow snapshot testing of query results
  mocks: process.env.NODE_ENV === 'test' ? testMocks : serverMocks,
})

export default schema
