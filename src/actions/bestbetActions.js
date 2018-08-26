import axios from 'axios'

const
  _URL = {
    local: 'http://localhost:10010',
    dev: 'http://dev-webesb-02-45svx0qg.cloudapp.net:30000'
  },
  queryParams = {
    url: 'http://www.rosstucker.com/even-money-picks',
    //url: 'https://topbet.eu/sportsbook/football/nfl',
    id: 'Content',
    //id: 'sports-mod'
  }

export const fetchBestBets = () => ({
  type: 'FETCH_BESTBETS',
  payload: axios.get(`${_URL.local}/best_bets?url=${queryParams.url}&id=${queryParams.id}`)
})