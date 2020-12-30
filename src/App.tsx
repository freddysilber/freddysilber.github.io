import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Styles
import './App.scss'
// Components
import { Home, Navigation, Header, About } from './components'
// Utilities
import { Routes } from './util'

export default function App() {
	return (
		<>
			<Header />
			<Router>
				<Navigation />
				<Switch>
					<Route exact path={Routes.home} component={Home} />
					<Route exact path={Routes.about} component={About} />
				</Switch>
			</Router>
		</>
	)
}