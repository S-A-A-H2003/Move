import   './style.css'

//Asset
import goldline from '../../Asset/Images/Component/CompaniesLogo/goldline.png'
import aven from '../../Asset/Images/Component/CompaniesLogo/goldline.png'
import kanba from '../../Asset/Images/Component/CompaniesLogo/kanba.png'
import kyan from '../../Asset/Images/Component/CompaniesLogo/kyan.png'
import spotify from '../../Asset/Images/Component/CompaniesLogo/spotify.png'

//Component
import ContinerText from '../../Component/ContinerText'


export default function CompaniesLogo({text}) {
  return (
    <>
        <div className='CompaniesLogo' >
            <div className="CompaniesLogoUpPart"  >
                <ContinerText
                color={"#858A8F"}
                text={text}
                ></ContinerText>  
            </div>
            <div className="CompaniesLogoDownPart" >
                <div><img src={goldline} alt=''></img></div>
                <div><img src={aven} alt=''></img></div> 
                <div><img src={kanba} alt=''></img></div> 
                <div><img src={kyan} alt=''></img></div> 
                <div><img src={spotify} alt=''></img></div> 
            </div>
        </div>
    </>
  )
}
