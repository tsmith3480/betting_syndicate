import React from 'react'
import moment from 'moment'
import BetDetail from '../components/BetDetail'

const history = [
  {
    'Wager': '62542815',
    'Event': 'Dallas Cowboys at Carolina Panthers',
    'Play Time': '2018-09-09 16',
    'Selection': 'Under to win',
    'Odds': 'Under (43.0) -110',
    'Final Score': 'Carolina Panthers 16 Dallas Cowboys 8',
    'Bet Type': 'Under',
    'Bet Odds': '-110',
    'Bet Amount': '100',
    'Paid Amount': '190.9',
    'Won Amount': '90.9',
    'Time Placed': '2018-09-05 20',
  },
  {
    'Wager': '62542814',
    'Event': 'Cincinnati Bengals at Indianapolis Colts',
    'Play Time': '2018-09-09 13',
    'Selection': 'Cincinnati Bengals to win',
    'Odds': 'Point Spread (+3.0) -120',
    'Final Score': 'Indianapolis Colts 23 Cincinnati Bengals 34',
    'Bet Type': 'Point Spread',
    'Bet Odds': '-120',
    'Bet Amount': '100',
    'Paid Amount': '183.33',
    'Won Amount': '83.33',
    'Time Placed': '2018-09-05 20',
  },
  {
    'Wager': '62542813',
    'Event': 'San Francisco 49ers at Minnesota Vikings',
    'Play Time': '2018-09-09 13',
    'Selection': 'Under to win',
    'Odds': 'Under (46.0) -110',
    'Final Score': 'Minnesota Vikings 24 San Francisco 49ers 16',
    'Bet Type': 'Under',
    'Bet Odds': '-110',
    'Bet Amount': '100',
    'Paid Amount': '190.9',
    'Won Amount': '90.9',
    'Time Placed': '2018-09-05 20',
  },
  {
    'Wager': '62542812',
    'Event': 'Atlanta Falcons at Philadelphia Eagles',
    'Play Time': '2018-09-06 21',
    'Selection': 'Atlanta Falcons to win',
    'Odds': 'Point Spread (+1.5) -110',
    'Final Score': 'Philadelphia Eagles 18 Atlanta Falcons 12',
    'Bet Type': 'Point Spread',
    'Bet Odds': '-110',
    'Bet Amount': '100',
    'Paid Amount': '0',
    'Won Amount': '0',
    'Time Placed': '2018-09-05 20',
  },
  {
    Wager: 'BTT39228066',
    Event: 'Cleveland Browns - Pittsburgh Steelers',
    'Play Time': '2018-09-09',
    Selection: 'Cleveland Browns to win',
    Odds: 'Point Spread (+4) -111',
    'Final Score': 'Cleveland Browns 21 Pittsburgh Steelers 21',
    'Bet Type': 'Point Spread',
    'Bet Odds': -111,
    'Bet Amount': 100,
    'Paid Amount': 190,
    'Won Amount': 90
  },
  {
    Wager: 'BTT39228067',
    Event: 'New York Giants - Jacksonville Jaguars',
    'Play Time': '2018-09-09',
    Selection: 'Under to win',
    Odds: 'Under 43 -109',
    'Final Score': 'New York Giants 15 Jacksonville Jaguars 20',
    'Bet Type': 'Under',
    'Bet Odds': -109,
    'Bet Amount': 100,
    'Paid Amount': 192,
    'Won Amount': 92
  },
  {
    Wager: 'BTT39228068',
    Event: 'New England Patriots - Houston Texans',
    'Play Time': '2018-09-09',
    Selection: 'Under to win',
    Odds: 'Under 50.5 -105',
    'Final Score': 'New England Patriots 27 Houston Texans 20',
    'Bet Type': 'Under',
    'Bet Odds': -105,
    'Bet Amount': 100,
    'Paid Amount': 195,
    'Won Amount': 95
  }
]

const columns = [{
  Header: 'Week',
  className: 'bet-week',
  id: 'betWeek',
  accessor: d => moment(d['Play Time'].substring(0, 10)).add(-1, 'days').format('WW') - 35,
  Cell: ({ row, original }) => (
    <div className='bet-details'>
      <BetDetail data={original} />
      <span className='nfl-week'>{moment(original['Play Time'].substring(0, 10)).add(-1, 'days').format('WW') - 35}</span>
    </div>
  ),
  maxWidth: 50,
}, {
  Header: 'Event',
  accessor: 'Event',
  Cell: props => <span className='event' title={props.value}>{props.value}</span>,
  //width: 15,
}, {
  Header: 'Action',
  accessor: 'Selection',
  maxWidth: 200,
}, {
  Header: 'Odds',
  accessor: 'Odds',
  maxWidth: 180,
}, {
  Header: 'Results',
  accessor: 'Final Score',
  Cell: props => <span className='event' title={props.value}>{props.value}</span>,
  //width: 10
}, {
  Header: 'Bet',
  className: 'align-right',
  accessor: 'Bet Amount',
  Cell: props => <span className='money'>{parseFloat(props.value).toFixed(2)}</span>,
  maxWidth: 75,
}, {
  Header: 'Won',
  className: 'align-right',
  accessor: 'Won Amount',
  Cell: ({ row, original }) =>
    <span className='money'>
      {parseFloat(original['Won Amount']) === 0
        ? (parseFloat(original['Won Amount']) - parseFloat(original['Bet Amount'])).toFixed(2)
        : parseFloat(original['Won Amount']).toFixed(2)}
    </span>,
  maxWidth: 75,
},
]

export {
  history,
  columns
}
