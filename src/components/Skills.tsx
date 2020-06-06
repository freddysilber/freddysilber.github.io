import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		skillsContainer: {
			display: 'flex',
			justifyContent: 'space-evenly',
			marginTop: '.5rem'
		}
	}),
)
export default function Skills() {
	const classes = useStyles()
	return (
		<div className={classes.skillsContainer}>
			<i className="devicon-react-original"></i>
			<i className="devicon-html5-plain"></i>
			<i className="devicon-css3-plain"></i>
			<i className="devicon-git-plain"></i>
			<i className="devicon-java-plain"></i>
			<i className="devicon-mysql-plain"></i>
			<i className="devicon-postgresql-plain"></i>
			<i className="devicon-ruby-plain"></i>
			<i className="devicon-sass-original"></i>
			<i className="devicon-typescript-plain"></i>
			<i className="devicon-visualstudio-plain"></i>
			<i className="devicon-webpack-plain"></i>
		</div>
	)
}