import React from 'react'
import '../DisplayDate/style.css'
import { Continer } from '../../Style/StyledComponent/Continer'
import { BodyText, Display3 } from '../../Style/Typograpy/Typo'

//Style


export default function DisplayDate({Days,Hours,Minutes,Seconds}) {
  return (
    <>
      <Continer
       backgroundcolor={'rgba(229, 241, 255, 0.2)'}
       width={'668'}
       height={'166'}
      className='DisplayDate'
      border={'0.5px solid #000000'}
      borderradius={'5'}
      >
        <div className="Days">
          <Display3 color={'#FFFFFF'}>{Days}</Display3>
          <div><BodyText color={'#FFFFFF'}>Days</BodyText></div>
        </div>

        <div className="Hours">
        <Display3 color={'#FFFFFF'}>{Hours}</Display3>
        <div ><BodyText color={'#FFFFFF'}>Hours</BodyText></div>
        </div>

        <div className="Minutes">
        <Display3 color={'#FFFFFF'}>{Minutes}</Display3>
        <div ><BodyText color={'#FFFFFF'}>Minutes</BodyText></div>
        </div>

        <div className="Seconds">
        <Display3 color={'#FFFFFF'}>{Seconds}</Display3>
        <div ><BodyText color={'#FFFFFF'}>Seconds</BodyText></div>
        </div>
      </Continer>
    </>
  )
}
