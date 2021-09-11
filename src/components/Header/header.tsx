import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
// Utilities
import { Routes } from '../../util'
// Styles
import '../Header/header.scss';

const HeaderUnderline = styled.div`
	height: 4px;
	width: 100%;
	background-color: #bba3eb;
	border-radius: 5px;
	margin: -15px 0 10px 9px;
`

export default function Header({ siteTitle }: any) {
	return (
		<header>
			<h1 className="titleText is-size-1">
				<Link to={Routes.home} className='header'>
					{siteTitle}
				</Link>
			</h1>
			<HeaderUnderline />
		</header>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}