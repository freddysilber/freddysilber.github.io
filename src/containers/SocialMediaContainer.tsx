import React from 'react'
// Utilities
import { URLS } from '../util'

// const useStyles = makeStyles((theme: Theme) =>
// 	createStyles({
// 		container: {
// 			background: '#666'
// 		},
// 		socialContainer: {
// 			display: 'flex',
// 			justifyContent: 'space-evenly',
// 			alignItems: 'center'
// 		},
// 		anchor: {
// 			textDecoration: 'none',
// 			color: 'black'
// 		},
// 		icon: {
// 			fontSize: '3em'
// 		}
// 	})
// )

export default function SocialMediaContainer(): JSX.Element {
	return (
		<div>
			<a href={URLS.github.url} target="_blank" rel="noopener noreferrer">
				<i className={`devicon-github-original `}></i>
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
		</div>
	)
}