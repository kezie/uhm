import React, {useEffect} from 'react'
import PageBanner from '../../../partials/PageBanner'
import SimpleFaq from './SimpleFaq'
import Framer from '../../../partials/Framer'
import WOW from 'wowjs'
import { Link } from 'react-router-dom'

const FAQs = () => {
  useEffect(()=>{
    new WOW.WOW({
      live:false
    }).init()
  }, [])

  return (
    <>
    <Framer/>
    <PageBanner pageName={"FAQs"} PageImage={"wcu2.png"} />
    <section className="faq-section pt-130 pb-75">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/*=== Faq content box ===*/}
            <div className="faq-one_content-box mb-50">
              <div className="section-title section-title-left mb-50 wow fadeInDown">
                <span className="sub-title">Faqs</span>
                <h2>Have Any Question?</h2>
              </div>
              <div
                className="faq-accordion-two mb-50 wow fadeInUp"
                id="accordionOne"
              >
                <SimpleFaq />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/*=== Faq Image Box ===*/}
            <div className="faq-two_image-box p-r z-1 ml-lg-70 mb-50 wow fadeInRight">
              <img
                src="assets/images/gallery/faq-2.jpg"
                className="faq-one-img"
                alt="Faq Image"
              />
              <img
                src="assets/images/gallery/faq-3.jpg"
                className="faq-two-img"
                alt="Faq Image"
              />
            </div>
          </div>
          {/* <Link to='' className='main-btn btn-outline' style={{maxWidth:200}}>Make Enquiry</Link> */}
        </div>
      </div>
    </section>
    {/*====== End Faqs Section ======*/}
    </>
      
  )
}

export default FAQs