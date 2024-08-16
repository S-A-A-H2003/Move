import './style.css'
import Header from "../../Component/Header";
import Footer from '../../Component/Footer';
import PageLegalSection1 from '../../Sections/PageLegal/PageLegelSection1';

export default function PageLegal() {
  return (
    <>
        <Header></Header>
       <PageLegalSection1></PageLegalSection1>
        <Footer></Footer>
    </>
  )
}
