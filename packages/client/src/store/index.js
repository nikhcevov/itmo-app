import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootSaga from './sagas'

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, initialState, applyMiddleware(logger, sagaMiddleware))

  sagaMiddleware.run(rootSaga)
  /*
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }
  */

  return store
}

export default configureStore()
