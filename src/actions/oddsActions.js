import axios from 'axios'

const
  _URL = {
    local: 'http://localhost:10010',
    dev: 'http://dev-webesb-02-45svx0qg.cloudapp.net:30000'
  }

export const fetchOdds = (url, clas) => ({
  type: 'FETCH_ODDS',
  payload: axios.get(`${_URL.local}/get_odds?url=${url}&clas=${clas}`)
})