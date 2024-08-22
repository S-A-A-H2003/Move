//Constants
import { PATH } from '../Constants/Route';

//Pages
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
    {path:PATH.MobileApp ,element:<HomepageMobileApp></HomepageMobileApp>},
    {path:PATH.Business,element:<HomepageBusiness></HomepageBusiness>},
    {path:PATH.Software ,element:<HomepageSoftware></HomepageSoftware>},
    {path:PATH.Eror404,element:<Page404></Page404>},
    {path:PATH.AboutUs ,element:<PageAboutUs></PageAboutUs>},
    {path:PATH.BlogArticle ,element:<PageBlogArticle></PageBlogArticle>},
    {path:PATH.Careers ,element:<PageCareers></PageCareers>},
    {path:PATH.CareersSingle ,element:<PageCareersSingle></PageCareersSingle>},
    {path:PATH.CaseStudies ,element:<PageCaseStudies></PageCaseStudies>},
    {path:PATH.CaseStudiesSingle ,element:<PageCaseStudiesSingle></PageCaseStudiesSingle>},
    {path:PATH.ComingSoonCountdown ,element:<PageComingSoonCountdown></PageComingSoonCountdown>},                      
    {path:PATH.ComingSoonSocial ,element:<PageComingSoonSocial></PageComingSoonSocial>},
    {path:PATH.ComingSoonSubscribe ,element:<PageComingSoonSubscribe></PageComingSoonSubscribe>},
    {path:PATH.Contacts ,element:<PageContacts></PageContacts>},
    {path:PATH.Legal ,element:<PageLegal></PageLegal>},
    {path:PATH.Portfolio ,element:<PagePortfolio></PagePortfolio>},
    {path:PATH.PortfolioSingleCase ,element:<PagePortfolioSingleCase></PagePortfolioSingleCase>},
    {path:PATH.PricingPlans ,element:<PagePricingPlans></PagePricingPlans>},
    {path:PATH.PricingPlansTable ,element:<PagePricingPlansTable></PagePricingPlansTable>},
    {path:PATH.RecoverPassword ,element:<PageRecoverPassword></PageRecoverPassword>},
    {path:PATH.SignIn ,element:<PageSignIn></PageSignIn>},
    {path:PATH.SignUp ,element:<PageSignUp></PageSignUp>},
  ]