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
      viewBox={'0 0 157.117 51.447'}
      width={157.117}
      height={51.447}
      {...otherProps}
    >
      <defs>
        <style>{'.a{fill:#b7adad}'}</style>
      </defs>
      <path
        className={'a'}
        d={'M60.334 44.879c-5.846-3.766-13.78-4.427-26.576-.878-13.641 3.206-18.189 5.261-24.159 1.136-2.3-2.026-3.12-5.289-2.506-9.989 1.425-7.661 5.275-15.034 12.115-23.213 3.818-4.254 7.359-7.905 12.035-9.371 3.584-.92 3.249 1.9 2.815 2.3a3.468 3.468 0 0 0-1.82.46 4.715 4.715 0 0 0-1.877 3.206c-.1 2.486 2.47 1.969 3.58.6 1.2-1.538 2.964-4.484 1.574-7.23A4.086 4.086 0 0 0 32.674.02c-4.282-.245-8.269 1.8-11.95 4.053A52.214 52.214 0 0 0 2.599 25.892c-2.1 5.117-4 12.446-1.153 18.412 2.2 4.139 6.775 6.338 12.231 5.878a96.391 96.391 0 0 0 11.561-2.381c3.112-.748 19.041-6.224 24.275 3.307a7.069 7.069 0 0 1 6.09-3.451 20.043 20.043 0 0 1 12.496 3.79c-1.256-1.882-4.8-4.656-7.765-6.568Z'}
      />
      <path
        className={'a'}
        d={'M35.382 12.898c-2.979-1.955-8.967 1.782-13.764 8.192-4.386 5.75-6.28 12.433-4.219 15.523 3.066 3.636 8.757-1.653 11.178-4.484l.312-.331a35.289 35.289 0 0 0 4.148-5.937s1.131-1.869 1.185-1.955c.7-.129 1.541-.33 2.49-.6-.014.043-3.631 6.123-3.262 9.141.115.921.027 4.284 3.311 5.3 4.377.734 7.871-2.659 10.954-5.677 0 0 .525-.5.823-.79l-.173.7c-1.281 4.456.446 5.391 1.526 5.736 3.265.949 7.166-3.794 7.178-3.794-.1 1.494-.4 2.73 1.178 3.722 1.487.532 2.991-.279 4.135-1.041 4.119-2.9 7.438-7.447 10.119-11.375h-1.71c-.02 0-4.219 6.086-6.946 7.409 0 0-.5.255-.786.053-.354-.3-.214-.93 0-1.374.014-.029 10.528-18.264 10.528-18.264h-4.964s-.542.877-.586.935c-.033-.029-.113-.18-.168-.252-3.076-4.254-10.04 2.29-15.284 9.878a49.838 49.838 0 0 1-7.254 8.575s-3.948 3.619-5.635 1.019a5.019 5.019 0 0 1-.079-3.739c1.964-5.591 5.349-10.666 9.2-13.727 1.087-.847 2.269-1.093 2.855-.733a1.246 1.246 0 0 1 .3 1.71 2.767 2.767 0 0 0-2.2.848c-1.151 1.207-1.551 2.372-1.185 3.464 1.778 2.53 5.323-2.472 5.151-5.52a3.272 3.272 0 0 0-1.514-2.631 5.22 5.22 0 0 0-4.554.044 20.285 20.285 0 0 0-6.009 4.657c-1.993 2.2-5.411 4.643-6.48 4.369.349-.934 3.237-6.842.2-9.055Zm23.93 8.739a68.806 68.806 0 0 1 4.462-5.519c2.3-2.027 3.226-1.135 3.305-.5a453.717 453.717 0 0 1-7.076 12.232c0-.014-.747 1.135-.747 1.135a11 11 0 0 1-3.847 3.952 1.116 1.116 0 0 1-.925-.1.98.98 0 0 1-.418-.949c.108-1.239 1.366-5.019 5.246-10.251Zm-27 2.314s-.043.13-.065.172c-.006 0-2.164 3.521-2.164 3.521-1.3 1.739-2.93 3.925-4.963 4.974-.6.2-1.436.331-1.861-.2-.9-1.078-.436-2.573-.059-3.78l.134-.431a35.754 35.754 0 0 1 4.464-7.92.219.219 0 0 1 .084-.028.116.116 0 0 1 .014.043 7.165 7.165 0 0 0 4.479 3.378c.009 0 .018.014.018.043a.707.707 0 0 1-.081.228Zm2.045-4.153c-.01.029-.962 2.213-.962 2.213-.138.115-.355.058-.6 0l-.427-.072a3.837 3.837 0 0 1-2.666-2.371c-.43-2.07 1.338-3.694 2.117-4.283a2.357 2.357 0 0 1 2.584-.259 2.714 2.714 0 0 1 .574 1.811 9.837 9.837 0 0 1-.622 2.96Zm62.755 6.668a2.922 2.922 0 0 0-2.826-1.624c-3.932.36-7.779 3.593-9.8 8.236a23.642 23.642 0 0 0-2.017 7.488 20.72 20.72 0 0 1 6.548-4.987 13.624 13.624 0 0 1 2.349-5.677c.743-1.107 2.23-2.889 3.9-2.415 1.459.489.946 4.528-.993 8.437a27.106 27.106 0 0 1-5.852 7.733c-1.964 1.667-4.87 3.679-7.413 2.127-1.6-.948-2.418-2.932-2.246-5.491.765-7.258 4.069-13.439 8.8-20.482 4.875-6.54 10.249-13.252 17.489-16.832a4.886 4.886 0 0 1 4.026-.46s-6.8 3.737-10.036 10.651c-.824 1.754-1.97 4.125-.816 6.223a2.426 2.426 0 0 0 2.536 1.121c3.971-.92 6.536-4.628 8.633-8.02 1.215-2.573 2.3-5.131 2.3-7.977 0-.345-.018-.8-.047-1.15 1.9-1.006 5.787.776 5.787.776 3.04 1.007 9.513 5.966 11.7 6.914 1.065-1.236 2.815-3.1 3.8-4.039l-1.427-.877c-2.295-1.393-4.705-2.715-7.082-4.023A14.151 14.151 0 0 0 112.4 1.012c-.879.316-1.682.589-1.682.589-1.659-1.811-4.38-1.639-6.385-1.15-7.21 2.067-13.905 7.114-21.082 15.867-5.277 6.856-8.55 12.778-10.295 18.628-1.345 3.938-1.753 9.73 1.529 13.166 2.791 2.917 6.491 2.285 9.1 1.236 5.662-2.788 10.75-8.8 13.285-15.711.612-2.055 1.291-4.958.237-7.172Zm13.019-21.66c-.749 8.6-7.431 13.641-9.084 14.043-1 .2-2.711-.244-1.185-3.852a23.989 23.989 0 0 1 10.2-11.1 2.2 2.2 0 0 1 .068.909Zm39.631 1.092c-3.594 2.041-7.32 3.363-11.829 2.9a69.12 69.12 0 0 0-3.588 4.355c6.33 1.61 13.04-1.969 16.782-5.375a26.416 26.416 0 0 0 5.985-7.76 31.455 31.455 0 0 1-7.35 5.88Zm-67.919 7.158h-4.714l-2.659 4.321h4.713Z'}
      />
      <path
        className={'a'}
        d={'M137.914 45.279c-.507.345-1.219.08-.953-.711a41.108 41.108 0 0 1 3.3-6.113l7.344-13.026h-5.031c-.239.393-.75 1.295-.75 1.295a6.9 6.9 0 0 0-1.21-1.438c-1.229-.777-3.032-.409-4.276.295-5.409 3.163-9.355 9.411-12.467 14.284 0 0-3.276 5.417-5.094 5.819-1.42.115-1.273-1.8-1.212-2.243a36.515 36.515 0 0 1 3.108-9.055 69.54 69.54 0 0 0 8.3-6.784c5.88-5.62 10.837-11.988 11.561-13.411a11.464 11.464 0 0 1-1.71.187c-4.523 6.31-13.78 15.48-16.586 16.845 1.243-2.99 9.275-17.262 16.11-24.09l1.076-1.035c1.663-1.624 3.386-3.291 4.729-3.565.142-.014.324 0 .482.331a6.206 6.206 0 0 1-.951 3.263l-.757 1.553a17.561 17.561 0 0 0 1.776-.432c.817-1.537 1.722-3.263 1.388-5.317a1.526 1.526 0 0 0-1.215-1.279c-2.039-.388-4.261 1.121-6.049 2.343l-.072.043c-9.192 7.2-16.953 17.579-23.739 31.751a4.862 4.862 0 0 1-2.715.6 23.055 23.055 0 0 0 1.936-5.246 13.952 13.952 0 0 0 .141-1.739 3.658 3.658 0 0 0-1.405-3.205 4.857 4.857 0 0 0-3.988.143c-4.85 2.012-8.476 6.986-11.092 11.082a24.3 24.3 0 0 0-3.2 8.581c-.274 2.5.283 4.111 1.705 4.916 1.462.747 3.3-.029 4.025-.4 4.914-2.587 8.348-7.776 11.054-12.519a15.853 15.853 0 0 0 2.7-.345.068.068 0 0 1 .046.015c-.064.215-.642 1.94-.642 1.94-1.715 5.03-2.509 8.451-.888 10.478 2.315 2.86 6.148-.1 9.267-4.01-.669 4.685 1.759 5.419 3.61 5.06 2.126-.575 4.5-2.846 5.6-4.01-.353 1.365-.257 3.809 1.677 4.053 1.326.245 2.318-.476 3.466-1.094 4.118-2.242 9.048-9.715 10.328-11.875h-1.678c-1.821 2.749-4.136 6.354-7.049 8.065Zm-36.965-.5a2.266 2.266 0 0 1-.356-1.271c-.05-2.818 2.982-7.865 5.122-10.615a8.324 8.324 0 0 0 4.154 3.758c-1.518 3.392-6.741 10.657-8.92 8.128Zm9.784-9.644a4.261 4.261 0 0 1-3.2-3.133 4.306 4.306 0 0 1 2.346-4.441 2.352 2.352 0 0 1 2.109-.389 2.133 2.133 0 0 1 .761 1.9 11.528 11.528 0 0 1-.119 1.409l-.012.1a19.148 19.148 0 0 1-1.885 4.553Zm20.542 8.739-.486.431c-.691.618-1.4 1.279-2.26.948a.86.86 0 0 1-.444-.647 11.188 11.188 0 0 1 1.529-5l.2-.417c2.221-3.708 4.8-8.078 8.593-11.11a2.136 2.136 0 0 1 2.064-.546 1.072 1.072 0 0 1 .364.7 1.192 1.192 0 0 1-.121.388c-1.059 1.711-2.067 3.507-3.048 5.232a72.616 72.616 0 0 1-6.39 10.02Z'}
      />
    </svg>
  )
}

CartoonNetworkLogo.propTypes = {
  className: PropTypes.string
}

export default CartoonNetworkLogo
