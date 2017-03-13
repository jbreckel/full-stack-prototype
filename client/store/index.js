import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { categoryView } from '../reducers'

export default (client) => {
  const store = createStore(
    combineReducers({
      categoryView,
      apollo: client.reducer(),
    }),
    {}, // initial state
    compose(
        applyMiddleware(client.middleware()),
        // If you are using the devToolsExtension, you can add it here also
        // eslint-disable-next-line no-underscore-dangle
        (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    )
  )
  return store
}
