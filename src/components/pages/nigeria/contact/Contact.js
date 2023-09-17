import React from 'react'
import PageBanner from '../../../partials/PageBanner'
import Newsletter from '../../../partials/Newsletter'
import { offices } from './Offices'
import Socials from '../../../partials/socials/Socials'
import Form from './Form'

const Contact = () => {

  return (
    <>
      <PageBanner pageName={"Contact Us"} PageImage={"wcu2.png"} />

      {/*====== Start Contact Section ======*/}
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
      {/*====== End Contact Section ======*/}

      <section className="contact-information-section bg_cover pt-100 pb-20"
      style={{backgroundImage: "url(assets/images/bg/benefits-bg-2-1.png)" }}
      >
        <div className='container pb-3'>
          <div className="section-title section-title-left mb-10 wow fadeInDown">
            <span className="sub-title">You can also reach us on</span>
            <h4>Corporate Head Office</h4>
          </div>
          <div className="row align-items-center">
            {/* <div className="single-info-item col-lg-4 animate-hover-icon d-flex mb-20 wow fadeInUp">
              <div className="icon">
                <img src="assets/images/icon/icon-1.png" width={50} alt="Icon" />
              </div>
              <div className="info">
                <p>
                  4th Floor, Plot 1446, Constitution Avenue, Central Business District, FCT-Abuja
                </p>
              </div>
            </div> */}
            <div className="card col-lg-4 text-center" style={{backgroundColor:'rgb(2,0,36);'}}>
              <div className="icon pt-2">
                <img src="assets/images/icon/icon-1.png" width={50} alt="Icon" />
              </div>
              <div className="card-body">
                <p className="card-text">4th Floor, Plot 1446, Constitution Avenue, Central Business District, FCT-Abuja</p>
              </div>
            </div>

            <div className="card col-lg-4 text-center">
              <div className="icon text-center pt-2">
                <img src="assets/images/icon/icon-2.png" width={45} alt="Icon" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Email Us</h5>
                <p>
                  <a href="mailto:info@ultimatehealthhmo.com">
                    info@ultimatehealthhmo.com
                  </a>
                </p>
              </div>
            </div>

            <div className="card col-lg-4 text-center">
              <div className="icon text-center pt-2">
                <img src="assets/images/icon/icon-3.png" width={50} alt="Icon" />
              </div>
              <div className="card-body">
                <h5 className="card-title">For Enquiries</h5>
                <p>
                  <a href="tel:+2348111111448">018870017 </a> OR  <a href="tel:+2348030951853">018890002</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      {/*====== End Contact Information Section ======*/}
        <div className='container mt-5'>
          <div className="row">
            {offices.map((data)=>(
             <div className="col-lg-4 col-md-6 col-sm-12" key={data.id}>
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInUp">
               <div className="icon">
                  <a href={data.map} target='_blank'>
                    <i className="fas fa-map-marked-alt"/>
                  </a>
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
      {/* branches */}

      {/*====== Start Contact Map Section ======*/}
      <section className="contact-page-map wow fadeInUp">
        {/*=== Map Box ===*/}
        <div className="map-box">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.188208372999!2d7.470721274409321!3d9.046590188714612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b72d7fc40b1%3A0xe2b4bc84425d0204!2sTsukunda%20House!5e0!3m2!1sen!2sng!4v1691477225067!5m2!1sen!2sng" width="600" height="150" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        </div>
      </section>
      {/*====== End Contact Map Section ======*/}
      
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </>
  )
}

export default Contact