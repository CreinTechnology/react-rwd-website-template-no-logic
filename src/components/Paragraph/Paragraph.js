import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Paragraph = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <p
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

    </p>
  )
}

Paragraph.propTypes = {
  className: PropTypes.string
}

export default Paragraph
