import React from 'react'
import gifship from '../../../images/gifship.jpg'
import { Link } from 'react-router-dom'

const GIFSHIP = () => {
  return (
    <section
        className="banner-one bg_cover p-r z-1"
        style={{ backgroundImage: `url(${gifship})` }}
    > 
        <div className="container pt-100 pb-100">
            <div className="row">
                <div className="col-xl-7 col-lg-10 bg-dark p-4" style={{opacity:0.8, borderRadius:'50px'}}>
                {/*=== Hero Content ===*/}
                    <div className="text-white mt-5 mb-5">
                        <h2 className="wow fadeInUp mb-4" data-wow-delay=".7s" style={{color:'#db812f'}}>
                            The GIFSHIP PROGRAMME
                        </h2>
                        <p className="wow fadeInUp mb-2 text-light">
                            GIFSHIP represents Group Individual and Family Social Health Insurance Programme of the National Health Insurance Authority. 
                            The GIFSHIP program is available for individuals, families and groups of 10 or more. 
                            It is designed and approved by the NHIA for Small and Medium enterprises and all players in the informal sector. 
                        </p>
                        <p className="wow fadeInUp mb-2 text-light">
                            The GIFSHIP is health coverage available to every Nigerian no matter where you are located. 
                            Contact us to get registered on the programme.
                        </p>
                    </div>
                    <div
                      className="hero-button wow fadeInDown"
                      data-wow-delay=".9s"
                    >
                      <Link to="#" className={`main-btn btn-success`}>
                        <span className=""> Learn More </span>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GIFSHIP