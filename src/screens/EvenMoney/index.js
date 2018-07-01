import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'

class EvenMoney extends Component {
  render() {
    return (
      <div>
        <h1>EvenMoney Page</h1>
      </div>
    )
  }
}

export default connect(store => {
  return { user: store.user }
})(EvenMoney);