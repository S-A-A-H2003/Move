import '../HomepageAppDesktop/style.css'

//Section
import Header from '../../Component/Header';
import HomepageAppDesktopSection1 from '../../Sections/HomepageAppDesktop/HomepageAppDesktopSection1';
import HomepageAppDesktopsection2 from '../../Sections/HomepageAppDesktop/HomepageAppDesktopsection2';
import HomepageAppDesktopSection3 from '../../Sections/HomepageAppDesktop/HomepageAppDesktopSection3';
import HomepageAppDesktopSection4 from '../../Sections/HomepageAppDesktop/HomepageAppDesktopSection4';
import HomepageAppDesktopSection5 from '../../Sections/HomepageAppDesktop/HomepageAppDesktopSection5';
import HomepageAppDesktopSection6 from '../../Sections/HomepageAppDesktop/HomepageAppDesktopSection6';
import Footer from '../../Component/Footer';


export default function HomepageAppDesktop() {
  return (
    <div>
        <Header></Header>
        <HomepageAppDesktopSection1></HomepageAppDesktopSection1>
        <HomepageAppDesktopsection2></HomepageAppDesktopsection2>
        <HomepageAppDesktopSection3></HomepageAppDesktopSection3>
        <HomepageAppDesktopSection4></HomepageAppDesktopSection4>
        <HomepageAppDesktopSection5></HomepageAppDesktopSection5>
        <HomepageAppDesktopSection6></HomepageAppDesktopSection6>
        <Footer Shape={'Shape1'}></Footer>
        
    </div>
  )
}
