import HomepageAppDesktop from '../Pages/HomepageAppDesktop';
import HomepageMobileApp from '../Pages/HomepageMobileApp';
import HomepageBusiness from '../Pages/HomepageBusiness';
import HomepageSoftware from '../Pages/HomepageSoftware';
import Page404 from '../Pages/Page404';
import PageAboutUs from '../Pages/PageAboutUs';
import PageBlogArticle from '../Pages/PageBlogArticle';
import PageCareers from '../Pages/PageCareers';
import PageCareersSingle from '../Pages/PageCareersSingle';
import PageCaseStudies from '../Pages/PageCaseStudies';
import PageCaseStudiesSingle from '../Pages/PageCaseStudiesSingle';
import PageComingSoonCountdown from '../Pages/PageComingSoonCountdown';
import PageComingSoonSocial from '../Pages/PageComingSoonSocial';
import PageComingSoonSubscribe from '../Pages/PageComingSoonSubscribe';
import PageContacts from '../Pages/PageContacts';
import PageLegal from '../Pages/PageLegal';
import PagePortfolio from '../Pages/PagePortfolio';
import PagePortfolioSingleCase from '../Pages/PagePortfolioSingleCase';
import PagePricingPlans from '../Pages/PagePricingPlans';
import PagePricingPlansTable from '../Pages/PagePricingPlansTable';
import PageRecoverPassword from '../Pages/PageRecoverPassword';
import PageSignIn from '../Pages/PageSignIn';
import PageSignUp from '../Pages/PageSignUp';

export const routes=[
    {index:true ,element:<HomepageAppDesktop></HomepageAppDesktop>},
    {path:'/HomepageMobileApp' ,element:<HomepageMobileApp></HomepageMobileApp>},
    {path:'/HomepageBusiness',element:<HomepageBusiness></HomepageBusiness>},
    {path:'/HomepageSoftware' ,element:<HomepageSoftware></HomepageSoftware>},
    {path:'/Page404',element:<Page404></Page404>},
    {path:'/PageAboutUs' ,element:<PageAboutUs></PageAboutUs>},
    {path:'/PageBlogArticle' ,element:<PageBlogArticle></PageBlogArticle>},
    {path:'/PageCareers' ,element:<PageCareers></PageCareers>},
    {path:'/PageCareersSingle' ,element:<PageCareersSingle></PageCareersSingle>},
    {path:'/PageCaseStudies' ,element:<PageCaseStudies></PageCaseStudies>},
    {path:'/PageCaseStudiesSingle' ,element:<PageCaseStudiesSingle></PageCaseStudiesSingle>},
    {path:'/PageComingSoonCountdown' ,element:<PageComingSoonCountdown></PageComingSoonCountdown>},                      
    {path:'/PageComingSoonSocial' ,element:<PageComingSoonSocial></PageComingSoonSocial>},
    {path:'/PageComingSoonSubscribe' ,element:<PageComingSoonSubscribe></PageComingSoonSubscribe>},
    {path:'/PageContacts' ,element:<PageContacts></PageContacts>},
    {path:'/PageLegal' ,element:<PageLegal></PageLegal>},
    {path:'/PagePortfolio' ,element:<PagePortfolio></PagePortfolio>},
    {path:'/PagePortfolioSingleCase' ,element:<PagePortfolioSingleCase></PagePortfolioSingleCase>},
    {path:'/PagePricingPlans' ,element:<PagePricingPlans></PagePricingPlans>},
    {path:'/PagePricingPlansTable' ,element:<PagePricingPlansTable></PagePricingPlansTable>},
    {path:'/PageRecoverPassword' ,element:<PageRecoverPassword></PageRecoverPassword>},
    {path:'/PageSignIn' ,element:<PageSignIn></PageSignIn>},
    {path:'/PageSignUp' ,element:<PageSignUp></PageSignUp>},
  ]