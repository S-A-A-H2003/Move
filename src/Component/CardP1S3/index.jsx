import React from 'react'
import './style.css'
import { StyleCard } from '../../Style/StyledComponent/StyleCard'
import ContinerText from '../ContinerText'

export default function CardP1S3({className,widthcard,heightcard,backgroundcolor,borderradius,border,src,colorheadar,textheadar,colorbody,textbody}) {
  return (
    <>
       <StyleCard
        className={className+' CardP1S3'} 
        width={widthcard} height={heightcard} 
        backgroundcolor={backgroundcolor}
        borderradius={borderradius} 
        border={border}
        > 

            <img className='CardP1S3Part1' src={src} alt=''></img> 
            <ContinerText className='CardP1S3Part2' color={colorheadar} text={textheadar} ></ContinerText>
            <ContinerText className='CardP1S3Part3' color={colorbody} text={textbody}></ContinerText>

        </StyleCard>

        

        
    

    </>
  )
}
