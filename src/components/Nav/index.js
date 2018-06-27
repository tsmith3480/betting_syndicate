import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userActions } from '../../actions'

import * as JWT from '../../utils/JWTService'

class Nav extends Component {
  componentWillMount() {
    this.props.dispatch(userActions.login('tsmith3480@yahoo.com', 'test123'))
  }

  buttonClick() {
    //console.log('Hi')
    JWT.decodeToken(this.props.user.token, (err, userDeets) => {
      if (!err) console.log(userDeets) 
      else console.log(err)
    })
  }

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
          <button className='btn btn-info log' onClick={() => this.buttonClick()}>Log In</button>
        </ul>
      </nav>
    )
  }
}

export default connect(store => {
  return { user: store.user }
})(Nav)