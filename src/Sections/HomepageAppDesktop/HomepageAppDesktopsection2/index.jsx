import   './style.css'

//Component
import CompaniesLogo from '../../../Component/CompaniesLogo'

//Style
import { SmallText } from '../../../Style/Typograpy/Typo'


export default function HomepageAppDesktopsection2() {
  return (
    <>
     <CompaniesLogo
        text={<SmallText>Companies that have already tried our messenger</SmallText>}
     ></CompaniesLogo>
    </>
        
  )
}
