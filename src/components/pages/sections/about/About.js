import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const About = () => {

  const { location } = useSelector((state)=> state.location)

  let p1 = ''
  let p2 = ''
  let title = ''
  let sub_title = ''
  let src = ''

  if(location === "NG"){
    p1 = 'Ultimate Health is a Health Maintenance Organization established to deliver excellent preventive and curative medical services at affordable rates. '
    p2 = 'We have multiple offices across the 6 Geopolitical Zones of the Federation and an excellent team of experts with Global exposure. We are innovative, strategic and flexible with our eyes always on providing solutions with Best Practices and Corporate Governance.'
    title = 'Leading Health Insurance Company'
    sub_title = 'About Us'
    src = 'assets/images/about/about-10.png'
  }else{
    p1 = "Are you worried about the healthcare challenges faced by your loved ones in Nigeria? At Ultimate Health, we understand your concerns, and we're here to provide a reliable solution. With our comprehensive health insurance plans, you can ensure that your family in Nigeria receives the best medical care when they need it most."
    p2 = ''
    title = 'Ultimate Health HMO'
    sub_title = "Secure Your Family's Health in Nigeria with"
    src = 'assets/images/hero/hero2.png'
  }

  return (
    <section className="about-section-five p-r z-1">
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
          <div className="about-wrapper pt-130">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-seven_image-box p-r z-1 text-center mr-lg-70">
                  <img
                    src={src}
                    className="about-img-one wow fadeInLeft"
                    alt="About Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content-box content-box-gap mb-50">
                  <div className="section-title section-title-left wow fadeInDown">
                    <span className="sub-title">{sub_title}</span>
                    <h2>{title}</h2>
                  </div>
                  <p>
                    {p1} 
                  </p>
                  <p>
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