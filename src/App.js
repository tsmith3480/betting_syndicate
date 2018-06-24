import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home, OpenBets, BetHistory } from './screens'
import { Layout } from './components'

import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/openBets' component={OpenBets} />
              <Route exact path='/betHistory' component={BetHistory} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
