import './style.css'

import Header from "../../Component/Header";

import PageLegalSection1 from '../../Sections/PageLegal/PageLegelSection1';

import Footer from '../../Component/Footer';

export default function PageLegal() {
  return (
    <>
        <Header></Header>

        <PageLegalSection1></PageLegalSection1>

        <Footer Shape={3}></Footer>
    </>
  )
}
