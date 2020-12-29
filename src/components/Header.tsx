import React from 'react'
import { AppBar, Toolbar, useScrollTrigger, Slide, Avatar, Paper } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import vintage from '../assets/images/vintage.jpeg'
import horseRide from '../assets/images/horseRide.jpeg'
import wreath from '../assets/images/wreath.jpeg'

interface Props {
	window?: () => Window
	children: React.ReactElement
}

const AVATARS: string[] = [
	vintage,
	horseRide,
	wreath
]

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		background: {
			background: '#666'
		},
		avatar: {
			width: '15rem',
			height: '15rem',
			margin: '0 auto .5rem auto'
		},
		headerText: {
			fontFamily: 'Grizzly',
			fontWeight: 'lighter',
			margin: '0 0 0 1rem',
			color: '#FF9933',
			fontSize: '1.4em'
		},
		imagesContainer: {
			display: 'flex',
			justifyContent: 'space-evenly',
			flexWrap: 'wrap'
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
			<div className={classes.imagesContainer}>
				{AVATARS.map((image: string) => <Avatar src={image} className={classes.avatar} />)}
			</div>
		</>
	)
}
