import React from 'react'
import ReactDom from 'react-dom'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import App from './App'

const networkInterface = createNetworkInterface({
  uri: '/graphql',
})

const client = new ApolloClient({
  queryDeduplication: true,
  connectToDevTools: true,
  networkInterface,
  dataIdFromObject: (result) => {
    /* eslint-disable no-underscore-dangle */
    if (result.id) {
      return `${result.__typename || ''}${result.id}`
    }
    /* eslint-enable no-underscore-dangle */
    return null
  },
})


ReactDom.render(
  <ApolloProvider client={ client }>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
