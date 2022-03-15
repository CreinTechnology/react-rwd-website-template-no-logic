import React from 'react'
import PropTypes from 'prop-types'

import Image from '../Image'

import greyCircles1 from '../../images/greyCircles1.png'
import greyCircles2 from '../../images/greyCircles2.png'

import classes from './styles.module.css'

export const WorkFlow = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

      <Image
        className={classes.image}
        imageSRC={greyCircles1}
        imageALT={'Grey circles background'}
      />
      <Image
        className={classes.image}
        imageSRC={greyCircles2}
        imageALT={'Grey circles background'}
      />

    </div>
  )
}

WorkFlow.propTypes = {
  className: PropTypes.string
}

export default WorkFlow
