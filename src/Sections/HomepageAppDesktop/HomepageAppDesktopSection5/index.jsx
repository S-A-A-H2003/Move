import React from 'react'
import './style.css'
import Info from '../../../Component/Info'
import { Continer } from '../../../Style/StyledComponent/Continer'
import Img from '../../../Asset/Images/P1/P1S5/Group 14.png'

import { BodyText, Display2 } from '../../../Style/Typograpy/Typo'
export default function HomepageAppDesktopSection5() {
  return (
    <>
        <Continer className='P1S5'>
                <div className="P1S5LeftSaid"> 
                    <img  className='imgleft' src={Img} alt=''></img>
                </div>
                <div className="P1S5RightSide">
                      <Info
                            colorbody={'#858A8F'}
                            widthheadar={'537'}
                            heightheadar={'219'}
                            widthbody={'462'}
                            heightbody={'140'}
                            textheadar={<Display2>Move will remind<br/> you when to<br/> complete a task</Display2>}
                            textbody={<BodyText>You can use our messenger to set reminders for<br/> tasks that you want to complete on time. And<br/> you can choose the importance of tasks using<br/> tags.</BodyText>}
                            textbutton={'View More'}
                            
                        ></Info>
       
                </div>
        </Continer>
    </>
  )
}
