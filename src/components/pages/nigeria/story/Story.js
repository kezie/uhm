import React, {useEffect} from 'react'
import PageBanner from '../../../partials/PageBanner'
import Brands from '../../../partials/brands'
import Framer from '../../../partials/Framer'
import WOW from 'wowjs'
import hero from '../../../../images/hero1.png'

const Story = () => {

  useEffect(()=>{
    new WOW.WOW({
      live:false
    }).init()
  }, [])

  return (
    <>
    <Framer/>
    <PageBanner pageName={"Our Story"} PageImage={'story.jpg'}/>{" "}
      <section className="fact-section p-r z-1 pt-130 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              {/*=== Fact image box ===*/}
              <div className="fact-img_one-box text-right pr-lg-70 mb-50">
                <div className="quote-box-three text-left wow fadeInLeft z-1" style={{backgroundColor:'#ffffff', color:'#088715', border:'1px solid #088715'}}>
                  <h3 className='text-italic' style={{color:'#088715'}}>
                    Playing a Leading Role in the Health Insurance Industry for almost 20 Years
                  </h3>
                </div>
                <div style={{zIndex:200, position:'relative'}}>
                  <img
                    src={hero}
                    className="wow fadeInDown"
                    alt="Fact image"
                    
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              {/*=== Fact content Box ===*/}
              <div className="fact-one_content-box mb-10" >
                <div className="section-title section-title-left wow fadeInDown">
                  {/* <span className="sub-title">Who We Are</span> */}
                  <h2>LEADING HEALTH INSURANCE COMPANY</h2>
                </div>
                <p className="wow fadeInUp">
                  Ultimate Health is a Health Maintenance Organization established by healthcare experts and
                  astute businessmen/ women with the objective to add value to the healthcare system of the
                  country by delivering excellent/global standard preventive and curative medical services in
                  accordance with the laws and at affordable rates.
                </p>
                <p>
                  We have grown over the years and have set up offices in the (6) geopolitical zones of the
                  federation with pockets of branches within the zones.
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
                  <span className="thin">Meet</span> Otunba Lekan Ewenla, M.CIoD
                </h2>
                <p>
                  Lekan Ewenla was appointed the Managing Director/CEO of Ultimate 
                  Health Management Services at the inception of the company.
                  He is also a strategic investor and a member of the Board of Directors.
                </p>
                <h5>MD/CEO</h5>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Author Image ===*/}
              <div className="author-image mb-50 wow fadeInLeft">
                <img src="assets/images/md2.jpg" alt="Author Image" height={'auto'} style={{borderRadius:30}}/>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/*====== End Author Section ======*/}
      <section className="about-section-five bg_cover p-r z-1 pt-50 pb-50"
        style={{ backgroundImage: "url(assets/images/bg/story_banner2.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-50 bg-dark p-4 wow fadeInRight" style={{opacity:0.8, borderRadius:'50px'}}>
                <p className='mt-5 text-light'>
                  Our team of experts are painstakingly selected with our eyes always on Global Exposure, Ability
                  to think out of the box, Flexibility, Deep Knowledge of Risk Pulling and Management, Strategic Marketing,
                  Corporate Governance and Best Practice.
                </p>
                <p className='mt-5 text-light'>
                  Our expertise in designing well seated and suited customized health care products and the
                  establishment of mutually rewarding working relationship with NHIA accredited Health Care
                  Facilities- HCFs which translate to the provision of top-notch medical services to our enrollees
                  is our Unique Selling Proposition- USP.
                </p>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>

      <Brands/>
    </>
  )
}

export default Story