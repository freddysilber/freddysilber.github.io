import React from 'react'
import { Header, Bio } from './components'
import { SocialMediaContainer } from './containers'
import './App.scss'

export default function App() {
  return (
    <>
      <Header />
      <Bio />
      <i className="devicon-react-original"></i>
      <SocialMediaContainer />
    </>
  )
}