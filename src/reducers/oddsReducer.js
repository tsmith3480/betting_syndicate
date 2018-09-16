export default function reducer(state = {
  html: '',
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_ODDS_PENDING': {
      return {...state,
        fetching: true,
        fetched: false,
      }
    }
    case 'FETCH_ODDS_REJECTED': {
      return {...state,
        fetching: false,
        fetched: false,
        error: action.payload.data,
      }
    }
    case 'FETCH_ODDS_FULFILLED': {
      return {...state,
        fetching: false,
        fetched: true,
        html: action.payload.data.data,
      }
    }
    default: { return { ...state } }
  }
}