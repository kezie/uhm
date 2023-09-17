import React from 'react'
import InsurancePlans from '../../../partials/insurancePlans/InsurancePlans'
import { useSelector } from 'react-redux'

const Services = () => {

  const { location } = useSelector((state)=> state.location)
  
  let content = ''
  let subtitle = ''
  let title = ''
  
  if(location === "NG"){
    content = 'Pick one of our plans off the shelf or design something specifically for you and your organization by calling our marketing team on: +234-811-2893-000'
    subtitle = 'Who Can Buy Our Health Insurance'
    title = 'Cover made for you'
  }else{
    content = 'To learn more about our health insurance plans and get a personalized quote, contact our marketing team on +234-811-2893-000.'
    subtitle = 'Get a plan for a loved one'
    title = ''
  }

  return (
    <section
        className="service-section bg_cover pt-100 p-r z-1 pb-100"
        style={{ backgroundImage: "url(assets/images/bg/services.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center text-white mb-60 wow fadeInDown">
                <span className="sub-title">{subtitle}</span>
                <h2> {title} </h2>
                <p>{content}</p>
              </div>
            </div>
          </div>
          {/*=== Service Slider ===*/}
          <InsurancePlans />
          <h6 className="text-light text-center">All plans are available for purchase Locally and Internationally</h6>
        </div>
    </section>
  )
}

export default Services