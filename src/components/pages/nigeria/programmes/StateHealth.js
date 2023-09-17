import React from 'react'
import otumba from '../../../../images/hero-bg-2.jpg'

const StateHealth = () => {
  return (
    <section
        className="banner-one bg_cover p-r z-1"
        style={{ backgroundImage: `url(${otumba})` }}
    > 
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-lg-10">
                {/*=== Hero Content ===*/}
                    <div className="text-white mt-5 mb-5">
                        <h1 className="wow fadeInUp mb-2" data-wow-delay=".7s" style={{color:'#db812f'}}>
                            State Health Insurance PROGRAMS
                        </h1>
                        <p className="wow fadeInUp mb-2 text-light">
                            Ultimate Health partners with many sub-national government agencies in Nigeria to provide 
                            social healthcare insurance to residents of the respective state. These programs are 
                            designed to provide affordable, accessible and qualitative healthcare to members of the 
                            organized private sector and the informal sector alike. Contact us to enquire about the 
                            availability of such programs in your state of residence and your eligibility for them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StateHealth