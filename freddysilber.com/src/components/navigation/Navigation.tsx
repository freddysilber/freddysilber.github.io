import React from 'react'
// Router
import { Link } from 'gatsby'
// Material UI
import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core'
// Navigation & Helpers
import { NavTabs, NavTab } from './'

const useStyles = makeStyles({
	root: {
		flexGrow: 1
	}
})

export default function Navigation(): JSX.Element {
	const classes: Record<string, string> = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
		setValue(newValue)
	}

	const renderTabs: () => JSX.Element[] = () => {
		return NavTabs.map((tab: NavTab) => {
			return <Tab key={tab.route} label={tab.label} component={Link} to={tab.route} />
			// return (
			// 	<Link to={tab.route}>
			// 		<Tab key={tab.route} label={tab.label} />
			// 	</Link>
			// )
		})
	}

	return (
		<Paper className={classes.root}>
			<Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
				{renderTabs()}
			</Tabs>
		</Paper>
	)
}
