import React from 'react'
import { Header, Bio, Skills } from './components'
import { SocialMediaContainer } from './containers'
import './App.scss'

export default function App() {
  return (
    <>
      <Header />
      <Skills />
      <Bio />
      <SocialMediaContainer />
    </>
  )
}