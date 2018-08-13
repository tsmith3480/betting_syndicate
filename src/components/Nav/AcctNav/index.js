import React, { Component } from 'react'
import './style.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default class AcctNav extends Component {
  componentDidMount() {
    $('ul.nav li.dropdown').hover(function () {
      $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(250)
    }, function () {
      $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(250)
    })

    $('ul.nav li.dropdown').click(function () {
      //console.log($(this))
      $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(0)
    })
  }

  render() {
    const { name, logout } = this.props
    
    return (
      <li className='dropdown'>
        <a>
          <span className='glyphicon glyphicon-user' />{name}
        </a>
        <ul className='dropdown-menu'>
          <li className='dd-item'><Link to='/' onClick={logout}>Logout</Link></li>
        </ul>
      </li>
    )
  }
}

const { string, func } = PropTypes

AcctNav.propTypes = {
  name: string.isRequired,
  logout: func.isRequired,
}