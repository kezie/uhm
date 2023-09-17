import React from 'react'
import otumba from '../../../images/hero-bg-2.jpg'

const TISHIP = () => {
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
                            The TISHIP PROGRAMME
                        </h1>
                        <p className="wow fadeInUp mb-2 text-light">
                            The TISHIP programme is one of the National Health Insurance Authority Packages that provides quality Healthcare for the students of tertiary institutions.
                            The Tertiary Institutions Social Health Insurance Programme TISHIP is a system whereby the health care of tertiary institutions is paid for from the funds pooled through students’ contributions.
                        </p>
                        <p className="wow fadeInUp mb-2 text-light">
                            It is a programme committed to ensuring qualitative healthcare services for students of the institutions thereby promoting the health and wellbeing of students.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TISHIP