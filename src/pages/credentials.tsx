import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components'
import { Layout, SEO } from '../components';
import breakpoints from '../config/breakpoints';

const CredentialsContainer = styled.div`
	display: flex;
	@media(max-width: ${breakpoints.breakpointMd}) {
		flex-wrap: wrap;
	}
`;

const credentialsStyles = {
	width: '100%',
	padding: '2rem',
	borderRadius: '5px',
	margin: '.25rem',
};

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
	}
`)

	return (
		<Layout>
			<SEO title="Credentials" />
			<CredentialsContainer>
				<Img fluid={data.flatironSchoolCertification.childImageSharp.fluid} style={credentialsStyles} />
				<Img fluid={data.salesforceAppBuilderCertification.childImageSharp.fluid} style={credentialsStyles} />
			</CredentialsContainer>
		</Layout>
	)
}
