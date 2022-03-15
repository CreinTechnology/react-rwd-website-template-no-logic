import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'
import Container from '../Container'

import classes from './styles.module.css'

export const RankingUserContainer = (props) => {
  const {
    className,
    listNumber,
    colorVariant,
    imageSRC,
    imageALT,
    userName,
    userCash,
    ...otherProps
  } = props

  const bgrColor = classes[colorVariant]

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Typography
        className={classes.listNumber}
      >{listNumber}
      </Typography>

      <Container
        className={`${classes.circle}${bgrColor ? ` ${bgrColor}` : ''}`}
      >
        <img
          className={classes.image}
          src={imageSRC}
          alt={imageALT}
        />
      </Container>

      <Container
        className={classes.textWrapper}
      >
        <Typography
          className={classes.textName}
        >
          {userName}
        </Typography>
        <Typography
          className={classes.textCash}
        >
          {`${'$'}${userCash}`}
        </Typography>
      </Container>

    </div>
  )
}

RankingUserContainer.propTypes = {
  className: PropTypes.string,
  listNumber: PropTypes.string,
  colorVariant: PropTypes.oneOf(['light_blue', 'dark_yellow', 'light_orange', 'light_pink']),
  imageSRC: PropTypes.string,
  imageALT: PropTypes.string,
  userName: PropTypes.string,
  userCash: PropTypes.string
}

export default RankingUserContainer
