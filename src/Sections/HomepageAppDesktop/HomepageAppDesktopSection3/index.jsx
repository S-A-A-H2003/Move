import React from 'react'
import './style.css'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, Display2, H4, SmallText } from '../../../Style/Typograpy/Typo'

//Component
import CardP1S3 from '../../../Component/CardP1S3'
import ContinerText from '../../../Component/ContinerText'
import Button from '../../../Component/Button'

//Asset
import icon1 from '../../../Asset/Images/P1/P1S3/icon-6.png'
import icon2 from '../../../Asset/Images/P1/P1S3/icon-5.png'
import icon3 from '../../../Asset/Images/P1/P1S3/icon-4.png'
import icon4 from '../../../Asset/Images/P1/P1S3/icon-3.png'






export default function HomepageAppDesktopSection3() {
  return (
    <>
        <Continer  className="P1S3" backgroundcolor='#F5F6FA'> 
            <div className="P1S3LeftSide" >
                  <CardP1S3 
                  widthbody={233}
                  heightbody={114}
                  src={icon1} 
                  textheadar={<H4>End-to-End</H4>} 
                  textbody={<SmallText>Our messenger uses only<br/> proven technologies.<br/> There fore, no one will<br/> read your messages.</SmallText>}
                  colorbody={'#858A8F'}
                  >
                    

                  </CardP1S3>

                  <CardP1S3
                  widthbody={236}
                  heightbody={116} 
                  src={icon2} 
                  textheadar={<H4>Voice Message</H4>} 
                  textbody={<SmallText>When you dont have time<br/> to write a text, send your<br/> companion a voice<br/> message.</SmallText>}
                  colorbody={'#858A8F'}
                  > 

                  </CardP1S3>

                  <CardP1S3 
                  widthbody={233}
                  heightbody={120}
                  src={icon3} 
                  textheadar={<H4>News Widget</H4>} 
                  textbody={<SmallText>All the news of the world is<br/> at hand, our messenger<br/> has a pre-installed news<br/> widget.</SmallText>}
                  colorbody={'#858A8F'}
                  >

                  </CardP1S3>

                  <CardP1S3
                  widthbody={236}
                  heightbody={120} 
                  src={icon4} 
                  textheadar={<H4>Tags</H4>} 
                  textbody={<SmallText>Place messages in existing<br/> tags or create new ones.<br/> Using tags makes<br/> interaction easier.</SmallText>}
                  colorbody={'#858A8F'}
                  >

                  </CardP1S3>

            </div>
            <div className="P1S3RightSide" >
                  <ContinerText
                  className={"P1S3RightSidePart1"}
                  text={<Display2>Try the familiar<br/> functions in the<br/> new execution</Display2>}
                  ></ContinerText>
                  <ContinerText
                  className={"P1S3RightSidePart2"}
                  color={'#858A8F'}
                  text={<BodyText>The very functions that help you in everyday<br/> life are already built into our messenger and<br/> are not just built in but invented anew.</BodyText>}
                  ></ContinerText>
                  <Button
                  className={"P1S3RightSidePart3"}
                  text={<BodyText>Get Started</BodyText>}
                  ></Button>

            </div>
           
            
        </Continer>
    </>
  )
}
