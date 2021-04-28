import React from 'react'
import {
	Layout,
	SEO,
} from '../components'
import './scss/resume.scss'

const resumeUrl = 'https://docs.google.com/document/d/e/2PACX-1vQFc7TyXlpdmebBT_9pUoxoXiydpn2qYm86vygqybCLeyoh3Yr70QN6-nH-d81vY0rOf8i6qgP3jbu_/pub?embedded=true'
export default function ResumePage() {
	// const downloadResume = () => {
	// 	console.log('download')
	// 	const a: HTMLAnchorElement = document.createElement('a')
	// 	a.download = 'Freddy Silber\'s Resume';
	// 	a.href = resumeUrl.toDataURL(`image/jpeg`, 1);
	// 	a.click();
	// }

	return (
		<Layout>
			<SEO title="Resume" />
			{/* <button className="button is-primary is-light" onClick={downloadResume}>Download</button> */}
			<section className="resumeContainer">
				<iframe width="1000" height="1000" src={resumeUrl}></iframe>
			</section>
		</Layout>
	)
}