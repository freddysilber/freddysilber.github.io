import React from 'react'
// Utilities
import { URLS } from '../util'

export default function Bio(): JSX.Element {
	return (
		<div>
			<p>
				Hi, I'm Freddy and I'm a software engineer/ full stack web developer.
				I grew up in a small mountain town called
				<a href={URLS.fraser.url} target='_blank' rel='noopener noreferrer'> {URLS.fraser.name} </a>
				in the state of Colorado.
				I'm a snowboarder but that doesn't pay the bills so now I'm a developer.
			</p>
			<br />
			<p>
				I started snowboarding when I was 4 years old and would average almost 100 days a season snowboarding at my local ski area,
				<a href={URLS.winterParkResort.url} target='_blank' rel='noopener noreferrer'> {URLS.winterParkResort.name}</a>.
				I graduated <a href={URLS.middleParkHighSchool.url} target='_blank' rel='noopener noreferrer'>{URLS.middleParkHighSchool.name} </a>
				in Granby Colorado and during school, I would often find myself nerding out in our computer lab with some of my friends.
				We would do all kinds of things like creating claymation films, 3D printing, programming 3D printers, video games, and our attemps to hack other computer programs.
			</p>
			<br />
			<p>
				Shortly after I graduated high school, I landed a job with a company called
				<a href={URLS.cloudCoach.url} target="_blank" rel="noopener noreferrer"> {URLS.cloudCoach.name} </a>
				and started learning basic programming skills on the
				<a href={URLS.salesforce.url} target='_blank' rel='noopener noreferrer'> {URLS.salesforce.name}</a>.com CRM platform.
				Now I am a junior developer for Cloud Coach implementing new features and tools for our product.
			</p>
			<br />
			<p>
				I have recently graduated from
				<a href={URLS.flatironSchool.url} target="_blank" rel="noopener noreferrer"> {URLS.flatironSchool.name} </a>
				for the Full Stack Software Engineering curriculum. During this course, I have practiced skills
				within the entire stack of a web application. I learned many languages, some of witch are Ruby, Ruby on Rails, Javascript, React, Redux, Angular, Node and many more as well as
				building multiple projects to add to my portfolio!
			</p>
			<br />
			<p>
				Asside from programming all the time, I enjoy playing electric guitar, cook, play with my cat, skateboard, snowboard, bmx bike, mountain bike, fish, hike, camp and much much more... oh, and keep learning!
			</p>
		</div >
	)
}