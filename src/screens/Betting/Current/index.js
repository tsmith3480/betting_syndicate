import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import { current, columns } from '../data/current'
import 'react-table/react-table.css'

class CurrentBets extends Component {
  render() {
    return (
      <div id='betting-current-page'>
        <h1>Open Bets</h1>
        <div className='row'>
          <ReactTable data={current}
            columns={columns}
            filterable={true}
            defaultPageSize={15} />
        </div>
      </div>
    )
  }
}

export default connect(store => {
  return { user: store.user }
})(CurrentBets);