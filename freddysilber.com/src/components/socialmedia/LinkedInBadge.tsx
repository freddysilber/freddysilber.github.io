import React from 'react'

const BADGE_URL: string = 'https://www.linkedin.com/in/freddysilber?trk=profile-badge'

export default function LinkedInBadge(): JSX.Element {
	return (
		<div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="freddysilber">
			<a className="LI-simple-link" href={BADGE_URL}>Freddy Silber</a>
		</div>
	)
}