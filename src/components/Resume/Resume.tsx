import React from 'react'
// Styles
import './resume.scss'

export default function Resume() {
	return (
		<div className="container">
			<div className="resumeContainer">
				<h1 className="bold">Freddy Silber</h1>
				<p>970-531-0297 | freddy.silber@gmail.com</p>
				<p>LinkedIn | Github | Blog | Portfolio | YouTube</p>
				<h1 className="centerText marginTop bold">Software Engineer</h1>
				<hr />
				<p>
					Experienced in Ruby on Rails, Java, Apex and JavaScript based programming.
					Comfortable with large companies and enterprise level data as well as a fast paced startup environment.
					Possess strong skills in team-building, solutioning, collaboration and communication, B2B/E2E solutions,
					and project management skills to help high tech and software companies meet their business goals on an efficient timeline.
					Work well with peers and clients to gather information in a friendly manner to meet deadlines. Avid snowboarder who loves being outdoors in the mountains.
				</p>
				<h1 className="centerText marginTop bold">Technical Skills</h1>
				<hr />
				<p>
					Angular, Salesforce, Ruby, Ruby on Rails, SQL, Javascript, React, Redux, Redux Thunk, HTML5, CSS, Rake, Apex, Database Triggers,
					Automation/ Process Automation, Java, Lightning Components, Visualforce Pages, Git, Github, reCharts, D3.js, MatLab,
					Project Management, B2B Solutions, Salesforce, Adobe Illustrator, Microsoft Excel, Final Cut Pro, Bootstrap
				</p>
				<h1 className="centerText marginTop bold">Technical Projects</h1>
				<hr />
			</div>
		</div>
	)
}