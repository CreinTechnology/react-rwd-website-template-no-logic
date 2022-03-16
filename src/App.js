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
// import footerImage from './images/footerImage.png'

import usersChart1 from './images/usersChart1.png'
import usersChart2 from './images/usersChart2.png'
import rankChart3 from './images/rankChart3.png'
import rankChart4 from './images/rankChart4.png'

import classes from './styles.module.css'

export const App = () => {
  return (
    <div
      className={classes.app}
    >
      <Navbar />
      <Image
        className={classes.image}
        imageSRC={circles}
        imageALT={'Colored circles'}
      />

      <Image
        className={`${classes.chart} ${classes.chart1}`}
        imageSRC={usersChart1}
        imageALT={'usersChart1'}
      />
      <Image
        className={`${classes.chart} ${classes.chart2}`}
        imageSRC={usersChart2}
        imageALT={'usersChart2'}
      />
      <Image
        className={`${classes.chart} ${classes.chart3}`}
        imageSRC={rankChart3}
        imageALT={'rankChart3'}
      />
      <Image
        className={`${classes.chart} ${classes.chart4}`}
        imageSRC={rankChart4}
        imageALT={'rankChart4'}
      />
      <Hero />

      <Image
        className={classes.redBar_left}
        imageSRC={redBar}
        imageALT={'Red bar on left side'}
      />
      <Image
        className={classes.blackCircle_left}
        imageSRC={blackCircle}
        imageALT={'Black circle on left side'}
      />

      <Offer />

      <WorkFlow />

      <Image
        className={classes.redBar_right}
        imageSRC={redBar}
        imageALT={'Red bar on right site'}
      />

      <Image
        className={classes.blackCircle_right}
        imageSRC={blackCircle}
        imageALT={'Red bar on right site'}
      />

      <Testimonials />

      {/* <footer>
        <img
          src={footerImage}
          alt={''}
        />
      </footer> */}

    </div>
  )
}
export default App
