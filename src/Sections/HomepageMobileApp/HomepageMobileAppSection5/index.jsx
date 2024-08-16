import React from 'react'
import './style.css'
import Info from '../../../Component/Info'
import { Continer } from '../../../Style/StyledComponent/Continer'
import imgright from '../../../Asset/Images/P1/P1S5/Components-3.png'
import imgcenter from '../../../Asset/Images/P1/P1S5/Image-11.png'
import imgleft from '../../../Asset/Images/P1/P1S5/Components-4.png'
import { BodyText, Display2 } from '../../../Style/Typograpy/Typo'
export default function HomepageMobileAppSection5() {
  return (
    <>
        <Continer className='sec5'>
             <div className="leftsidesec5"> 
                    <img  className='imgleft' src={imgleft} alt=''></img>
                    <img  className='imgcenter' src={imgcenter} alt=''></img>
                    <img  className='imgright' src={imgright} alt=''></img>
                </div>
                <div className="rightsidesec5">
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
