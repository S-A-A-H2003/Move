import React from 'react'
import './style.css'
//Component
import ContinerText from '../ContinerText'

//Style
import { NavLink } from 'react-router-dom'


export default function List({to,width,height,color,text,className}){

return (

    <>
    
        <li className={className}><NavLink to={to} ><ContinerText color={color} width={width} height={height} text={text} ></ContinerText></NavLink></li>
                   
    </>

  )

}
