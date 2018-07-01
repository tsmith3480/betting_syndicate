import React, { Component } from 'react'
import './style.css'
import { headerImg } from '../../images'

export default class Header extends Component {
  render() {
    return (
      <div className='header-img'>
        <img src={headerImg} alt='Football player'></img>
      </div>
    )
  }
}