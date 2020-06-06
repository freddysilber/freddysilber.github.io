import React from 'react'
import { LinkedInBadge, TwitterFollow } from '../components'

export default class SocialMediaContainer extends React.Component {
	render() {
		return (
			<section>
				<h1>Check me out on my social media!</h1>
				<TwitterFollow />
				<LinkedInBadge />
			</section>
		)
	}
}