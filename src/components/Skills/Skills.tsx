import React from 'react'
// Styles
import './skills.scss'

const ICONS: string[] = [
	'devicon-react-original',
	'devicon-html5-plain',
	'devicon-css3-plain',
	'devicon-git-plain',
	'devicon-java-plain',
	'devicon-mysql-plain',
	'devicon-postgresql-plain',
	'devicon-ruby-plain',
	'devicon-sass-original',
	'devicon-typescript-plain',
	'devicon-visualstudio-plain',
	'devicon-webpack-plain',
	'devicon-angularjs-plain'
]


export default function Skills(): JSX.Element {
	const renderIcons = () => (
		ICONS.map((i: string) => (
			<i key={i} className={i} style={{ fontSize: '1.5rem' }}></i>)
		)
	)

	return (
		<div className="skillsContainer">
			{renderIcons()}
		</div>
	)
}