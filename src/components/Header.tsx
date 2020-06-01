import React from 'react'
import { AppBar, Toolbar, Typography, useScrollTrigger, Slide, Avatar, Paper } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import profile from '../images/profile.jpeg'
import vintage from '../images/vintage.jpeg'

interface Props {
	window?: () => Window
	children: React.ReactElement
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		background: {
			background: '#666'
		},
		avatar: {
			width: '10rem',
			height: '10rem',
			margin: '.25rem'
		},
		flex: {
			display: 'flex',
			justifyContent: 'center',
			background: '#666',
			margin: '0 1rem'
		},
		headerText: {
			fontFamily: 'Grizzly',
			fontWeight: 'lighter',
			margin: '.25rem',
			color: '#FF9933',
			fontSize: '5.5vw'
		}
	})
)

function HideOnScroll(props: Props) {
	const { children, window } = props
	const trigger = useScrollTrigger({ target: window ? window() : undefined })
	return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>
}

export default function Header(props: Props) {
	const classes = useStyles()
	return (
		<>
			<HideOnScroll {...props}>
				<AppBar className={classes.background}>
					<Typography variant="h4" className={classes.headerText}>
						<p className={classes.headerText}>Freddy Silber /// Software Engineer</p>
					</Typography>

					{/* <Typography variant="h4">
						<p className={classes.headerText}>Freddy Silber /// Software Engineer</p>
					</Typography> */}
				</AppBar>
			</HideOnScroll>
			<Toolbar />
			<Paper elevation={3} className={classes.flex}>
				<Avatar src={profile} className={classes.avatar} />
				<Avatar src={vintage} className={classes.avatar} />
			</Paper>
		</>
	)
}
