import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Newsletter from "../../../partials/Newsletter";
import PageBanner from "../../../partials/PageBanner";
import { teamData } from './Data';
import Loader from '../../../partials/Loader';

const Team = () => {

  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  
  return (
    <>
    <PageBanner pageName={"Board Members"} PageImage={'team.jpg'} />{" "}
    {loading ? <Loader/> : <>
      <section className="team-section pt-120 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Meet Our Board Members</span>
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
                    <p className="position text-center"> {member.position} </p>
                  </div>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </section>
      <Newsletter />
      </>
    }
  </>
  )
}

export default Team