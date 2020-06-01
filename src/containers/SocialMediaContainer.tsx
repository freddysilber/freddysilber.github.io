import React from 'react'
import { LinkedInBadge, TwitterFollow } from '../components'

export default class SocialMediaContainer extends React.Component {
	render() {
		return (
			<>
				<TwitterFollow />
				<LinkedInBadge />
			</>
		)
	}
}