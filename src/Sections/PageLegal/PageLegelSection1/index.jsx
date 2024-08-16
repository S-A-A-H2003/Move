import ContinerText from '../../../Component/ContinerText'
import { Continer } from '../../../Style/StyledComponent/Continer'
import { H1, SmallText } from '../../../Style/Typograpy/Typo'
import './style.css'
import React from 'react'

export default function PageLegalSection1() {
  return (
    <>
      <Continer>
          <ContinerText
          color={'#AAB0B7'}
          text={<SmallText>Updated Jule 09, 2020</SmallText>}
          ></ContinerText>

          <ContinerText
          text={<H1>Privacy Policy</H1>}
          ></ContinerText>

          <ContinerText
            color={'#AAB0B7'}
            text={<SmallText>Version 2.1, Revision 4</SmallText>}
            ></ContinerText>
          </Continer>
    </>
  )
}
