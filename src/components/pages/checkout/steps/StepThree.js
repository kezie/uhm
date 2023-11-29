import Framer from "../../../partials/Framer";
import ActionButtons from "../ActionButtons";
import { useParams } from "react-router-dom";

const StepThree = (props) => {

  const {amount} = useParams();
  const {plan} = useParams();
    console.log("step3 receive user object");
    console.log(props.user);
  
    const handleLastStep = () => {
      props.lastStep();
      props.completeCallback();
    };
  
    return (
      <>
        <Framer/>
        <div className="row mt-5" style={{margin:'auto'}}>
          <div className="col-lg-4"></div>
          <div className="col-lg-4 justify-content-center">
            <div className="">
                {/*=== Pricing Item ===*/}
                <div className="pricing-item-one mb-60 wow fadeInUp">
                    <span className="save text-center">
                        <div className='mb-1 mt-1'>
                            <span style={{ fontSize:'30px', fontWeight:'bold'}}>{plan.toUpperCase()}</span>
                        </div>
                        <span className="plan">{amount}</span>
                    </span>
                    <div className="pricing-body mt-5">
                      <ul className="pricing-list">
                        <li> First Name: {props.user.fname}</li>
                        <li> Last Name: {props.user.lname}</li>
                        <li> Company: {props.user.company}</li>
                        <li> Email: {props.user.email}</li>
                        <li> Mobile: {props.user.mobile}</li>
                        <li> Marital Status: {props.user.mstatus}</li>
                      </ul>
                    </div>
                </div>
            </div>
          </div>
          <div className="form_group mb-lg-5">
            <ActionButtons {...props} lastStep={handleLastStep} />
          </div>
        </div>
      </>
    );
  };

  export default StepThree