import React, { useState } from "react";
import Contact from "./Forms.js/Contact.js";
import Sponsor from "./Forms.js/Sponsor.js";
import Family from "./Forms.js/Family.js";
import { Link, NavLink, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";


const Checkout = () => {
  const [selectedForm, setSelectedForm] = useState(1)
  const {plan} = useParams();
  const {amount} = useParams();
  const [activeButton, setActiveButton] = useState(1);

  const handleFormToggle = (formId, buttonId) => {
    setSelectedForm(formId);
    setActiveButton(buttonId);
  }

  return (
    
      <div className="container mt-5">
        <h4 className="text-center">Who Are You Buying This Plan For?</h4>
        <div className="text-center mt-5 mb-5">  
            <NavLink onClick={()=>handleFormToggle(1,1)}>
              <div className="service-item-three text-center wow fadeInUp" style={{padding:'0 45px', background: activeButton === 1 ? 'green' : '#db812e', color: activeButton === 1 ? 'white' : 'initial'}}>
                <div className="icon" style={{height:50, width:50}}>
                    <Link target='_blank' style={{height:30}}>
                      <i className="fas fa-user"/>
                    </Link>
                </div>
                <div>
                  <h4 className="text-light">Myself</h4>
                </div>
              </div>
            </NavLink>
          
            <NavLink className="ms-4 link" onClick={()=>handleFormToggle(2,2)} activeClassName="active">
              <div className="service-item-three text-center wow fadeInUp" style={{padding:'0 3px', background: activeButton === 2 ? 'green' : '#db812e', color: activeButton === 2 ? 'white' : 'initial'}}>
                <div className="icon" style={{height:50, width:50}}>
                    <Link target='_blank' style={{height:30}}>
                      <i className="fas fa-user"/>
                    </Link>
                </div>
                <div>
                  <h4 className="text-light">Someone Else</h4>
                </div>
              </div>
            </NavLink>
          
            <NavLink className="ms-4 link" onClick={()=>handleFormToggle(3,3)} activeClassName="active">
              <div className="service-item-three text-center wow fadeInUp mt-5 mt-lg-0" style={{padding:'0 5px', background: activeButton === 3 ? 'green' : '#db812e', color: activeButton === 3 ? 'white' : 'initial'}}>
                <div className="icon" style={{height:50, width:50}}>
                    <Link target='_blank' style={{height:30}}>
                      <i className="fas fa-users"/>
                    </Link>
                </div>
                <div>
                  <h4 className="text-light">Family/Group</h4>
                </div>
              </div>
            </NavLink>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <Card>
              <Card.Header as="h5">Choosen Plan Details</Card.Header>
              <Card.Body>
                <Card.Title>PLAN: {plan.toLocaleUpperCase()} PLAN</Card.Title>
                <Button variant="success">Amount:  ₦ {amount}</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-9">
            { selectedForm ===1 && <Contact amount={amount}/>}
            { selectedForm ===2 && <Sponsor amount={amount}/>}
            { selectedForm ===3 && <Family amount={amount}/>}
          </div>
        </div>
      </div>
    
  );
};

export default Checkout;
