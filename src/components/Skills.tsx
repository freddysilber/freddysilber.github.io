import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		skillsContainer: {
			display: 'flex',
			justifyContent: 'space-evenly',
			marginTop: '.5rem',
			flexWrap: 'wrap'
		}
	}),
)

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
	const classes: Record<string, string> = useStyles()
	const renderIcons: () => JSX.Element[] = () => ICONS.map((i: string) => <i key={i} className={i}></i>)

	return (
		<div className={classes.skillsContainer}>
			{renderIcons()}
		</div>
	)
}