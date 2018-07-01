import axios from 'axios'
import { sessionService } from 'redux-react-session'
import { JWT } from '../utils'

const _URL = {
  local: 'http://localhost:10010',
  dev: 'http://dev-webesb-02-45svx0qg.cloudapp.net:30000'
}

export function login(username, password) {
  return {
    type: 'LOGIN',
    payload: axios.post(`${_URL.local}/login`, { UserName: username, Password: password })
      .then(response => {
        const { token } = response
        sessionService.saveSession({ token })
          .then(() => { sessionService.saveUser(JWT.getUserInfo(response.data.token))})
        return response
      })
  }
}