import React, { useEffect } from 'react'
import otunba from '../../../images/hero-bg-2.jpg'
import { Link } from 'react-router-dom'
import WOW from 'wowjs'
import {data} from './data'
import Brands from '../../partials/brands'
import Counter from '../../partials/Counter'

const Home = () => {

    useEffect(()=>{
        new WOW.WOW({
            live:false
        }).init()
        }, [])

  return (
    <>
      {/*====== Start Hero Section ======*/}
      <section
      className="banner-one bg_cover p-r z-1"
      style={{ backgroundImage: `url(${otunba})`, paddingTop:'100px' }}
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
                  <p className="wow fadeInUp mb-2 text-light" style={{fontSize:18}}>
                      The ability to take care of loved ones in Nigeria from the diaspora can be a source of pride and joy. Raising and sending money back home for unplanned medical expenditures can steal that joy.
                  </p>
                  <p className="wow fadeInUp mb-2 text-light" style={{fontSize:18}}>
                      Work with a partner that has been taking care of the healthcare needs of Nigerians for close to 20 years. Let us ensure that all your loved ones in Nigeria have access to the best medical care, and you do not have to bother about impromptu expenses.
                  </p>
                  <div className="hero-button mt-5 wow fadeInUp" data-wow-delay=".9s">
                      <Link to="/insurance-plans" className='me-3'>
                          <span className="main-btn btn-red">Buy Insurance</span>
                      </Link>
                      <Link  to="https://www.youtube.com/watch?v=33ndQmpxMQ0&feature=youtu.be" target='_blank'>
                          <span className="main-btn btn-red">Watch Presentation</span>
                      </Link>
                  </div>
              </div>
              </div>
          </div>
          </div>
      </section>
      {/*====== End Hero Section ======*/}
      <section className="about-section-five pt-100 pb-100 p-r z-1">
          <div className="svg-shape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                fillRule="evenodd"
                d="M0.000,70.000 C0.000,70.000 73.639,41.416 99.000,31.000 C124.361,20.584 184.801,-12.677 273.000,5.999 C295.491,10.706 345.395,21.222 404.000,68.999 C462.605,116.777 512.689,168.782 565.000,170.000 C576.687,169.078 608.529,162.221 628.000,137.000 C649.123,113.016 688.397,54.613 779.000,82.000 C786.908,85.000 836.518,97.513 907.000,176.000 C931.894,202.535 1013.315,298.251 1097.000,263.999 C1114.699,255.845 1134.897,244.234 1149.000,233.999 C1163.103,223.765 1196.091,198.955 1205.000,193.000 C1213.909,187.044 1296.854,117.568 1455.000,172.999 C1469.420,178.837 1507.670,193.177 1563.000,234.999 C1585.635,248.514 1630.685,286.249 1708.000,279.999 C1717.915,278.737 1755.379,272.022 1786.000,243.000 C1816.621,213.978 1838.252,183.133 1852.000,165.999 C1865.747,148.866 1893.054,117.132 1920.000,107.000 C1920.396,134.705 1920.000,1050.999 1920.000,1050.999 L0.000,1050.999 L0.000,70.000 Z"
              />
            </svg>
          </div>
          
          <div className="container">
          <div className="row">
              <div className="col-xl-9 col-lg-12">
                <div className="section-title text-white text-center wow fadeInDown">
                  <p className='text-muted' style={{fontSize:18}}>For a pre-paid premium, subscribers to the Ultimate Diaspora plan are assured of access to affordable healthcare when required amongst the list of NHIS-accredited hospitals. The plan provides access to a wide range of private and public hospitals all over the country</p>
                </div>
              </div>
              <div className='col-xl-3 col-lg-12'>
                <Link to="/insurance-plans" className='mt-4 ms-4'>
                  <span className="main-btn btn-red" style={{fontSize:13}}>Get Health Insurance</span>
                </Link>
              </div>
          </div>
          
            <div className="about-wrapper pt-130">
              <div className="row">
                {data.map((col)=> (
                  <div key={col.id} className="col-xl-3 col-md-6 col-sm-12">
                    <div style={{borderRadius:'20px'}} className="features-item-five text-center mb-40 wow fadeInDown">
                      <div className="icon">
                        <i className={col.icon} style={{ color: "#db812e" }} />
                      </div>
                      <div className="text">
                        <h5 style={{color:'#8cbd53'}} className="title">{col.title}</h5>
                        <p>
                        {col.text}
                        </p>
                        <Link to={col.link}>
                          <a className="btn-link">Learn More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
      {/*====== Start Fact Section ======*/}
      <section className="fact-section p-r z-1 pt-130">
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
                  src="assets/images/service/started.png"
                  className="wow fadeInDown"
                  alt="Fact image"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-12">
              {/*=== Fact content Box ===*/}
              <div className="fact-one_content-box mb-10">
                <div className="section-title section-title-left wow fadeInDown">
                  <span className="sub-title">Get Started Today!</span>
                  <h2>Covering Lives, Ensuring Smiles</h2>
                </div>
                <p className="wow fadeInUp">
                  Don't wait for a healthcare emergency to strike. Take proactive steps to secure your family's 
                  health in Nigeria. With Ultimate Health, you can have peace of mind knowing that your loved ones are covered.
                </p>
                <div className="single-counter-item d-flex align-items-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <a href="#">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <div className="text d-flex justify-content-between align-items-center">
                    <span className="number">
                      <Counter end={300000} /> + 
                    </span>
                    <h5> ENROLLEES </h5>
                  </div>
                </div>
                <div className="single-counter-item d-flex align-items-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <a href="#">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <div className="text d-flex justify-content-between">
                    <span className="number">
                      <Counter end={9000} /> +
                    </span>
                    <h5> HEALTH FACILITIES </h5>
                  </div>
                </div>
                  <Link to="/insurance-plans" className='me-3'>
                      <span className="main-btn btn-red">Buy Insurance</span>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}
    </>
  )
}

export default Home