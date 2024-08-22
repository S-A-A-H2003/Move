import React from 'react'
import './style.css'

//Asset
import { NavLink } from 'react-router-dom'

export default function ListImg({src}){

return (

    <>

        <li ><NavLink><img src={src} alt=''></img></NavLink></li>
                   
    </>

  )
  
}
