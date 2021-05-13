import React from 'react'

const ICONS: string[] = [
	'devicon-react-original',
	'devicon-angularjs-plain',
	'devicon-html5-plain',
	'devicon-css3-plain',
	'devicon-typescript-plain',
	'devicon-git-plain',
	'devicon-java-plain',
	'devicon-mysql-plain',
	'devicon-postgresql-plain',
	'devicon-ruby-plain',
	'devicon-sass-original',
	'devicon-visualstudio-plain',
	'devicon-webpack-plain',
]


export default function Skills() {
	return (
		<div className="skillsContainer">
			{ICONS.map((i: string) => <i key={i} className={i}></i>)}
		</div>
	)
}