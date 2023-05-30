import outlineEmail from '@iconify/icons-ic/outline-email';
import { Icon } from '@iconify/react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import {
	Layout,
	SEO,
	Skills,
	SocialMedia
} from '../components';
import breakpoints from '../config/breakpoints';
import { mailTo } from '../util/email';

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

		@media (max-width: ${breakpoints.breakpointMd}) {
			overflow: revert;
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

const styles: Record<string, Record<string, string | number>> = {
	emailContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
};

export default function IndexPage() {
	const data = useStaticQuery(graphql`
		query {
			avatar: file(relativePath: { eq: "avatar.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
			prioritizationMatrix: file(relativePath: { eq: "prioritization-matrix-demo.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			nflLoserPoolGame: file(relativePath: { eq: "nfl-loser-pool-game.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<Layout>
			<ReactTooltip type="dark" />
			<SEO title="Home" />

			<IndexContainer>
				<div>
					<AvatarWrapper data-tip="That's me!">
						<Img fluid={data.avatar.childImageSharp.fluid} />
					</AvatarWrapper>

					<SocialMedia />

					<div style={{
						padding: '1rem'
					}}>
						<div style={{ ...styles.emailContainer }}>
							<Icon icon={outlineEmail} className="mr-1" />
							<span>{mailTo('Send me an Email!')}</span>
						</div>
					</div>
				</div>

				<Skills />

				<ContentBody>
					<h1 className="titleText">Hi,<br /> I'm Freddy Silber,<br /> Software Developer</h1>

					<SubTitle>Full stack developer | Salesforce connoisseur</SubTitle>

					<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						{/* <div style={{ display: 'flex', alignItems: 'center' }}>
							<Img fluid={data.prioritizationMatrix.childImageSharp.fluid} style={{ width: '50%', borderRadius: '5px', boxShadow: '8px 8px 15px 1px #000' }} />
							<div style={{ textAlign: 'center', width: '50%' }}>
								<h1 style={{ fontSize: '1.4em', fontWeight: 'bold' }}>Prioritization Matrix</h1>
								<p>"A simple Salesforce app where a user can vote on their favorite bug to be prioritized"</p>
								<p><em>- React, Apex, and Node.js</em></p>
							</div>
						</div> */}

						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div style={{ textAlign: 'center', width: '50%' }}>
								<h1 style={{ fontSize: '1.4em', fontWeight: 'bold' }}>NFL Loser Pool</h1>
								<p>"A game to play with others and vote against the worst teams of the season"</p>
								<p><em>- Svelte, Golang, and Postgres</em></p>
							</div>
							<Img fluid={data.nflLoserPoolGame.childImageSharp.fluid} style={{ width: '50%', borderRadius: '5px', boxShadow: '8px 8px 15px 1px #000' }} />
						</div>
					</div>

					<h1 className="titleText" style={{ textAlign: 'center', marginTop: '2rem', fontSize: '2em' }}>More coming soon...</h1>
				</ContentBody>
			</IndexContainer>
		</Layout>
	)
}
