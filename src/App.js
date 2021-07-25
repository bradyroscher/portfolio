import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={(props) => <HomePage {...props} />} />
      </Switch>
    </div>
  )
}

export default App
