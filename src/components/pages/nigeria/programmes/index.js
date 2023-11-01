import React from 'react'
import PageBanner from '../../../partials/PageBanner'
import SocialPrograms from '../../../partials/socialPrograms'
import Framer from '../../../partials/Framer'

const Programs = () => {
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
                    {/* <img src="assets/images/logo/logo-1.png" className="m-auto" alt="logo"width={60}/> */}
                    <h4 className="mb-20 mt-4">Fill the form and our representative will get back to you.</h4>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="insurance-form"
                    >
                      <div className='row'>
                        <div className="form_group col-lg-4">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="First Name"
                            name=""
                            required=""
                          />
                          {/* <i className="fas fa-user" /> */}
                        </div>
                        <div className="form_group col-lg-4">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Last Name"
                            name=""
                            required=""
                          />
                          {/* <i className="fas fa-user" /> */}
                        </div>
                        <div className="form_group col-lg-4">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Phone Number"
                            name=""
                            required=""
                          />
                          {/* <i className="fas fa-lock" /> */}
                        </div>
                        <div className="form_group col-lg-6">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                          {/* <i className="fas fa-envelope" /> */}
                        </div>
                        <div className="form_group col-lg-6">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Company Name"
                            name=""
                            required=""
                          />
                          {/* <i className="fas fa-lock" /> */}
                        </div>
                        <div className="form_group col-lg-6">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Marital Status"
                            name=""
                            required=""
                          />
                          {/* <i className="fas fa-lock" /> */}
                        </div>
                        <div className="form_group col-lg-6">
                          <select className='form_control'>
                            <option>What Plan Are Interested In?</option>
                            <option>GIFSHIP</option>
                            <option>TISHIP</option>
                            <option>State Health Insurance</option>
                          </select>
                          {/* <input
                            type="text"
                            className="form_control"
                            placeholder="What Plan are you interested in?"
                            name=""
                            required=""
                          /> */}
                          {/* <i className="fas fa-lock" /> */}
                        </div>
                        <div className="form_group mt-4 mb-4">
                          <button className="main-btn btn-red">
                            Submit
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