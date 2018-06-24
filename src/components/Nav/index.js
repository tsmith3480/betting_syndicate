import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userActions } from '../../actions'

class Nav extends Component {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='navbar-header'>
          {<Link className='navbar-brand' to='/'>EM Syndicate</Link>}
        </div>
        <ul className='nav navbar-nav'>
          <li>
            {<Link to='/openBets'>Current Bets</Link>}
          </li>
          <li>
            {<Link to='/betHistory'>Bet History</Link>}
          </li>
        </ul>
        <ul className='nav navbar-nav navbar-right'>
          <button className='btn btn-info log'>Log In</button>
        </ul>
      </nav>
    )
  }
}

export default connect(store => {
  return { user: store.user }
})(Nav)