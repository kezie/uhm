import '../../../../styles/style.css'
import Brands from "../../../partials/brands";
import Newsletter from '../../../partials/Newsletter';
import Blog from "../../../partials/blog/Blog";
import Testimonials from "../../../partials/testimonials/Testimonials";
import Hero from './Hero';
import InsuranceCalc from '../../../partials/insuranceCalc/InsuranceCalc';
import 'react-range-slider-input/dist/style.css';
import Services from '../../sections/services/Services';
import About from '../../sections/about/About';

const Homepage = ({posts}) => {

  return (
    <>
      {/*====== Start Hero Section ======*/}
      <section className="banner-four p-r z-1">
          <Hero/>
      </section>
        {/*====== End Hero Section ======*/}

      {/*====== Start Service Section ======*/}
      <Services />
      {/*====== End Service Section ======*/}

      {/*====== Start About Section ======*/}
      <About />
      {/*====== End About Section ======*/}

      {/*====== Why choose us======*/}
      <section className="about-section-two pt-100 pt-100 p-r z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="about-four_image-box p-r z-1">
                <img
                  src="assets/images/about/about-6.jpg"
                  className="about-img-one wow fadeInDown"
                  alt="About Image"
                />
                <img
                  src="assets/images/about/about-7.jpg"
                  className="about-img-two wow fadeInLeft"
                  alt="About Image"
                />
                <img
                  src="assets/images/about/about-8.jpg"
                  className="about-img-three wow fadeInUp"
                  alt="About Image"
                />
                <div className="shape fancy-shape-one">
                  <span />
                </div>
                <div className="shape shape-one animate-float-x">
                  <span>
                    <img src="assets/images/shape/pattern-bg-2.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content-box content-box-gap pl-lg-50 wow fadeInRight">
                <div className="section-title section-title-left">
                  <span className="sub-title">Why Ultimate Health HMO</span>
                  <h2>Putting Your Medical Needs In The Hands Of The Experts</h2>
                </div>
                <p>
                  Our expertise in designing well suited Customized Products and 
                  the Provision of top notch services at all times is our unique selling proposition.
                </p>
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="features-item-four animate-hover-icon text-center wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-customers" />
                      </div>
                      <div className="text">
                        <h4 className="title">Customer Relationship Management</h4>
                        <p style={{textAlign:'left', fontSize:16}}>
                          We place a high premium on customer satisfaction with global standard platforms to
                          permanently feel the pulse of our enrollees and ensure their satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="features-item-four animate-hover-icon text-center wow fadeInDown">
                      <div className="icon">
                        <i className="fa fa-hospital-user" />
                      </div>
                      <div className="text">
                        <h4 className="title">Nation Wide Hospital Network</h4>
                        <p style={{textAlign:'left', fontSize:16}}>
                          In Ultimate Health HMO, the NHIA accredited facilities across the country are our critical
                          stakeholders and our relationship is plugged in the same socket to ensure our enrollee&#39;s
                          satisfaction always.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End why choose us ======*/}

      <Brands/>
      
      {/*====== Start Feedback Section ======*/}
      <Testimonials/>
      {/*====== End Feedback Section ======*/}

      {/*====== Start Blog Section ======*/}
      <Blog posts={posts}/>
      {/*====== End Blog Section ======*/}

      {/* Insurance form */}
      <InsuranceCalc/>
      {/* End Insurance Form */}

      {/* Get Insurance Start */}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
        
      {/* <!--Get Insurance End--> */}
    </>
  );
};
export default Homepage;
