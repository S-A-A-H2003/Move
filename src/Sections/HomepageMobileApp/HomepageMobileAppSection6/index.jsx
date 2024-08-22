import React, { useState } from 'react'
import './style.css'

//Component
import Card from '../../../Component/Card'
import ContinerText from '../../../Component/ContinerText'

//style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, Display2, H5, SmallText } from '../../../Style/Typograpy/Typo'

//Asset
import  Control_Left from '../../../Asset/Images/P2/P2S6/Control_Left.png'
import  Control_Right from '../../../Asset/Images/P2/P2S6/Control_Right.png'
import  Img from '../../../Asset/Images/Mock/Avatar-3.png'


//MockData
import {DataCustomersSlider} from '../../../Mock/DataCustomersSlider/index'

export default function HomepageMobileAppSection6() {

  //////////////////////DataSlider//////////////////////////////
  const [data]=useState(DataCustomersSlider);
  const [slider,setSlider]=useState(1);
  const Increment=()=>{
    setSlider(data.length>slider?slider+1:1)
    
  }
  const Decrement=()=>{
    setSlider(slider>=2?slider-1:slider)
  }
  const SliderFilter =data.find((item)=>item.id===slider)
  //////////////////////////////////////////////////////////////

  return (
    <>
     
    
        <Continer backgroundcolor={'#F5F6FA'} className='P2S6' >
            <div className='P2S6Part1'>
                <ContinerText 
                className='P2S6Part1_1'
                 text={<Display2>Customers are loving our<br/> Move Music</Display2>}
                 >
                </ContinerText>
                <ContinerText 
                className='P2S6Part1_2'
                color={'#858A8F'}
                 text={<BodyText>Read the reviews that we regularly receive from users of our music app. We are<br/> proud to have created a product that gives a vivid impression.</BodyText>}
                 >
                </ContinerText>
            </div>
            <div className='P2S6Part2'>
                <img className='P2S6Part2Button1' onClick={Decrement} src={Control_Left} alt="" />
                    <Card
                    widthcard={'816'}
                    heightcard={'362'}
                    src={Img}
                    textheadar={<H5>{SliderFilter.textheadar}</H5>}
                    textbody1={<SmallText>{SliderFilter.textbody1}</SmallText>}
                    colorbody1={'#858A8F'}
                    textbody2={<BodyText>{SliderFilter.textbody2}</BodyText>}
                    colorbody2={'#858A8F'}  
                    Shaps={6}       
                   ></Card>
              
                <img className='P2S6Part2Button2' onClick={Increment} src={Control_Right} alt="" />

               
            </div>
            <div className='P2S6Part3'>

              <div className="P2S6Part3_1">
                <ContinerText
                className="P2S6Part3_Full1"
                color={'#2DCA8C'}
                text={<Display2>900K+</Display2>}
                ></ContinerText>
                 <ContinerText
                className="P2S6Part3_Full2"
                text={<H5>Active Users</H5>}
                ></ContinerText>
                 <ContinerText
                className="P2S6Part3_Full3"
                color={'#858A8F'}
                text={<BodyText>We are proud to provide our<br/> music app to so many people.</BodyText>}
                ></ContinerText>
              </div>
              <div className="P2S6Part3_2">
              <ContinerText
                className="P2S6Part3_Full1"
                color={'#FFBE3D'}
                text={<Display2>2M+</Display2>}
                ></ContinerText>
                 <ContinerText
                  className="P2S6Part3_Full2"
                text={<H5>Downloads</H5>}
                ></ContinerText>
                 <ContinerText
                 className="P2S6Part3_Full3"
                color={'#858A8F'}
                text={<BodyText>Our app has been downloaded<br/> by more than 2 million people.</BodyText>}
                ></ContinerText>
              </div>
              <div className="P2S6Part3_3">
              <ContinerText
                className="P2S6Part3_Full1"
                color={'#FF715B'}
                text={<Display2>99.99%</Display2>}
                ></ContinerText>
                 <ContinerText
                 className="P2S6Part3_Full2"
                text={<H5>Positive feedback</H5>}
                ></ContinerText>
                 <ContinerText
                 className="P2S6Part3_Full3"
                color={'#858A8F'}
                text={<BodyText>We get mostly positive ratings for<br/>the quality of our app.</BodyText>}
                ></ContinerText>
              </div>
            
            </div>
        </Continer>

    </>
  )
}
