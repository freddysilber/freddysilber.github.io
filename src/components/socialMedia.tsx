import React from 'react'
// Utilities
import { URLS } from '../util'

export default function SocialMedia(): JSX.Element {
	return (
		<div className="socialMediaContainer">
			<span>Lets get in touch!</span>
			<a href={URLS.github.url} target='_blank' rel='noopener noreferrer'>
				<i className={`devicon-github-original`}></i>
			</a>
			<a href={URLS.instagram.url} target='_blank' rel='noopener noreferrer'>
				<i className={`fab fa-instagram`}></i>
			</a>
			<a href={URLS.linkedIn.url} target='_blank' rel='noopener noreferrer'>
				<i className={`fab fa-linkedin`}></i>
			</a>
			<a href={URLS.twitter.url} target='_blank' rel='noopener noreferrer'>
				<i className={`fab fa-twitter`}></i>
			</a>
		</div>
	)
}