import React from 'react'
import { Box, Paper } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const cloudcoachurl = () => <a href="https://cloudcoach.com/" target="_blank" rel="noopener noreferrer" className="bioAnchor">Cloud Coach</a>
const fraserUrl = () => <a href='https://frasercolorado.com/' target='_blank' rel='noopener noreferrer' className='bioAnchor'>Fraser</a>
const winterParkResortUrl = () => <a href='https://www.winterparkresort.com/' target='_blank' rel='noopener noreferrer' className='bioAnchor'>Winter Park Resort</a>
const middleParkHighSchool = () => <a href='http://mphs.egsd.org/' target='_blank' rel='noopener noreferrer' className='bioAnchor'>Middle Park High School</a>
const salesforceUrl = () => <a href='https://www.salesforce.com/' target='_blank' rel='noopener noreferrer' className='bioAnchor'>Salesforce</a>
const flatironSchoolUrl = () => <a href="https://flatironschool.com/" target="_blank" rel="noopener noreferrer" className="bioAnchor">Flatiron School</a>

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		bioContainer: {
			margin: '1rem',
			padding: '1rem',
			background: '#666',
			color: '#FF9933'
		}
	}),
)

const Bio = () => {
	const classes = useStyles()
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
				with some of my friends. We would do all kinds of things from creating claymation films, 3D printing, programming 3D printers, video games, and our attemps to hack other computer programs.
			</p>
				<p>
					Shortly after I graduated high school, I landed a job with a company called {cloudcoachurl()} and started learning basic programming skills on the {salesforceUrl()}.com CRM platform.
				Now I am a developer for {cloudcoachurl()} and spend my time assisting our clients with custom UI's, automation, database triggers, and implementations as well as manage a few component libraries,
				optimize code, maintain consistant data, and invent my own workflows, apps etc.
			</p>
				<p>
					I have recently graduated from {flatironSchoolUrl()} for the Full Stack Software Engineering curriculum. During this course, I have practiced skills
				within the entire stack of a web application. I got to learn languages like Ruby, Ruby on Rails, Javascript, React, Redux and many more as well as
				building over 5 projects to add to my portfolio! I loved every part of the school and learning from amazing people.
			</p>
				<p>
					Asside from programming all the time, I like to play electric guitar, cook, play with my cat, skateboard, snowboard, bmx bike, mountain bike, fish, hike, camp and much much more... oh, and keep learning!
			</p>
			</Paper>
		</Box>
	)
}

export default Bio