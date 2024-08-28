import { lazy } from 'react';

//Constants
import { PATH } from '../Constants/Route';

//Pages

 const HomepageAppDesktop = lazy(()=>import('../Pages/HomepageAppDesktop'));
 const HomepageMobileApp = lazy(()=>import('../Pages/HomepageMobileApp'));
 const HomepageSoftware  = lazy(()=>import('../Pages/HomepageSoftware'));
 const HomepageBusiness = lazy(()=>import(  '../Pages/HomepageBusiness'));
 const Page404  = lazy(()=>import( '../Pages/Page404'));
 const PageAboutUs = lazy(()=>import(  '../Pages/PageAboutUs'));
 const PageBlogArticle = lazy(()=>import(  '../Pages/PageBlogArticle'));
 const PageCareers   = lazy(()=>import('../Pages/PageCareers'));
 const PageCareersSingle = lazy(()=>import(  '../Pages/PageCareersSingle'));
 const PageCaseStudies = lazy(()=>import(  '../Pages/PageCaseStudies'));
 const PageCaseStudiesSingle = lazy(()=>import(  '../Pages/PageCaseStudiesSingle'));
 const PageComingSoonCountdown = lazy(()=>import(  '../Pages/PageComingSoonCountdown'));
 const PageComingSoonSocial = lazy(()=>import(  '../Pages/PageComingSoonSocial'));
 const PageComingSoonSubscribe = lazy(()=>import(  '../Pages/PageComingSoonSubscribe'));
 const PageContacts   = lazy(()=>import('../Pages/PageContacts'));
 const PageLegal   = lazy(()=>import('../Pages/PageLegal'));
 const PagePortfolio  = lazy(()=>import( '../Pages/PagePortfolio'));
 const PagePortfolioSingleCase  = lazy(()=>import( '../Pages/PagePortfolioSingleCase'));
 const PagePricingPlans  = lazy(()=>import( '../Pages/PagePricingPlans'));
 const PagePricingPlansTable = lazy(()=>import(  '../Pages/PagePricingPlansTable'));
 const PageRecoverPassword = lazy(()=>import(  '../Pages/PageRecoverPassword'));
 const PageSignIn = lazy(()=>import(  '../Pages/PageSignIn'));
 const PageSignUp = lazy(()=>import(  '../Pages/PageSignUp'));


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