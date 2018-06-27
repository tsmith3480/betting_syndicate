import { combineReducers } from 'redux'
import { sessionReducer as session } from 'redux-react-session'

import user from './userReducer'

export default combineReducers({
  user,
  session,
})