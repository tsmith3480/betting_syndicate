import React, { Component } from 'react'
import './style.css'
import { Nav, Footer } from '../../components'

export default class Layout extends Component {
  render() {
    return (
      <div className='main-container'>
        <Nav />
        <div className='container'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}