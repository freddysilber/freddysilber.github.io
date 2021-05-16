import React from 'react'
// Router
import { Link } from 'gatsby'
import { Routes } from '../util'

export default function Navigation(): JSX.Element {
	return (
		<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
			<div className="navbar-menu">
				<div className="navbar-start">
					<Link className="navbar-item" to={Routes.home} activeClassName="active">Home</Link>
					<Link className="navbar-item" to={Routes.blog} partiallyActive={true} activeClassName="active">Blog</Link>
					<Link className="navbar-item" to={Routes.projects} activeClassName="active">Projects</Link>
					<Link className="navbar-item" to={Routes.resume} activeClassName="active">Resume</Link>
				</div>
			</div>
		</nav>
	)
}