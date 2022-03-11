import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components'
import { Layout, SEO } from '../components';

const CredentialsContainer = styled.div`
	display: flex;
	flex-direction: column;
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
	}
`)

	const credentialsStyles = {
		width: '100%',
		padding: '2rem',
		borderRadius: '1rem',
	};

	return (
		<Layout>
			<SEO title="Credentials" />
			<CredentialsContainer>
				<div style={{ padding: '1rem' }}>
				<Img fluid={data.flatironSchoolCertification.childImageSharp.fluid} style={credentialsStyles} />
				</div>
				<Img fluid={data.salesforceAppBuilderCertification.childImageSharp.fluid} style={credentialsStyles} />
			</CredentialsContainer>
		</Layout>
	)
}
