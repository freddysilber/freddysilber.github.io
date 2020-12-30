import React from 'react'
import { Box, Paper } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
// Utilities
import { urls } from '../util'

const cloudcoachurl: () => JSX.Element = () => <a href={urls.cloudCoach.url} target="_blank" rel="noopener noreferrer" className="bioAnchor">{urls.cloudCoach.name}</a>
const fraserUrl: () => JSX.Element = () => <a href={urls.fraser.url} target='_blank' rel='noopener noreferrer' className='bioAnchor'>{urls.fraser.name}</a>
const winterParkResortUrl: () => JSX.Element = () => <a href={urls.winterParkResort.url} target='_blank' rel='noopener noreferrer' className='bioAnchor'>{urls.winterParkResort.name}</a>
const middleParkHighSchool: () => JSX.Element = () => <a href={urls.middleParkHighSchool.url} target='_blank' rel='noopener noreferrer' className='bioAnchor'>{urls.middleParkHighSchool.name}</a>
const salesforceUrl: () => JSX.Element = () => <a href={urls.salesforce.url} target='_blank' rel='noopener noreferrer' className='bioAnchor'>{urls.salesforce.name}</a>
const flatironSchoolUrl: () => JSX.Element = () => <a href={urls.flatironSchool.url} target="_blank" rel="noopener noreferrer" className="bioAnchor">{urls.flatironSchool.name}</a>

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		bioContainer: {
			padding: '1rem',
			background: '#666',
			color: '#FF9933'
		}
	}),
)

export default function Bio(): JSX.Element {
	const classes: Record<string, string> = useStyles()
	return (
		<Box my={1}>
			<Paper elevation={3} className={classes.bioContainer}>
				<p>
					My Name is Freddy Silber and I am a software engineer and full stack web developer.
					I grew up in a small mountain town called {fraserUrl()} in the state of Colorado.
					I'm a snowboarder but that doesn't pay the bills so now I'm a developer.
				</p>
				<p>
					I started snowboarding when I was 4 years old and would average almost 100 days a season snowboarding at my local ski area, {winterParkResortUrl()}.
					I graduated {middleParkHighSchool()} in Granby Colorado and during school, I would often find myself nerding out in our computer lab
					with some of my friends. We would do all kinds of things like creating claymation films, 3D printing, programming 3D printers, video games, and our attemps to hack other computer programs.
				</p>
				<p>
					Shortly after I graduated high school, I landed a job with a company called {cloudcoachurl()} and started learning basic programming skills on the {salesforceUrl()}.com CRM platform.
					Now I am a developer for {cloudcoachurl()} and spend my time assisting our clients with custom UI's, automation, database triggers, and implementations as well as manage a few component libraries,
					optimize code, maintain consistant data, and invent my own workflows, apps etc.
				</p>
				<p>
					I have recently graduated from {flatironSchoolUrl()} for the Full Stack Software Engineering curriculum. During this course, I have practiced skills
					within the entire stack of a web application. I learned many languages, some of witch are Ruby, Ruby on Rails, Javascript, React, Redux, Angular, Node and many more as well as
					building multiple projects to add to my portfolio!
				</p>
				<p>
					Asside from programming all the time, I like to play electric guitar, cook, play with my cat, skateboard, snowboard, bmx bike, mountain bike, fish, hike, camp and much much more... oh, and keep learning!
				</p>
			</Paper>
		</Box>
	)
}