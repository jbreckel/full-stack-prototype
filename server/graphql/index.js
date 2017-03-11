import { Router } from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'

import nconf from 'nconf'

import schema from './schema'

export default () => {
  const router = Router()
    .use('/graphql',
      bodyParser.json(),
      graphqlExpress((request) => ({
        context: {
        },
        schema,
        rootValue: { request },
        formatError: (error) => ({
          message: error.message,
          details: error.stack,
          error,
        }),
      })),
    )
  if ( nconf.get('ENVIRONMENT') !== 'production' ) {
    router.use('/graphiql',
      graphiqlExpress({
        endpointURL: '/graphql',
        query: `
query {
  products {
    id
    name
  }
}
  `,
      }),
    )
  }

  return router
}
