import axios from 'axios'
import { sessionService } from 'redux-react-session'
import { JWT } from '../utils'

const _URL = {
  local: 'http://localhost:10010',
  dev: 'http://dev-webesb-02-45svx0qg.cloudapp.net:30000'
}

export const login = (username, password) => ({
  type: 'LOGIN',
  payload: axios.post(`${_URL.dev}/login`, { UserName: username, Password: password })
    .then(response => {
      const { token } = response
      sessionService.saveSession({ token })
        .then(() => { sessionService.saveUser(JWT.getUserInfo(response.data.token)) })
      return response
    })
})

export const showLogin = () => ({
  type: 'SHOW_LOGIN'
})

export const closeLogin = () => ({
  type: 'CLOSE_LOGIN'
})

export const logout = () => ({
  type: 'USER_LOGOUT',
  //payload: sessionService.deleteUser().then(() => {
  //  sessionService.deleteSession()
  //})
})