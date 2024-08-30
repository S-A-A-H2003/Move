import   './style.css'

//Style
import { SmallText } from '../../../Style/Typograpy/Typo'

//Component
import CompaniesLogo from '../../../Component/CompaniesLogo'


export default function HomepageMobileAppSection2() {
  return (
    <>
        <CompaniesLogo
          text={<SmallText>Companies that have already tried our messenger</SmallText> }
        >
        </CompaniesLogo>
    </>
  )
}
