import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
// Material UI
import { Avatar } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
// Utilities
import { Routes } from '../../util'
// Styles
import './index.scss'
// Images
const vintage = require('../../assets/images/vintage.png')
const horseRide = require('../../assets/images/horseRide.png')
const wreath = require('../../assets/images/wreath.png')

const AVATARS: string[] = [vintage, horseRide, wreath]

const useStyles = makeStyles(() =>
	createStyles({
		background: {
			background: '#666'
		},
		avatar: {
			width: '33%',
			height: '15rem'
		},
		imagesContainer: {
			display: 'flex',
			justifyContent: 'center',
			flexWrap: 'wrap'
		}
	})
)

export default function Header({ siteTitle }: any) {
	const classes: Record<string, string> = useStyles()

	return (
		<>
			<header>
				<h3>
					<Link to={Routes.home} className='header'>
						{siteTitle}
					</Link>
				</h3>
			</header>
			<div className={classes.imagesContainer}>
				{AVATARS.map((image: string) => <Avatar key={image} src={image} className={classes.avatar} variant="rounded" />)}
			</div>
		</>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}