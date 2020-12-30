// Routes/ Utilities
import { Routes } from '../../util'

export interface NavTab {
	label: string,
	route: string
}

export const NavTabs: NavTab[] = [
	{ label: 'Home', route: Routes.home },
	{ label: 'To Page 2', route: Routes.page2 },
	{ label: 'Projects', route: Routes.projects }
]