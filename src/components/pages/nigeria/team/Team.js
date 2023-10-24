import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import Newsletter from "../../../partials/Newsletter";
import PageBanner from "../../../partials/PageBanner";
import { teamData } from './Data';
import Framer from '../../../partials/Framer';
import WOW from 'wowjs'

const Team = () => {
  
  useEffect(()=>{
    new WOW.WOW({
      live:false
    }).init()
  }, [])
  
  return (
    <>
    <Framer/>
    <PageBanner pageName={"Team Members"} PageImage={'team.jpg'} />{" "}
    
    {/*====== Start Team Section ======*/}
    <section className="team-section pt-120 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10">
            {/*=== Common Heading ===*/}
            <div className="section-title text-center mb-60 wow fadeInDown">
              <span className="sub-title">Meet Our Experienced Team</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {teamData.map((member)=>(
            <div className="col-lg-4 col-md-6 col-sm-12" key={member.id}>
              {/*=== Single Team Item ===*/}
              <div className="single-team-item mb-40 wow fadeInUp">
                <div className="img-holder">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="text text-center">
                  <h3 className="title">
                    <Link to="#">
                      <span>{member.name} </span>
                    </Link>
                  </h3>
                  <p className="position"> {member.position} </p>
                </div>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </section>
    {/*====== End Team Section ======*/}

    {/*====== Start Newsletter Section ======*/}
    <Newsletter />
  </>
  )
}

export default Team