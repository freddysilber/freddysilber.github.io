import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
// Utilities
import { Routes } from '../../util'
// Styles
import './index.scss'

const Header = ({ siteTitle }) => (
	<header style={{ background: '#666', marginBottom: `1.45rem` }}>
		<div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem` }}>
			<h1>
				<Link to={Routes.home} className='header'>
					{siteTitle}
				</Link>
			</h1>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
