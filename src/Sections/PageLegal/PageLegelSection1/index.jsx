import React from 'react'
import './style.css'

//Component
import ContinerText from '../../../Component/ContinerText'

//Style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, H1, H3, SmallText } from '../../../Style/Typograpy/Typo'


export default function PageLegalSection1() {
  return (
    <>
      <Continer className='PageLegalSection1'>
          <ContinerText
          className='PageLegalSection1Part1'
          color={'#AAB0B7'}
          text={<SmallText>Updated Jule 09, 2020</SmallText>}
          ></ContinerText>

          <ContinerText
          className='PageLegalSection1Part2'
          text={<H1>Privacy Policy</H1>}
          ></ContinerText>

          <ContinerText
           className='PageLegalSection1Part3'
            color={'#AAB0B7'}
            text={<SmallText>Version 2.1, Revision 4</SmallText>}
            ></ContinerText>
            <hr/>
            <ContinerText
             className='PageLegalSection1Part4'
            text={<H3>Using our services</H3>}
            ></ContinerText>

            <ContinerText
             className='PageLegalSectionPart5'
            color={'#AAB0B7'}
            text={<BodyText>You must follow any policies made available to you within the Services.</BodyText>}
            ></ContinerText>

            <ContinerText
             className='PageLegalSection1Part6'
            color={'#AAB0B7'}
            text={<BodyText>
              Don't misuse our Services. For example, don't interfere with our Services or try to<br/>
              access them using a method other than the interface and the instructions that we<br/>
              provide. You may use our Services only as permitted by law, including applicable export<br/>
              and re-export control laws and regulations. We may suspend or stop providing our<br/>
              Services to you if you do not comply with our terms or policies or if we are investigating<br/>
              suspected misconduct.<br/>
              <br/>
              Using our Services does not give you ownership of any intellectual property rights in<br/> 
              our Services or the content you access. You may not use content from our Services<br/>
              unless you obtain permission from its owner or are otherwise permitted by law. These<br/>
              terms do not grant you the right to use any branding or logos used in our Services.<br/>
              Don't remove, obscure, or alter any legal notices displayed in or along with our<br/>
              Services.
            </BodyText>}
            ></ContinerText>

            <ContinerText
             className='PageLegalSection1Part7'
            text={<H3>Your content in our services</H3>}
            ></ContinerText>

            <ContinerText
             className='PageLegalSection1Part8'
            color={'#AAB0B7'}
            text={<BodyText>
              Some of our Services allow you to upload, submit, store, send or receive content. You <br/>
              retain ownership of any intellectual property rights that you hold in that content. In<br/>
               short, what belongs to you stays yours.<br/>
              When you upload, submit, store, send or receive content to or through our Services,<br/> 
              you give Front (and those we work with) a worldwide license to use, host, store, <br/>
              reproduce, modify, create derivative works (such as those resulting from <br/>
              translations, adaptations or other changes we make so that your content works <br/>
              better with our Services), communicate, publish, publicly perform, publicly display <br/>
              and distribute such content. The rights you grant in this license are for the limited <br/>
              purpose of <br/>
              <br/>
              operating, promoting, and improving our Services, and to develop new ones. This<br/> 
              license continues even if you stop using our Services (for example, for a business <br/>
              listing you have added to Front Maps). Some Services may offer you ways to access <br/>
              and remove content that has been provided to that Service. Also, in some of our <br/>
              Services, there are terms or settings that narrow the scope of our use of the content<br/> 
              submitted in those Services. 
            </BodyText>}
            ></ContinerText>
             <hr/>
            <ContinerText
             className='PageLegalSection1Part9'
            text={<SmallText>Pay Attention</SmallText>}
            ></ContinerText>

            <ContinerText
            className='PageLegalSection1Part10'
            color={'#AAB0B7'}
            text={<SmallText>
            Our Services are very diverse, so sometimes additional terms or product requirements (including<br/>
            age requirements) may apply. Additional terms will be available with the relevant Services, and<br/>
            those additional terms become part of your agreement with us if you use.
            </SmallText>}
            ></ContinerText>
            <hr/>
          </Continer>
    </>
  )
}
