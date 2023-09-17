import { Link } from "react-router-dom";
import Socials from "../../../partials/socials/Socials";
import WhatsAppChatButton from "../../../partials/whatsapp/WhatsAppChatButton";

const Footer = () => { 
  return (
      <footer className="footer-default footer-dark text-white p-r z-1">
        <div className="shape shape-one">
          <span />
        </div>
        <div className="shape shape-two">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="650px"
              height="242px"
            >
              <path
                fillRule="evenodd"
                opacity="0.02"
                fill="rgb(255, 255, 255)"
                d="M0.521,241.495 L246.454,37.867 L473.773,151.244 L649.198,0.638 L649.198,241.495 L0.521,241.495 Z"
              />
            </svg>
          </span>
        </div>
        <div className="container">
          {/*=== Footer Widget ===*/}
          <div className="footer-widget-wrapper pt-80 pb-35">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
                  <img src="assets/images/logo/footer-logo.png" width={300} alt="logo"/>
                  <div className="footer-content mt-4">
                    <span>
                      Ultimate Health is a Health Maintenance Organization dedicated to delivering 
                      excellent preventive and curative medical services at affordable rates.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Quick Links</h4>
                  <div className="footer-content">
                    <ul className="widget-nav">
                      <li>
                        <Link to="/insurance">Insurance Plans</Link>
                      </li>
                      <li>
                        <Link to="/story">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/faqs">FAQs</Link>
                      </li>
                      <li>
                        <Link to='#' data-bs-toggle="modal" data-bs-target="#loginModal">
                          Login To Portal
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget contact-info-widget mb-40 wow fadeInUp">
                  <div className="footer-content">
                    <h5 className="title">Corporate Head Office</h5>
                    <div className="contact-info-box d-flex mb-40">
                      <div className="icon">
                        <i className="far fa-map-marker-alt text-light" />
                      </div>
                      <div className="text">
                        <span>4th Floor, Tsukunda House, <br/>Plot 1446, Constitution Avenue, Central Business District, <br/> FCT-Abuja.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget about-info-widget mb-40 wow fadeInUp">
                  <div className="footer-content">
                    <h5 className="title">Email Address</h5>
                    <div className="contact-info-box d-flex mb-20">
                      <div className="icon">
                        <i className="far fa-envelope text-light" />
                      </div>
                      <div className="text">
                        <span>
                          <Link to="mailto:info@ultimatehealthhmo.com">info@ultimatehealthhmo.com</Link>
                        </span>
    
                        <h5 className="pt-3">Follow Us on Social Media</h5>
                        <ul className="social-link pt-2">
                          <Socials backgroundColor={'#bed88f'} text_light={'text-light'}/>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Footer Copyright ===*/}
          <div className="footer-copyright border-top-white-op-1">
              <div className="text-center">
                <div className="footer-nav wow fadeInLeft">
                    <span className="text-mute">Copy@ 2023 Ultimatehealthhmo. All Rights reserved</span>
                </div>
              </div>
            </div>
            <WhatsAppChatButton/>
        </div>
      </footer>
    );
  };
export default Footer;

