import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { MdDescription } from "react-icons/md";
import StepWizard from "react-step-wizard";
import StepOne from "./steps/StepOne";
import StepThree from "./steps/StepThree";
import StepTwo from "./steps/StepTwo";
import Remita from "./steps/Remita";



const Sample = () => {
  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    console.log("parent receive user callback");
    console.log(val);
    setUser((user) => ({
      ...user,
      ...val
    }));
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    // start checkout process
    alert("You r done. TQ");
    console.log("this is from last step:", user);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step label="Personal Info" children={<MdDescription />} />
        <Step label="Contact Info" />
        <Step label="Checkout" />
      </Stepper>
      {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <StepOne userCallback={assignUser} />
        <StepTwo user={user} userCallback={assignUser} />
        <StepThree user={user} completeCallback={assignUser} />
        <Remita user={user} />
      </StepWizard>
    </div>
  );
};

export default Sample;
