import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import CartoonNetworkLogo from './CartoonNetworkLogo'
import BookingLogo from './BookingLogo'
import CocaColaLogo from './CocaColaLogo'
import DropboxLogo from './DropboxLogo'
import NetflixLogo from './NetflixLogo'
import RedBullLogo from './RedBullLogo'
import SlackLogo from './SlackLogo'
import SpotifyLogo from './SpotifyLogo'
import ToshibaLogo from './ToshibaLogo'

import classes from './styles.module.css'

export const IconsContainer = (props) => {
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
        className={classes.iconWrapper}
      >
        <CartoonNetworkLogo
          className={classes.iconSVG}
        />
        <BookingLogo
          className={classes.iconSVG}
        />
        <DropboxLogo
          className={classes.iconSVG}
        />
      </Container>

      <Container
        className={classes.iconWrapper}
      >
        <ToshibaLogo
          className={classes.iconSVG}
        />
        <SlackLogo
          className={classes.iconSVG}
        />
        <NetflixLogo
          className={classes.iconSVG}
        />
      </Container>

      <Container
        className={classes.iconWrapper}
      >
        <CocaColaLogo
          className={classes.iconSVG}
        />
        <RedBullLogo
          className={classes.iconSVG}
        />
        <SpotifyLogo
          className={classes.iconSVG}
        />
      </Container>

    </div>
  )
}

IconsContainer.propTypes = {
  className: PropTypes.string
}

export default IconsContainer
