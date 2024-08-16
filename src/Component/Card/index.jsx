import React  from 'react'
import '../Card/style.css'

//Style
import {  StyleCard } from '../../Style/StyledComponent/StyleCard'

//Component
import  ContinerText  from '../../Component/ContinerText/index'

export default function Card({src,srcheader ,start1,start2,start3,start4,start5,colorheadar,colorbody,widthbody, heightbody,widthcard, heightcard,borderradius,backgroundcolor,textheadar,textbody,style,colorbody2,textbody2,widthbody2,colorbody1,textbody1,heightbody2}) {
  
    if(style){
            return (
                <>
                    <StyleCard width={widthcard} height={heightcard}  backgroundcolor={backgroundcolor} borderradius={borderradius}> 
                        <img src={src} alt=''></img> 
                        <ContinerText color={colorheadar} text={textheadar}></ContinerText> 
                        <ContinerText color={colorbody} width={widthbody} height={heightbody} text={textbody}></ContinerText>

                    </StyleCard>

                </>
              )
    }

    else{
            return (
                <>
                    <StyleCard className='Card3' width={widthcard} height={heightcard}  backgroundcolor={backgroundcolor} borderradius={borderradius}> 
                        <div className='Card3Part1'>             
                            <img src={srcheader} alt=''></img> 
                            <div>
                              <ContinerText color={colorheadar} text={textheadar}></ContinerText> 
                              <ContinerText color={colorbody1} text={textbody1}></ContinerText>
                            </div>
                        </div>

                        <div className='Card3Part2'>
                              <ContinerText color={colorbody2} text={textbody2} width={widthbody2} height={heightbody2} ></ContinerText>
                        </div>

                        <div className='Card3Part3'>
                          <img src={start1} alt="" />
                          <img src={start2} alt="" />
                          <img src={start3} alt="" />
                          <img src={start4} alt="" />
                          <img src={start5} alt="" />
                        </div>




                    </StyleCard>

                </>
              )
}
  
  
}
