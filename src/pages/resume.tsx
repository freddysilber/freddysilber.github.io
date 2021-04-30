import React from 'react'
import { Layout, Resume, SEO, } from '../components'
import './scss/resume.scss'

export default function ResumePage() {
	return (
		<Layout>
			<SEO title="Resume" />
			<Resume />
		</Layout>
	)
}