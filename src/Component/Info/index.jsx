import React from 'react'
import './style.css'

//Component
import  Button  from '../../Component/Button/index'
import ContinerText  from '../../Component/ContinerText/index'

//Style
import { BodyText } from '../../Style/Typograpy/Typo'


export default function Info({colorheadar,colorbody,widthheadar,heightheadar,widthbody,heightbody,textheadar,textbody,textbutton}) {

return (

    <>

        <ContinerText width={widthheadar}  height={heightheadar} color={colorheadar} text={textheadar}>           
        </ContinerText>

        <ContinerText width={widthbody}  height={heightbody} color={colorbody} text={textbody}>
        </ContinerText>

        <Button text={<BodyText>{textbutton}</BodyText>}></Button>

    </>

  )

}
