import React from 'react'
// Router
import { Link } from 'gatsby'
import { Routes } from '../../util'
// Styles
import './navigation.scss'

export default function Navigation(): JSX.Element {
	return (
		<>
			<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
				<div className="navbar-menu">
					<div className="navbar-start">
						<Link className="navbar-item" to={Routes.home} activeClassName="active">Home</Link>
						<Link className="navbar-item" to={Routes.blog} activeClassName="active">Blog</Link>
					</div>
					{/* <div className="navbar-end">
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">More</a>
							<div className="navbar-dropdown is-right">
								<a className="navbar-item">About</a>
								<a className="navbar-item">Jobs</a>
								<a className="navbar-item">Contact</a>
								<hr className="navbar-divider" />
								<a className="navbar-item">Report an issue</a>
							</div>
						</div>
					</div> */}
				</div>
			</nav>
		</>
	)
}