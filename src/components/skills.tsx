import React from 'react'
import styled from 'styled-components'
import breakpoints from '../config/breakpoints'

const ICONS: string[] = [
	'devicon-react-original',
	'devicon-angularjs-plain',
	'devicon-html5-plain',
	'devicon-css3-plain',
	'devicon-typescript-plain',
	'devicon-git-plain',
	'devicon-java-plain',
	'devicon-mysql-plain',
	'devicon-postgresql-plain',
	'devicon-ruby-plain',
	'devicon-sass-original',
	'devicon-visualstudio-plain',
	'devicon-webpack-plain',
];

const SkillsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 1rem 0 1rem;
	justify-content: space-between;

  	@media (max-width: ${breakpoints.breakpointMd}) {
    	flex-direction: row;
		margin: 1rem 0 1rem 0;
  	}
`;

const Icon = styled.i`
	  font-size: 1.5em;
`;

export default function Skills() {
	return (
		<SkillsWrapper className="skillsContainer">
			{ICONS.map((i: string) => <Icon key={i} className={i} />)}
		</SkillsWrapper>
	)
}