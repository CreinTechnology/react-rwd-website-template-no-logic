import React from 'react'

import Image from './components/Image'
import Navbar from './components/Navbar'

import circles from './images/circles.png'

import classes from './styles.module.css'

export const App = () => {
  return (
    <div
      className={classes.app}
    >

      <Image
        imageSRC={circles}
        imageALT={'Colored circles'}
      />

      <Navbar />

    </div>
  )
}
export default App
