import React from 'react'
import tiship from '../../../images/tiship.jpg'
import { Link } from 'react-router-dom'

const TISHIP = () => {
  return (
    <section
        className="banner-one bg_cover p-r z-1"
        style={{ backgroundImage: `url(${tiship})` }}
    > 
        <div className="container pt-100 pb-100">
            <div className="row">
                <div className='col-xl-5 col-lg-2'></div>
                <div className="col-xl-7 col-lg-10  bg-dark p-4" style={{opacity:0.8, borderRadius:'50px'}}>
                {/*=== Hero Content ===*/}
                    <div className="text-white mt-5 mb-5">
                        <h2 className="wow fadeInUp mb-4" data-wow-delay=".7s" style={{color:'#db812f'}}>
                            The TISHIP PROGRAMME
                        </h2>
                        <p className="wow fadeInUp mb-2 text-light">
                            The TISHIP programme is one of the National Health Insurance Authority Packages that provides quality Healthcare for the students of tertiary institutions.
                            The Tertiary Institutions Social Health Insurance Programme TISHIP is a system whereby the health care of tertiary institutions is paid for from the funds pooled through students’ contributions.
                        </p>
                        <p className="wow fadeInUp mb-2 text-light">
                            It is a programme committed to ensuring qualitative healthcare services for students of the institutions thereby promoting the health and wellbeing of students.
                        </p>
                    </div>
                    <div
                      className="hero-button wow fadeInDown"
                      data-wow-delay=".9s"
                    >
                      <Link to="#" className={`main-btn btn-success`} data-bs-toggle="modal" data-bs-target="#formModal">
                        <span className=""> Learn More </span>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TISHIP