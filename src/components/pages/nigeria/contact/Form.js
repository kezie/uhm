import React from 'react'

const Form = () => {
  return (
    <form
        onSubmit={(e) => e.preventDefault()}
        className="contact-form"
    >
        <div className="row">
        <div className="col-lg-6">
            <div className="form_group">
            <input
                type="text"
                className="form_control"
                placeholder="Full Name"
                name="name"
                required=""
            />
            <i className="far fa-user" />
            </div>
        </div>
        <div className="col-lg-6">
            <div className="form_group">
            <input
                type="email"
                className="form_control"
                placeholder="Email Address"
                name="email"
                required=""
            />
            <i className="far fa-envelope" />
            </div>
        </div>
        <div className="col-lg-6">
            <div className="form_group">
            <input
                type="text"
                className="form_control"
                placeholder="Phone"
                name="phone"
                required=""
            />
            <i className="far fa-phone" />
            </div>
        </div>
        
        <div className="col-lg-12">
            <div className="form_group">
            <textarea
                className="form_control"
                name="message"
                placeholder="Write your Message"
                defaultValue={""}
            />
            <i className="far fa-pencil" />
            </div>
        </div>
        <div className="col-lg-12">
            <div className="form_checkbox">
            <input type="checkbox" name="checkbox" id="check1" />
            <label htmlFor="check1">
                <span>
                I agree that my data is collected and stored.
                </span>
            </label>
            </div>
        </div>
        <div className="col-lg-12">
            <div className="form_group">
            <button className="main-btn btn-red">
                Send Message
            </button>
            </div>
        </div>
        </div>
    </form>
  )
}

export default Form