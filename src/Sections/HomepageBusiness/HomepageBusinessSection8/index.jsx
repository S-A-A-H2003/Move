import Button from '../../../Component/Button'

import ContinerText from '../../../Component/ContinerText'
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, Display2, SmallText } from '../../../Style/Typograpy/Typo'
import './style.css'

import Img from '../../../Asset/Images/P2/P2S1/Group 15.png'





export default function HomepageBusinessSection8() {
  return (
    <>
        <Continer className="P2S1">

            <div className="P2S1LeftSaid">
              <ContinerText
              className="P2S1LeftSaid1"
              text={<Display2>Introducing a new<br/> music app Move<br/> Music!</Display2>}
              ></ContinerText>
              <ContinerText
              className="P2S1LeftSaid2"
              color={'#858A8F'}
              text={<BodyText>Try the Movie Music app we are sure that it will expand<br/> the boundaries of your musical taste. You can also try the<br/> extended version for free for 14 days.</BodyText>}
              ></ContinerText>
              <Button
              className="P2S1LeftSaid3"
              width={'318'}
              height={'66'}
              text={<BodyText>Start 14 Days Free Trial</BodyText>}
              ></Button>
              <ContinerText
              className="P2S1LeftSaid4"
              color={'#858A8F'}
              text={<SmallText>No credit card enquired</SmallText>}
              ></ContinerText>
          </div>
            <div className="P2S1RightSaid">
              <img  className="P2S1RightSaid1" src={Img} alt=''></img>
        
            </div>

          
            
        </Continer>
    </>
  )
}
