import React from 'react'
import '../HomepageAppDesktopSection6/style.css'

//Component
import Card from '../../../Component/Card'
import ContinerText from '../../../Component/ContinerText'

//style
import { Continer } from '../../../Style/StyledComponent/Continer'
import { BodyText, Display2, SmallText } from '../../../Style/Typograpy/Typo'

//Asset
import iconarrowright from '../../../Asset/Images/P1/P1S6/icon-arrow-right.png'
import Avatar1 from '../../../Asset/Images/P1/P1S6/Avatar-8.png'
import Avatar2 from '../../../Asset/Images/P1/P1S6/Avatar-10.png'
import Avatar3 from '../../../Asset/Images/P1/P1S6/Avatar-4.png'
import Start from '../../../Asset/Images/P1/P1S6/star-6.png'

export default function HomepageAppDesktopSection6() {
  return (
    <>
        <Continer backgroundcolor={'#F5F6FA'} className='P1S6' >
            <Continer width='783' height='146' className='P1S6Part1'>
                <ContinerText 
                 width={'783'}
                 height={'146'}
                 text={<Display2>Customers are loving our<br/> Move messenger</Display2>}
                 >
                </ContinerText>
            </Continer>
            <Continer width='1240' height='386' className='P1S6Part2'>
                <Card
                 widthcard={'392'}
                 heightcard={'386'}
                 src={Avatar1}
                 textheadar={<BodyText>Alpamys Moldashev</BodyText>}
                 textbody1={<SmallText>Graphic Designer</SmallText>}
                 colorbody1={'#858A8F'}
                 textbody2={<BodyText>With the Move messenger I can<br/> correspond with clients from all<br/> over the world and never forget<br/> about important meetings.</BodyText>}
                 colorbody2={'#858A8F'}
                 widthbody2={'317'}
                 heightbody2={'138'}
                 start1={Start}
                 start2={Start}
                 start3={Start}
                 start4={Start}
                 start5={Start} 
                 Shaps={3}             
                ></Card>

                <Card
                 widthcard={'392'}
                 heightcard={'386'}
                 src={Avatar2}
                 textheadar={<BodyText>Bogdan Krivenchenko</BodyText>}
                 textbody1={<SmallText>UI/UX Designer</SmallText>}
                 colorbody1={'#858A8F'}
                 textbody2={<BodyText>Move messenger helps me a lot<br/> in performing normal tasks with<br/> reminders. It looks great and is<br/> easy to use!</BodyText>}
                 colorbody2={'#858A8F'}
                 widthbody2={'321'}
                 heightbody2={'140'}
                 start1={Start}
                 start2={Start}
                 start3={Start}
                 start4={Start}
                 start5={Start}
                 Shaps={3}                
                ></Card>

                <Card
                 widthcard={'392'}
                 heightcard={'386'}
                 src={Avatar3}
                 textheadar={<BodyText>Sergey Filatov</BodyText>}
                 textbody1={<SmallText>CEO at Mindset</SmallText>}
                 colorbody1={'#858A8F'}
                 textbody2={<BodyText>Move messenger is just a bomb!<br/> On it I have the opportunity to<br/> lead my own design community<br/> and share up to date information.</BodyText>}
                 colorbody2={'#858A8F'}
                 widthbody2={'321'}
                 heightbody2={'140'}
                 start1={Start}
                 start2={Start}
                 start3={Start}
                 start4={Start}
                 start5={Start} 
                 Shaps={3}     
                ></Card>

            </Continer>
            <Continer width='214' height='24' className='P1S6Part3'>
                <ContinerText 
                    width={'182'}
                    height={'24'}
                    text={<BodyText>See all testmonials</BodyText>}
                    color={'#397EFF'}
                    > 
                </ContinerText>
                 <img src={iconarrowright} alt=''></img>
            </Continer>
        </Continer>

    </>
  )
}
