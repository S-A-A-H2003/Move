import './style.css'
//component
import  Button  from '../../../Component/Button/index'

//style
import { BodyText, H1 } from '../../../Style/Typograpy/Typo'
import  ContinerText  from '../../../Component/ContinerText/index'
import { Continer } from '../../../Style/StyledComponent/Continer'

//Asset
import abstractshapesRight from '../../../Asset/Images/P1/P1S1/abstract-shapes-Right.png'
import abstractshapesleft from '../../../Asset/Images/P1/P1S1/abstract-shapes-left.png'
import Hero from '../../../Asset/Images/P1/P1S1/Hero.png'


export default function HomepageMobileAppSection1() {
  return (
    <>
        <Continer className="P1S1">
            <Continer className="P1S1UpPart" height='646'>
                <ContinerText width='963' height='194' color='#333333' text={<H1>A messenger that is<br/> ahead of its times</H1>}></ContinerText> 
                <ContinerText width='813' height='79' color='#858A8F' text={<BodyText>Try the new Move messenger!It will definitely impress you with its amazing features<br/> that will make it easier for you to communicate between you friends.</BodyText>}></ContinerText> 
                <div className="P1S1Button">
                    <Button backgroundcolor="#377DFF"  text={<BodyText>Get Started</BodyText>}></Button>
                    <Button  backgroundcolor="#E5F1FF" color='#377DFF' text={<BodyText>view more</BodyText>}></Button>
                </div>
            </Continer>

              <Continer className="P1S1DownPart" height='613'>
                <div><img className="P1S1DwnPartImgLeft" src={abstractshapesleft} alt=''></img></div>
                <div className='P1S1Shadw'><img className="P1S1DwnPartImgCenter" src={Hero} alt=''></img></div> 
                <div><img className="P1S1DwnPartImgRight" src={abstractshapesRight} alt=''></img></div>
              </Continer>
        </Continer>
    </>
  )
}
