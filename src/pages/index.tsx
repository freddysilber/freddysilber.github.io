import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip';
import breakpoints from '../config/breakpoints'
// Components
import {
	Layout,
	SEO,
	// Bio,
	// Skills,
	SocialMedia
} from '../components'
import { Icon } from '@iconify/react';
import { mailTo } from '../util/email';

const IndexContainer = styled.section`
	display: flex;
	flex-direction: row;

  	@media(max-width: ${breakpoints.breakpointMd}) {
    	flex-direction: column;
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
`;

const styles: Record<string, Record<string, string | number>> = {
	emailContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
};

export default function IndexPage() {
	const [state, setState] = useState<{ spotlight?: any }>({});
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	// useEffect(() => {
	// 	axios.get('https://api.github.com/repos/freddysilber/ghost-rider').then((response) => {
	// 		setState({
	// 			...state,
	// 			spotlight: response.data
	// 		});
	// 		console.log(state)
	// 	}).catch(error => {
	// 		setState({});
	// 		throw new Error(error);
	// 	})
	// }, {} as any);

	return (
		<Layout>
			<ReactTooltip type="dark" />
			<SEO title="Home" />
			{/* <p data-tip="hello world">Tooltip</p> */}
			<IndexContainer>
				<div>
					<AvatarWrapper data-tip="That's me!">
						<Img fluid={data.placeholderImage.childImageSharp.fluid} />
					</AvatarWrapper>
					<SocialMedia />
					<div style={{
						padding: '1rem'
					}}>
						<div style={{ ...styles.emailContainer }}>
							<Icon icon="ic:outline-email" style={{ marginRight: '.25rem' }} />
							<span>{mailTo('Send me an Email!')}</span>
						</div>
					</div>
				</div>
				{/* <Skills /> */}
				<div style={{ marginLeft: '1.5rem' }}>
					<div>
						<h1 className="titleText">Hello,<br /> I'm Freddy Silber,<br /> Sofware Developer</h1>
						<SubTitle style={{ fontWeight: 'bold' }}>Full stack developer | Salesforce connoisseur</SubTitle>
						<div className="grid">
							<img src="https://raw.githubusercontent.com/ng-ghost-rider/ghost-rider/main/assets/images/step.png" style={{ width: "700px" }}></img>
							<p style={{ alignSelf: 'center' }}>An Angular library for creating guided tours</p>
						</div>
					</div>
					{/* {
						state.spotlight
							? <div style={{
								padding: '1rem',
								border: '1px solid #666',
								borderRadius: '5px',
								width: 'fit-content'
							}}>
								<h1 style={{ display: 'flex', alignItems: 'center' }}>Splotlight Project:<span style={{ fontSize: '1.5em', marginLeft: '.25rem' }}>Ghost Rider</span></h1>
								<p>{state.spotlight.description}</p>
							</div>
							: null
					} */}
					{/* <Bio /> */}
				</div>
			</IndexContainer>
			{/* <div style={{ display: 'flex', padding: '1rem 0 0.5rem 0' }}></div> */}
		</Layout>
	)
}
