import React from 'react'

import Image from './components/Image'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import WorkFlow from './components/WorkFlow'
import Testimonials from './components/Testimonials'

import circles from './images/circles.png'
import redBar from './images/redBar.png'
import blackCircle from './images/blackCircle.png'

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

      <Image
        className={classes.image__redBar}
        imageSRC={redBar}
        imageALT={'Red bar on right site'}
      />

      <Image
        className={classes.image__blackCircle}
        imageSRC={blackCircle}
        imageALT={'Red bar on right site'}
      />

      <Testimonials />

    </div>
  )
}
export default App
