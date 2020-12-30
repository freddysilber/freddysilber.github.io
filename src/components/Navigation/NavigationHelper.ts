// Routes/ Utilities
import { Routes } from '../../util'

export interface NavTab {
	label: string,
	route: string
}

export const NavTabs: NavTab[] = [
	{ label: 'Home', route: Routes.home },
	{ label: 'About', route: Routes.about },
	{ label: 'Projects', route: Routes.projects }
]