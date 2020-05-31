import React from 'react'
import profile from '../images/profile.jpeg'
import vintage from '../images/vintage.jpeg'
import { Box, Avatar } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		avatar: {
			width: '10rem',
			height: '10rem',
			margin: '.25rem'
		},
		flex: {
			display: 'flex'
		}
	}),
)

const Bio = () => {
	const classes = useStyles()
	return (
		<Box my={1}>
			<div className={classes.flex}>
				<Avatar src={profile} className={classes.avatar} />
				<Avatar src={vintage} className={classes.avatar} />
			</div>
			<p>My name is Freddy Silber and I am a software engineer</p>
			<p>I enjoy skateboarding, snowboarding, hiking, BMXing, mountain biking and other outdoor activities.</p>
		</Box>
	)
}

export default Bio