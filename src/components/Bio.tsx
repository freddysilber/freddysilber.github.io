import React from 'react'

export default class Bio extends React.Component {
	render() {
		return (
			<>
				<p>Here is some text about me....</p>
				<p>Lets maybe run this shit in a jumbotron or something so this text looks like a section rather than a rando piece of string on the DOM</p>
				<p>RULE NUMBER ONE, PUT EACH LINE OF TEXT IN ITS OWN <code>here is some code</code> TAG</p>
			</>
		)
	}
}