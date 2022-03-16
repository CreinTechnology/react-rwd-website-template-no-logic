import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import Typography from '../Typography'
import TextField from '../TextField'
import Button from '../Button'

import classes from './styles.module.css'

export const Footer = (props) => {
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
        className={classes.textWrapper}
      >
        <Typography
          className={classes.text}
        >
          Contact Us
        </Typography>
      </Container>

      <Container
        className={classes.wrapper}
      >
        <Container
          className={classes.inputWrapper}
        >
          <TextField
            className={classes.input}
            placeholder={'your name'}
          />
          <TextField
            className={classes.input}
            placeholder={'your email'}
          />
          <TextField
            className={classes.input}
            placeholder={'your company'}
          />
        </Container>

        <Container
          className={classes.wrapper}
        >
          <TextField
            className={classes.message}
            placeholder={'message'}
          />
        </Container>
      </Container>

      <Container
        className={classes.wrapper}
      >
        <Container
          className={classes.acceptWrapper}
        >
          <Container
            className={classes.checkboxContainer}
          >
            <input
              className={classes.checkbox}
              type={'checkbox'}
              name={'accept-all'}
            />
            <label htmlFor={'accept-all'}>
              <Typography
                className={classes.checkboxText}
              >
                Accept all
              </Typography>
            </label>
          </Container>

          <Container
            className={classes.checkboxContainer}
          >
            <input
              className={classes.checkbox}
              type={'checkbox'}
              name={'agree-data'}
            />
            <label htmlFor={'agree-data'}>
              <Typography
                className={classes.checkboxText}
              >
                I agree to the processing my data
              </Typography>
            </label>
          </Container>
          <Container
            className={classes.checkboxContainer}
          >
            <input
              className={classes.checkbox}
              type={'checkbox'}
              name={'rodo'}
            />
            <label htmlFor={'rodo'}>
              <Typography
                className={classes.checkboxText}
              >
                RODO processing my data by company
              </Typography>
            </label>
          </Container>

        </Container>
        <Container
          className={classes.buttonWrapper}
        >
          <Button
            className={classes.button}
            buttonLabel={'Request a demo'}
          />
        </Container>
      </Container>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
