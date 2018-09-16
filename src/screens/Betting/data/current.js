import React from 'react'
import moment from 'moment'
import BetDetail from '../components/BetDetail'

const current = [
  {
    Wager: '62640028',
    Event: 'Detroit Lions at San Francisco 49ers',
    'Play Time': '2018-09-16',
    Selection: 'San Francisco 49ers to win',
    Odds: 'Point Spread (-6.0) -110',
    'Bet Type': 'Point Spread',
    'Bet Odds': -110,
    'Bet Amount': 100,
    'To Win': 90,
  },
  {
    Wager: 'BTT39400905',
    Event: 'Atlanta Falcons - Carolina Panthers',
    'Play Time': '2018-09-16',
    Selection: 'Under to win',
    Odds: 'Under 44.5 -111',
    'Bet Type': 'Under',
    'Bet Odds': -111,
    'Bet Amount': 100,
    'To Win': 90,
  },
  {
    Wager: 'BTT39400904',
    Event: 'New York Jets - Miami Dolphins',
    'Play Time': '2018-09-16',
    Selection: 'Miami Dolphins to win',
    Odds: 'Point Spread +3 -115',
    'Bet Type': 'Point Spread',
    'Bet Odds': -115,
    'Bet Amount': 100,
    'To Win': 87,
  },
  {
    Wager: 'BTT39400903',
    Event: 'Chicago Bears - Seattle Seahawks',
    'Play Time': '2018-09-16',
    Selection: 'Seattle Seahawks to win',
    Odds: 'Point Spread +3.5 -119',
    'Bet Type': 'Point Spread',
    'Bet Odds': -119,
    'Bet Amount': 100,
    'To Win': 84,
  },
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
}, {
  Header: 'Action',
  accessor: 'Selection',
  maxWidth: 300,
}, {
  Header: 'Odds',
  accessor: 'Odds',
  maxWidth: 180,
}, {
  Header: 'Bet',
  className: 'align-right',
  accessor: 'Bet Amount',
  Cell: props => <span className='money'>{parseFloat(props.value).toFixed(2)}</span>,
  maxWidth: 75,
},{
  Header: 'To Win',
  className: 'align-right',
  accessor: 'To Win',
  Cell: props => <span className='money'>{parseFloat(props.value).toFixed(2)}</span>,
  maxWidth: 75
},
]

export {
  current,
  columns
}
