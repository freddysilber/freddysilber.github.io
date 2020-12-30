export interface NavTab {
	label: string,
	route: string
}

export const NavTabs: NavTab[] = [
	{ label: 'To The App!', route: './' },
	{ label: 'About', route: '/about' },
	{ label: 'Projects', route: '/projects' },
	{ label: 'Freddys Tab!', route: '/freddysTab!' }
]