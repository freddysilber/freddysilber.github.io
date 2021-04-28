import React from 'react'
import {
	Layout,
	SEO,
} from '../components'
import './scss/resume.scss'

export default function ResumePage() {
	return (
		<Layout>
			<SEO title="Resume" />
			<section className="resumeContainer">
				<iframe width="1000" height="1000" src="https://docs.google.com/document/d/e/2PACX-1vQFc7TyXlpdmebBT_9pUoxoXiydpn2qYm86vygqybCLeyoh3Yr70QN6-nH-d81vY0rOf8i6qgP3jbu_/pub?embedded=true"></iframe>
			</section>
		</Layout>
	)
}