import React from 'react'
import './style.css'

//Component
import ContinerText from '../../../Component/ContinerText'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, H1 } from '../../../Style/Typograpy/Typo'
import ListImg from '../../../Component/ListImg'

//Asset
import icon1 from '../../../Asset/Images/PageComingSoonSocial/youtube-2.png'
import icon2 from '../../../Asset/Images/PageComingSoonSocial/google-2.png'
import icon3 from '../../../Asset/Images/PageComingSoonSocial/producthunt-2.png'
import icon4 from '../../../Asset/Images/PageComingSoonSocial/instagram-2.png'
import icon5 from '../../../Asset/Images/PageComingSoonSocial/dribbble-2.png'


export default function PageComingSoonSocialSection1() {
  return (
    <>
      <Continer backgroundcolor={'#377DFF'} className='PageComingSoonSocial'>
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
               <ul className='S1ListImg'>
                     <ListImg src={icon1}></ListImg>
                     <ListImg src={icon2}></ListImg>
                     <ListImg src={icon3}></ListImg>
                     <ListImg src={icon4}></ListImg>
                     <ListImg src={icon5}></ListImg>
                </ul>

      </Continer>
    </>
  )
}