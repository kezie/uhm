import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import './styles.css'
import { uhms_providers } from '../../nigeria/providers/Data';

const Form = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedHospitals, setSelectedHospitals] = useState([]);
    const [options, setOptions] = useState([]);
    const [hasPreExistingCondition, setHasPreExistingCondition] = useState(false);
    const [selectedConditions, setSelectedConditions] = useState([]);

    useEffect(() => {
        const uniqueStates = Array.from(
          new Set(uhms_providers.dataroot.Uhms_providers.map(provider => provider.State))
        );
        setOptions(uniqueStates);
      }, []);

      const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setSelectedState(selectedState);
    
        
        const hospitalsInSelectedState = uhms_providers.dataroot.Uhms_providers.filter(
          provider => provider.State === selectedState
        );
    
        setSelectedHospitals(hospitalsInSelectedState);
      };

      const handlePreExistingConditionChange = (e) => {
        setHasPreExistingCondition(e.target.value === 'yes');
        setSelectedConditions([]);
      };

      const handleConditionChange = (condition) => {
        const updatedConditions = selectedConditions.includes(condition)
          ? selectedConditions.filter((c) => c !== condition)
          : [...selectedConditions, condition];
        setSelectedConditions(updatedConditions);
      };

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        gender: "",
        dob: "",
        mobile: "",
        address: "",
        state: "",
        hosp_location: "",
        hospital: "",
        health_condition: "",
        });

        const handleSubmit = async (e) => {
            e.preventDefault();
            const url = 'https:alsidiqtechnologies.com/server/server.php';
            
            try {
              const response = await axios.post(url, formData, {
                headers: {
                  'Content-Type': 'application/json'
                },
              });
          
              console.log(response.data);
              // Handle success
            } catch (error) {
              console.error("Error submitting form:", error);
              // Handle error
            }
          };
          
          const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          };

  return (
    
    <form onSubmit={handleSubmit}>
        <fieldset className='mt-2 p-4' style={{border: '1px solid'}}>
            <legend>Sponsor Details</legend>
            <div className='row'>
                <div className=''>
                    <label for="gender">Gender:</label><br/>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' onChange={handleChange} type="radio" id="gender" value="male" name="gender"/>
                        <label>Male</label> 
                    </div>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' onChange={handleChange} type="radio" id="gender" value="female" name="gender"/>
                        <label>Female</label> 
                    </div>
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="fname">First Name:</label>
                    <input className='form-control' type="text" id="fname" onChange={handleChange} name="fname" />
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="lname">Last Name:</label>
                    <input className='form-control' type="text" id="lname" onChange={handleChange} name="lname"/>
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="email">Email</label>
                    <input className='form-control' type="text" id="email" name="email" onChange={handleChange}/>
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="mobile">Mobile Number</label>
                    <input className='form-control' type="text" id="mobile" name="mobile" onChange={handleChange}/>
                </div>
                <div className='col-lg-12 mt-2'>
                    <label for="address">Contact Address/Mailing Address</label>
                    <input className='form-control' type="text" id="address" name="address" onChange={handleChange}/>
                </div>
                
            </div>
        </fieldset>

        <fieldset className='mt-2 p-4' style={{border: '1px solid'}}>
            <legend>Beneficiary Details</legend>
            <div className='row'>

                <div className=''>
                    <label for="gender">Gender:</label><br/>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' onChange={handleChange} type="radio" id="gender" value="male" name="gender"/>
                        <label>Male</label> 
                    </div>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' onChange={handleChange} type="radio" id="gender" value="female" name="gender"/>
                        <label>Female</label> 
                    </div>
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="fname">First Name:</label>
                    <input className='form-control' type="text" id="fname" onChange={handleChange} name="fname" />
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="lname">Last Name:</label>
                    <input className='form-control' type="text" id="lname" onChange={handleChange} name="lname"/>
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="email">Email</label>
                    <input className='form-control' type="text" id="email" name="email" onChange={handleChange}/>
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="mobile">Mobile Number</label>
                    <input className='form-control' type="text" id="mobile" name="mobile" onChange={handleChange}/>
                </div>
                

                <div className='col-lg-6 mt-2'>
                    <label for="state">State</label>
                    <input className='form-control' type="text" id="state" name="state" onChange={handleChange}/>
                </div>

                <div className='col-lg-6 mt-2'>
                    <label for="town">Town</label>
                    <input className='form-control' type="text" id="town" name="town" onChange={handleChange}/>
                </div>

                <div className='col-lg-6 mt-2'>
                    <label for="town">Age</label>
                    <input className='form-control' type="number" name="town" onChange={handleChange}/>
                </div>

                <div className='col-lg-6 mt-2'>
                    <label for="relationship">Relationship with Beneficiary</label>
                    <select className='form-control form-select'  name="relationship" onChange={handleChange} >
                        <option>Please Select</option>
                        <option value="son">Son</option>
                        <option value="daughter">Daughter</option>
                        <option value="husband">Husband</option>
                        <option value="wife">Wife</option>
                        <option value="brother">Brother</option>
                        <option value="sister">Sister</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div className='col-lg-6 mt-2'>
                    <label htmlFor="stateSelect">Preferred Hospital Location</label>
                    <select id="stateSelect" className='form-control form-select' value={selectedState} onChange={handleStateChange}>
                        <option value="">Select a state</option>
                        {options.map((state, index) => (
                        <option key={index} value={state}>
                            {state}
                        </option>
                        ))}
                    </select>
                </div>
                <div className='col-lg-6 mt-2'>
                    <label htmlFor="hospitalSelect">Select Hospital:</label>
                    <select id="hospitalSelect" className='form-control form-select'>
                        {selectedHospitals.map((hospital, index) => (
                        <option key={index} value={hospital.id}>
                            {hospital.Health_Care_Provider}
                        </option>
                        ))}
                    </select>  
                </div>
                <div className='mt-2'>
                    <label for="gender">Pre-existing Health Condition:</label><br/>
                    <div className='form-check form-check-inline'>
                    <input type="radio" name="health_condition" value="yes" checked={hasPreExistingCondition} onChange={handlePreExistingConditionChange}/> <label>Yes</label> 
                    </div>
                    <div className='form-check form-check-inline'>
                    <input type="radio" name="health_condition"  value="no" checked={!hasPreExistingCondition} onChange={handlePreExistingConditionChange} /> <label> No</label> 
                    </div>
                    
                    {hasPreExistingCondition && (
                        <div>
                        <label>Select Pre-existing Health Conditions:</label>
                        <div>
                            <label><input type="checkbox" value="Heart and Artery" checked={selectedConditions.includes('Heart and Artery')} onChange={() => handleConditionChange('Heart and Artery')} /> Heart and Artery Diseases  </label>
                            <label><input type="checkbox" value="Endocrinology Diseases including Diabetes" checked={selectedConditions.includes('Endocrinology Diseases including Diabetes')} onChange={() => handleConditionChange('Endocrinology Diseases including Diabetes')} />  Endocrinology Diseases including Diabetes </label>
                            <label><input type="checkbox" value="Lung Disease" checked={selectedConditions.includes('Lung Disease')} onChange={() => handleConditionChange('Lung Disease')} /> Lung Disease</label>
                            <label><input type="checkbox" value="Kidney and Urinarytract Diseases" checked={selectedConditions.includes('Kidney and Urinarytract Diseases')} onChange={() => handleConditionChange('Kidney and Urinarytract Diseases')} /> Kidney and Urinarytract Diseases </label>
                            <label><input type="checkbox" value="Muscles Bones and joints Diseases" checked={selectedConditions.includes('Muscles Bones and joints Diseases')} onChange={() => handleConditionChange('Muscles Bones and joints Diseases')} /> Muscles Bones and joints Diseases </label>
                            <label><input type="checkbox" value="Haematology Diseases" checked={selectedConditions.includes('Haematology Diseases')} onChange={() => handleConditionChange('Haematology Diseases')} /> Haematology Diseases </label>
                            <label><input type="checkbox" value="Ear Nose Throat and Eye Diseases" checked={selectedConditions.includes('Ear Nose Throat and Eye Diseases')} onChange={() => handleConditionChange('Ear Nose Throat and Eye Diseases')} /> Ear Nose Throat and Eye Diseases </label>
                            <label><input type="checkbox" value="Malignant Tumours or Cancer" checked={selectedConditions.includes('Malignant Tumours or Cancer')} onChange={() => handleConditionChange('Malignant Tumours or Cancer')} /> Malignant Tumours or Cancer</label>
                            <label><input type="checkbox" value="Sexually Transmitted Diseases" checked={selectedConditions.includes('Sexually Transmitted Diseases')} onChange={() => handleConditionChange('Sexually Transmitted Diseases')} /> Sexually Transmitted Diseases</label>
                        </div>
                        </div>
                    )}
                </div>
                
            </div>
        </fieldset>

        <button className='main-btn btn-outline mt-4 mb-4' style={{padding: '10px 20px'}}>Submit</button>
    </form>
  )
}

export default Form