import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import Typography from '../Typography'
import Paragraph from '../Paragraph'
import TextField from '../TextField'
import Button from '../Button'
import IconsContainer from '../IconsContainer'

import classes from './styles.module.css'

export const Hero = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={classes.wrapper}
      >

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

      </Container>

      <IconsContainer />

    </div>
  )
}

Hero.propTypes = {
  className: PropTypes.string
}

export default Hero
