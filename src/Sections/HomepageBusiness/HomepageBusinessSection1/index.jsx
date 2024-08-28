import './style.css'

//Component
import Button from '../../../Component/Button'
import ContinerText from '../../../Component/ContinerText'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, Display2, SmallText } from '../../../Style/Typograpy/Typo'

//Asset
import Img1 from '../../../Asset/Images/P3/P3S1/Card_Apple (1).png'
import Img2 from '../../../Asset/Images/P3/P3S1/Card_Google.png'
import Img3 from '../../../Asset/Images/P3/P3S1/Group 24.png'
import Transaction from '../../../Component/Transaction'


export default function HomepageBusinessSection1() {

    return (

        <>

            <Continer className="P3S1">

                <div className="P3S1LeftSide">

                  <div className="P3S1LeftSidePart1">

                    <ContinerText
                      className="P3S1LeftSidePart1_1"
                      text={<Display2>Quick payments<br/> with Move!</Display2>}
                    ></ContinerText>

                    <ContinerText
                      className="P3S1LeftSidePart1_2"
                      color={'#858A8F'}
                      text={<BodyText>Try the new fast payment system with no<br/> Commission and no time to authorize payments. It<br/> is designed to help you conquer new horizons!</BodyText>}
                    >
                    </ContinerText>

                  </div>

                  <div className="P3S1LeftSidePart2">

                    <Button
                      text={<BodyText>Get Started</BodyText>}
                    ></Button>

                    <Button
                      color={'#377DFF'}
                      backgroundcolor={'#E5F1FF'}
                      text={<BodyText>View more</BodyText>}
                    ></Button>

                  </div>

                  <div className="P3S1LeftSidePart3">

                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <ContinerText
                      color={'#858A8F'}
                      text={<SmallText>Compatible with Google Pay and<br/> Apple Pay.</SmallText>}
                    ></ContinerText>

                  </div>

                </div>

                <div className="P3S1RightSide">

                  <img src={Img3} alt="" />

                </div>

                <Transaction></Transaction>
                  
              </Continer>

        </>

    )

}