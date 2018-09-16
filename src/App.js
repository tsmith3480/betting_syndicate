import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home, Betting, EvenMoney, Odds } from './screens'
import { Layout } from './components'
import { CookiesProvider } from 'react-cookie'

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/betting' component={Betting.Home} />
              <Route exact path='/betting/current' component={Betting.Current} />
              <Route exact path='/betting/history' component={Betting.History} />
              <Route exact path='/evenmoney' component={EvenMoney} />
              <Route exact path='/odds' component={Odds} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </CookiesProvider>
    );
  }
}

export default App;
