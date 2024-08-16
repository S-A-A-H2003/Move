import React from 'react'
import '../Footer/style.css'
import { Continer } from '../../Style/StyledComponent/Continer'
import ContinerText from '../ContinerText'
import { BodyText, H1, H5, SmallText } from '../../Style/Typograpy/Typo'
import Button from '../Button/index'
import List from '../List'
import ListImg from '../ListImg'
import icon1 from '../../Asset/Images/Footer/Dribbble.png'
import icon2 from '../../Asset/Images/Footer/Facebook.png'
import icon3 from '../../Asset/Images/Footer/Twitter.png'
import icon4 from '../../Asset/Images/Footer/YouTube.png'


export default function Footer({Shape}) {
  return (
    <>
    <Continer className='Footer'>
       { Shape==='Shape1'?
       <Continer width={'1240'} height={'214'} className='FooterPart1'>
               <div >
                <ContinerText
                    text={<H1>Download our app to your<br/> smartphone!</H1>}
                    color={'#FFFFFF'}
                ></ContinerText>

               </div>
            <div>
                <Button
                    width={'244'}
                    height={'66'}
                    text={<BodyText>Download App</BodyText>}
                ></Button>
            </div>

        </Continer>:''}

        <Continer width={'1176'} height={'269'} className={Shape==='Shape1'?'FooterPart2':'FooterPart2Shape1'}>
            <div className=' FooterPart2Col1'>
                    <ul className=' FooterPart2Col1Part1'>
                        <List
                        text={<H5>Move</H5>}
                        ></List>

                        <List
                        color={'#858A8F'}
                        text={<BodyText>Move - Multipurpose Design<br/> Template will help you develop your<br/> website design</BodyText>}
                        ></List>
                    
                    </ul>
                    <ul className=' FooterPart2Col1Part2'>
                        <ListImg src={icon1}></ListImg>
                        <ListImg src={icon2}></ListImg>
                        <ListImg src={icon3}></ListImg>
                        <ListImg src={icon4}></ListImg>
                    </ul>
            </div>

            <div>
                        <ul>
                            <List
                            text={<H5>Home</H5>}
                            ></List>
                            <List
                            color={'#858A8F'}
                            text={<BodyText>Desktop App</BodyText>}
                            to='/'
                            ></List>
                            <List
                            color={'#858A8F'}
                            text={<BodyText>Mobile App</BodyText>}
                            to='/HomepageMobileApp'
                            ></List>
                            <List
                            color={'#858A8F'}
                            text={<BodyText>SaaS</BodyText>}></List>
                            <List
                            color={'#858A8F'}
                            text={<BodyText>Event</BodyText>}></List>
                            <List
                            color={'#858A8F'}
                            text={<BodyText>Software</BodyText>}
                            to='/HomepageSoftware'
                            ></List>
                           
                        </ul>

            </div>

            <div>
                        <ul>
                            <List
                            text={<H5>Pages</H5>}
                            ></List>
                            <List
                            color={'#858A8F'}
                            text={<BodyText>About Us</BodyText>}
                            to='/PageAboutUs'
                            ></List>
                            <List
                            color={'#858A8F'}
                            text={<BodyText>Careers</BodyText>}
                            to='/PageCareers'
                            ></List>
                            <List
                            color={'#858A8F'}
                            text={<BodyText>Case Studies</BodyText>}
                            to='/PageCaseStudies'
                            ></List>
                            <List
                            className={''}
                            color={'#858A8F'}
                            text={<BodyText>Pricing</BodyText>}
                            ></List>
                                    <ul>
                                        <List
                                        color={'#858A8F'}
                                        text={<BodyText>Plans</BodyText>}
                                        to='/PagePricingPlans'
                                        ></List>
                                        <List
                                        color={'#858A8F'}
                                        text={<BodyText>Plans Table</BodyText>}
                                        to='/PagePricingPlansTable'
                                        ></List>
                                    </ul>
                        </ul>

            </div>

            <div>
                        <ul>
                            <List
                            text={<H5>Blog</H5>}
                            ></List>
                            <List
                            color={'#858A8F'}
                            text={<BodyText>Blog Listing</BodyText>}
                            ></List>
                            <List
                            color={'#858A8F'}
                            text={<BodyText>Blog Article</BodyText>}
                            to='/PageBlogArticle'
                            ></List>
                            <List
                            color={'#858A8F'}
                            text={<BodyText>Newsroom</BodyText>}></List>        
                        </ul>           

            </div>

            <div >
                                    <ul>
                                            <List
                                            text={<H5>Portfolio</H5>}
                                            ></List>
                                            <List
                                            color={'#858A8F'}
                                            text={<BodyText>Portfolio</BodyText>}
                                            to='/PagePortfolio'
                                            ></List>
                                            <List
                                            color={'#858A8F'}
                                            text={<BodyText>Single Case</BodyText>}
                                            to='/PagePortfolioSingleCase'
                                            ></List>
                                    </ul> 

            </div>

        </Continer >

        <Continer width={'441'} height={'22'} className='FooterPart3'>
            <ContinerText
                color={'#898A8E'} 
                text={<SmallText>© 2019-2020 Wave Multipurpose Design Template.</SmallText>}
            ></ContinerText>
        </Continer>
    </Continer>

    </>
  )
}
