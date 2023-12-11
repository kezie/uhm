import React, { useState } from "react";
import Contact from "./Forms.js/Contact.js";
import Sponsor from "./Forms.js/Sponsor.js";
import Family from "./Forms.js/Family.js";
import { Link, useParams } from "react-router-dom";



const Checkout = () => {
  const [selectedForm, setSelectedForm] = useState(1)
  const {plan} = useParams();
  const {amount} = useParams();

  const handleFormToggle = (formId) => {
    setSelectedForm(formId);
  }

  return (
    
      <div className="row container mt-5">
        <h4 className="text-center">Who Are You Buying This Plan For?</h4>
        <div className="text-center mt-5 mb-5">  
            <Link onClick={()=>handleFormToggle(1)}>
              <div className="service-item-three text-center wow fadeInUp" style={{padding:'0 45px', backgroundColor:'#db812e'}}>
                <div className="icon" style={{height:50, width:50}}>
                    <Link target='_blank' style={{height:30}}>
                      <i className="fas fa-user"/>
                    </Link>
                </div>
                <div>
                  <h4 className="text-light">Myself</h4>
                </div>
              </div>
            </Link>
          
            <Link className="ms-4" onClick={()=>handleFormToggle(2)}>
              <div className="service-item-three text-center wow fadeInUp" style={{padding:'0 3px', backgroundColor:'#db812e'}}>
                <div className="icon" style={{height:50, width:50}}>
                    <Link target='_blank' style={{height:30}}>
                      <i className="fas fa-user"/>
                    </Link>
                </div>
                <div>
                  <h4 className="text-light">Someone Else</h4>
                </div>
              </div>
            </Link>
          
            <Link className="ms-4" onClick={()=>handleFormToggle(3)}>
              <div className="service-item-three text-center wow fadeInUp" style={{padding:'0 5px', backgroundColor:'#db812e'}}>
                <div className="icon" style={{height:50, width:50}}>
                    <Link target='_blank' style={{height:30}}>
                      <i className="fas fa-users"/>
                    </Link>
                </div>
                <div>
                  <h4 className="text-light">Family/Group</h4>
                </div>
              </div>
            </Link>
        </div>
        <div className="col-lg-9">
          { selectedForm ===1 && <Contact/>}
          { selectedForm ===2 && <Sponsor/>}
          { selectedForm ===3 && <Family/>}
        </div>
        <div className="col-lg-3">
          <h5>Choosen Plan Details</h5>
          <div>Plan: {plan.toLocaleUpperCase()} PLAN</div>
          <div>Amount: {amount}</div>
        </div>
      </div>
    
  );
};

export default Checkout;
