import React from 'react'
import './style.css'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, Display2, H4, SmallText } from '../../../Style/Typograpy/Typo'

//Component
import Card from '../../../Component/Card'
import ContinerText from '../../../Component/ContinerText'

//Asset
import IconCard1 from '../../../Asset/Images/P2/P2S4/Group 2.png'
import IconCard2 from '../../../Asset/Images/P2/P2S4/Group 3.png'
import Img1 from '../../../Asset/Images/P2/P2S4/Group 6.png'


export default function HomepageMobileAppSection4() {
  return (
    <>
        <Continer className='P2S4'>
           <div className="P2S4LeftSaid">
              <img src={Img1} alt=''></img>
          </div>
          <div className="P2S4RightSaid">
            <ContinerText
            className="P2S4RightSaid1"
            text={<Display2>Be in the trend of <br/>new music</Display2>}
            ></ContinerText>
            <ContinerText
            className="P2S4RightSaid2"
            color={'#858A8F'}
            text={<BodyText>Every week, we create new playlists with current music <br/> that most people listen to. Join them and be in the trend<br/>of new music.</BodyText>}
            ></ContinerText>

            <Card
              className="P2S4RightSaid4"
              widthcard={'481'}
              heightcard={'166'}
              colorbody={'#858A8F'}
              textheadar={<H4>We adapt to you</H4>}
              textbody={<SmallText>We analyze your media library and create<br/> playlists that match your mood and music<br/> preference.</SmallText>}
              src={IconCard1}
              Shaps={4}
              ></Card>
              <Card
              className="P2S4RightSaid5"
               widthcard={'508'}
               heightcard={'160'}
               colorbody={'#858A8F'}
               textheadar={<H4>Your music your rules</H4>}
               textbody={<SmallText>You can import your playlist from other music<br/> platforms and not waste time adding music<br/> manually.</SmallText>}
               src={IconCard2}
               Shaps={4}
              ></Card>
        
         </div>

        </Continer>
    </>
  )
}
