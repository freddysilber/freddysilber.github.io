import React from 'react'
import { Layout, Resume, SEO, } from '../components'

export default function ResumePage() {
	return (
		<Layout>
			<SEO title="Resume" />
			<Resume />
		</Layout>
	)
}