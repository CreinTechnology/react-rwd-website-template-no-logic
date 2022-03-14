import React from 'react'

import Container from './components/Container'
import Image from './components/Image'
import Navbar from './components/Navbar'
import Typography from './components/Typography'
import Paragraph from './components/Paragraph'
import TextField from './components/TextField'
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

      <Navbar />

      <Container
        className={classes.textWrapper}
      >
        <Typography
          className={classes.textHeader}
        >
          Best{' '}
          <Typography
            className={classes.textHeader__bold}
          >
            Solution Provider {' '}
          </Typography>
          For Your{' '}
          <Typography
            className={classes.textHeader__bold}
          >
            Business.
          </Typography>
        </Typography>

        <Paragraph
          className={classes.textParagraph}
        >
          Vivamus ut arcu dignissim massa pulvinar scelerisque a in purus. Vivamus sit amet ex dui. In tortor massa, sollicitudin id ligula nec, vulputate viverra purus.
        </Paragraph>

        <TextField
          className={classes.formField}
          placeholder={'Name@company.com'}
        />
        <Button
          className={classes.formButton}
          buttonLabel={'Try for free'}
        />
      </Container>

    </div>
  )
}
export default App
