import React, { useState } from 'react'
import './style.css'

//Component
import ContinerText from '../../../Component/ContinerText'
import Card from '../../../Component/Card'

//style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, Display2, H2 } from '../../../Style/Typograpy/Typo'

//Asset
import ImgCard from '../../../Asset/Images/P2/P2S7/Checkmark-5.png'
import ImgSwitchedon from '../../../Asset/Images/P2/P2S7/Switchedon.png'
import ImgSwitchedoff from '../../../Asset/Images/P2/P2S7/Switchedoff.png'





export default function HomepageMobileAppSection7() {
  const [switched,SetSwitched]=useState(ImgSwitchedon)
  const [total1,SetTotal1]=useState('$9.99')
  const [total2,SetTotal2]=useState('$12.99')


  const HandelImgSwitched=()=>{
    SetSwitched(switched===ImgSwitchedon?ImgSwitchedoff:ImgSwitchedon)
    SetTotal1(total1==='$9.99'?'$4.2':'$9.99')
    SetTotal2(total2==='$12.99'?'$7.6':'$12.99')
  }
  return (
    <>
     
    
        <Continer className='P2S7' >
            <div className='P2S7Part1'>
                <ContinerText 
                className='P2S7Part1_1'
                 text={<Display2>Expand your options with a <br/> subscription</Display2>}
                 >
                </ContinerText>
                <ContinerText 
                className='P2S7Part1_2'
                color={'#858A8F'}
                 text={<BodyText>Choose the plan that suits you best! More features will be available thanks to<br/> individual plans.</BodyText>}
                 >
                </ContinerText>
            </div>
            <div className='P2S7Part2'>
              <ContinerText
              color={'#858A8F'}
              text={<BodyText>Bill Monthly</BodyText>}
              ></ContinerText>

              <img src={switched} alt="" onClick={HandelImgSwitched} />
              
              <ContinerText
              color={'#858A8F'}
              text={<BodyText>Bill Anually</BodyText>}
              ></ContinerText>

              
            </div>
            <div className='P2S7Part3'>

               <Card
                widthcard={'390'}
                heightcard={'628'}
                border={'solid 2px #F5F6FA'}
                textheadar1={<H2>Move</H2>}
                colorheadar1={'#FFBE3D'}
                textheadar2={<Display2>Free</Display2>}
                textheadar3={<BodyText>Per Users</BodyText>}
                colorheadar3={'#858A8F'}
                textbody1={<BodyText>No ads in the app</BodyText>}
                colorbody1={'#858A8F'}
                textbody2={<BodyText>No download restrictions</BodyText>}
                colorbody2={'#858A8F'}
                textbody3={<BodyText>Customization of profile</BodyText>}
                colorbody3={'#858A8F'}
                textbody4={<BodyText>Stickers as a gift</BodyText>}
                colorbody4={'#858A8F'}
                src1={ImgCard}
                src2={ImgCard}
                src3={ImgCard}
                src4={ImgCard}
                widthbutton={'317'}
                heightbutton={'66'}
                textbutton={<BodyText>Get Started</BodyText>}
                Shaps={7}
               ></Card>

               <Card
                widthcard={'390'}
                heightcard={'628'}
                border={'solid 2px #F5F6FA'}
                textheadar1={<H2>Move+</H2>}
                colorheadar1={'#FF715B'}
                textheadar2={<Display2>{total1}</Display2>}
                textheadar3={<BodyText>Per Users</BodyText>}
                colorheadar3={'#858A8F'}
                textbody1={<BodyText>No ads in the app</BodyText>}
                colorbody1={'#858A8F'}
                textbody2={<BodyText>No download restrictions</BodyText>}
                colorbody2={'#858A8F'}
                textbody3={<BodyText>Customization of profile</BodyText>}
                colorbody3={'#858A8F'}
                textbody4={<BodyText>Stickers as a gift</BodyText>}
                colorbody4={'#858A8F'}
                src1={ImgCard}
                src2={ImgCard}
                src3={ImgCard}
                src4={ImgCard}
                widthbutton={'317'}
                heightbutton={'66'}
                textbutton={<BodyText>Start 14 Days Free Trial</BodyText>}
                Shaps={7}
               ></Card>

               <Card
                widthcard={'390'}
                heightcard={'628'}
                border={'solid 2px #F5F6FA'}
                textheadar1={<H2>Family</H2>}
                colorheadar1={'#2DCA8C'}
                textheadar2={<Display2>{total2}</Display2>}
                textheadar3={<BodyText>Per Users</BodyText>}
                colorheadar3={'#858A8F'}
                textbody1={<BodyText>No ads in the app</BodyText>}
                colorbody1={'#858A8F'}
                textbody2={<BodyText>No download restrictions</BodyText>}
                colorbody2={'#858A8F'}
                textbody3={<BodyText>Customization of profile</BodyText>}
                colorbody3={'#858A8F'}
                textbody4={<BodyText>Stickers as a gift</BodyText>}
                colorbody4={'#858A8F'}
                src1={ImgCard}
                src2={ImgCard}
                src3={ImgCard}
                src4={ImgCard}
                widthbutton={'317'}
                heightbutton={'66'}
                textbutton={<BodyText>Start 14 Days Free Trial</BodyText>}
                Shaps={7}
               ></Card>

            </div>
        </Continer>

    </>
  )
}
