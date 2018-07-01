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
      $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(0)
    })
  }

  render() {
    return (
      <li className='dropdown'>
        <Link to='/betting'>Betting<b className='caret' /></Link>
        <ul className='dropdown-menu'>
          <li><Link to='/betting/current'>Current</Link></li>
          <li><Link to='/betting/history'>History</Link></li>
        </ul>
      </li>
    )
  }
}