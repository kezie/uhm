import React, { useState } from 'react'
import PageBanner from '../../../partials/PageBanner'
import SocialPrograms from '../../../partials/socialPrograms'
import Framer from '../../../partials/Framer'
import axios from 'axios'

const Programs = () => {

  const [submitMessage, setSubmitMessage] = useState('');
  const [loading, setLoading] = useState(false)
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [mobile, setMobile] = useState('');
  const [m_status, setM_status] = useState('');
  const [plan, setPlan] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (fname === '' || email === '' || lname === '' || company === '' || mobile === '' || m_status === '' || plan === '') {
        setError('Please fill out all fields');
        setLoading(false);
        return;
    }

    const url = process.env.REACT_APP_PROGRAMS_API;

    const dataToSend = {
        fname,
        lname,
        email,
        mobile,
        company,
        plan,
        m_status
    };

    try {
        const response = await axios.post(url, dataToSend);

        console.log(response.data);
        setFname('');
        setLname('');
        setEmail('');
        setMobile('');
        setCompany('');
        setPlan('');
        setM_status('');
        setError('');
        setSubmitMessage('Your message was sent successfully, we will contact you shortly.');
        setLoading(false);

    } catch (error) {
        console.error("Error submitting form:", error);
        setError('Error submitting form, please try again');
        setLoading(false);
        // Handle error
    }
};

  return (
    <>
      <Framer/>
      <PageBanner pageName={"Social Health Insurance"} PageImage={"insurance.jpg"} />
      <SocialPrograms/>
      {/* Form Modal */}
      <div className="modal fade" id="formModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div className=" modal-dialog modal-lg pt-130 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="user-wrapper text-center">
                  <div className="user-content modal-content p-4">
                    <h4 className="mb-20 mt-4">Fill the form and our representative will get back to you.</h4>
                    <form
                      className="insurance-form"
                      onSubmit={handleSubmit}
                    >
                      <div className='row'>
                        <div className="form_group col-lg-4">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="First Name"
                            name="fname"
                            onChange={(e) => setFname(e.target.value)}
                          />
                          
                        </div>
                        <div className="form_group col-lg-4">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Last Name"
                            name="lname"
                            onChange={(e) => setLname(e.target.value)}
                          />
                         
                        </div>
                        <div className="form_group col-lg-4">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Phone Number"
                            name="mobile"
                            onChange={(e) => setMobile(e.target.value)}
                          />
                          
                        </div>
                        <div className="form_group col-lg-6">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                         
                        </div>
                        <div className="form_group col-lg-6">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Company Name"
                            name="company"
                            onChange={(e) => setCompany(e.target.value)}
                          />
                          
                        </div>
                        <div className="form_group col-lg-6">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Marital Status"
                            name="m_status"
                            onChange={(e) => setM_status(e.target.value)}
                          />
                          
                        </div>
                        <div className="form_group col-lg-6">
                          <select className='form_control' name="plan" onChange={(e) => setPlan(e.target.value)}>
                            <option>What Plan Are Interested In?</option>
                            <option value="GIFSHIP">GIFSHIP</option>
                            <option value="TISHIP">TISHIP</option>
                            <option value="State Health Insurance ">State Health Insurance</option>
                          </select>
                          
                        </div>
                        <p>{error ? error : submitMessage}</p>
                        <div className="form_group mt-4 mb-4">
                          <button className="main-btn btn-red">
                            {loading ? "Submitting" : "Submit"}
                          </button>
                          <span type="button" className="ms-4 text-danger" data-bs-dismiss="modal" aria-label="Close">Cancel</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Programs