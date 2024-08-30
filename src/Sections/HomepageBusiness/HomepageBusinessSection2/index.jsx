import   './style.css'

//Style
import { SmallText } from '../../../Style/Typograpy/Typo'

//Component
import CompaniesLogo from '../../../Component/CompaniesLogo'


export default function HomepageBusinessSection2() {
  return (
    <>
        <CompaniesLogo
          text={<SmallText>We are trusted by the best in the world</SmallText>}
        ></CompaniesLogo>
    </>
  )
}
