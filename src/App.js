import React from 'react'
import { Header, Navigation, Bio } from './components'
import { SocialMediaContainer } from './containers'
import './App.scss'

export default function App() {
  return (
    <>
      <Header />
      <Bio />
      <i className="devicon-react-original"></i>
      <Navigation />
      {/* <LinkedInBadge /> */}
      {/* <HelloProps compiler='Typescript' framework='React' /> */}
      {/* <Counter /> */}
      <SocialMediaContainer />
    </>
  )
}