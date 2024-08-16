import React from 'react'
import './style.css'

//Component
import Button from '../../../Component/Button'
import ContinerText from '../../../Component/ContinerText'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, H1 } from '../../../Style/Typograpy/Typo'



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
        <Button 
        width={'244'}
        height={'66'}
        backgroundcolor={'rgba(229, 241, 255, 0.2)'}
        text={<BodyText>Go back to home</BodyText>}
        ></Button>

      </Continer>
    </>
  )
}
