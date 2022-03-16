import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import Image from '../Image'
import Typography from '../Typography'

import star from '../../images/star.png'

import classes from './styles.module.css'

export const UserOpinion = (props) => {
  const {
    className,
    userOpinion,
    userName,
    userPosition,
    userCompany,
    imageSRC,
    imageALT,
    fillBorder,
    ...otherProps
  } = props

  const borderFill = classes[fillBorder]

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={classes.star_container}
      >
        <Image
          className={classes.star_image}
          imageSRC={star}
          imageALT={'Gold star from user is they opinion'}
        />
        <Image
          className={classes.star_image}
          imageSRC={star}
          imageALT={'Gold star from user is they opinion'}
        />
        <Image
          className={classes.star_image}
          imageSRC={star}
          imageALT={'Gold star from user is they opinion'}
        />
        <Image
          className={classes.star_image}
          imageSRC={star}
          imageALT={'Gold star from user is they opinion'}
        />
        <Image
          className={classes.star_image}
          imageSRC={star}
          imageALT={'Gold star from user is they opinion'}
        />
      </Container>

      <Container
        className={classes.user_ctr_opinion}
      >
        <Typography
          className={classes.user_opinion}
        >
          {userOpinion}
        </Typography>
      </Container>

      <Container
        className={classes.user_container}
      >
        <Container
          className={classes.user_ctr_image}
        >
          <Image
            className={classes.user_image}
            imageSRC={imageSRC}
            imageALT={imageALT}
          />
        </Container>

        <Container
          className={classes.user_data}
        >
          <Typography
            className={classes.user_name}
          >
            {userName}
          </Typography>

          <Typography
            className={classes.user_position}
          >
            {userPosition}{' '}
            <Typography
              className={classes.user_company}
            >
              {userCompany}
            </Typography>
          </Typography>
        </Container>
      </Container>

      <Container
        className={`${classes.fill_border}${borderFill ? ` ${borderFill}` : ''}`}
      >
      </Container>
    </div>
  )
}

UserOpinion.propTypes = {
  className: PropTypes.string,
  userOpinion: PropTypes.string,
  userName: PropTypes.string,
  userPosition: PropTypes.string,
  userCompany: PropTypes.string,
  imageSRC: PropTypes.string,
  imageALT: PropTypes.string,
  fillBorder: PropTypes.oneOf(['half', 'full'])
}

export default UserOpinion
