import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userActions } from '../../actions'
import BetNav from './BetNav'

import { JWT } from '../../utils'

class Nav extends Component {
  componentWillMount() {
    this.props.dispatch(userActions.login('tsmith3480@yahoo.com', 'test123'))
  }

  buttonClick() {
    //console.log('Hi')
    JWT.verifyToken(this.props.user.token, (err, userDeets) => {
      if (!err) console.log(userDeets) 
      else console.log(err)
    })
  }

  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#mainNav'>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          {<Link className='navbar-brand' to='/'>EM Syndicate</Link>}
        </div>
        <div className='collapse navbar-collapse' id='mainNav'>
        <ul className='nav navbar-nav'>
          <BetNav />
          <li>
            <Link to='/evenmoney'>Even Money</Link>
          </li>
        </ul>
        <ul className='nav navbar-nav navbar-right'>
          <button className='btn btn-info log' onClick={() => this.buttonClick()}>Log In</button>
        </ul>
        </div>
        </div>
      </nav>
    )
  }
}

export default connect(store => {
  return { user: store.user }
})(Nav)