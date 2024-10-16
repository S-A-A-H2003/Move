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
import { PATH } from '../../Constants/Route'


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
                            to={PATH.AppDesktop}
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>Mobile App</BodyText>}
                            to={PATH.MobileApp}
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText>SaaS</BodyText>}
                            to={PATH.Business}
                            ></List>
                            
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText><del>Event</del></BodyText>}></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText><del>Software</del></BodyText>}
                            // to={PATH.Software}
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
                            to={PATH.Legal}
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText><del>Careers</del></BodyText>}
                            // to={PATH.Careers}
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText><del>Case Studies</del></BodyText>}
                            // to={PATH.CaseStudies}
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText><del>Pricing</del></BodyText>}
                            ></List>
                             <ul>
                                <List
                                color={'#FFFFFF'}
                                text={<BodyText><del>Plans</del></BodyText>}
                                // to={PATH.PricingPlans}
                                ></List>
                                <List
                                color={'#FFFFFF'}
                                text={<BodyText><del>Plans Table</del></BodyText>}
                                // to={PATH.PricingPlansTable}
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
                            text={<H5><del>Blog</del></H5>}
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText><del>Blog Listing</del></BodyText>}
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText><del>Blog Article</del></BodyText>}
                            // to={PATH.BlogArticle}
                            ></List>
                            <List
                            color={'#FFFFFF'}
                            text={<BodyText><del>Newsroom</del></BodyText>}></List>        
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
                                            text={<BodyText><del>Portfolio</del></BodyText>}
                                            // to={PATH.Portfolio}
                                            ></List>
                                            <List
                                            color={'#FFFFFF'}
                                            text={<BodyText><del>Single Case</del></BodyText>}
                                            // to={PATH.PortfolioSingleCase}
                                            ></List>
                                    </ul> 
                        </div>
                </li>
            </ul>

           </div> 

           <div className="HeaderIconList">=</div>
           <div className="HeaderButton">
            <Button height='57' width='179' text={<BodyText to='/PageSignUp'>Get Started</BodyText>} ></Button>
           </div>

        </Continer>
    </>
    )
  }
}

