import React from 'react'
import PageBanner from '../../../partials/PageBanner'
import {plans} from './Data'
import {plans2} from './Data2'
import { Link } from 'react-router-dom'
import PaystackIntegration from '../../../partials/payment/PaystackIntegration'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
import otumba from '../../../../images/hero-bg-2.jpg'
import InsuranceCalc from '../../../partials/insuranceCalc/InsuranceCalc'

const Plans = () => {
  const {location} = useSelector((state)=>(state.location))

  let insPlan = [];

  if(location === "NG"){
    insPlan = plans
  }else{
    insPlan = plans2
  }

  return (
    <>
        <PageBanner pageName={"Our Insurance Plans"} PageImage={'team.jpg'} />{" "}
        {location === "NG" ? '' : (
            <section
            className="banner-one bg_cover p-r z-1"
            style={{ backgroundImage: `url(${otumba})` }}
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
        )}
        <section className="pricing-section pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                    {/*=== Common Heading ===*/}
                    <div className="section-title text-center mb-75">
                        <span className="sub-title">Our Pricing Package</span>
                        <h2>Amazing Packages</h2>
                    </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {insPlan.map((plan)=>(
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            {/*=== Pricing Item ===*/}
                            <div className="pricing-item-one mb-60 wow fadeInUp">
                                <span className="save">Comprehensive Annual Limit</span>
                                <div className="pricing-header text-center pb-35">
                                    <div>
                                        <span style={{color:"#db812e", fontSize:'12px', fontWeight:'bold'}}>U-HEALTH</span>
                                    </div>
                                    <span className="plan" style={{color:'#008000'}}>{plan.plan}</span>
                                    <h2 className="price">
                                        <span className="currency" style={{fontSize:'14px'}}>
                                            { location === "NG" ? "₦" : "$"}</span> <span className="sm" style={{fontSize:'22px'}}> <CurrencyFormat value={plan.price}  displayType={'text'} thousandSeparator={true} /></span>
                                        <span className="sm" style={{fontSize:'14px'}}> .00 </span>
                                    </h2>
                                    <h3 style={{fontSize:'14px', color:'#008000'}}>PER INDIVIDUAL</h3>
                                </div>
                                <div className="pricing-body">
                                <ul className="pricing-list">
                                    {plan.benefits.map((benefit)=>(
                                        <li><i className={ `me-2 ${benefit.status}`}></i> {benefit.plan}</li>
                                    ))}
                                </ul>
                                <Link to='#' data-bs-toggle="modal" data-bs-target={`#${plan.id}`}>
                                    <span className="main-btn btn-black">Buy Plan</span>
                                </Link>
                                </div>
                            </div>
                            <PaystackIntegration amount={plan.price} id={plan.id}/>
                        </div>
                    ))}
                </div>
                <div className='text-center'>*Terms and Conditions Applies</div>
            </div>
        </section>

        <InsuranceCalc/>
    </>
  )
}

export default Plans