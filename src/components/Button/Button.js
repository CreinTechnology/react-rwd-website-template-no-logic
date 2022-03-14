import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Button = (props) => {
  const {
    className,
    buttonLabel,
    ...otherProps
  } = props

  return (
    <button
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {buttonLabel}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  buttonLabel: PropTypes.string
}

export default Button
