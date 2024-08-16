import React from 'react'

//Style
import { NavLink } from 'react-router-dom'

//Component
import ContinerText from '../ContinerText'

export default function List({to,width,height,color,text}){
  return (
    <>
         <li><NavLink to={to} ><ContinerText color={color} width={width} height={height} text={text} ></ContinerText></NavLink></li>
                   
    </>
  )
}
