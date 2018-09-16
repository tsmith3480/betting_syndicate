export default function reducer(state = {
  list: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_BESTBETS_PENDING': {
      return { ...state, 
        fetching: true, 
        fetched: false,
      }
    }
    case 'FETCH_BESTBETS_REJECTED': {
      return { ...state, 
        fetching: false, 
        fetched: false, 
        error: action.payload,
      }
    }
    case 'FETCH_BESTBETS_FULFILLED': {
      return { ...state,
        list: action.payload.data,
        fetching: false,
        fetched: true,
      }
    }
    default: { return { ...state } }
  }
}