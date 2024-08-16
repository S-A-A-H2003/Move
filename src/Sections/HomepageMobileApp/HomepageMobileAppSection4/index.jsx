import React from 'react'
import './style.css'

//Component
import Info from '../../../Component/Info'

//Asset
import imgright from '../../../Asset/Images/P1/P1S4/Components-6.png'
import imgcenter from '../../../Asset/Images/P1/P1S4/Image-16.png'
import imgleft from '../../../Asset/Images/P1/P1S4/Components-7.png'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, Display2 } from '../../../Style/Typograpy/Typo'

export default function HomepageMobileAppSection4() {
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
                <Continer className="P1S4RightSide" width='604' height='616'>
                    <img  className='P1S4ImgLeft' src={imgleft} alt=''></img>
                    <img  className='P1S4ImgCenter' src={imgcenter} alt=''></img>
                    <img  className='P1S4ImgRight' src={imgright} alt=''></img>
                </Continer>
        </Continer>
    </>
  )
}
