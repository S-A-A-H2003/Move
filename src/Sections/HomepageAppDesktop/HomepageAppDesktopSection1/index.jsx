import './style.css'
//component
import  Button  from '../../../Component/Button/index'

//style
import { BodyText, H1 } from '../../../Style/Typograpy/Typo'
import  ContinerText  from '../../../Component/ContinerText/index'
import { Continer } from '../../../Style/StyledComponent/Continer'

//Asset
import Img from '../../../Asset/Images/P1/P1S1/Group 11 (1).png'


export default function HomepageAppDesktopSection1() {
  return (
    <>
        <Continer className="P1S1">
            <div className="P1S1UpPart">
                <ContinerText className="P1S1UpPart1"  color='#333333' text={<H1>A messenger that is<br/> ahead of its times</H1>}></ContinerText> 
                <ContinerText className="P1S1UpPart2"  color='#858A8F' text={<BodyText>Try the new Move messenger!It will definitely impress you with its amazing features<br/> that will make it easier for you to communicate between you friends.</BodyText>}></ContinerText> 
                <div className="P1S1UpPartButton">
                  <Button backgroundcolor="#377DFF"  text={<BodyText>Get Started</BodyText>}></Button>
                  <Button  backgroundcolor="#E5F1FF" color='#377DFF' text={<BodyText>view more</BodyText>}></Button>
                </div>
            </div>

              <div className="P1S1DownPart">
                <img src={Img} alt="" />
              </div>
        </Continer>
    </>
  )
}
