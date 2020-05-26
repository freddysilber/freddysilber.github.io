import React from 'react'
import { Bio, Counter, Header, LinkedInBadge, HelloProps } from './components'
import './App.scss'

export default function App() {
  return (
    <>
      <Header />
      <LinkedInBadge />
      <HelloProps compiler='Typescript' framework='React' />
      <Counter />
      <Bio />
    </>
  )
}