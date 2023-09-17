import React from 'react'
import PageBanner from '../../../partials/PageBanner'
import { Link } from 'react-router-dom'

const Family = () => {
  return (
    <>
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
                      <li>Portfolio Diversification</li>
                      <li>Capital Protection</li>
                      <li>Volatility Protection</li>
                      <li>Inflation Protection</li>
                    </ul>
                  </div>
                </div>
                <Link to="#">
                  <a className="main-btn btn-black">Buy Plan</a>
                </Link>
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