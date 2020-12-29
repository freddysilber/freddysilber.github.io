import React from 'react'
import {
	Paper,
	createStyles,
	makeStyles,
	Theme
} from '@material-ui/core'

import { LinkedInBadge, TwitterFollow } from '../components'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			background: '#666',
			textAlign: 'center'
		},
		title: {
			color: 'white'
		}
	})
)

export default function SocialMediaContainer(): JSX.Element {
	const classes: Record<string, string> = useStyles()
	return (
		<Paper elevation={3} className={classes.container}>
			<h3 className={classes.title}>Check me out on my social media!</h3>
			<TwitterFollow />
			<LinkedInBadge />
		</Paper>
	)
}