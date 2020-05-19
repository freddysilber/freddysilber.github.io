import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		background: {
			background: '#666'
		}
	}),
)

export default function Header() {
	const classes = useStyles()
	return (
		<AppBar className={classes.background} position="static">
			<Toolbar variant="dense">
				<Typography variant="h6"><h3 className="headerText">Freddy Silber / Software Engineer</h3></Typography>
			</Toolbar>
		</AppBar>
	)
}