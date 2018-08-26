export default function reducer(state = {
  token: null,
  showLogin: false,
  isLoggedIn: false,
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'SHOW_LOGIN': {
      return {
        ...state,
        showLogin: true,
      }
    }
    case 'CLOSE_LOGIN': {
      return {
        ...state,
        showLogin: false
      }
    }
    case 'LOGIN_PENDING': {
      return { ...state, 
        fetching: true, 
        isLoggedIn: false 
      }
    }
    case 'LOGIN_REJECTED': {
      return { ...state, 
        fetching: false, 
        fetched: false, 
        isLoggedIn: false, 
        error: action.payload.response.data 
      }
    }
    case 'LOGIN_FULFILLED': {
      return { ...state,
        fetching: false,
        fetched: true,
        token: action.payload.data.token,
        isLoggedIn: true,
        showLogin: false,
      }
    }
    case 'LOGOUT_PENDING': {
      return {...state,
        fetching: true,
        fetched: false,
        token: null,
        isLoggedIn: false,
        showLogin: true,
      }
    }
    case 'LOGOUT_REJECTED': {
      return {...state,
        fetching: false,
        fetched: true,
        token: null,
        isLoggedIn: false,
        showLogin: true,
      }
    }
    case 'LOGOUT_FULFILLED': {
      return {...state,
        fetching: false,
        fetched: true,
        token: null,
        isLoggedIn: false,
        showLogin: true,
      }
    }
    default: { return { ...state } }
  }
}