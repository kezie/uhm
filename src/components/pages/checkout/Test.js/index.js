import React from 'react'

const Form = () => {
  return (
    <div className=' container row mt-10 mb-40'>
        <div className='col-lg-8'>
            <form>
                <fieldset className='mt-2 p-4' style={{border: '1px solid'}}>
                    <legend>Personal Information</legend>
                    <div className='row'>
                        <div className=''>
                            <label for="gender">Gender:</label><br/>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type="radio" id="gender" name="gender" value="Male"/>
                                <label>Male</label> 
                            </div>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type="radio" id="gender" name="gender" value="Male"/>
                                <label>Female</label> 
                            </div>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <label for="fname">First Name:</label>
                            <input className='form-control' type="text" id="fname" name="fname" value="John"/>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <label for="fname">Last Name:</label>
                            <input className='form-control' type="text" id="fname" name="fname" value="John"/>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <label for="fname">Genotype:</label>
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
                            <label for="fname">DOB:</label>
                            <input className='form-control' type="date" id="fname" name="fname" value="John"/>
                        </div>
                    </div>
                </fieldset>

                <fieldset className='mt-2 p-4' style={{border: '1px solid'}}>
                    <legend>Contact Information</legend>
                    <div className='row'>
                        <div className='col-lg-6 mt-2'>
                            <label for="fname">Email</label>
                            <input className='form-control' type="text" id="fname" name="fname" value="John"/>
                        </div>
                        <div className='col-lg-6 mt-2'>
                            <label for="fname">Mobile Number</label>
                            <input className='form-control' type="text" id="fname" name="fname" value="John"/>
                        </div>

                        <div className='col-lg-12 mt-2'>
                            <label for="fname">Contact Address/Mailing Address</label>
                            <input className='form-control' type="text" id="fname" name="fname" value="John"/>
                        </div>

                        <div className='col-lg-6 mt-2'>
                            <label for="fname">State</label>
                            <input className='form-control' type="text" id="fname" name="fname" value="John"/>
                        </div>

                        <div className='col-lg-6 mt-2'>
                            <label for="fname">Town</label>
                            <input className='form-control' type="text" id="fname" name="fname" value="John"/>
                        </div>
                        
                    </div>
                </fieldset>

                <fieldset className='mt-2 p-4' style={{border: '1px solid'}}>
                    <legend>Other Information</legend>
                    <div className='row'>
                        <div className='col-lg-6 mt-2'>
                            <label for="fname">Preferred Hospital Location</label>
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
                            <label for="fname">Preferred Hospital</label>
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
            </form>
        </div>
        <div className='col-lg-4'></div>
    </div>
  )
}

export default Form