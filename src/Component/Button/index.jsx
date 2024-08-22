import React from 'react'
import './style.css'

//Style
import { StyleButton } from '../../Style/StyledComponent/StyleButton/index'

export default function Button({ width, height, color, backgroundcolor, borderradius, text ,className}) {

  return (

      <>

          <StyleButton
              className={className +" ButtonComponent"}
              width={width}
              height={height}
              color={color}
              backgroundcolor={backgroundcolor}
              borderradius={borderradius}
          >
          {text}
          </StyleButton>

      </>

  )
  
}
