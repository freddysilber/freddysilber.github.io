import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

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

export default function Header() {
	const classes = useStyles()
	return (
		<AppBar className={classes.background} position="static">
			<Toolbar variant="dense">
				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
					<MenuIcon className={classes.buttonIcon} />
				</IconButton>
				<Typography variant="h4"><p className="headerText">Freddy Silber / Software Engineer</p></Typography>
			</Toolbar>
		</AppBar>
	)
}