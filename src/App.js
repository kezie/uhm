import React, {useEffect} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Globalpage from './components/pages/global'
import Header from './components/pages/nigeria/header/Header'
import Footer from './components/pages/nigeria/footer/Footer'
import Homepage from './components/pages/nigeria/homepage/Homepage';
import Team from './components/pages/nigeria/team/Team';
import Providers from './components/pages/nigeria/providers/Providers';
import Board from './components/pages/nigeria/board/Board';
import News from './components/pages/nigeria/news/Blog'
import Details from './components/pages/nigeria/news/Details'
import Story from './components/pages/nigeria/story/Story';
import Insurance from './components/pages/sections/insurance'
import Contact from './components/pages/nigeria/contact/Contact';
import FAQs from './components/pages/nigeria/faqs/FAQs';
import { getLocation, setLocation} from './components/redux/reducers/locationReducer';
import { useDispatch, useSelector } from 'react-redux';
import Individual from './components/pages/nigeria/insurance/Individual';
import Family from './components/pages/nigeria/insurance/Family';
import Associations from './components/pages/nigeria/insurance/Associations';
import Corperate from './components/pages/nigeria/insurance/Corperate';
// import Payment from './components/partials/payment/PaystackIntegration';
import SocialPrograms from './components/pages/nigeria/programmes'
import WOW from 'wowjs'
import { AnimatePresence } from "framer-motion";
import InsuranceCalc from './components/partials/insuranceCalc/InsuranceCalc';
import ErrorPage from './components/pages/errorPage'
import Checkout from './components/pages/checkout';
import ScrollToTop from './components/partials/ScrollToTop';
import { getPosts } from './components/redux/reducers/postReducer';
import { getCategories } from './components/redux/reducers/categoryReducer';
import Remita from './components/pages/checkout/Remita';
import Map from './components/pages/map/Map'
import PayPalButton from './components/pages/checkout/PayPalButton';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { userLocation } = useSelector((state)=> state.userLocation)

  useEffect(()=>{
    dispatch(getLocation());
    dispatch(getPosts());
    dispatch(getCategories())
  },[])

  const handleLocationChange = (userLocation) => {
    dispatch(setLocation(userLocation));
  };

  useEffect(()=>{
    new WOW.WOW({
      live:false
    }).init()
  }, [])


  return (
    <AnimatePresence >
        <Header handleLocationChange={handleLocationChange}/>
        <ScrollToTop/>
        <Routes location={location} key={location.pathname}>
          <Route path={"/"} element={ userLocation === 'NG' ? < Homepage /> : <Globalpage/>} />
          <Route path={"/"} element={ < Homepage />} />
          <Route path={"/team"} element={< Team />} />
          <Route path={"/board"} element={< Board />} />
          <Route path={"/story"} element={< Story />} />
          <Route path={"/news"} element={< News />} />
          <Route path={"/providers"} element={< Providers/>} />
          <Route path={"/posts/:slug"} element={< Details />} />
          <Route path={"/global"} element={<Globalpage/>}/>
          <Route path={"/insurance-plans"} element={< Insurance/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/faqs'} element={<FAQs/>}/>
          <Route path={'/individual-plan'} element={<Individual/>} />
          <Route path={'/family-plan'} element={<Family/>} />
          <Route path={'/association-plan'} element={<Associations/>} />
          <Route path={'/corperate-plan'} element={<Corperate/>} />
          <Route path={'/checkout/payment'} element={<Remita/>} />
          <Route path={'/social-health-insurance'} element={<SocialPrograms/>} />
          <Route path={'/insurance-calculator/:purchase?'} element={<InsuranceCalc/>} />
          <Route path={'/checkout/:chosenPlan'} element={<Checkout/>} />
          <Route path={'/map'} element={<Map/>} />
          <Route path={'/checkout/paypal'} element={<PayPalButton/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      <Footer/>
    </AnimatePresence>
  );
}

export default App;
