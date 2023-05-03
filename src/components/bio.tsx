import React from 'react'
// Utilities
import { URLS } from '../util'
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Bio(): JSX.Element {
	const data = useStaticQuery(graphql`
	query {
		rockJump: file(relativePath: { eq: "rock-jump.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}

		downFlatDown: file(relativePath: { eq: "down-flat-down.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`);
	console.log(data);

	return (
		<div>
			<p>
				Hi, I'm Freddy and I'm a software engineer/ full stack web developer.
				I grew up in the small mountain town of
				<a href={URLS.fraser.url} target='_blank' rel='noopener noreferrer'> {URLS.fraser.name}</a>,
				Colorado.
				I'm a snowboarder but that doesn't pay the bills so now I'm a developer.
			</p>

			<Img fluid={data.rockJump.childImageSharp.fluid} style={{ borderRadius: '5px', maxWidth: '400px', margin: 'auto' }} />

			<p>
				I started snowboarding when I was 4 years old and would average almost 100 days a season snowboarding at my local ski area,
				<a href={URLS.winterParkResort.url} target='_blank' rel='noopener noreferrer'> {URLS.winterParkResort.name}</a>.
				I graduated <a href={URLS.middleParkHighSchool.url} target='_blank' rel='noopener noreferrer'>{URLS.middleParkHighSchool.name} </a>
				in Granby, Colorado and during school, I would often find myself nerding out in our computer lab with some of my friends.
				We would do all kinds of things like creating claymation films, 3D printing, programming 3D printers, video games, and attempt to hack other computer programs.
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
				studying thier Full Stack Software Engineering curriculum. During school, I have practiced skills
				within the entire stack of a web application. I learned many languages, some of which are Ruby, Ruby on Rails, Javascript, React, Redux, Angular, Node and many more as well as
				building multiple projects to add to my portfolio!
			</p>
			<br />
			<p>
				Aside from programming, I spend the weekends coaching the Winter Park Snowboard Team training competitive athletes. I also enjoy playing electric guitar, cooking, skateboarding, snowboarding, riding bikes, fishing, hiking, camping and learning new technologies!
			</p>
		</div >
	)
}