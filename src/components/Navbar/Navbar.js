import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import Typography from '../Typography'
import Button from '../Button'

import classes from './styles.module.css'

export const Navbar = (props) => {
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

Navbar.propTypes = {
  className: PropTypes.string
}

export default Navbar
