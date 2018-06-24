export default function reducer(state = {
  token: null,
  showLogin: false,
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
      return { ...state, fetching: false, fetched: false, isLoggedIn: false, error: action.payload.response.data }
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        token: action.payload.data.token,
        isLoggedIn: true,
        showLogin: false,
      }
    }
    default: { return { ...state } }
  }
}