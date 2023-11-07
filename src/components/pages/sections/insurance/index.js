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
import Framer from '../../../partials/Framer'

const Plans = () => {
  const {userLocation} = useSelector((state)=>(state.userLocation))

  let insPlan = [];

  if(userLocation === "NG"){
    insPlan = plans
  }else{
    insPlan = plans2
  }

  return (
    <>
        <Framer/>
        <PageBanner pageName={"Our Insurance Plans"} PageImage={'insurance.jpg'} />{" "}
        <section className="pricing-section pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12">
                    {/*=== Common Heading ===*/}
                    <div className="section-title text-center mb-75">
                        <span className="sub-title">Our Pricing Package</span>
                        <p>
                            We provide coverage for medical expenses incurred due to illnesses or accidents. 
                        </p>
                        <p>
                            Our bouquet of plans offer a comprehensive range of benefits that help individuals and families stay 
                            financially protected and secure. Our plans provide coverage for various medical expenses, 
                            such as hospitalization, surgeries, doctor visits, diagnostic tests, and more. 
                            We also cover the cost of prescription drugs and medical equipment, 
                            which are essential for the recovery of patients. Some plans offer several additional 
                            benefits, such as wellness programs, preventive care, and telemedicine services. 
                            With various options available, our plans allow you to select from a range of options 
                            that best suit your budget, lifestyle, and healthcare needs. Overall, our plans are an 
                            investment to maintain and improve your health, providing peace of mind for you and your 
                            loved ones.
                        </p>
                        {/* <h2>Amazing Packages</h2>
                        <p className='text-center'>Pick one of our plans off the shelf or design something specifically for you and your organization by calling our marketing team on: +234-811-2893-000</p> */}
                    </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {insPlan.map((plan)=>(
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            {/*=== Pricing Item ===*/}
                            <div className="pricing-item-one mb-60 wow fadeInUp">
                                <span className="save text-center">
                                    <div className='mb-1 mt-1'>
                                        <span style={{ fontSize:'12px', fontWeight:'bold'}}>U-HEALTH</span>
                                    </div>
                                    <span className="plan" style={{color:`${plan.color}`}}>{plan.plan}</span>
                                </span>
                                <div className="pricing-header text-center mt-4 pb-35">
                                    <h6 style={{fontSize:14}}>COMPREHENSIVE ANNUAL LIMIT</h6>
                                    <h2 className="price">
                                        <span className="currency" style={{fontSize:'14px'}}>
                                            { userLocation === "NG" ? "₦" : "$"}</span> <span className="sm" style={{fontSize:'22px'}}> <CurrencyFormat value={plan.price}  displayType={'text'} thousandSeparator={true} /></span>
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

        { userLocation === "NG" ? "" : (
            <section className="newsletter-section pt-50 pb-30"
            style={{background: 'rgb(174,212,80)',
                background: 'linear-gradient(359deg, rgba(174,212,80,1) 0%, rgba(255,255,255,1) 83%)'}}
          >
            <div className="container">
                <div className="section-title wow text-center fadeInLeft">
                <h4>We Also Sell Social Health Insurance </h4>
                <Link className='main-btn btn-outline mt-2' to='/social-health-insurance'>Learn More</Link>
                </div>
            </div>
          </section>
        )}
    </>
  )
}

export default Plans