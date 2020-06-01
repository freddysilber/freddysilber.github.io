import React from 'react'
import { AppBar, Toolbar, Typography, useScrollTrigger, Slide } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

interface Props {
	window?: () => Window
	children: React.ReactElement
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		background: {
			background: '#666'
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
					<Toolbar variant="dense">
						<Typography variant="h4">
							<p className="headerText">Freddy Silber /// Software Engineer</p>
						</Typography>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</>
	)
}
