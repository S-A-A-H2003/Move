import './style.css'

//Section
import Header from '../../Component/Header';

import HomepageBusinessSection1 from '../../Sections/HomepageBusiness/HomepageBusinessSection1';

import Footer from '../../Component/Footer';

export default function HomepageBusiness() {
  return (

        <>
        <Header></Header>
        <HomepageBusinessSection1></HomepageBusinessSection1>
        <Footer Shape={3}></Footer>
        
        </>
      
  )
}
