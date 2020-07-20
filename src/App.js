import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import './App.css'
import Header from './components/header/Header';

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
            <Route path='/'>
            <h1>home</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App

