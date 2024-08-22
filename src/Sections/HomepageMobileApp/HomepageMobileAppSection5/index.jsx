import React from 'react'
import './style.css'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { Display2, H4, SmallText } from '../../../Style/Typograpy/Typo'

//Component
import Card from '../../../Component/Card'
import ContinerText from '../../../Component/ContinerText'

//Asset
import IconCard1 from '../../../Asset/Images/P2/P1S5/Group 11.png'
import IconCard2 from '../../../Asset/Images/P2/P1S5/Group 10.png'
import Img from '../../../Asset/Images/P2/P1S5/Group 8.png'


export default function HomepageMobileAppSection5() {
  return (
    <>
        <Continer className='P2S5'>
          <div className="P2S5LeftSaid">
            <ContinerText
            className="P2S5LeftSaid1"
            text={<Display2>Listen and <br/>download music</Display2>}
            ></ContinerText>
            <ContinerText
            className="P2S5LeftSaid2"
            color={'#858A8F'}
            text={<SmallText>In our app, you can download music both in the app <br/> that most people listen to. Join them and be in the trend<br/>of new music.</SmallText>}
            ></ContinerText>

            <Card
              className="P2S5LeftSaid4"
              widthcard={'527'}
              heightcard={'160'}
              colorbody={'#858A8F'}
              textheadar={<H4>Downloading in the app</H4>}
              textbody={<SmallText>Owners of the regular version of Move Music<br/> can only download music in the app and listen to<br/> it without the Internet.</SmallText>}
              src={IconCard1}
              Shaps={4}
              ></Card>
              <Card
              className="P2S5LeftSaid5"
               widthcard={'527'}
               heightcard={'160'}
               colorbody={'#858A8F'}
               textheadar={<H4>Downloading to your smartphone</H4>}
               textbody={<SmallText>Users of the Move+ subscription can<br/> download music for free to their smartphone to listen <br/>to it without the Internet.</SmallText>}
               src={IconCard2}
               Shaps={4}
              ></Card>
        
         </div>
          <div className="P2S5RightSaid">
              <img src={Img} alt=''></img>
          </div>

        </Continer>
    </>
  )
}
