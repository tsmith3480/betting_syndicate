import React, { Component } from 'react'
import './style.css'
import { Nav, Footer, Header } from '../../components'

export default class Layout extends Component {
  render() {
    return (
      <div className='main-container'>
        <Header />
        <Nav />
        <div className='container'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}