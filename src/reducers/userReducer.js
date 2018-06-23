export default function reducer(state = {
  token: null,
  isLoggedIn: false,
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return { ...state, fetching: true, isLoggedIn: false }
    }
    case 'LOGIN_REJECTED': {
      return { ...state, fetching: false, fetched: false, isLoggedIn: false, error: action.payload }
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        token: action.payload,
        isLoggedIn: true,
      }
    }
    default: { return { ...state } }
  }
}