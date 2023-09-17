import React from 'react'
import otumba from '../../../images/hero-bg-2.jpg'
import { Link } from 'react-router-dom'

const GIFSHIP = () => {
  return (
    <section
        className="banner-one bg_cover p-r z-1"
        style={{ backgroundImage: `url(${otumba})` }}
    > 
        <div className="container pt-120">
            <div className="row">
                <div className="col-xl-7 col-lg-10">
                {/*=== Hero Content ===*/}
                    <div className="text-white mt-5 mb-5">
                        <h2 className="wow fadeInUp mb-4" data-wow-delay=".7s" style={{color:'#db812f'}}>
                            The GIFSHIP PROGRAMME
                        </h2>
                        <p className="wow fadeInUp mb-2 text-light">
                            GIFSHIP represents Group Individual and Family Social health insuance programme of the National Health Insurance Authority. 
                            The GIFSHIP program is available for individuals, families and groups of 10 or more. 
                            The GIFSHIP is health coverage available to every Nigerian no matter where you are located. 
                            Contact us to get registered on the programme.
                        </p>
                        <p className="wow fadeInUp mb-2 text-light">
                            It is a programme committed to ensuring qualitative healthcare services for students of the institutions thereby promoting the health and wellbeing of students.
                            It is slated for a period of one year academic session for the students of the institution
                            This programme is open to both private and tertiary institution
                        </p>
                    </div>
                    <div
                      className="hero-button wow fadeInDown"
                      data-wow-delay=".9s"
                    >
                      <Link to="#" className={`main-btn btn-success`}>
                        <span className=""> More Info </span>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GIFSHIP