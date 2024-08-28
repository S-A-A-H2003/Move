import   './style.css'

//Style
import { SmallText } from '../../../Style/Typograpy/Typo'
import { Continer } from '../../../Style/StyledComponent/Continer'

//Asset
import goldline from '../../../Asset/Images/P1/P1S2/goldline.png'
import aven from '../../../Asset/Images/P1/P1S2/aven.png'
import kanba from '../../../Asset/Images/P1/P1S2/kanba.png'
import kyan from '../../../Asset/Images/P1/P1S2/kyan.png'
import spotify from '../../../Asset/Images/P1/P1S2/spotify.png'


export default function HomepageBusinessSection2() {
  return (
    <>
        <Continer className='P3S2' height='249'>
            <Continer className="P3S2UpPart" height='29' width='572'>
               <SmallText>We are trusted by the best in the world</SmallText> 
            </Continer>
            <Continer className="P3S2DownPart" height='47' width='1001'>
                <div><img className="logo" src={goldline} alt=''></img></div>
                <div><img className='logo' src={aven} alt=''></img></div> 
                <div><img className="logo" src={kanba} alt=''></img></div> 
                <div><img className="logo" src={kyan} alt=''></img></div> 
                <div><img className="logo" src={spotify} alt=''></img></div> 
            </Continer>
        </Continer>
    </>
  )
}
