import React from 'react'

import Image from './components/Image'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import WorkFlow from './components/WorkFlow'

import circles from './images/circles.png'

import classes from './styles.module.css'

export const App = () => {
  return (
    <div
      className={classes.app}
    >
      <Image
        className={classes.image}
        imageSRC={circles}
        imageALT={'Colored circles'}
      />
      <Navbar />
      <Hero />

      <Offer />

      <WorkFlow />

    </div>
  )
}
export default App
