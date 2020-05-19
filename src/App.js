import React from 'react'
import Header from './components/Header'
import LinkedInBadge from './components/LinkedInBadge'
import HelloProps from './components/HelloProps'
import './App.scss'

const App = () => {
  return (
    <>
      <Header />
      <LinkedInBadge />
      <HelloProps compiler='Typescript' framework='React' />
    </>
  )
}

export default App