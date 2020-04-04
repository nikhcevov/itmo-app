import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducers'
import rootSaga from './sagas'

const configureStore = (initialState) => {
  const isDevelopment = process.env.NODE_ENV === 'development'

  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(logger, sagaMiddleware),
      window.devToolsExtension && isDevelopment
        ? window.devToolsExtension()
        : (f) => f,
    ),
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore()
