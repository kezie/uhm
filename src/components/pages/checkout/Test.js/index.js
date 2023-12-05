import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        gender: "",
        // Add more fields as needed
        });

        const handleSubmit = async (e) => {
            e.preventDefault();
            const url = process.env.REACT_APP_PURCHASE_API
        
            try {
              const response = await axios.post(url, formData);
              console.log(response.data);
              // Handle success, e.g., show a success message or redirect
            } catch (error) {
              console.error("Error submitting form:", error);
              // Handle error, e.g., show an error message
            }
          };
        
          const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          };

  return (
    <div className=' container row mt-10 mb-40'>
        <div className='col-lg-8'>
            <form onSubmit={handleSubmit}>
                <fieldset className='mt-2 p-4' style={{border: '1px solid'}}>
                    <legend>Personal Information</legend>
                    <div className='row'>
                        <div className=''>
                            <label for="gender">Gender:</label><br/>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' onChange={handleChange} type="radio" id="gender" name="gender"/>
                                <label>Male</label> 
                            </div>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' onChange={handleChange} type="radio" id="gender" name="gender"/>
                                <label>Female</label> 
                            </div>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <label for="fname">First Name:</label>
                            <input className='form-control' type="text" id="fname" onChange={handleChange} name="fname"/>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <label for="lname">Last Name:</label>
                            <input className='form-control' type="text" id="lname" onChange={handleChange} name="lname"/>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <label for="genotype">Genotype:</label>
                            <select className='form-control form-select'>
                                <option>Select...</option>
                                <option>AA</option>
                                <option>AS</option>
                                <option>AC</option>
                                <option>SS</option>
                                <option>CC</option>
                            </select>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <label for="dob">DOB:</label>
                            <input className='form-control' type="date" id="dob" name="dob"/>
                        </div>
                    </div>
                </fieldset>

                <fieldset className='mt-2 p-4' style={{border: '1px solid'}}>
                    <legend>Contact Information</legend>
                    <div className='row'>
                        <div className='col-lg-6 mt-2'>
                            <label for="email">Email</label>
                            <input className='form-control' type="text" id="email" name="email"/>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <label for="mobile">Mobile Number</label>
                            <input className='form-control' type="text" id="mobile" name="mobile"/>
                        </div>

                        <div className='col-lg-12 mt-2'>
                            <label for="address">Contact Address/Mailing Address</label>
                            <input className='form-control' type="text" id="address" name="address"/>
                        </div>

                        <div className='col-lg-6 mt-2'>
                            <label for="state">State</label>
                            <input className='form-control' type="text" id="state" name="state"/>
                        </div>

                        <div className='col-lg-6 mt-2'>
                            <label for="town">Town</label>
                            <input className='form-control' type="text" id="town" name="town"/>
                        </div>
                        
                    </div>
                </fieldset>

                <fieldset className='mt-2 p-4' style={{border: '1px solid'}}>
                    <legend>Other Information</legend>
                    <div className='row'>
                        <div className='col-lg-6 mt-2'>
                            <label for="">Preferred Hospital Location</label>
                            <select className='form-control form-select'>
                                <option>Select...</option>
                                <option>AA</option>
                                <option>AS</option>
                                <option>AC</option>
                                <option>SS</option>
                                <option>CC</option>
                            </select>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <label for="">Preferred Hospital</label>
                            <select className='form-control form-select'>
                                <option>Select...</option>
                                <option>AA</option>
                                <option>AS</option>
                                <option>AC</option>
                                <option>SS</option>
                                <option>CC</option>
                            </select>
                        </div>
                        <div className='mt-2'>
                            <label for="gender">Pre-existing Health Condition:</label><br/>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type="radio" id="health_condition" name="health_condition" value="yes"/>
                                <label>Yes</label> 
                            </div>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type="radio" id="health_condition" name="health_condition" value="no"/>
                                <label>No</label> 
                            </div>
                        </div>
                    </div>
                </fieldset>
                <button className='main-btn btn-outline'>Submit</button>
            </form>
        </div>
        <div className='col-lg-4'></div>
    </div>
  )
}

export default Form