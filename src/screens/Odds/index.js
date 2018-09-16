import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { oddsActions } from '../../actions'

class Odds extends Component {
  componentWillMount(){
    this.props.dispatch(oddsActions.fetchOdds('https://topbet.eu/sportsbook/football/nfl', 'gamelines-betting-table'))
  }

  createMarkup = () => {
    const { html } = this.props
    return {
      __html: html || 'Loading...'
    }
  }

  render() {
    return (
      <div id='odds-page'>
        <div className='row'>
          <div className='col-md-12' dangerouslySetInnerHTML={this.createMarkup()}></div>
        </div>
      </div>
    )
  }
}

const mapState = ({ odds }) => ({
  html: odds.html,
})

export default connect(mapState)(Odds);