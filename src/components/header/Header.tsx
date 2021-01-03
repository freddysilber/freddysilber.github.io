import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
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
// const horseRide = require('../../assets/images/horseRide.png')
const wreath = require('../../assets/images/wreath.png')

const AVATARS: string[] = [vintage, wreath]

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

const horseRide = graphql`
	query {
		file (relativePath: { eq: "horseRide.png" }) {
			childImageSharp {
				fixed (height: 500){
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`

function Image(): JSX.Element {
	// console.log(useStaticQuery(query))
	const data = useStaticQuery(horseRide)
	return <Img fixed={data.file.childImageSharp.fixed} alt="Horse Ride" />
}

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
			<Image />
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