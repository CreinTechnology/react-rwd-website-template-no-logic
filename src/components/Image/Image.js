import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Image = (props) => {
  const {
    className,
    imageSRC,
    imageALT,
    ...otherProps
  } = props

  return (
    <img
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      src={imageSRC}
      alt={imageALT}
      {...otherProps}
    />
  )
}

Image.propTypes = {
  className: PropTypes.string,
  imageSRC: PropTypes.string,
  imageALT: PropTypes.string
}

export default Image
