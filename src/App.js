import React from 'react'
import { Header, LinkedInBadge, Navigation } from './components'
// import { Bio, Counter, Header, LinkedInBadge, HelloProps, Navigation } from './components'
import './App.scss'

export default function App() {
  return (
    <>
      {/* title and images */}
      <Header />
      <Navigation />
      {/* <Bio /> */}
      <LinkedInBadge />
      {/* <HelloProps compiler='Typescript' framework='React' /> */}
      {/* <Counter /> */}
    </>
  )
}