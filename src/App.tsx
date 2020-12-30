import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
			<BrowserRouter>
				<Navigation />
				<Switch>
					<Route exact path={Routes.home} component={Home} />
					<Route path={Routes.about} component={About} />
				</Switch>
			</BrowserRouter>
		</>
	)
}