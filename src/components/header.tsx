import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
// Utilities
import { Routes } from '../util'

export default function Header({ siteTitle }: any) {
	return (
		<header>
			<h1 className="titleText">
				<Link to={Routes.home} className='header'>
					{siteTitle}
				</Link>
			</h1>
		</header>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}