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
      viewBox={'0 0 155.664 46.632'}
      width={155.664}
      height={46.632}
      {...otherProps}
    >
      <defs>
        <style>{'.a{fill:#b7adad}'}</style>
      </defs>
      <path
        className={'a'}
        d={'M55.309 18.293c0-4.63 3.376-7.864 9.511-7.864a15.267 15.267 0 0 1 8.466 2.366 1.081 1.081 0 0 1 .407 1.327c-.326.812-.923 2.034-1.351 2.828a.924.924 0 0 1-1.212.236 15.377 15.377 0 0 0-4.9-1.8 10.429 10.429 0 0 0-1.358-.059c-1.569.035-2.879.58-3.341 1.776a2.106 2.106 0 0 0-.149.711c-.043 1.577 2.152 2.147 4.811 2.6 4.943.847 8.683 2.3 8.683 7.384 0 4.321-3.434 8.225-10.162 8.106a14.736 14.736 0 0 1-9.268-3.043 1.387 1.387 0 0 1-.355-1.489 11.176 11.176 0 0 1 1.58-2.788 1.226 1.226 0 0 1 1.453-.212 13.153 13.153 0 0 0 6.314 2.34c.208.007.414.008.617 0 2.372-.057 3.807-.957 3.777-2.472-.026-1.335-1.906-2.114-4.9-2.679-4.776-.9-8.618-2.474-8.618-7.278m43.389 6.593c-3.368.044-6.456.965-6.545 3.6 0 2.089 1.693 3.115 4.071 2.98a6.078 6.078 0 0 0 4.787-2.522 9.787 9.787 0 0 0 .309-3.085c0-.166-.332-.479-.475-.539a5.439 5.439 0 0 0-2.148-.431m-11.21-10.598a13.621 13.621 0 0 1 9.674-3.487c6.567.137 10.037 3.215 10.36 10.581.133 3.037-.088 11.509-.14 13.62-.008.3-.11.512-.518.52-1.081.043-3.58.026-4.728.011-.579-.028-.646-.316-.654-.617 0-.2-.022-.781-.034-1.257a.192.192 0 0 0-.3-.181 9.2 9.2 0 0 1-6.747 2.439c-4.078 0-8.143-2.4-8.131-7.15.013-4.865 3.462-7.265 7.252-7.831a14.736 14.736 0 0 1 7.234.783c.133.053.4-.024.405-.212a14.277 14.277 0 0 0-.141-2.361c-.3-1.427-1.494-2.575-3.995-2.884a7.694 7.694 0 0 0-1.552-.043c-1.988.156-4.38 1.706-5.37 2.286a.633.633 0 0 1-.716-.116 29.717 29.717 0 0 1-2.146-3.28.767.767 0 0 1 .25-.824Zm22.2 9.057c-.038-6.782 4.688-12.51 12.362-12.56 4.79-.031 8.271 2.141 8.884 3.165a.78.78 0 0 1-.026.684 23.808 23.808 0 0 1-2.16 3.448c-.311.4-.648.057-1.041-.2a10.217 10.217 0 0 0-5.187-1.619c-3.692 0-6.442 2.532-6.411 7.19.029 4.47 2.662 6.926 6.424 7.015a7.613 7.613 0 0 0 4.9-2.007c.322-.281.655-.14 1.023.147a29.464 29.464 0 0 1 2.331 2.661.765.765 0 0 1-.041 1.033 10.875 10.875 0 0 1-8.546 3.652c-8.335.058-12.47-5.8-12.508-12.612m39.787 12.306c.391-.029 4.566-.606 5.848-.9a.369.369 0 0 0 .253-.6c-.716-1.073-2.6-4.12-4.567-6.848-1.812-2.508-3.723-4.714-4.34-5.563a.4.4 0 0 1 .022-.569c1.175-1.15 6.091-5.97 7.94-7.96.716-.774.286-1.107-.322-1.288-1.174-.35-3.073-.786-4.153-1.014a1.471 1.471 0 0 0-1.4.347c-1.848 1.723-7.488 7.384-9.172 9.076-.3.305-.48.237-.481-.2-.014-3.262-.078-17.23-.195-19.527a.669.669 0 0 0-.579-.545c-1.059-.055-3.733-.071-4.787-.009a.748.748 0 0 0-.6.589c-.243 3.674.1 30.64.247 34.412a.508.508 0 0 0 .472.5c1.051.061 3.652.057 4.867.034.6 0 .671-.42.671-.42l.09-7.236a1.2 1.2 0 0 1 .161-.428c.428-.461 1.612-1.73 2.117-2.221a.281.281 0 0 1 .436.057c.6.809 2.311 3.44 3.9 5.79 1.457 2.159 2.817 4.074 2.912 4.21a.7.7 0 0 0 .669.319Zm-71.006-.025c.367.012 3.153.009 4.387.008a.612.612 0 0 0 .645-.584c.262-5.289.15-30.471-.016-34.447-.014-.344-.161-.473-.4-.5a21.378 21.378 0 0 0-5.035.144.388.388 0 0 0-.306.377c-.236 10.249-.077 33.879-.027 34.327a.681.681 0 0 0 .747.681ZM3.916 25.103a3.8 3.8 0 0 1-3.707-2.607q-.03-.09-.056-.182a3.986 3.986 0 0 1 2.583-4.869l32.57-10.913a4.415 4.415 0 0 1 1.19-.174 3.9 3.9 0 0 1 3.806 2.662l.049.157a3.907 3.907 0 0 1-2.719 4.64L5.236 24.878a4.215 4.215 0 0 1-1.323.225ZM9.346 41.123a3.8 3.8 0 0 1-3.719-2.567q-.03-.09-.056-.181a4.014 4.014 0 0 1 2.576-4.919l32.575-11.014a4.2 4.2 0 0 1 1.293-.217 3.936 3.936 0 0 1 3.8 2.639l.05.166a4.122 4.122 0 0 1-.5 3.313 5.462 5.462 0 0 1-1.937 1.364l-32.7 11.18a4.485 4.485 0 0 1-1.384.237Z'}
      />
      <path
        className={'a'}
        d={'M36.462 41.197a4 4 0 0 1-3.829-2.726L21.761 6.175l-.054-.181a4.003 4.003 0 0 1 7.646-2.374L40.22 35.909l.032.1a4 4 0 0 1-3.793 5.18ZM20.302 46.632a4 4 0 0 1-3.83-2.728L5.603 11.613a4 4 0 0 1 2.516-5.072 4.05 4.05 0 0 1 1.245-.209 4 4 0 0 1 3.83 2.726L24.063 41.35a4 4 0 0 1-3.762 5.281Z'}
      />
      <path
        className={'a'}
        d={'m31.103 33.918 7.58-2.592-2.478-7.359-7.589 2.565ZM14.968 39.437l7.58-2.591-2.5-7.415-7.587 2.565ZM25.706 17.888l7.581-2.588-2.449-7.27-7.595 2.545ZM9.567 23.4l7.581-2.588-2.481-7.366-7.59 2.544Z'}
      />
    </svg>
  )
}

CartoonNetworkLogo.propTypes = {
  className: PropTypes.string
}

export default CartoonNetworkLogo