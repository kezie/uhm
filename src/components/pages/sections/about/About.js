import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const About = () => {

  const { userLocation } = useSelector((state)=> state.userLocation)

  let p1 = ''
  let p2 = ''
  let title = ''
  let sub_title = ''
  let src = ''

  if(userLocation === "NG"){
    p1 = 'Ultimate Health is a Health Maintenance Organization established by healthcare experts and astute businessmen/ women with the objective to add value to the healthcare system of the country by delivering excellent/global standard preventive and curative medical services in accordance with the laws and at affordable rates.'
    p2 = 'We have grown over the years and have set up offices in the (6) geopolitical zones of the federation with pockets of branches within the zones.'
    title = 'Leading Health Insurance Company'
    sub_title = ''
    src = 'assets/images/about/about-10.png'
  }else{
    p1 = "Are you worried about the healthcare challenges faced by your loved ones in Nigeria? At Ultimate Health, we understand your concerns, and we're here to provide a reliable solution. With our comprehensive health insurance plans, you can ensure that your family in Nigeria receives the best medical care when they need it most."
    p2 = ''
    title = 'Ultimate Health HMO'
    sub_title = "Secure Your Family's Health in Nigeria with"
    src = 'assets/images/hero/hero2.png'
  }

  return (
    <section className="about-section-five bg_cover p-r z-1 pt-50"
    style={{ backgroundImage: 'url(assets/images/bg/com_banner.jpg)' }}
    >
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                
              </div>
              <div className="col-lg-6">
                <div className="about-content-box content-box-gap mb-50">
                  <div className="section-title section-title-left wow fadeInDown">
                    <span className="sub-title">{sub_title}</span>
                    <h2>{title}</h2>
                  </div>
                  
                    <p className='text-light'>
                      {p1} 
                    </p>
                    <p className='text-light'>
                      {p2}
                    </p>
                  <div className="menu-button pt-30 text-right">
                    <Link to="/story">
                      <span className="main-btn btn-red">Discover More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About