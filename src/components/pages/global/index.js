import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import WOW from 'wowjs'
import Counter from "../../partials/Counter"
import Brands from '../../partials/brands'
import Testimonials from "../../partials/testimonials/Testimonials";
import About from "../sections/about/About";
import Services from "../sections/services/Services";
import InsuranceCalc from "../../partials/insuranceCalc/InsuranceCalc";

const Index = () => {

  useEffect(()=>{
    new WOW.WOW({
      live:false
    }).init()
  }, [])

  return (
    <>
      {/*====== Start Hero Section ======*/}
      <section className="banner-four p-r z-1 pt-130">
        <div className="shape shape-blur animate-float-y">
          <span />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="hero-content">
                <span className="tag-line wow fadeInUp" data-wow-delay=".3s">
                  Purchase Health Insurance For Family in Nigeria
                </span>
                <h1 className="wow fadeInDown" data-wow-delay=".5s" style={{fontSize:'3.5em'}}>
                  Affordable Coverage
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".7s">
                  Our Diaspora plan provides a window of opportunity to Nigerians living abroad and desirous in 
                  providing health insurance coverage for loved ones resident in Nigeria. 
                  The plan is tailored for individuals and families. The plan will guarantee affordable 
                  and quality of healthcare services through third-party financing and a management 
                  system in place that enables a pooling of resources and medical expertise.
                </p>
                <div
                  className="hero-button wow fadeInDown"
                  data-wow-delay=".9s"
                >
                  <Link to="/insurance-plans" className="main-btn btn-outline">
                    <span className=""> Buy Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="hero-img-box wow fadeInRight" data-wow-delay="1s">
                <img
                  src="assets/images/hero/hero1.png"
                  alt="Hero Image"
                />
                <div className="circle-border">
                  <span />
                  <span />
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
