import React, { useEffect, useState } from "react";
import Contact from "./Forms/Contact.js";
import Sponsor from "./Forms/Sponsor.js";
import Family from "./Forms/Family.js";
import { Link, NavLink, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { plans } from "./Plans.js";
import {plans2} from "./Plans2.js"
import { useSelector } from 'react-redux'


const Checkout = () => {

  const {userLocation} = useSelector((state)=>(state.userLocation))
  
  const [selectedForm, setSelectedForm] = useState(1)
  const { chosenPlan: initialChosenPlan } = useParams();
  const [activeButton, setActiveButton] = useState(1);
  const [chosenPlan, setChosenPlan] = useState(
    initialChosenPlan ? plans.find((plan) => plan.plan.toLowerCase() === initialChosenPlan) : null
  );
  
  const handlePlanChange = (newPlan) => {
    let selectedPlan;

    if(userLocation === "NG"){
      selectedPlan = plans.find((plan) => plan.plan.toLowerCase() === newPlan);
    }else{
      selectedPlan = plans2.find((plan) => plan.plan.toLowerCase() === newPlan);
    }

    setChosenPlan(selectedPlan);
  };
  
  const handleFormToggle = (formId, buttonId) => {
    setSelectedForm(formId);
    setActiveButton(buttonId);
  }

  return (
    
      <div className="container mt-5">
        <h4 className="text-center">Who Are You Buying This Plan For?</h4>
        <div className="text-center mt-5 mb-5">  
            <NavLink onClick={()=>handleFormToggle(1,1)}>
              <div className="service-item-three text-center wow fadeInUp" style={{padding:'25px 50px', borderRadius:15, background: activeButton === 1 ? '#8eb850' : '#db812e', color: activeButton === 1 ? 'white' : 'initial'}}>
                <div className="icon" style={{height:50, width:50}}>
                    <Link style={{height:30}}>
                      <i className="fas fa-user" style={{fontSize:20}}/>
                    </Link>
                </div>
                <div>
                  <p className="text-light">Myself</p>
                </div>
              </div>
            </NavLink>
          
            <NavLink className="ms-4 link" onClick={()=>handleFormToggle(2,2)} activeClassName="active">
              <div className="service-item-three text-center wow fadeInUp" style={{padding:'25px 20px', borderRadius:15, background: activeButton === 2 ? '#8eb850' : '#db812e', color: activeButton === 2 ? 'white' : 'initial'}}>
                <div className="icon" style={{height:50, width:50}}>
                    <Link style={{height:30}}>
                      <i className="fas fa-user" style={{fontSize:20}}/>
                    </Link>
                </div>
                <div>
                  <p className="text-light">Someone Else</p>
                </div>
              </div>
            </NavLink>
          
            <NavLink className="ms-4 link" onClick={()=>handleFormToggle(3,3)} activeClassName="active">
              <div className="service-item-three text-center wow fadeInUp mt-5 mt-lg-0" style={{padding:'25px 20px', borderRadius:15, background: activeButton === 3 ? '#8eb850' : '#db812e', color: activeButton === 3 ? 'white' : 'initial'}}>
                <div className="icon" style={{height:50, width:50}}>
                    <Link target='_blank' style={{height:30}}>
                      <i className="fas fa-users" style={{fontSize:20}}/>
                    </Link>
                </div>
                <div>
                  <p className="text-light">Family/Group</p>
                </div>
              </div>
            </NavLink>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <Card>
              <Card.Header as="h5">Choosen Plan Details</Card.Header>
              <Card.Body>
              <select
                className="form-select"
                value={chosenPlan ? chosenPlan.plan.toLowerCase() : ""}
                onChange={(e) => handlePlanChange(e.target.value)}
              >
                <option value="" disabled>
                  Select a Plan
                </option>
                {userLocation === "NG" ? 
                  plans.map((plan) => (
                    <option key={plan.plan} value={plan.plan.toLowerCase()}>
                      {plan.plan.toUpperCase()}  ₦{plan.amount}
                    </option>
                  )) : 
                  plans2.map((plan) => (
                    <option key={plan.plan} value={plan.plan.toLowerCase()}>
                      {plan.plan.toUpperCase()} USD{plan.amount}
                    </option>
                  ))
               }
              </select>
            </Card.Body>
              
              </Card>
          </div>
          <div className="col-lg-9">
            {selectedForm === 1 && <Contact amount={chosenPlan ? chosenPlan.amount : 0} />}
            {selectedForm === 2 && <Sponsor amount={chosenPlan ? chosenPlan.amount : 0} />}
            {selectedForm === 3 && <Family amount={chosenPlan ? chosenPlan.amount : 0} />}
          </div>
        </div>
      </div>
    
  );
};

export default Checkout;
