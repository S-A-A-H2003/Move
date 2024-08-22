import React from 'react'
import '../Footer/style.css'

//Component
import List from '../List'
import ListImg from '../ListImg'
import ContinerText from '../ContinerText'
import Button from '../Button/index'

//Style
import { BodyText, H1, H5, SmallText } from '../../Style/Typograpy/Typo'
import { Continer } from '../../Style/StyledComponent/Continer'

//Asset
import icon1 from '../../Asset/Images/Footer/Dribbble.png'
import icon2 from '../../Asset/Images/Footer/Facebook.png'
import icon3 from '../../Asset/Images/Footer/Twitter.png'
import icon4 from '../../Asset/Images/Footer/YouTube.png'
import icon5 from '../../Asset/Images/Footer/apple.png'
import icon6 from '../../Asset/Images/Footer/google.png'


export default function Footer({Shape}) {

 if(Shape===1)

      {

          return (

              <>

                  <Continer className='Footer1'>

                      <div className='Footer1Part1'>

                          <div>

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

                      </div>
              

                      <div className='Footer1Part2'>

                          <div className=' Footer1Part2Col1'>

                              <ul className=' Footer1Part2Col1Part1'>

                                  <List
                                      text={<H1>Move</H1>}
                                  ></List>

                                  <List
                                      color={'#858A8F'}
                                      text={<BodyText>Move - Multipurpose Design<br/> Template will help you develop your<br/> website design</BodyText>}
                                  ></List>
                              
                              </ul>

                              <ul className=' Footer1Part2Col1Part2'>

                                  <ListImg src={icon1}></ListImg>

                                  <ListImg src={icon2}></ListImg>

                                  <ListImg src={icon3}></ListImg>

                                  <ListImg src={icon4}></ListImg>

                              </ul>

                          </div>

                          <div className=' Footer1Part2Col2'>

                              <ul >

                                  <List
                                      className='Footer1Part2Header'
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
                                  text={<BodyText>SaaS</BodyText>}
                                  ></List>

                                  <List
                                  color={'#858A8F'}
                                  text={<BodyText>Event</BodyText>}
                                  ></List>

                                  <List
                                  color={'#858A8F'}
                                  text={<BodyText>Software</BodyText>}
                                  to='/HomepageSoftware'
                                  ></List>
                              
                              </ul>

                          </div>

                          <div className=' Footer1Part2Col3'>

                              <ul>

                                  <List
                                     className='Footer1Part2Header'
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

                          <div className=' Footer1Part2Col4'>

                                  <ul>

                                      <List
                                          className='Footer1Part2Header'
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
                                          text={<BodyText>Newsroom</BodyText>}
                                      ></List>      

                                  </ul>           

                          </div>

                          <div className=' Footer1Part2Col5' >
                                  <ul>
                                        <List
                                          className='Footer1Part2Header'
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

                      </div >

                      <div className='Footer1Part3'>

                          <ContinerText
                              color={'#898A8E'} 
                              text={<SmallText>© 2019-2020 Wave Multipurpose Design Template.</SmallText>}
                          ></ContinerText>

                      </div>

                  </Continer>

              </>

          )

      }


if(Shape===2)

    {
        return (
          
            <>
                <Continer className='Footer2'  backgroundcolor={'#F5F6FA'}>

                    <div className="Footer2Part1">

                          <ContinerText
                              text={<H1>Move</H1>}>
                          </ContinerText>

                    </div>

                    <div className="Footer2Part2">

                        <List
                            to={'/'}
                            color={'#858A8F'}
                            text={<H5>Home</H5>}
                        ></List>

                        <List
                            to={'/'}
                            color={'#858A8F'}
                            text={<H5>Pages</H5>}
                        ></List>

                        <List
                            to={'/'}
                            color={'#858A8F'}
                            text={<H5>Blog</H5>}
                        ></List>

                        <List
                            to={'/'}
                            color={'#858A8F'}
                            text={<H5>Portfolio</H5>}
                        ></List>

                        <List
                            to={'/'}
                            color={'#858A8F'}
                            text={<H5>Contact</H5>}
                        ></List>
                          
                    </div>

                    <div className="Footer2Part3">

                        <Button
                            width={'212'}
                            height={'66'}
                            text={<><img src={icon5} alt=''/><BodyText>App Store</BodyText></>}
                        ></Button>

                        <Button
                            width={'212'}
                            height={'66'}
                            text={<><img src={icon6} alt=''/><BodyText>Google Play</BodyText></>}
                        ></Button>
                        
                    </div>

                    <div className="Footer2Part4">

                        <ListImg src={icon1}></ListImg>

                        <ListImg src={icon2}></ListImg>

                        <ListImg src={icon3}></ListImg>

                        <ListImg src={icon4}></ListImg>  

                    </div>

                    <div className="Footer2Part5">

                        <ContinerText
                            color={'#858A8F'}
                            text={<SmallText>© 2020 All Rights Reserved. Wave Multipurpose Design Templateis a registered trademark of Plum.<br/> Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries.</SmallText>}
                        ></ContinerText>

                    </div>
                    
                </Continer>
      
            </>

        )

    }

if(Shape===3)

    {

        return(

            <>

                <Continer className='Footer3' >

                    <div className={'Footer3Part1'}>

                        <div className=' Footer3Part1Col1'>
        
                            <ul className=' Footer3Part1Col1Part1'>

                                <List
                                    text={<H1>Move</H1>}
                                ></List>
        
                                <List
                                    color={'#858A8F'}
                                    text={<BodyText>Move - Multipurpose Design<br/> Template will help you develop your<br/> website design</BodyText>}
                                ></List>
                                    
                            </ul>
        
                            <ul className=' Footer3Part2Col1Part2'>

                                <ListImg src={icon1}></ListImg>
                                <ListImg src={icon2}></ListImg>
                                <ListImg src={icon3}></ListImg>
                                <ListImg src={icon4}></ListImg>

                            </ul>

                        </div>
        
                        <div className=' Footer3Part2Col1'>
                            <ul>

                                <List
                                    className=' Footer3Part2Header'
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
                                    text={<BodyText>SaaS</BodyText>}
                                ></List>

                                <List
                                    color={'#858A8F'}
                                    text={<BodyText>Event</BodyText>}
                                ></List>

                                <List
                                    color={'#858A8F'}
                                    text={<BodyText>Software</BodyText>}
                                    to='/HomepageSoftware'
                                ></List>
                                        
                            </ul>
        
                        </div>
        
                        <div className=' Footer3Part2Col2'>

                            <ul>

                                <List
                                    className=' Footer3Part2Header'
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
        
                        <div className=' Footer3Part2Col3'>

                            <ul>

                                <List
                                    className=' Footer3Part2Header'
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
                                    text={<BodyText>Newsroom</BodyText>}
                                ></List>

                            </ul>           
        
                        </div>
        
                        <div  className=' Footer3Part2Col4'>

                            <ul>

                                <List
                                    className=' Footer3Part2Header'
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
        
                    </div >
        
                    <div  className='Footer3Part3'>
        
                        <ContinerText
                            color={'#898A8E'} 
                            text={<SmallText>© 2019-2020 Wave Multipurpose Design Template.</SmallText>}
                        ></ContinerText>
        
                    </div>

                </Continer>
    
            </>

        )

    }

}
