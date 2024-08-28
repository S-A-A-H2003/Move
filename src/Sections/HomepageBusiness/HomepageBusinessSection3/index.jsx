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
        <Continer  className="P3S3" backgroundcolor='#F5F6FA' height={'854'}> 

                  <Card 
                  className="P3S3Part1"
                  widthcard={604}
                  heightcard={285}
                  src={icon1} 
                  textheadar={<H4>Transfers without a fee</H4>} 
                  textbody={<SmallText>You can transfer money to your relatives and friends to<br/> accounts in other banks without сommission.</SmallText>}
                  colorbody={'#858A8F'}
                  Shaps={1}
                  >
                    

                  </Card>

                  <Card
                  className="P3S3Part2"
                  widthcard={604}
                  heightcard={285} 
                  src={icon2} 
                  textheadar={<H4>Pay anywhere</H4>} 
                  textbody={<SmallText>Our payment system cooperates with many services and<br/> stores so we you can safely use our payment system.</SmallText>}
                  colorbody={'#858A8F'}
                  Shaps={1}
                  > 

                  </Card>

                  <Card 
                  className="P3S3Part3"
                  widthcard={604}
                  heightcard={285}
                  src={icon3} 
                  textheadar={<H4>Increased cashback</H4>} 
                  textbody={<SmallText>Each month you are presented with a choice of 3 categories of<br/> products with increased cashback choose wisely.</SmallText>}
                  colorbody={'#858A8F'}
                  Shaps={1}
                  >
                  </Card>

                  <Card 
                  className="P3S3Part4"
                  widthcard={604}
                  heightcard={285}
                  src={icon3} 
                  textheadar={<H4>Free debit card service</H4>} 
                  textbody={<SmallText>If you have more than $500 on your card, the card service will<br/> cost you free of charge.</SmallText>}
                  colorbody={'#858A8F'}
                  Shaps={1}
                  ></Card>
            
        </Continer>
    </>
  )
}
