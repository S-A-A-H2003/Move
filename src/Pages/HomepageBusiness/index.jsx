import './style.css'

//Section
import Header from '../../Component/Header';

import HomepageBusinessSection1 from '../../Sections/HomepageBusiness/HomepageBusinessSection1';
import HomepageBusinessSection2 from '../../Sections/HomepageBusiness/HomepageBusinessSection2';
import HomepageBusinessSection3 from '../../Sections/HomepageBusiness/HomepageBusinessSection3';
import HomepageBusinessSection4 from '../../Sections/HomepageBusiness/HomepageBusinessSection4';
import HomepageBusinessSection5 from '../../Sections/HomepageBusiness/HomepageBusinessSection5';
import HomepageBusinessSection6 from '../../Sections/HomepageBusiness/HomepageBusinessSection6';
import HomepageBusinessSection7 from '../../Sections/HomepageBusiness/HomepageBusinessSection7';
import HomepageBusinessSection8 from '../../Sections/HomepageBusiness/HomepageBusinessSection8';

import Footer from '../../Component/Footer';

export default function HomepageBusiness() {
  return (

        <>
        <Header></Header>

        <HomepageBusinessSection1></HomepageBusinessSection1>
        <HomepageBusinessSection2></HomepageBusinessSection2>
        <HomepageBusinessSection3></HomepageBusinessSection3>
        <HomepageBusinessSection4></HomepageBusinessSection4>
        <HomepageBusinessSection5></HomepageBusinessSection5>
        <HomepageBusinessSection6></HomepageBusinessSection6>
        <HomepageBusinessSection7></HomepageBusinessSection7>
        <HomepageBusinessSection8></HomepageBusinessSection8>

        <Footer Shape={3}></Footer>
        
        </>
      
  )
}
