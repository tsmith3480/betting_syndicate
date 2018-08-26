import { combineReducers } from 'redux'
import { sessionReducer as session, sessionService } from 'redux-react-session'

import user from './userReducer'
import bestbets from './bestbetReducer'

const appReducer = combineReducers({
  user,
  session,
  bestbets,
})

export default (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    sessionService.deleteSession().then(() => (
      appReducer(undefined, action)
    ))
  }

  return appReducer(state, action)
}