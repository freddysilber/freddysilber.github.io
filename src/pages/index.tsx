import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip';
import breakpoints from '../config/breakpoints'
// Components
import {
	Layout,
	SEO,
	Bio,
	Skills,
	SocialMedia
} from '../components'

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
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
	}

	@media (max-width: ${breakpoints.breakpointMd}) {
    	width: 50%;
  	}
`

export default function IndexPage() {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
			flatironSchoolCertification: file(relativePath: { eq: "flatiron-school-certificate.jpg" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			salesforceAppBuilderCertification: file(relativePath: { eq: "salesforce-app-builder-certificate.jpg" }) {
				childImageSharp {
					fluid {
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
			{/* <p data-tip="hello world">Tooltip</p> */}
			<IndexContainer>
				<AvatarWrapper data-tip="That's me!">
					<Img fluid={data.placeholderImage.childImageSharp.fluid} />
				</AvatarWrapper>
				<Skills />
				<Bio />
			</IndexContainer>
			<SocialMedia />
			<div style={{ display: 'flex', padding: '1rem 0 0.5rem 0' }}>
				<Img fluid={data.flatironSchoolCertification.childImageSharp.fluid} style={{ width: '50%', margin: '5px', borderRadius: '5px' }} />
				<Img fluid={data.salesforceAppBuilderCertification.childImageSharp.fluid} style={{ width: '50%', margin: '5px', borderRadius: '5px' }} />
			</div>
		</Layout>
	)
}