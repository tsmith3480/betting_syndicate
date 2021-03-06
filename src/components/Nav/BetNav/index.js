import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default class BetNav extends Component {
  componentDidMount() {
    $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(250)
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(250)
    })

    $('ul.nav li.dropdown').click(function () {
      //console.log($(this))
      $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(0)
    })
  }

  render() {
    return (
      <li className='dropdown'>
        <span className='navbar-item'>Betting<b className='caret' /></span>
        {/*<Link to='/betting'>Betting<b className='caret' /></Link>*/}
        <ul className='dropdown-menu'>
          <li className='dd-item'><Link to='/betting/current'>Current</Link></li>
          <li className='dd-item'><Link to='/betting/history'>History</Link></li>
        </ul>
      </li>
    )
  }
}