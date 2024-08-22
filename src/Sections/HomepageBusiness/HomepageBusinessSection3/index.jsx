import React from 'react'
import './style.css'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { H4, SmallText } from '../../../Style/Typograpy/Typo'

//Component
import Card from '../../../Component/Card'

//Asset
import icon1 from '../../../Asset/Images/P2/P2S3/icon-3 (1).png'
import icon2 from '../../../Asset/Images/P2/P2S3/icon-2 (1).png'
import icon3 from '../../../Asset/Images/P2/P2S3/icon.png'




export default function HomepageBusinessSection3() {
  return (
    <>
        <Continer  className="P2S3" backgroundcolor='#F5F6FA' height={'549'}> 

                  <Card 
                  widthcard={392}
                  heightcard={322}
                  src={icon1} 
                  textheadar={<H4>Import Music Library</H4>} 
                  textbody={<SmallText>You can easily import your music<br/> library into our app without having to<br/> search for music again.</SmallText>}
                  colorbody={'#858A8F'}
                  Shaps={1}
                  >
                    

                  </Card>

                  <Card
                  widthcard={392}
                  heightcard={322} 
                  src={icon2} 
                  textheadar={<H4>Music Without Internet</H4>} 
                  textbody={<SmallText>Listen to music even when you don't<br/> have Internet access by downloading<br/> it to your smartphone.</SmallText>}
                  colorbody={'#858A8F'}
                  Shaps={1}
                  > 

                  </Card>

                  <Card 
                  widthcard={392}
                  heightcard={322}
                  src={icon3} 
                  textheadar={<H4>Music Without Limits</H4>} 
                  textbody={<SmallText>There are no restrictions on listening to<br/> music in our app, enjoy music<br/> everywhere.</SmallText>}
                  colorbody={'#858A8F'}
                  Shaps={1}
                  >

                  </Card>
            
        </Continer>
    </>
  )
}
