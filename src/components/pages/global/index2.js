import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import WOW from 'wowjs'
import Counter from "../../partials/Counter"
import Brands from '../../partials/brands'
import Testimonials from "../../partials/testimonials/Testimonials";
import About from "../sections/about/About";
import Services from "../sections/services/Services";
import otumba from '../../../images/hero-bg-2.jpg'
import InsuranceCalc from "../../partials/insuranceCalc/InsuranceCalc";
import Slider from "react-slick";
import { heroSliderOne } from "../../sliderProps";

const Index = () => {

  useEffect(()=>{
    new WOW.WOW({
      live:false
    }).init()
  }, [])

  return (
    <>
      {/*====== Start Hero Section ======*/}
        <section
            className="banner-one bg_cover p-r z-1"
            style={{ backgroundImage: `url(${otumba})`, paddingTop:'100px' }}
          >
             <div className="shape shape-one">
                <span>
                    <img src="assets/images/hero/hero-one_shape-1.png" alt="" />
                </span>
            </div>
            <div className="shape shape-two">
            <span>
                <Link to='https://www.youtube.com/watch?v=33ndQmpxMQ0&feature=youtu.be' target='_blank'>
                    <img src="assets/images/hero/circle.png" width={150} alt="" />
                </Link>
            </span>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-10">
                {/*=== Hero Content ===*/}
                  <div className="text-white mt-5 mb-5">
                    <h1 className="wow fadeInUp mb-2" data-wow-delay=".7s" style={{color:'#db812f'}}>
                        Don't Send Money For Another Medical Bill
                    </h1>
                    <p className="wow fadeInUp mb-2 text-light">
                        The ability to take care of loved ones in Nigeria from the diaspora can be a source of pride and joy. Raising and sending money back home for unplanned medical expenditures can steal that joy.
                    </p>
                    <p className="wow fadeInUp mb-2 text-light">
                        Work with a partner that has been taking care of the healthcare needs of Nigerians for close to 20 years. Let us ensure that all your loved ones in Nigeria have access to the best medical care, and you do not have to bother about impromptu expenses.
                    </p>
                    <div className="hero-button mt-3 wow fadeInUp" data-wow-delay=".9s">
                        <Link  to="https://www.youtube.com/watch?v=33ndQmpxMQ0&feature=youtu.be" target='_blank'>
                            <span className="main-btn btn-red">Watch Presentation</span>
                        </Link>
                    </div>
                </div>
                </div>
              </div>
            </div>
        </section>
      {/*====== End Hero Section ======*/}

      {/*====== Start About Section ======*/}
      <About/>
      {/*====== End About Section ======*/}

      {/*====== Start Service Section ======*/}
      <Services/>
      {/*====== End Service Section ======*/}

      {/*====== Start Fact Section ======*/}
      <section className="fact-section p-r z-1 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-12">
              {/*=== Fact image box ===*/}
              <div className="fact-img_one-box text-right pr-lg-70 mb-50">
                <div className="quote-box-three text-left wow fadeInLeft z-1" style={{backgroundColor:'#088715'}}>
                    <h3 className='text-italic'>
                      Playing a Leading Role in the Health Insurance Industry for almost 20 Years
                    </h3>
                </div>
                <img
                  src="assets/images/service/started.png"
                  className="wow fadeInDown"
                  alt="Fact image"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-12">
              {/*=== Fact content Box ===*/}
              <div className="fact-one_content-box mb-10">
                <div className="section-title section-title-left wow fadeInDown">
                  <span className="sub-title">Get Started Today!</span>
                  <h2>Covering Lives, Ensuring Smiles</h2>
                </div>
                <p className="wow fadeInUp">
                  Don't wait for a healthcare emergency to strike. Take proactive steps to secure your family's 
                  health in Nigeria. With Ultimate Health, you can have peace of mind knowing that your loved ones are covered.
                </p>
                <div className="single-counter-item d-flex align-items-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <a href="#">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <div className="text d-flex justify-content-between align-items-center">
                    <span className="number">
                      <Counter end={300000} /> + 
                    </span>
                    <h5> ENROLLEES </h5>
                  </div>
                </div>
                <div className="single-counter-item d-flex align-items-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <a href="#">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <div className="text d-flex justify-content-between">
                    <span className="number">
                      <Counter end={9000} /> +
                    </span>
                    <h5> HEALTH FACILITIES </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}

      {/*====== Start Feedback Section ======*/}
      <Testimonials/>
      {/*====== End Feedback Section ======*/}

      {/* Insurance form */}
      <InsuranceCalc/>
      {/* End Insurance Form */}
      
      {/*====== Start Partners Section ======*/}
      <Brands/>
      {/*====== End Partners Section ======*/}
      
    </>
  );
};
export default Index;
