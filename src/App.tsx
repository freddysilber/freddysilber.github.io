import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.scss'
import { Home, Navigation } from './components'
import { Routes } from './util'

export default function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path={Routes.home} component={Home} />
        </Switch>
      </Router>
    </>
  )
}