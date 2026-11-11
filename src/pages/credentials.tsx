import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
		flatironSchoolCertification: file(relativePath: { eq: "flatiron-school-certificate.jpg" }) {
			childImageSharp {
				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
			}
		}
		salesforceAppBuilderCertification: file(relativePath: { eq: "salesforce-app-builder-certificate.jpg" }) {
			childImageSharp {
				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
			}
		}
		salesforcePlatformDeveloperCertification: file(relativePath: { eq: "platform-developer.jpg" }) {
			childImageSharp {
				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
			}
		}
	}
`)

	return (
		<Layout>
			<CredentialsContainer>
				<PictureFrame>
					<GatsbyImage
						image={getImage(data.flatironSchoolCertification)!}
						alt="Flatiron School certification"
					/>
				</PictureFrame>
				<PictureFrame>
					<GatsbyImage
						image={getImage(data.salesforceAppBuilderCertification)!}
						alt="Salesforce App Builder certification"
					/>
				</PictureFrame>
				<PictureFrame>
					<GatsbyImage
						image={getImage(data.salesforcePlatformDeveloperCertification)!}
						alt="Salesforce Platform Developer certification"
					/>
				</PictureFrame>
			</CredentialsContainer>
		</Layout>
	)
}

export const Head = () => <SEO title="Credentials" />
