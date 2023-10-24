import React, { useEffect, useState } from 'react'
import PageBanner from '../../../partials/PageBanner'
import Newsletter from '../../../partials/Newsletter'
import { offices } from './Offices'
import Socials from '../../../partials/socials/Socials'
import Form from './Form'
import { Link } from 'react-router-dom'
import Loader from '../../../partials/Loader'
import WOW from 'wowjs'

const Contact = () => {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  useEffect(()=>{
    new WOW.WOW({
      live:false
    }).init()
  }, [])

  return (
    <>
      <PageBanner pageName={"Contact Us"} PageImage={"wcu2.png"} />

      {loading ? <Loader/> : <>

          <section className="contact-section pt-120 pb-80">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  {/*=== Contact Content Box ===*/}
                  <div className="contact-one_content-box mb-50 wow fadeInLeft">
                    <div className="section-title section-title-left                                                                                                    ">
                      <span className="sub-title">Contact Us</span>
                      <h2>We Are Commited To Putting You First</h2>
                    </div>
                    <p>
                    Should you or your organization desire customized or fit-for- purpose health plans, 
                    please touch base with us and you will be glad you did.
                    </p>
                    <div className="social-box">
                      <h3 className="title">Follow Us</h3>
                        <Socials/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  {/*=== Contact Form Box ===*/}
                  <div className="contact-one_form-box ml-lg-40 mb-50 wow fadeInRight">
                    <Form/>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="contact-information-section bg_cover pt-100 pb-20"
          style={{backgroundImage: "url(assets/images/bg/benefits-bg-2-1.png)" }}
          >
            <div className='container pb-3'>
              <div className="section-title text-center section-title-left mb-10 wow fadeInDown">
                <span className="sub-title pb-4">You can also reach us on</span>
              </div>
              <div className="row">
                <div className='col-lg-4'></div>
                <div className="col-lg-4">
                  <div className="service-item-three text-center mb-80 wow fadeInUp">
                  <div className="icon">
                      <Link target='_blank'>
                        <i className="fas fa-map-marked-alt"/>
                      </Link>
                  </div>
                  <div className="text">
                    <h4 className="title mb-2">
                        <a>Corporate Head Office</a>
                    </h4>
                    <p className='text-dark'>4th Floor, Plot 1446, Constitution Avenue, Central Business District, FCT-Abuja</p>
                    <p className='text-dark' style={{fontSize:13}}>
                        <i style={{color:'#db812e'}} className='fa fa-phone'></i> FOR ENQUIRIES <a href="tel:+2348111111448">018870017 </a> OR  <a href="tel:+2348030951853">018890002</a>
                      </p>
                      <p className='text-dark' style={{fontSize:16}}>
                        <i style={{color:'#db812e'}} className='fas fa-envelope'></i> {' '}
                        <a href="mailto:info@ultimatehealthhmo.com">info@ultimatehealthhmo.com</a>
                      </p>
                  </div>
                </div>
                </div> 
                <div className='col-lg-4'></div>
              </div>
            </div>
          {/*====== End Contact Information Section ======*/}
            <div className='container mt-5'>
              <div className="row">
                {offices.map((data)=>(
                <div className="col-lg-4 col-md-6 col-sm-12" key={data.id}>
                  <div className="service-item-three text-center mb-80 wow fadeInUp">
                  <div className="icon">
                      <Link href={data.map} target='_blank'>
                        <i className="fas fa-map-marked-alt"/>
                      </Link>
                  </div>
                  <div className="text">
                    <h6 className="title">
                        <a>{data.title}</a>
                    </h6>
                    <p className='text-dark'>{data.address}</p>
                    <p className='text-dark' style={{fontSize:13}}>
                        <i style={{color:'#db812e'}} className='fa fa-phone'></i> {data.mobile}
                      </p>
                      <p className='text-dark' style={{fontSize:13}}>
                        <i style={{color:'#db812e'}} className='fas fa-envelope'></i> {data.email}
                      </p>
                  </div>
                </div>
                </div> 
                ))}
              </div>
            </div>
          </section>
          
          <section className="contact-page-map wow fadeInUp">
            {/*=== Map Box ===*/}
            <div className="map-box">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.188208372999!2d7.470721274409321!3d9.046590188714612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b72d7fc40b1%3A0xe2b4bc84425d0204!2sTsukunda%20House!5e0!3m2!1sen!2sng!4v1691477225067!5m2!1sen!2sng" width="600" height="150" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </div>
          </section>
          
          <Newsletter />
        </>
      }

    </>
  )
}

export default Contact