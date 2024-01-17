import { Link } from "react-router-dom";
import {InsuranceData} from './Data'

const InsurancePlans = () => {
  return (
    <div className="service-slider-one row mb-5">
      {/*=== Service Item ===*/}
      {InsuranceData.map((insurance)=>(
        <div key={insurance.type} className="service-item wow fadeInUp col-lg-3 mb-2">
          <div className="img-holder">
            <img src={insurance.image} alt="service" />
          </div>
          <div className="service-content">
            <div className="text">
              <div className="title-icon d-flex">
                <i className={insurance.icon}/>
                <h3 className="title">
                  <Link to={insurance.link}>
                    <span>{insurance.type}</span>
                  </Link>
                </h3>
              </div>
            </div>
            <div className="hover-text text-white">
              <div className="title-icon d-flex">
                <i className={insurance.icon} />
                <h3 className="title">
                  <Link to={insurance.link}>
                    <span>{insurance.type}</span>
                  </Link>
                </h3>
              </div>
              <p style={{textAlign:'left'}}>
               {insurance.desc}
              </p>
                <Link to={insurance.link}>
                  <span className="icon-btn">
                    <i className="far fa-arrow-right" />Read More
                  </span>
                </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default InsurancePlans;
