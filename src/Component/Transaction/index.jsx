import React from 'react'
import './style.css'

//Component
import Card from '../Card/index'
import ContinerText from '../ContinerText'

//Style
import { Continer } from '../../Style/StyledComponent/Continer'
import {H4} from '../../Style/Typograpy/Typo'

//Asset
import ImgAdd from '../../Asset/Images/Component/Transaction/Add-3.png'

//MockData
import { DataTransaction } from '../../Mock/DataTransaction'


export default function Transaction() {
  return (
    <>
        <Continer className='Transaction' width={'455'} height={'422'}  backgroundcolor={'#FFFFFF'} borderradius={5}>

            <div className="TransactionPart1">

                 <ContinerText
                    text={<H4>All Transaction</H4>}
                 ></ContinerText>  

                 <img src={ImgAdd} alt="" /> 

            </div>
           
            <div className="TransactionPart2">

                {DataTransaction.map(Trans=>
                    <Card
                    className={'TransactionPart2Card'}
                    widthcard={'390'}
                    heightcard={'68'}
                    textheadar1={Trans.Name}
                    textbody1={Trans.TypeTrans}
                    colorbody1={'#AAB0B7'}
                    textheadar2={Trans.Total}
                    colorheadar2={'#FF715B'}
                    textbody2={Trans.WayPay}
                    src={Trans.Img}
                    Shaps={8}
                    ></Card>
                )}

            </div>

        </Continer>
    </>
  )
}
