import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { bestbetActions } from '../../actions'
import Loader from 'react-loader-spinner'
import Icons from 'react-ionicons'

class EvenMoney extends Component {
  componentWillMount() {
    this.props.dispatch(bestbetActions.fetchBestBets());
  }

  createMarkup = () => {
    const { list } = this.props
    return {
      __html: list || 'Loading...'
    }
  }

  render() {
    const { list } = this.props

    return (
      <div id='even-money-page'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Even Money Podcast and Information</h1>
            <p></p>
          </div>
        </div><hr />
        <div className='row'>
          <div className='col-md-7'>
            <h2>Current Best Bets:</h2>
            <ul>
              {list.length > 0 ?
                list.map((item, i) => (
                  <li className={item.elem === String.fromCharCode(160) || i === 0
                    ? 'bb-item-none'
                    : 'bb-item'} key={i}>
                    <span className='icon'><Icons icon='ios-american-football' fontSize='32px' color='white' /></span>
                    <span className='text'>{item.elem}</span>
                  </li>)) :
                <Loader type='ThreeDots'
                  color='lightgray'
                  height='80'
                  width='80' />}
            </ul>
          </div>
          <div className='col-md-5 podcast-player'>
            <iframe src='http://www.podcastone.com/widget?progID=660&ad=false'
              id='even-money-podcast'
              width="100%" height="600"
              frameBorder="0" />
          </div>
        </div>
        {/*<div dangerouslySetInnerHTML={this.createMarkup()}>
        </div>*/}
      </div>
    )
  }
}

const mapState = ({ bestbets }) => ({
  list: bestbets.list,
})

export default connect(mapState)(EvenMoney);