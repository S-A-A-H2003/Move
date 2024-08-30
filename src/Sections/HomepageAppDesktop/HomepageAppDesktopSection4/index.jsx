import React from 'react'
import './style.css'

//Component
import ContinerText from '../../../Component/ContinerText'
import Button from '../../../Component/Button'

//Asset
import Img from '../../../Asset/Images/P1/P1S4//Group 13.png'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, Display2 } from '../../../Style/Typograpy/Typo'


export default function HomepageAppDesktopSection4() {
  return (
    <>
        <Continer className='P1S4'>
                <div className="P1S4LeftSide" >
                     <ContinerText
                      className={"P1S4LeftSidePart1"}
                      text={<Display2>Find out what<br/> Move Messenger<br/> is capable of</Display2>}
                      ></ContinerText>
                      <ContinerText
                      className={"P1S4LeftSidePart2"}
                      color={'#858A8F'}
                      text={<BodyText>Watch a short video that tells you about the<br/> useful features of our mobile app. Everything<br/> you need is always at hand with Move.</BodyText>}
                      ></ContinerText>
                      <Button
                      className={"P1S4LeftSidePart3"}
                      text={<BodyText>View More</BodyText>}
                      ></Button>
                </div>
                <div className="P1S4RightSide" >
                  <img src={Img} alt="" />
                </div>
        </Continer>
    </>
  )
}
