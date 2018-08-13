import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import { userActions } from '../../actions'
import BetNav from './BetNav'
import AcctNav from './AcctNav'
import { Modal } from '../../components'

import { JWT } from '../../utils'

class Nav extends Component {
  static propTypes = { cookies: instanceOf(Cookies).isRequired }

  constructor(props) {
    super(props)
    const { cookies } = props
    this.state = {
      showLogin: false,
      inputUsername: cookies.get('EM_Synd_UserName') || '',
      inputPassword: '',
    }
  }

  logoutClick = () => {
    this.props.dispatch(userActions.logout())
  }

  showLogin = () => {
    this.setState({
      showLogin: true,
    })
  }

  closeLogin = () => {
    this.setState({
      showLogin: false,
    })
  }

  loginClick = () => {
    this.props.dispatch(userActions.login('tsmith3480@yahoo.com', 'test123'))
  }

  render() {
    const { user, authenticated, checked, invalid } = this.props
    const Login = () => (
      <li>
        <Link to='/' onClick={this.showLogin}>
          <span className='glyphicon glyphicon-user' />
          Login
        </Link>
      </li>
    )

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#mainNav'>
              <span className='glyphicon glyphicon-menu-hamburger' />
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
              {(authenticated && checked && !invalid)
                ? <AcctNav name={user.name || 'Login'} logout={this.logoutClick} />
                : <Login />}
            </ul>
          </div>
        </div>
        <Modal type='login' isOpen={this.state.showLogin} closeModal={this.closeLogin}>
          <div className='card card-container'>
          <p id='profile-name' className='profile-name-card'>EM Syndicate Login</p>
          <form className='form-signin'>
            <span id='reauth-email' className='reauth-email' />
            <input type='text' className='form-control' placeholder='Username' required autoFocus />
            <input type='password' className='form-control' placeholder='Password' required />
            <input className='btn btn-primary btn-block' type='button' value='Login' onClick={this.loginClick} />
          </form>
          </div>
        </Modal>
      </nav>
    )
  }
}

const mapState = ({ session }) => ({
  user: session.user,
  authenticated: session.authenticated,
  checked: session.checked,
  invalid: session.invalid,
})

export default connect(mapState)(withCookies(Nav))