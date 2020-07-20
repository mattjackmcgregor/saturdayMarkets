import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home'
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='App-content'>
          <Switch>
            <Route path='/checkout'>
              <h1>checkout</h1>
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
  )
}

export default App

