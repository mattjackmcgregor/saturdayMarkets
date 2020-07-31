import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home'
import {Checkout} from './components/Checkout/Checkout'

//globalState/context provider
import {GlobalProvider} from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <div className='App'>
          <Header />
          <div className='App-content'>
            <Switch>
              <Route path='/checkout'>
                <Checkout />
              </Route>
              <Route path='/login'>
                <h1>login</h1>
              </Route>
              <Route path='/orders'>
                <h1>orders</h1>
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GlobalProvider>
  )
}

export default App

