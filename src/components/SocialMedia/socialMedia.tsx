import React from 'react'
// Utilities
import { URLS } from '../../util'
// Styles
import './socialMedia.scss';
import { Icon } from '@iconify/react';
import gmailIcon from '@iconify/icons-simple-icons/gmail';
import { Email } from '../../util/email';

export default function SocialMedia(): JSX.Element {
	return (
		<div className="socialMediaContainer">
			<a href={URLS.github.url} target="_blank" rel="noopener noreferrer">
				<i className={`devicon-github-original`}></i>
			</a>
			<a href={URLS.instagram.url} target="_blank" rel="noopener noreferrer">
				<i className={`fab fa-instagram`}></i>
			</a>
			<a href={URLS.linkedIn.url} target="_blank" rel="noopener noreferrer">
				<i className={`fab fa-linkedin`}></i>
			</a>
			<a href={URLS.twitter.url} target="_blank" rel="noopener noreferrer">
				<i className={`fab fa-twitter`}></i>
			</a>
			<a href={Email.getEmailHandler()} target="_blank" rel="noopener noreferrer">
				<Icon icon={gmailIcon} className="gmail-icon" width="32" height="32" />
			</a>
		</div>
	)
}