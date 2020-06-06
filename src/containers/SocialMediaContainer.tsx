import React from 'react'
import { Paper } from '@material-ui/core'
import { LinkedInBadge, TwitterFollow } from '../components'

export default class SocialMediaContainer extends React.Component {
	render() {
		// const classes = useStyles()
		return (
			<Paper elevation={3} style={{ background: '#666' }}>
				<h3>Check me out on my social media!</h3>
				<TwitterFollow />
				<LinkedInBadge />
			</Paper>
		)
	}
}