import { useState } from "react";
import ActionButtons from "../ActionButtons";

const StepThree = (props) => {
    console.log("step3 receive user object");
    console.log(props.user);
  
    const handleLastStep = () => {
      props.lastStep();
      props.completeCallback();
    };
  
    return (
      <div className="w-50" style={{margin:'auto'}}>
        <h2>Summary user detail</h2>
        <p>First Name: {props.user.fname}</p>
        <p>Last Name: {props.user.lname}</p>
        <p>Company: {props.user.company}</p>
        <p>Marital Status: {props.user.mstatus}</p>
        <p>Email: {props.user.email}</p>
        <p>Mobile: {props.user.mobile}</p>

        <div className="form_group mb-lg-5">
          <ActionButtons {...props} lastStep={handleLastStep} />
        </div>
      </div>
    );
  };

  export default StepThree