import React from 'react'
import '../ContinerText/style.css'

//Style
import { StyleContinerText } from '../../Style/StyledComponent/StyleContinerText'

export default function ContinerText({className,width, height, color,text}) {
  return (
    <>
    <StyleContinerText width={width} height={height} color={color} className={className}>
    {text}
    </StyleContinerText>

    </>
  )
}
