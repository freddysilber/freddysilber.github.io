import React from 'react'
import { Paper, Tabs, Tab, makeStyles } from '@material-ui/core'
// Router
import { Link } from 'react-router-dom'
// Navigation & Helpers
import { NavTabs, NavTab } from './NavigationHelper'


const useStyles = makeStyles({
	root: {
		flexGrow: 1
	}
})

const renderTabs: () => JSX.Element[] = () => {
	return NavTabs.map((tab: NavTab) => {
		return (
			<Link to={tab.route}>
				<Tab label={tab.label} />
			</Link>
		)
	})
}

export default function Navigation() {
	const classes: Record<string, string> = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
		console.log('Navi event!', event)
		setValue(newValue)
	}

	return (
		<Paper className={classes.root}>
			<br />
			<Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
				{renderTabs()}
			</Tabs>
		</Paper>
	)
}
