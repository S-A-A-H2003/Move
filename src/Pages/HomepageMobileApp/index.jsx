import './style.css'

//Section
import Header from '../../Component/Header';
import HomepageMobileAppSection1 from '../../Sections/HomepageMobileApp/HomepageMobileAppSection1';
import HomepageMobileAppSection2 from '../../Sections/HomepageMobileApp/HomepageMobileAppSection2';
import HomepageMobileAppSection3 from '../../Sections/HomepageMobileApp/HomepageMobileAppSection3';
import HomepageMobileAppSection4 from '../../Sections/HomepageMobileApp/HomepageMobileAppSection4';
import HomepageMobileAppSection5 from '../../Sections/HomepageMobileApp/HomepageMobileAppSection5';
import HomepageMobileAppSection6 from '../../Sections/HomepageMobileApp/HomepageMobileAppSection6';
import Footer from '../../Component/Footer';


export default function HomepageMobileApp() {
  return (
    <div>
        <Header></Header>
        <HomepageMobileAppSection1></HomepageMobileAppSection1>
        <HomepageMobileAppSection2></HomepageMobileAppSection2>
        <HomepageMobileAppSection3></HomepageMobileAppSection3>
        <HomepageMobileAppSection4></HomepageMobileAppSection4>
        <HomepageMobileAppSection5></HomepageMobileAppSection5>
        <HomepageMobileAppSection6></HomepageMobileAppSection6>
        <Footer></Footer>
        
    </div>
  )
}