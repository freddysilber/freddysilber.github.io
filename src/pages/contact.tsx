import React from 'react'
import {
	Layout,
	SEO,
} from '../components'
import './scss/contact.scss'

export default function ContactPage() {
	return (
		<Layout>
			<SEO title="Contact" />
			<section>
				<h1>Phone: 970-531-0297</h1>
				<h1>Email: <a href="mailto: freddy.silber@gmail.com">freddy.silber@gmail.com</a></h1>
			</section>
		</Layout>
	)
}