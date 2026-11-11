import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import {
	Layout,
	SEO,
	Skills,
	SocialMedia
} from '../components';
import breakpoints from '../config/breakpoints';

const IndexContainer = styled.section`
	display: flex;
	flex-direction: row;
	height: 100%;

  	@media(max-width: ${breakpoints.breakpointMd}) {
    	flex-direction: column;
  	}
`;

const ContentBody = styled.div`
		width: 100%;
		overflow: auto;
		padding-right: 1rem;
		display: flex;
		flex-direction: column;
		margin: auto;
		width: 50%;

		@media (max-width: ${breakpoints.breakpointMd}) {
			overflow: revert;
			width: 100%;
			margin: 0;

			title-text {
				font-size: 3em;
			}
		}
`;

const AvatarWrapper = styled.div`
	width: 100%;
	min-width: 20rem;
	height: auto;
	margin: auto;

	.gatsby-image-wrapper {
		border-radius: 100%;
		box-shadow: 10px 5px 15px rgba(0, 0, 0, 0.5);
	}

	@media (max-width: ${breakpoints.breakpointMd}) {
		width: 50%;
	}
`

const SubTitle = styled.h3`
	color: #666;
	font-size: 1.3em;
	padding-bottom: 2rem;
	font-weight: bold;
`;

export default function IndexPage() {
	/**
	 		prioritizationMatrix: file(relativePath: { eq: "prioritization-matrix-demo.png" }) {
				childImageSharp {
					gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
				}
			}
			nflLoserPoolGame: file(relativePath: { eq: "nfl-loser-pool-game.png" }) {
				childImageSharp {
					gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
				}
			}
	 */
	const data = useStaticQuery(graphql`
		query {
			avatar: file(relativePath: { eq: "avatar.png" }) {
				childImageSharp {
					gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
				}
			}
		}
	`)

	return (
		<Layout>

			<IndexContainer>
				<div>
					<AvatarWrapper>
						<GatsbyImage image={getImage(data.avatar)!} alt="Freddy Silber" />
					</AvatarWrapper>

					<SocialMedia />

					{/* <div className="p-1">
						<div style={{ ...styles.emailContainer }}>
							<Icon icon={outlineEmail} className="mr-1" />
							<span>{mailTo('Send me an Email!')}</span>
						</div>
					</div> */}
				</div>

				<Skills />

				<ContentBody>
					<h1 className="title-text">Hi,<br /> I'm Freddy Silber,<br /> Software Developer</h1>

					<SubTitle>Full stack developer | Salesforce connoisseur</SubTitle>

					{/* <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<GatsbyImage image={getImage(data.prioritizationMatrix)!} alt="" style={{ width: '50%', borderRadius: '5px', boxShadow: '8px 8px 15px 1px #000' }} />
							<div style={{ textAlign: 'center', width: '50%' }}>
								<h1 style={{ fontSize: '1.4em', fontWeight: 'bold' }}>Prioritization Matrix</h1>
								<p>"A simple Salesforce app where a user can vote on their favorite bug to be prioritized"</p>
								<p><em>- React, Apex, and Node.js</em></p>
							</div>
						</div>

						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div style={{ textAlign: 'center', width: '50%' }}>
								<h1 style={{ fontSize: '1.4em', fontWeight: 'bold' }}>NFL Loser Pool</h1>
								<p>"A game to play with others and vote against the worst teams of the season"</p>
								<p><em>- Svelte, Golang, and Postgres</em></p>
							</div>
							<GatsbyImage image={getImage(data.nflLoserPoolGame)!} alt="" style={{ width: '50%', borderRadius: '5px', boxShadow: '8px 8px 15px 1px #000' }} />
						</div>
					</div>

					<h1 className="titleText" style={{ textAlign: 'center', marginTop: '2rem', fontSize: '2em' }}>More coming soon...</h1> */}
				</ContentBody>
			</IndexContainer>
		</Layout>
	)
}

export const Head = () => <SEO title="Home" />
