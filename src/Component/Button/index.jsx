import React from 'react'
import '../Button/style.css'

//Style
import { StyleButton } from '../../Style/StyledComponent/StyleButton/index'

export default function Button({ width, height, color, backgroundcolor, borderradius, text }) {
  return (
    <>
        <StyleButton
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
