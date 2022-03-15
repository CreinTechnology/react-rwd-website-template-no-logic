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
      viewBox={'0 0 207.103 31.556'}
      width={207.103}
      height={31.556}
      {...otherProps}
    >
      <defs>
        <style>{'.b{fill:#b7adad}'}</style>
      </defs>
      <g
        style={{
          opacity: 0.63
        }}
      >
        <path
          className={'b'}
          d={'m207.103 31.009-9.23-30.46h-12.711l-9.228 30.46h8.947l1.63-5.639h10.009l1.638 5.639h8.945Zm-18.655-12.413 3.045-10.523h.051l3.045 10.523ZM44.651.001c-9.185 0-13.622 1.616-14.248 9.906-.153 1.972-.184 4-.184 5.868s.031 3.9.184 5.874c.626 8.288 5.064 9.906 14.248 9.906s13.624-1.618 14.254-9.906c.15-1.972.179-4 .179-5.874s-.029-3.9-.179-5.868C58.275 1.616 53.836.001 44.651.001Zm5.7 19.176c-.23 4.7-2.086 5.251-5.7 5.251s-5.465-.55-5.7-5.251c-.036-.732-.078-1.722-.078-3.4s.041-2.662.078-3.4c.232-4.7 2.088-5.249 5.7-5.249s5.467.548 5.7 5.249c.036.733.081 1.722.081 3.4s-.048 2.666-.083 3.399ZM0 8.155h9.106V31.02h9.108V8.155h9.106V.562H0ZM131.111.548h8.644v30.46h-8.644zM114.961 11.669h-9.986V.548h-8.6v30.461h8.6V19.262h9.986v11.747h8.593V.548h-8.593ZM168.188 15.086c3.828-.978 4.95-3.266 4.95-6.571 0-6.694-4.211-7.968-10.2-7.968h-15.519v30.46h16.288c7.5 0 10.022-3.231 10.022-8.2-.004-3.464-.793-6.52-5.541-7.721Zm-12.177-7.573h5.958a2.232 2.232 0 0 1 2.519 2.513 2.3 2.3 0 0 1-2.519 2.454h-5.958Zm5.958 16.527h-5.958v-5.544h5.958c2.409 0 2.91 1.054 2.91 2.77s-.941 2.774-2.91 2.774ZM86.887 13.799c-2.144-1.264-8.158-1.457-11.209-1.652-2.222-.144-3.068-.962-3.068-2.919 0-2.566 2.443-2.661 4.556-2.661 1.744 0 2.955.159 3.8.912.329.334.732.84.748 2.634h8.173c0-3.518-.111-7.312-3.914-9.063-3.024-1.393-14.261-1.393-17.125 0-2.775 1.35-4.7 3.284-4.7 8.8 0 3.242.86 5.64 2.516 6.87 2.431 1.806 4.792 1.991 11.321 2.337 2.633.14 4.06.656 4.06 2.92 0 2.869-2.553 2.869-4.882 2.869-2.421 0-3.15-.2-3.966-.817-.718-.546-.907-1.533-.914-3.011h-8.194c0 4.2.081 7.638 4.041 9.365 3.539 1.55 14.425 1.55 17.683.111 2.825-1.248 4.853-2.912 4.853-8.585.006-3.93-.773-6.335-3.779-8.11Z'}
        />
      </g>
    </svg>
  )
}

CartoonNetworkLogo.propTypes = {
  className: PropTypes.string
}

export default CartoonNetworkLogo