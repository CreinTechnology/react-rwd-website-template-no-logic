import React from 'react'

import Image from './components/Image'

import circles from './images/circles.png'

export const App = () => {
  return (
    <div>
      Crein App
      <br />
      <Image
        imageSRC={circles}
        imageALT={'Colored circles'}
      />
    </div>
  )
}
export default App
