import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import { history, columns } from '../data/history'
import 'react-table/react-table.css'

class History extends Component {
  render() {
    return (
      <div id='betting-history-page'>
        <h1>Bet History</h1>
        <div className='row'>
          <ReactTable data={history}
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
})(History);