import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'

class OpenBets extends Component {
  render() {
    return (
      <div>
        <h1>Open Bets</h1>
      </div>
    )
  }
}

export default connect(store => {
  return { user: store.user }
})(OpenBets);