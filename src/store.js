import { createStore, applyMiddleware } from 'redux'
import { sessionService } from 'redux-react-session'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from './reducers'

const 
  middleware = applyMiddleware(promise(), thunk, logger),
  store = createStore(reducer, middleware)

sessionService.initSessionService(store)

export default store
