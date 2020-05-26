import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, CssBaseline, useScrollTrigger, Box, Container, Slide } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

interface Props {
	window?: () => Window
	children: React.ReactElement
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menuButton: {
			marginRight: theme.spacing(2)
		},
		buttonIcon: {
			float: 'right'
		},
		background: {
			background: '#666'
		},
	}),
)

function HideOnScroll(props: Props) {
	const { children, window } = props
	const trigger = useScrollTrigger({ target: window ? window() : undefined })
	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	)
}

export default function Header(props: Props) {
	const classes = useStyles()
	return (
		<>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar className={classes.background}>
					<Toolbar variant="dense">
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<MenuIcon className={classes.buttonIcon} />
						</IconButton>
						<Typography variant="h4"><p className="headerText">Freddy Silber / Software Engineer</p></Typography>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
			<Container>
				<Box my={2}>
					{[...new Array(12)]
						.map(
							() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
						)
						.join('\n')}
				</Box>
			</Container>
		</>
	)
}
