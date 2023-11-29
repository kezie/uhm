import { useState } from "react";
import ActionButtons from "../ActionButtons";
import Framer from "../../../partials/Framer";

const StepOne = (props) => {
    const [info1, setInfo1] = useState({});
    const [error, setError] = useState("");
  
    const onInputChanged = (event) => {
      const targetName = event.target.name;
      const targetValue = event.target.value;
  
      setInfo1((info1) => ({
        ...info1,
        [targetName]: targetValue
      }));
    };
  
    const validate = () => {
      if (!info1.fname || !info1.lname ||  !info1.company || !info1.mstatus) setError("Please Fill Out All Fields");
      else {
        setError("");
        props.nextStep();
        props.userCallback(info1);
      }
    };
  
    return (
    <>
      <Framer/>
      <div className="w-50" style={{margin:'auto'}}>
        <div className='contact-one_form-box'>
            <span className="text-center" style={{ color: "red"}}>{error}</span>
              <div className="form_group mb-lg-2">
                <label>First Name</label>
                  <input
                      type="text"
                      className="checkout-input"
                      name="fname"
                      required=""
                      onChange={onInputChanged}  
                  />
              </div>

              <div className="form_group mb-lg-2">
                  <label>Last Name</label>
                  <input
                      type="text"
                      className="checkout-input"
                      name="lname"
                      required=""
                      onChange={onInputChanged}  
                  />
              </div>

              <div className="form_group mb-lg-2">
                  <label>Company Name</label>
                  <input
                      type="text"
                      className="checkout-input"
                      name="company"
                      required=""
                      onChange={onInputChanged}  
                  />
              </div>

              <div className="form_group mb-lg-2">
                  <label>Marital Status</label>
                  <input
                      type="text"
                      className="checkout-input"
                      name="mstatus"
                      required=""
                      placeholder="E.g Married, Single, Engaged"
                      onChange={onInputChanged}  
                  />
              </div>

            <div className="form_group mb-lg-5">
              <ActionButtons {...props} nextStep={validate}/>
            </div>
        </div> 

      </div>
    </>
    );
  };

  export default StepOne