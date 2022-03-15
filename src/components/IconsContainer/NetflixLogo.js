import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const CartoonNetworkLogo = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <svg
      className={`${classes.iconSVG}${className ? ` ${className}` : ''}`}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={'0 0 142.072 38.544'}
      width={142.072}
      height={38.544}
      {...otherProps}
    >
      <path
        d={'M121.279 36.091q2.968.288 5.929.611l4.356-10.756 4.141 11.748q3.187.4 6.365.837l-7.259-20.6L142.072 0h-6.15l-.064.088-3.923 9.687L128.492 0h-6.072l6.269 17.79-7.409 18.3Zm-4.592-.421V0h-6.07v35.17q3.037.234 6.07.5m-45.6-1.994c1.639 0 3.275.012 4.909.026V20.6h7.292v-5.585H76V5.586h8.4V0H69.907v33.679c.394 0 .789-.006 1.184 0m-18.846.341q3.033-.108 6.073-.182V5.587h5.673V0h-17.42v5.587h5.674v28.429ZM5.823 37.777V16.525l7.187 20.394q3.315-.372 6.643-.7V0h-5.824v22.012L6.074 0H0v38.541h.036q2.886-.4 5.786-.764m34.9-32.192V0H26.225v35.613q7.233-.624 14.481-1.047v-5.592q-4.2.244-8.387.559V20.6h7.292v-5.586H32.32V5.585Zm55.706 23.122V0h-6.1v34.036q7.274.267 14.494.739V29.18q-4.191-.271-8.4-.474'}
        style={{
          fill: '#b7adad'
        }}
        transform={'translate(0 .003)'}
      />
    </svg>
  )
}

CartoonNetworkLogo.propTypes = {
  className: PropTypes.string
}

export default CartoonNetworkLogo
