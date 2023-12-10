import React, { useState } from "react";
import Form from "./Forms.js/Contact.js";
import { useParams } from "react-router-dom";



const Checkout = () => {
  const {plan} = useParams();
  const {amount} = useParams();

  return (
    
      <div className="row container mt-5">
        <h4>Who Are You Buying This Plan For?</h4>
        <div className="">
          <span className="btn btn-primary ms-2 p-5    ">Myself</span>
          <span className="btn btn-primary ms-2">For Family</span>
          <span className="btn btn-primary ms-2">For Group</span>
        </div>
        <div className="col-lg-9">
          <Form/>
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
