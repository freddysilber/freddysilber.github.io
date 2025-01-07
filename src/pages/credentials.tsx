import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components'
import { Layout, SEO } from '../components';
import breakpoints from '../config/breakpoints';
import PictureFrame from '../components/PictureFrame/pictureFrame';

const CredentialsContainer = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 1rem;

	@media(max-width: ${breakpoints.breakpointMd}) {
		grid-template-columns: auto;
	}
`;

export default function Credentials() {
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
		salesforcePlatformDeveloperCertification: file(relativePath: { eq: "platform-developer.jpg" }) {
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
			<SEO title="Credentials" />
			<CredentialsContainer>
				<PictureFrame>
					<Img
						fluid={data.flatironSchoolCertification.childImageSharp.fluid}
						alt="Flatiron School certification"
					/>
				</PictureFrame>
				<PictureFrame>
					<Img
						fluid={data.salesforceAppBuilderCertification.childImageSharp.fluid}
						alt="Salesforce App Builder certification"
					/>
				</PictureFrame>
				<PictureFrame>
					<Img
						fluid={data.salesforcePlatformDeveloperCertification.childImageSharp.fluid}
						alt="Salesforce App Builder certification"
					/>
				</PictureFrame>
			</CredentialsContainer>
		</Layout>
	)
}
