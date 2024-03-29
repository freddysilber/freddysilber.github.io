/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from 'gatsby'
// Components
import { Navigation } from '..'
// Styles
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

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}