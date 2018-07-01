import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'

class CurrentBets extends Component {
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
})(CurrentBets);