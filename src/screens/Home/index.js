import React, { Component } from 'react'
import { connect } from 'react-redux'

import { login } from '../../actions/userActions'

class Home extends Component {
  componentWillMount() {
    this.props.dispatch(login('tsmith3480@yahoo.com', 'test123'))
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}

export default connect(store => {
  return { user: store.user }
})(Home);