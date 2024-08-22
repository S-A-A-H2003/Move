import React from 'react'
import '../Page404Section1/style.css'

//Component
import Button from '../../../Component/Button'
import ContinerText from '../../../Component/ContinerText'
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, H1 } from '../../../Style/Typograpy/Typo'
import { NavLink } from 'react-router-dom'



export default function Page404Section1() {
  return (
    <>
      <Continer backgroundcolor={'#377DFF'} className='Page404'>
        <ContinerText 
        text={<H1>Move</H1>}
        color={'#FFFFFF'}
        ></ContinerText>
        <ContinerText
        text={<H1 fontsize='180'>404</H1>}
        color={'#FFFFFF'}
        ></ContinerText>
        <ContinerText
        color={'#FFFFFF'}
        text={<H1 fontsize='69'>Page not found</H1>}
        ></ContinerText>
        <ContinerText 
        color={'#FFFFFF'}
        text={<BodyText>It appears the page you were looking for couldn’t be found.</BodyText>}
        ></ContinerText>
        <NavLink to='/'>
        <Button 
        width={'244'}
        height={'66'}
        backgroundcolor={'#e5f1ff86'}
        text={ <BodyText>Go back to home</BodyText> }
        ></Button>
        </NavLink>
      </Continer>
    </>
  )
}
