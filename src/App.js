import React from 'react'

import Image from './components/Image'
import Container from './components/Container'
import Typography from './components/Typography'
import Button from './components/Button'

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

      <Container
        className={classes.navbarContainer}
      >
        <Typography
          className={classes.headerName}
        >
          AGENCY
          <Container
            className={classes.circleIcon}
          />
        </Typography>

        <Button
          className={classes.navbar__button}
          buttonLabel={'Login'}
        />

      </Container>
    </div>
  )
}
export default App
