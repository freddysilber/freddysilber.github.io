import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6"><h3 className="name">Freddy Silber / Software Engineer</h3></Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Header