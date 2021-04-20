import React from 'react'
// Router
import { Link } from 'gatsby'
// Navigation & Helpers
import { NavTabs, NavTab } from '.'

export default function Navigation(): JSX.Element {
	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
		setValue(newValue)
	}

	// const renderTabs: () => JSX.Element[] = () => {
	// 	return NavTabs.map((tab: NavTab) => {
	// 		return <Tab key={tab.route} label={tab.label} component={Link} to={tab.route} />
	// 		// return (
	// 		// 	<Link to={tab.route}>
	// 		// 		<Tab key={tab.route} label={tab.label} />
	// 		// 	</Link>
	// 		// )
	// 	})
	// }

	return (
		<p>Make Nav tabs</p>
		// <Paper className={classes.root}>
		// 	<Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
		// 		{renderTabs()}
		// 	</Tabs>
		// </Paper>
	)
}
