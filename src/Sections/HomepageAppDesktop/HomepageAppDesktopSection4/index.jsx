import React from 'react'
import '../HomepageAppDesktopSection4/style.css'

//Component
import Info from '../../../Component/Info'

//Asset
import Img from '../../../Asset/Images/P1/P1S4//Group 13.png'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, Display2 } from '../../../Style/Typograpy/Typo'

export default function HomepageAppDesktopSection4() {
  return (
    <>
        <Continer className='P1S4'>
             <Continer className="P1S4LeftSide" width='562' height='468'>
                    <Info
                            colorbody={'#858A8F'}
                            widthheadar={'592'}
                            heightheadar={'219'}
                            widthbody={'443'}
                            heightbody={'96'}
                            textheadar={<Display2>Find out what<br/> Move Messenger<br/> is capable of</Display2>}
                            textbody={<BodyText>Watch a short video that tells you about the<br/> useful features of our mobile app. Everything<br/> you need is always at hand with Move.</BodyText>}
                            textbutton={'View More'}
                            
                    ></Info>
                </Continer>
                <div className="P1S4RightSide" >
                  <img src={Img} alt="" />
                    
                </div>
        </Continer>
    </>
  )
}
