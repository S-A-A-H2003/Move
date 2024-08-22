import React from 'react'
import '../HomepageAppDesktopSection3/style.css'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, Display2, H4, SmallText } from '../../../Style/Typograpy/Typo'

//Component
import Card from '../../../Component/Card'
import Info from '../../../Component/Info/index'

//Asset
import icon1 from '../../../Asset/Images/P1/P1S3/icon-6.png'
import icon2 from '../../../Asset/Images/P1/P1S3/icon-5.png'
import icon3 from '../../../Asset/Images/P1/P1S3/icon-4.png'
import icon4 from '../../../Asset/Images/P1/P1S3/icon-3.png'



export default function HomepageAppDesktopSection3() {
  return (
    <>
        <Continer  className="P1S3" backgroundcolor='#F5F6FA'> 
            <Continer className="P1S3RightSide"  height='692' width='604'>
                  <Card 
                  widthbody={233}
                  heightbody={114}
                  src={icon1} 
                  textheadar={<H4>End-to-End</H4>} 
                  textbody={<SmallText>Our messenger uses only<br/> proven technologies.<br/> There fore, no one will<br/> read your messages.</SmallText>}
                  colorbody={'#858A8F'}
                  Shaps={1}
                  >
                    

                  </Card>

                  <Card
                  widthbody={236}
                  heightbody={116} 
                  src={icon2} 
                  textheadar={<H4>Voice Message</H4>} 
                  textbody={<SmallText>When you dont have time<br/> to write a text, send your<br/> companion a voice<br/> message.</SmallText>}
                  colorbody={'#858A8F'}
                  Shaps={1}
                  > 

                  </Card>

                  <Card 
                  widthbody={233}
                  heightbody={120}
                  src={icon3} 
                  textheadar={<H4>News Widget</H4>} 
                  textbody={<SmallText>All the news of the world is<br/> at hand, our messenger<br/> has a pre-installed news<br/> widget.</SmallText>}
                  colorbody={'#858A8F'}
                  Shaps={1}
                  >

                  </Card>

                  <Card
                  widthbody={236}
                  heightbody={120} 
                  src={icon4} 
                  textheadar={<H4>Tags</H4>} 
                  textbody={<SmallText>Place messages in existing<br/> tags or create new ones.<br/> Using tags makes<br/> interaction easier.</SmallText>}
                  colorbody={'#858A8F'}
                  Shaps={1}
                  >

                  </Card>

            </Continer>
            <Continer className="P1S3LeftSide"  height='459' width='489'>
                  <Info
                  colorbody={'#858A8F'}
                  widthheadar={'489'}
                  heightheadar={'219'}
                  widthbody={'440'}
                  heightbody={'105'}
                  textheadar={<Display2>Try the familiar<br/> functions in the<br/> new execution</Display2>}
                  textbody={<BodyText>The very functions that help you in everyday<br/> life are already built into our messenger and<br/> are not just built in but invented anew.</BodyText>}
                  textbutton={'Get Started'}
                  
                  ></Info>

            </Continer>
           
            
        </Continer>
    </>
  )
}
