import { useState } from "react";
import ActionButtons from "../ActionButtons";
import Framer from "../../../partials/Framer";

const StepTwo = (props) => {
    const [info2, setInfo2] = useState({});
    const [error, setError] = useState("");
  
    const onInputChanged = (event) => {
      const targetName = event.target.name;
      const targetValue = event.target.value;
  
      setInfo2((info2) => ({
        ...info2,
        [targetName]: targetValue
      }));
    };
  
    const validate2 = () => {
      if (!info2.mobile ||!info2.email ) setError(` Kindly Fill Out All Fields, ${props.user.lname}`);
      else {
        setError("");
        props.nextStep();
        props.userCallback(info2);
      }
    };
  
    return (

      <>
        <Framer/>
        <div className="w-50" style={{margin:'auto'}}>
          <div className='contact-one_form-box'>
              <span style={{ color: "red", margin:'auto'}}>{error}</span>
                <div className="form_group mb-lg-2">
                  <label>Email Address</label>
                    <input
                        type="email"
                        className="checkout-input"
                        name="email"
                        required=""
                        onChange={onInputChanged}  
                    />
                </div>

                <div className="form_group mb-lg-2">
                  <label>Mobile Number</label>
                    <input
                        type="text"
                        className="checkout-input"
                        name="mobile"
                        required=""
                        onChange={onInputChanged}  
                    />
                </div>

              <div className="form_group mb-lg-5">
                <ActionButtons {...props} nextStep={validate2} />
              </div>
          </div> 
        </div>
      </>

    );
  };

  export default StepTwo