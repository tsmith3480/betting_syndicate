import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'

class BetHistory extends Component {
  render() {
    return (
      <div>
        <h1>Bet History</h1>
      </div>
    )
  }
}

export default connect(store => {
  return { user: store.user }
})(BetHistory);