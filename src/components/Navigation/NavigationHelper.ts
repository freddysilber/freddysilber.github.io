// Routes/ Utilities
import { Routes } from '../../util'

export interface NavTab {
	label: string,
	route: string
}

export const NavTabs: NavTab[] = [
	{ label: 'To The App!', route: Routes.home },
	{ label: 'About', route: Routes.about },
	{ label: 'Projects', route: '/projects' },
	{ label: 'Freddys Tab!', route: '/freddysTab!' }
]