import React from 'react'
import PageBanner from '../../../partials/PageBanner'
import Button from './Button'
import Framer from '../../../partials/Framer'
import ScrollToTop from '../../../partials/ScrollToTop'

const Family = () => {

  return (
    <>
        <ScrollToTop/>
        <PageBanner pageName={"Family Health Plan"} PageImage={"wcu2.png"} />
        <section className="skill-section overflow-hidden pt-125 pb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="skill-content-box content-box-gap mb-50 pr-lg-40 wow fadeInLeft">
                  <div className="section-title section-title-left">
                    <span className="sub-title">Get the best plan for your family</span>
                    <h2>Looking For a Suitable Plan for Your Family?</h2>
                  </div>
                  <p>
                    Are you looking to get a health insurance plan for your family? 
                    At Ultimate Health HMO we offer health plans that fits your family.
                  </p>
                  <div className='about-two_content-box'>
                    <ul className="check-style-two">
                      <li>Easy Network Access</li>
                      <li>Preventive Care</li>
                      <li>Very Affordable</li>
                      <li>Comprehensive Coverage</li>
                    </ul>
                  </div>
                </div>
                <Button/>
              </div>
              <div className="col-lg-6">
                <div className="skill-img-box mb-50 text-lg-right text-md-center p-r z-1 wow fadeInRight">
                  <img src="assets/images/service/family.png" alt="" />
                  <div className="circle-border">
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Family