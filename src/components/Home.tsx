import React from 'react'
// Components
import { Skills, Bio } from '../components'
// Containers
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