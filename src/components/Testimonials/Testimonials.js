import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import Typography from '../Typography'
import UserOpinion from '../UserOpinion'

import testimonialUser1 from '../../images/testimonialUser1.png'
import testimonialUser2 from '../../images/testimonialUser2.png'

import classes from './styles.module.css'

export const Testimonials = (props) => {
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
        className={classes.testimonials_ctn_header}
      >
        <Typography
          className={classes.testimonials__header}
        >
          What clients are saying
        </Typography>
      </Container>

      <Container
        className={classes.testimonials_container}
      >
        <UserOpinion
          userOpinion={'This plugin is amazing with the current version, I can not imagine it, how cool will it be when you finish the all'}
          userName={'Andre Smith'}
          userPosition={'CEO at '}
          userCompany={'Pinterest'}
          imageSRC={testimonialUser2}
          imageALT={'User send his feedback'}
          fillBorder={'half'}
        />
        <UserOpinion
          userOpinion={'This plugin is amazing with the current version, I can not imagine it, how cool will it be when you finish the all'}
          userName={'Angela Michele'}
          userPosition={'CTO at '}
          userCompany={'Facebook'}
          imageSRC={testimonialUser1}
          imageALT={'User send his feedback'}
          fillBorder={'half'}
        />
        <UserOpinion
          userOpinion={'This plugin is amazing with the current version, I can not imagine it, how cool will it be when you finish the all'}
          userName={'Adam Wright'}
          userPosition={'EDO at '}
          userCompany={'Twitter inc.'}
          imageSRC={testimonialUser1}
          imageALT={'User send his feedback'}
          fillBorder={'full'}
        />
      </Container>

    </div>
  )
}

Testimonials.propTypes = {
  className: PropTypes.string
}

export default Testimonials
