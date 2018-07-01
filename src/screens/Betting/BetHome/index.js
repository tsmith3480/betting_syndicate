import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'

class BetHome extends Component {
  render() {
    return (
      <div>
        <h1>Betting Home</h1>
      </div>
    )
  }
}

export default connect(store => {
  return { user: store.user }
})(BetHome);