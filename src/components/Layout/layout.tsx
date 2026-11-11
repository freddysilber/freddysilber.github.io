/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// Components
import { Navigation } from '..'
// Styles
// Global styles are imported here (before the layout styles) so the CSS order is the same on every page
import '../../scss/global.scss';
import './layout.scss';

export default function Layout({ children }: any) {
	// const data = useStaticQuery(graphql`
	// 	query SiteTitleQuery {
	// 		site {
	// 			siteMetadata {
	// 				title
	// 			}
	// 		}
	// 	}
  // `)

	return (
		<div className="layoutContainer">
			<Navigation />
			<main>{children}</main>
		</div>
	)
}
