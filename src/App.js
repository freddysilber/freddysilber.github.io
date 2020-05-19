import React from 'react'
import Header from './components/Header'
import LinkedInBadge from './components/LinkedInBadge'
import HelloProps from './components/HelloProps'
import './App.scss'

const App = () => {
  return (
    <>
      <h1>Freddy Silber / Software Engineer</h1>
      <LinkedInBadge />
      <Header />
      <HelloProps compiler='Typescript' framework='React' />
    </>
  )
}

export default App