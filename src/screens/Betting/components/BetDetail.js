import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export default class BetDetail extends Component {
  render() {
    const { data } = this.props
    if (data['Won Amount'])
      return (
        <div className='bet-details-hover'>
          <h3>{data.Event}</h3><hr />
          <p className='bet-detail-row'>
            <span className='bet-label'>Wager ID:</span>
            <span className='bet-data'>{data.Wager}</span>
          </p>
          <p className='bet-detail-row'>
            <span className='bet-label'>Date:</span>
            <span className='bet-data'>{moment(data['Play Time'].substring(0, 10)).format('L')}</span>
          </p>
          <p className='bet-detail-row'>
            <span className='bet-label'>Selection:</span>
            <span className='bet-data'>{data.Selection}</span>
          </p>
          <p className='bet-detail-row'>
            <span className='bet-label'>Odds:</span>
            <span className='bet-data'>{data.Odds}</span>
          </p>
          <p className='bet-detail-row'>
            <span className='bet-label'>Final Score:</span>
            <span className='bet-data'>{data['Final Score']}</span>
          </p>
          <p className='bet-detail-row'>
            <span className='bet-label'>Bet Type:</span>
            <span className='bet-data'>{data['Bet Type']}</span>
          </p>
          <p className='bet-detail-row'>
            <span className='bet-label'>Bet Odds:</span>
            <span className='bet-data'>{data['Bet Odds']}</span>
          </p>
          <p className='bet-detail-row'>
            <span className='bet-label'>Bet Amount:</span>
            <span className='bet-data'>${parseFloat(data['Bet Amount']).toFixed(2)}</span>
          </p>
          <p className='bet-detail-row'>
            <span className='bet-label'>Paid Amount:</span>
            <span className='bet-data'>${parseFloat(data['Paid Amount']).toFixed(2)}</span>
          </p>
          <p className='bet-detail-row'>
            <span className='bet-label'>Won Amount:</span>
            <span className='bet-data'>${
              parseFloat(data['Won Amount']) === 0
                ? (parseFloat(data['Won Amount']) - parseFloat(data['Bet Amount'])).toFixed(2)
                : parseFloat(data['Won Amount']).toFixed(2)
            }
            </span>
          </p>
        </div>
      )
    return (
      <div className='bet-details-hover'>
        <h3>{data.Event}</h3><hr />
        <p className='bet-detail-row'>
          <span className='bet-label'>Wager ID:</span>
          <span className='bet-data'>{data.Wager}</span>
        </p>
        <p className='bet-detail-row'>
          <span className='bet-label'>Date:</span>
          <span className='bet-data'>{moment(data['Play Time'].substring(0, 10)).format('L')}</span>
        </p>
        <p className='bet-detail-row'>
          <span className='bet-label'>Selection:</span>
          <span className='bet-data'>{data.Selection}</span>
        </p>
        <p className='bet-detail-row'>
          <span className='bet-label'>Odds:</span>
          <span className='bet-data'>{data.Odds}</span>
        </p>
        <p className='bet-detail-row'>
          <span className='bet-label'>Bet Type:</span>
          <span className='bet-data'>{data['Bet Type']}</span>
        </p>
        <p className='bet-detail-row'>
          <span className='bet-label'>Bet Odds:</span>
          <span className='bet-data'>{data['Bet Odds']}</span>
        </p>
        <p className='bet-detail-row'>
          <span className='bet-label'>Bet Amount:</span>
          <span className='bet-data'>${parseFloat(data['Bet Amount']).toFixed(2)}</span>
        </p>
        <p className='bet-detail-row'>
          <span className='bet-label'>To Win:</span>
          <span className='bet-data'>${parseFloat(data['To Win']).toFixed(2)}</span>
        </p>
      </div>
    )
  }
}

const { object } = PropTypes

BetDetail.propTypes = {
  data: object.isRequired,
}