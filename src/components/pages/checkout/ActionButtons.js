import React from 'react'

const ActionButtons = (props) => {
    const handleBack = () => {
      props.previousStep();
    };
  
    const handleNext = () => {
      props.nextStep();
    };
  
    const handleFinish = () => {
      props.lastStep();
    };
  
    return (
      <div>
        <div className="row">
          {props.currentStep > 1 && (
            <div className="col-6 pt-3 mb-5" style={{display:'flex', justifyContent:'flex-end'}}>
              <button style={{padding:'2px 15px'}} className='main-btn btn-sm btn-outline' onClick={handleBack}>Back</button>
            </div>
          )}
          <div className="col-6 pt-3 mb-5">
            {props.currentStep < props.totalSteps && (
              <button style={{padding:'2px 15px'}} className='main-btn btn-sm btn-outline' onClick={handleNext}>Next</button>
            )}
            {props.currentStep === props.totalSteps && (
              <button style={{padding:'2px 15px'}} className='main-btn btn-sm btn-outline' onClick={handleFinish}>Checkout</button>
            )}
          </div>
        </div>
      </div>
    );
  };

export default ActionButtons