import React from 'react'
import './style.css'

//Component
import ContinerText from '../../../Component/ContinerText'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, H1 } from '../../../Style/Typograpy/Typo'
import Subscribe from '../../../Component/Subscribe'

export default function PageComingSoonSubscribeSection1() {
  return (
    <>
      <Continer backgroundcolor={'#377DFF'} className='PageComingSoonSubscribe'>
        <ContinerText 
        text={<H1>Move</H1>}
        color={'#FFFFFF'}
        ></ContinerText>
        <ContinerText
        text={<H1 fontsize='80'>We will be receiving<br/> guests soon</H1>}
        color={'#FFFFFF'}
        ></ContinerText>
        <ContinerText 
        color={'#FFFFFF'}
        text={<BodyText>Something is coming and it will arrive very soon stay with us!</BodyText>}
        ></ContinerText>
              <Subscribe></Subscribe> 

      </Continer>
    </>
  )
}