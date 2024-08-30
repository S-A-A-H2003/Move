import React  from 'react'
import './style.css'

//Component
import  ContinerText  from '../../Component/ContinerText/index'
import Button from '../Button'

//Style
import {  StyleCard } from '../../Style/StyledComponent/StyleCard'


export default function Card(

{
className,Shaps,widthcard,heightcard,backgroundcolor,borderradius,border
,src,colorheadar,textheadar,colorbody,textbody
,textbody1,colorbody1,colorbody2,textbody2,start1,start2,start3,start4,start5
,src1,src2,src3,src4,colorheadar1,textheadar1,colorheadar2,textheadar2,colorheadar3,textheadar3,colorbody3,textbody3,colorbody4,textbody4,textbutton,widthbutton,heightbutton,colorbutton,backgroundcolorbutton,borderradiusbutton
}

){
  //GlopalCard
  //Card1 & Card2 & Card4 & Card5 & Card6 & Card7
  //Card3 & Card6
  //Card7    

if(Shaps===2)

    {
        return (

            <>
                <StyleCard 
                className={className+' CardShape2'}  
                width={widthcard} 
                height={heightcard}  
                backgroundcolor={backgroundcolor} 
                borderradius={borderradius} 
                border={border}
                > 

                    <img src={src} alt=''></img>

                    <div>

                        <ContinerText color={colorheadar} text={textheadar} ></ContinerText> 
                        <ContinerText color={colorbody} text={textbody}></ContinerText>

                    </div>

                </StyleCard>
    
                    </>

        )

    }

if(Shaps===3)

    {
        return (

            <>

                <StyleCard 
                className={className+' Card3'} 
                width={widthcard} 
                height={heightcard}  
                backgroundcolor={backgroundcolor} 
                borderradius={borderradius} 
                border={border}
                > 
                        <div className='Card3Part1'>   

                            <img src={src} alt=''></img>

                            <div>

                              <ContinerText color={colorheadar} text={textheadar}></ContinerText> 
                              <ContinerText color={colorbody1} text={textbody1}></ContinerText>

                            </div>

                        </div>

                        <div className='Card3Part2'>

                              <ContinerText color={colorbody2} text={textbody2} ></ContinerText>

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

if(Shaps===4)

    {
          
        return (

            <>

                <StyleCard  
                className={className+' CardShape4'} 
                width={widthcard} 
                height={heightcard}  
                backgroundcolor={backgroundcolor} 
                borderradius={borderradius}border={border}
                > 
                    <img src={src} alt=''></img> 

                    <div>

                        <ContinerText color={colorheadar} text={textheadar} ></ContinerText>
                        <ContinerText color={colorbody} text={textbody}></ContinerText>

                    </div>

                </StyleCard>

            </>

        )

    }
        if(Shaps===5)
            {
                    return (
                        <>
                            <StyleCard  className={className+' CardShape5'} width={widthcard} height={heightcard}  backgroundcolor={backgroundcolor} borderradius={borderradius} border={border}> 
                                <img src={src} alt=''></img> 
                                <ContinerText color={colorbody} text={textbody}></ContinerText>
                            </StyleCard>
        
                        </>
                      )
            }

            if(Shaps===6){
                return (
                    <>
                        <StyleCard className={className+' Card6'} width={widthcard} height={heightcard}  backgroundcolor={backgroundcolor} borderradius={borderradius} border={border}> 
                            <div className='Card6Part1'>             
                                <img src={src} alt=''></img> 
                            </div>
    
                            <div className='Card6Part2'>
                                  <ContinerText className='Card6Part2_1' color={colorheadar} text={textheadar}></ContinerText> 
                                  <ContinerText className='Card6Part2_2' color={colorbody1} text={textbody1}></ContinerText>
                                  <ContinerText className='Card6Part2_3' color={colorbody2} text={textbody2} ></ContinerText>
                            </div>
    
    
    
    
                        </StyleCard>
    
                    </>
                  )
    }
    if(Shaps===7){
        return (
            <>
                <StyleCard className={className+' Card7'} width={widthcard} height={heightcard}  backgroundcolor={backgroundcolor} borderradius={borderradius} border={border}> 
                   
                          <ContinerText className='Card7Part1' color={colorheadar1} text={textheadar1}></ContinerText> 
                          <ContinerText className='Card7Part2' color={colorheadar2} text={textheadar2}></ContinerText>
                          <ContinerText className='Card7Part3' color={colorheadar3} text={textheadar3} ></ContinerText>
                          <div className='Card7Part4'><img src={src1} alt="" /><ContinerText  color={colorbody1} text={textbody1}></ContinerText></div>
                          <div className='Card7Part5'><img src={src2} alt="" /><ContinerText  color={colorbody2} text={textbody2}></ContinerText></div>   
                          <div className='Card7Part6'><img src={src3} alt="" /><ContinerText  color={colorbody3} text={textbody3} ></ContinerText></div>
                          <div className='Card7Part7'><img src={src4} alt=""/><ContinerText  color={colorbody4} text={textbody4} ></ContinerText></div>
                          <Button
                            className='Card7Part8'
                            width={widthbutton}
                            height={heightbutton}
                            color={colorbutton} 
                            backgroundcolor={backgroundcolorbutton}
                            borderradius={borderradiusbutton}
                            text ={textbutton}
                          ></Button>

                    




                </StyleCard>

            </>
          )
}
if(Shaps===8){
    return (
        <>
            <StyleCard className={className+' Card8'} width={widthcard} height={heightcard}  backgroundcolor={backgroundcolor} borderradius={borderradius} border={border}> 

                <div className='Card8Part1'>  

                    <img src={src} alt=''></img> 

                </div>

                <div className='Card8Part2'>

                      <ContinerText className='Card8Part2_1' color={colorheadar1} text={textheadar1}></ContinerText> 
                      <ContinerText className='Card8Part2_2' color={colorbody1} text={textbody1}></ContinerText>

                </div>

                <div className='Card8Part3'>

                      <ContinerText className='Card8Part3_1' color={colorheadar2} text={textheadar2}></ContinerText> 
                      <ContinerText className='Card8Part3_2' color={colorbody2} text={textbody2}></ContinerText>

                </div>



            </StyleCard>

        </>
      )
}
  
  
}
