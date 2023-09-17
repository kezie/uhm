import React from 'react'
import PageBanner from '../../../partials/PageBanner'
import Brands from '../../../partials/brands'

const Story = () => {

  return (
    <>
    <PageBanner pageName={"Our Story"} PageImage={'story.jpg'}/>{" "}
      <section className="fact-section p-r z-1 pt-130 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-12">
              {/*=== Fact image box ===*/}
              <div className="fact-img_one-box text-right pr-lg-70 mb-50">
                <div className="quote-box-three text-left wow fadeInLeft z-1" style={{backgroundColor:'#088715'}}>
                  <h3 className='text-italic'>
                    Playing a Leading Role in the Health Insurance Industry for almost 20 Years
                  </h3>
                </div>
                <img
                  src="assets/images/about/about-10.png"
                  className="wow fadeInDown"
                  alt="Fact image"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-12">
              {/*=== Fact content Box ===*/}
              <div className="fact-one_content-box mb-10" >
                <div className="section-title section-title-left wow fadeInDown">
                  <span className="sub-title">Who We Are</span>
                  <h2>LEADING HEALTH INSURANCE COMPANY</h2>
                </div>
                <p className="wow fadeInUp">
                  ULTIMATE HEALTH MANAGEMENT SERVICES LIMITED, a duly registered Company in Nigeria since December, 2007 with 
                  RC Number: 723347. Ultimate Health HMO is a National Health Maintenance Organization (HMO) accredited by the National Health Insurance Scheme (now Authority, NHIA)
                  in July 2009. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Skill Section ======*/}
      {/*====== Start Author Section ======*/}
      <section className="author-section bg_cover light-gray-bg pb-80"
      style={{ backgroundImage: "url(assets/images/bg/site-footer-bg.png)" }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              {/*=== Author Content Box ===*/}
              <div className="author-content-box mt-20 mb-50 ml-lg-60 wow fadeInRight">
                <h2>
                  <span className="thin">Meet</span> Otunba Lekan Ewenla, M.IoD
                </h2>
                <p>
                  Lekan Ewenla was appointed the Managing Director/CEO of Ultimate 
                  Health Management Services at the inception of the company.
                  He is also a strategic investor and member of the Board of Directors.
                </p>
                <h5>MD/CEO</h5>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Author Image ===*/}
              <div className="author-image mb-50 wow fadeInLeft">
                <img src="assets/images/md2.jpg" alt="Author Image" height={'auto'}/>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Mission */}
      {/* <section className="features-section p-r z-1 pt-100 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12"> */}
              {/*=== Features Item ===*/}
              {/* <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-stats" />
                </div>
                <div className="text">
                  <h4 className="title">Our Vission</h4>
                  <p>
                    To be the trailblazer,always leading in the provision of world-class managed care services.
                  </p>
                </div>
              </div> */}
            {/* </div>
            <div className="col-md-4 col-sm-12"> */}
              {/*=== Features Item ===*/}
              {/* <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-support" />
                </div>
                <div className="text">
                  <h4 className="title">Our Mission</h4>
                  <p>
                    To positively revolutionize the managed care concept by developing innovative customized healthcare products to suit the needs of different segments of the society, while promoting the highest 
                    standards of quality healthcare practice and service delivery in Nigeria.
                  </p>
                </div>
              </div> */}
            {/* </div>
            <div className="col-md-4 col-sm-12"> */}
              {/*=== Features Item ===*/}
              {/* <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-digital-strategy" />
                </div>
                <div className="text">
                  <h4 className="title">Our Values</h4>
                  <ul>
                    <li>
                      Integrity
                    </li>
                    <li>
                      Professionalism
                    </li>
                    <li>
                      Customer Satisfaction
                    </li>
                    <li>
                      Innovation
                    </li>
                  </ul>
                </div>
              </div> */}
            {/* </div>
            <div className="col-md-6 col-sm-12"> */}
              {/*=== Features Item ===*/}
              {/* <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-digital-strategy" />
                </div>
                <div className="text">
                  <h4 className="title">OUR STRENGTHS</h4>
                  <ul>
                    <li>
                      We are passionate about the wellbeing of our clients always.
                    </li>
                    <li>
                      We provide unparalleled services and settle for no less.
                    </li>
                    <li>
                      We consider the healthcare facilities/providers as our partners and we have established and 
                      still establishing mutually rewarding relationship with them.
                    </li>
                    <li>
                      We possess standard working tools to constantly measure the expectations of our 
                      clients in order to always serve them better.
                    </li>
                    <li>
                      We always deliver on our promise.
                    </li>
                  </ul>
                </div>
              </div> */}
            {/* </div>
            <div className="col-md-6 col-sm-12"> */}
              {/*=== Features Item ===*/}
              {/* <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-digital-strategy" />
                </div>
                <div className="text">
                  <h4 className="title">OUR UNIQUE SELLING PROPOSITION</h4>
                  <p>
                  Our expertise in designing well suited 
                  Customized Products and the Provision of top notch services at all times.
                  </p>
                </div>
              </div> */}
            {/* </div>
          </div>
        </div>
      </section> */}

      {/*====== End Author Section ======*/}
      <section className="about-section pt-90 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-six_image-box p-r z-1 mb-50 wow fadeInLeft">
                <div className="shape shape-one">
                  <span />
                </div>
                <img
                  src="assets/images/service/img-8.png"
                  className="about-img-one"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-50 wow fadeInRight">
                <p className='mt-5'>
                  We are a foremost healthcare financing Company headquartered in Abuja the Federal Capital 
                  Territory. At Ultimate Health HMO we provide the ultimate healthcare coverage and services 
                  with rich clinical and clerical knowledge and expertise in organizing financial and healthcare 
                  resources to best serve specific needs. We provide these unparalleled healthcare services through 
                  a strictly NHIS-accredited network of Health Care Facilities-HCFs ranging from primary to tertiary 
                  care across the nation. We complement this network of facilities with Specialists/Consultants Panel 
                  consisting of credible medical professionals that offer personalized services whenever and wherever.
                </p>
                <p>
                We leverage a robust software and technology to develop modernized healthcare systems, analyse data and provide truly tested services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Brands/>
    </>
  )
}

export default Story