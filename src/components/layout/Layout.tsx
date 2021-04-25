/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
// Components
import { Header, Navigation } from '..'
// Styles
import './layout.scss'

const Layout = ({ children }: any) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
				title
				}
			}
		}
  `)
	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<Navigation />
			<div className="body">
				<main>{children}</main>
				{/* <footer className="has-text-centered">
					<p>Made with ❤️ by yours truly. -Freddy</p>
				</footer> */}
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
