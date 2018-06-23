import axios from 'axios'

const _URL = 'http://dev-webesb-02-45svx0qg.cloudapp.net:30000'

export function login(username, password) {
  return {
    type: 'LOGIN',
    payload: axios.post(`${_URL}/login`, { UserName: username, Password: password })
  }
}