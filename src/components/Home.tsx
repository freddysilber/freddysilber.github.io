import React from 'react'

import { Header, Skills, Bio } from '../components'
import { SocialMediaContainer } from '../containers'

export default function Home(): JSX.Element {
	return (
		<>
			<Skills />
			<Bio />
			<SocialMediaContainer />
		</>
	)
}