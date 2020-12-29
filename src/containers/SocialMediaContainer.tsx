import React from 'react'
import {
	Paper,
	createStyles,
	makeStyles,
	Theme
} from '@material-ui/core'

import { LinkedInBadge, TwitterFollow } from '../components'

import { urls } from '../util'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			background: '#666'
		},
		socialContainer: {
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center'
		},
		anchor: {
			textDecoration: 'none',
			color: 'black'
		},
		icon: {
			fontSize: '3em'
		}
	})
)

export default function SocialMediaContainer(): JSX.Element {
	const classes: Record<string, string> = useStyles()
	return (
		<Paper elevation={3} className={classes.container}>
			<div className={classes.socialContainer}>
				<TwitterFollow />
				<LinkedInBadge />
				<a href={urls.github.url} className={classes.anchor} target="_blank" rel="noopener noreferrer" >
					<i className={`devicon-github-original ${classes.icon}`}></i>
				</a>
			</div>
		</Paper>
	)
}