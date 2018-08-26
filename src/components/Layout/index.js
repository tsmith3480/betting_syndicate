import React, { Component } from 'react'
import './style.css'
import { Nav, Footer, Header } from '../../components'
import { field } from '../../images'

export default class Layout extends Component {
  render() {
    return (
      <div id='layout' className='main-container' style={{backgroundImage: `url(${field})`}} >
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