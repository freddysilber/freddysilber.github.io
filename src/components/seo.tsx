/**
 * SEO component for Gatsby's Head API.
 *
 * Render it from a page's exported `Head` function:
 *   export const Head = () => <SEO title="Home" />
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
import React from 'react'
import { useSiteMetadata } from '../hooks'

interface SEOProps {
	title: string;
	description?: string;
	children?: React.ReactNode;
}

export default function SEO({ title, description, children }: SEOProps) {
	const siteMetadata = useSiteMetadata()
	const metaDescription = description || siteMetadata.description
	const defaultTitle = siteMetadata.title
	const fullTitle = defaultTitle ? `${title} | ${defaultTitle}` : title

	return (
		<>
			<title>{fullTitle}</title>
			<meta name="description" content={metaDescription} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={metaDescription} />
			<meta property="og:type" content="website" />
			{children}
		</>
	)
}
