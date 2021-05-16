import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
// Components
import {
	Layout,
	SEO,
	Bio,
	Skills,
	SocialMedia
} from '../components'
import { Email } from '../util'

const IndexContainer = styled.section`
	display: flex;
`;

export default function IndexPage() {
	return (
		<Layout>
			<SEO title="Home" />
			<IndexContainer>
				<StaticImage style={{
					borderRadius: '100%',
					width: '75%',
					height: 'auto',
					margin: '0 auto',
					boxShadow: '0 5px 5px rgba(0, 0, 0, 0.5)'
				}}
					className="avatar"
					src="../assets/images/avatar.jpg"
					alt="Avatar" />
				<Skills />
				<Bio />
			</IndexContainer>
			<SocialMedia />
		</Layout>
	)
}