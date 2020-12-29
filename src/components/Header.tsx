import React from 'react'
import { AppBar, Toolbar, useScrollTrigger, Slide, Avatar, Paper } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

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
			padding: '1rem'
		},
		headerText: {
			fontFamily: 'Grizzly',
			fontWeight: 'lighter',
			margin: '0',
			color: '#FF9933',
			fontSize: '140%'
		}
	})
)

const HideOnScroll = (props: Props) => {
	const { children, window } = props
	const trigger = useScrollTrigger({ target: window ? window() : undefined })
	return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>
}

export default function Header(props: Props): JSX.Element {
	const classes: Record<string, string> = useStyles()
	return (
		<>
			<HideOnScroll {...props}>
				<AppBar className={classes.background}>
					<h1 className={classes.headerText}>Freddy Silber /// Software Engineer</h1>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
			<Paper elevation={3} className={classes.flex}>
				<Avatar src={vintage} className={classes.avatar} />
			</Paper>
		</>
	)
}
