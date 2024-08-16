import React, { Component } from 'react'
import '../Header/style.css'

//Style
import {BodyText, H1, H5} from '../../Style/Typograpy/Typo'
import { Continer } from '../../Style/StyledComponent/Continer'

//Component
import List from '../List'
import Button  from '../../Component/Button/index'

//Asset
import iconchevrondown from '../../Asset/Images/Header/icon-chevron-down.png'
import iconchevronup from '../../Asset/Images/Header/icon-chevron-up.png'

//Librari
import { NavLink } from 'react-router-dom'


export default class Header extends Component {
    state={
        icon1:iconchevronup,
        icon2:iconchevronup,
        icon3:iconchevronup,
        icon4:iconchevronup,
        show1:false,
        show2:false,
        show3:false,
        show4:false,
    }
   handleIcon =(id)=>{
       if(id===1){ 
         this.setState(this.state.icon1 === iconchevronup?{icon1:iconchevrondown}:{icon1:iconchevronup});
         this.setState(this.state.show1?{show1:false}:{show1:true});
        }
       if(id===2){
        this.setState(this.state.icon2 === iconchevronup?{icon2:iconchevrondown}:{icon2:iconchevronup});
        this.setState(this.state.show2?{show2:false}:{show2:true});
        } 
       if(id===3){
        this.setState(this.state.icon3 === iconchevronup?{icon3:iconchevrondown}:{icon3:iconchevronup});
        this.setState(this.state.show3?{show3:false}:{show3:true});
        } 
       if(id===4){
        this.setState(this.state.icon4 === iconchevronup?{icon4:iconchevrondown}:{icon4:iconchevronup});
        this.setState(this.state.show4?{show4:false}:{show4:true});
        }
    }

  render() {
    return (
      <>
        <Continer className="Header" height='133'>
           <div className="HeaderLogo"><H1>Move</H1></div>

           <div className="HeaderList">

            <ul>
                <li><div className="HeaderListMain"><NavLink className="HeaderListMainNav" >Home</NavLink><img onClick={()=>this.handleIcon(1)} src={this.state.icon1} alt=''></img></div>
                    <div className={this.state.show1?'Show SubList':'DontShow SubList'}>
                        <ul>
                            <List
                            text={<H5>Home</H5>}
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>Desktop App</BodyText>}
                            to='/'
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>Mobile App</BodyText>}
                            to='/HomepageMobileApp'
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>SaaS</BodyText>}></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>Event</BodyText>}></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>Software</BodyText>}
                            to='/HomepageSoftware'
                            ></List>
                           
                        </ul>
 
                    </div>
                </li>
            </ul>

            <ul>
                <li><div className="HeaderListMain"><NavLink className="HeaderListMainNav">Pages</NavLink><img onClick={()=>this.handleIcon(2)} src={this.state.icon2} alt=''></img></div>
                    <div className={this.state.show2?'Show SubList':'DontShow SubList'}>
                        <ul>
                            <List
                            text={<H5>Pages</H5>}
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>About Us</BodyText>}
                            to='/PageAboutUs'
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>Careers</BodyText>}
                            to='/PageCareers'
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>Case Studies</BodyText>}
                            to='/PageCaseStudies'
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>Pricing</BodyText>}
                            ></List>
                             <ul>
                                <List
                                color={'#FFFFFF'}
                                text={<BodyText>Plans</BodyText>}
                                to='/PagePricingPlans'
                                ></List>
                                <List
                                color={'#FFFFFF'}
                                text={<BodyText>Plans Table</BodyText>}
                                to='/PagePricingPlansTable'
                                ></List>
                             </ul>
                        </ul>
                        </div>
                </li>
            </ul>

            <ul>
                <li><div className="HeaderListMain"><NavLink className="HeaderListMainNav">Blog</NavLink><img onClick={()=>this.handleIcon(3)} src={this.state.icon3} alt=''></img></div>
                    <div className={this.state.show3?'Show SubList':'DontShow SubList'}>
                        <ul>
                            <List
                            text={<H5>Blog</H5>}
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>Blog Listing</BodyText>}
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>Blog Article</BodyText>}
                            to='/PageBlogArticle'
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>Newsroom</BodyText>}></List>        
                        </ul>            
                        </div>
                </li>
            </ul>

            <ul>
                <li><div className="HeaderListMain"><NavLink className="HeaderListMainNav">Portfolio</NavLink><img onClick={()=>this.handleIcon(4)} src={this.state.icon4} alt=''></img></div>
                    <div className={this.state.show4?'Show SubList':'DontShow SubList'}>
                                    <ul>
                                            <List
                                            text={<H5>Portfolio</H5>}
                                            ></List>
                                            <List
                                            color={'#FFFFFF'}
                                            text={<BodyText>Portfolio</BodyText>}
                                            to='/PagePortfolio'
                                            ></List>
                                            <List
                                            color={'#FFFFFF'}
                                            text={<BodyText>Single Case</BodyText>}
                                            to='/PagePortfolioSingleCase'
                                            ></List>
                                    </ul> 
                        </div>
                </li>
            </ul>

           </div> 

           <div className="HeaderButton">
            <Button height='57' width='179' text={<BodyText to='/PageSignUp'>Get Started</BodyText>} ></Button>
           </div>

        </Continer>
    </>
    )
  }
}

