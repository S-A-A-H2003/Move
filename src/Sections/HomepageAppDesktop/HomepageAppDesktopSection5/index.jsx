import React from 'react'
import './style.css'

//Component 
import ContinerText from '../../../Component/ContinerText'
import Button from '../../../Component/Button'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, Display2 } from '../../../Style/Typograpy/Typo'

//Asset
import Img from '../../../Asset/Images/P1/P1S5/Group 14.png'

export default function HomepageAppDesktopSection5() {
  return (
    <>
        <Continer className='P1S5'>
                <div className="P1S5LeftSaid"> 
                    <img src={Img} alt=''></img>
                </div>
                <div className="P1S5RightSide">
                     <ContinerText
                      className={"P1S5RightSidePart1"}
                      text={<Display2>Move will remind<br/> you when to<br/> complete a task</Display2>}
                      ></ContinerText>
                      <ContinerText
                      className={"P1S5RightSidePart2"}
                      color={'#858A8F'}
                      text={<BodyText>You can use our messenger to set reminders for<br/> tasks that you want to complete on time. And<br/> you can choose the importance of tasks using<br/> tags.</BodyText>}
                      ></ContinerText>
                      <Button
                      className={"P1S5RightSidePart3"}
                      text={<BodyText>View More</BodyText>}
                      ></Button>
                </div>
        </Continer>
    </>
  )
}
