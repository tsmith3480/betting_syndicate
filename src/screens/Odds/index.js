import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { oddsActions } from '../../actions'
import Loader from 'react-loader-spinner'

class Odds extends Component {
  componentWillMount() {
    this.props.dispatch(oddsActions.fetchOdds('https://topbet.eu/sportsbook/football/nfl', 'gamelines-betting-table'))
  }

  createMarkup = () => {
    const { html } = this.props
    return {
      __html: html || 'Loading...'
    }
  }

  render() {
    const { fetching } = this.props
    return (
      <div id='odds-page'>
        {!fetching ?
          <div className='row'>
            <div className='col-md-12' dangerouslySetInnerHTML={this.createMarkup()}></div>
          </div> :
          <div className='loader'>
            <Loader type='ThreeDots'
              color='lightgray'
              height='80'
              width='80' />
          </div>}
      </div>
    )
  }
}

const mapState = ({ odds }) => ({
  html: odds.html,
  fetching: odds.fetching,
})

export default connect(mapState)(Odds);