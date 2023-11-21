import React, { useEffect, useMemo, useState } from 'react';
import PageBanner from '../../../partials/PageBanner';
import Framer from '../../../partials/Framer';
import Map from './Map'
import Slider from 'react-slick';
import { partnerSliderOne } from '../../../sliderProps';
import hospitals from '../../global/hospitals';

const Providers = () => {

  return (
      <>
        <Framer/>
        <section
          className="page-banner bg_cover p-r z-1"
          style={{ backgroundImage: `url(assets/images/bg/providers.jpg)`, height:'30vh' }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="page-banner-content text-center">
                  <h2 className="text-light">List Of Providers</h2>
                  <p className='text-light'>At Ultimate Health HMO, the NHIA accredited facilities across the country are our critical stakeholders and our relationship is plugged in the same socket to ensure our enrollee's satisfaction always. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <PageBanner pageName={"Provider Network"} PageImage={'providers.jpg'} />{" "} */}
        <Map/>
        {/*====== End Fact Section ======*/}
      <section className="newsletter-section pt-50 pb-30"
        style={{backgroundImage:'url(assets/images/bg/wcu.jpg)'}}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              {/*=== Common Heading ===*/}
              <div className="section-title wow fadeInLeft">
                <h4>10,000+ Partner</h4>
                <h2 style={{color:'#db812e'}}>Hospitals Nationwide</h2>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12">
              <Slider {...partnerSliderOne} className='mt-4'>
                  {hospitals.map((hospital)=>(
                      <div className="partner-item ms-2" key={hospital.id}>
                          <div className="partner-img">
                              <img src={`${hospital.image}`} alt={`${hospital.hospital}`} />
                          </div>
                      </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      </>
    );
}

export default Providers