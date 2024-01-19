import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import './styles.css'
import { uhms_providers } from '../../nigeria/providers/Data';
import { useNavigate } from 'react-router-dom';
import Terms from './Terms';

const Form = ({amount}) => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedHospitals, setSelectedHospitals] = useState([]);
    const [options, setOptions] = useState([]);
    const [hasPreExistingCondition, setHasPreExistingCondition] = useState(false);
    const [selectedConditions, setSelectedConditions] = useState([]);
    const navigate = useNavigate();
    const [validationErrors, setValidationErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const [loading, setLoading] = useState(false);
    const [formFail, setFormFail] = useState('');


    const validateForm = () => {
        const errors = {};
    
        // Validate each form field here
        if (!formData.sponsor_fname.trim()) {
          errors.sponsor_fname = 'First Name is required';
        }
    
        if (!formData.sponsor_lname.trim()) {
          errors.sponsor_lname = 'Last Name is required';
        }

        if (!formData.sponsor_email.trim()) {
            errors.sponsor_email = 'Your email is required';
        }

        if (!formData.sponsor_gender.trim()) {
            errors.sponsor_gender = 'Your gender is required';
        }

        if (!formData.sponsor_mobile.trim()) {
            errors.sponsor_mobile = 'Your mobile number is required';
        }

        if (!formData.sponsor_address.trim()) {
            errors.sponsor_address = 'Your address is required';
        }

        if (!formData.beneficiary_fname.trim()) {
            errors.beneficiary_fname = "Benefeciary's First Name is required";
          }
      
          if (!formData.beneficiary_lname.trim()) {
            errors.beneficiary_lname = "Benefeciary's Last Name is required";
          }
  
          if (!formData.beneficiary_email.trim()) {
              errors.beneficiary_email = " Benefeciary's email is required";
          }
  
          if (!formData.beneficiary_gender.trim()) {
              errors.beneficiary_gender = "Benefeciary's gender is required";
          }
  
          if (!formData.beneficiary_mobile.trim()) {
              errors.beneficiary_mobile = "Benefeciary's mobile number is required";
          }

        if (!formData.beneficiary_age.trim()) {
            errors.beneficiary_age = "Benefeciary's age is required";
        }

        if (!formData.beneficiary_state.trim()) {
            errors.beneficiary_state = "Benefeciary's state is required";
        }

        if (!formData.beneficiary_town.trim()) {
            errors.beneficiary_town = "Benefeciary's town is required";
        }

        if (!formData.beneficiary_relationship.trim()) {
            errors.beneficiary_relationship = 'What is your relationship with the beneficiary';
        }

        if (!formData.beneficiary_hosp_location.trim()) {
            errors.beneficiary_hosp_location = 'Choose a hospital location is required';
        }

        if (!formData.beneficiary_hospital.trim()) {
            errors.beneficiary_hospital = 'Choose a hospital';
        }
    
        // Add more validations for other fields as needed
    
        setValidationErrors(errors);
    
        // Return true if there are no errors, false otherwise
        return Object.keys(errors).length === 0;
      };


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
        (provider) => provider.State === selectedState
    );
    
    setFormData({
        ...formData,
        beneficiary_hosp_location: selectedState, // Update the formData state
    });
    
    setSelectedHospitals(hospitalsInSelectedState);
    
    // Clear the validation error when the state is selected
    setValidationErrors({ ...validationErrors, beneficiary_hosp_location: '' });
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
        sponsor_fname: "",
        sponsor_lname: "",
        sponsor_email: "",
        sponsor_gender: "",
        sponsor_mobile: "",
        sponsor_address: "",
        beneficiary_fname: "",
        beneficiary_lname: "",
        beneficiary_email: "",
        beneficiary_gender: "",
        beneficiary_mobile: "",
        beneficiary_address: "",
        beneficiary_relationship:"",
        beneficiary_age: "",
        beneficiary_state: "",
        beneficiary_town:"",
        beneficiary_hosp_location: "",
        beneficiary_hospital: "",
        beneficiary_health_condition: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validateForm()) {
            // If there are validation errors, do not submit the form
            setSubmitError('Please fill out all fields correctly')
            setLoading(false)
            return;
            }
            setSubmitError('')
        const url = process.env.REACT_APP_SPONSOR_DETAILS_API;
        
        const dataToSend = {
            ...formData,
            beneficiary_hosp_location: selectedState,
            beneficiary_health_condition: hasPreExistingCondition ? selectedConditions.join(', ') : '',
        };

        const submit_hubspot_form = async (formData) => {
            const portalId = process.env.REACT_APP_HUBSPOT_PORTAL_ID; // Replace with your HubSpot portal ID
            const formGuid = "ccfad5e9-7e65-4d16-a823-3f17a9782d68"; // Replace with your HubSpot form GUID
          
            const config = {
              headers: {
                'Content-Type': 'application/json',
              },
            };
          
            const {
              sponsor_fname,
              sponsor_lname,
              sponsor_email,
              sponsor_gender,
              sponsor_mobile,
              sponsor_address,
              beneficiary_fname,
              beneficiary_lname,
              beneficiary_email,
              beneficiary_gender,
              beneficiary_mobile,
              beneficiary_address,
              beneficiary_relationship,
              beneficiary_age,
              beneficiary_state,
              beneficiary_town,
              beneficiary_hosp_location,
              beneficiary_hospital,
              beneficiary_health_condition,
            } = formData;
          
            const response = await axios.post(
              `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
              {
                portalId,
                formGuid,
                fields: [
                  { name: 'sponsor_firstname', value: sponsor_fname },
                  { name: 'sponsor_lastname', value: sponsor_lname },
                  { name: 'sponsor_email', value: sponsor_email },
                  { name: 'sponsor_gender', value: sponsor_gender },
                  { name: 'sponsor_mobile', value: sponsor_mobile },
                  { name: 'sponsor_address', value: sponsor_address },
                  { name: 'beneficiary_firstname', value: beneficiary_fname },
                  { name: 'beneficiary_lastname', value: beneficiary_lname },
                  { name: 'beneficiary_email', value: beneficiary_email },
                  { name: 'beneficiary_gender', value: beneficiary_gender },
                  { name: 'beneficiary_mobile', value: beneficiary_mobile },
                  { name: 'beneficiary_address', value: beneficiary_address },
                  { name: 'beneficiary_relationship', value: beneficiary_relationship },
                  { name: 'beneficiary_age', value: beneficiary_age },
                  { name: 'beneficiary_state', value: beneficiary_state },
                  { name: 'beneficiary_town', value: beneficiary_town },
                  { name: 'beneficiary_hospospital_location', value: beneficiary_hosp_location },
                  { name: 'beneficiary_hospital', value: beneficiary_hospital },
                  { name: 'beneficiary_health_condition', value: beneficiary_health_condition },
                ],
              },
              config
            );
          
            return response;
          };
          
        
        try {
            const response = await axios.post(url, dataToSend);
        
            console.log(response.data);
            // Handle success
            navigate('/checkout/payment', { state: 
            {
                firstName: formData.sponsor_fname,
                lastName: formData.sponsor_lname,
                email: formData.sponsor_email,
                amount:amount
            }
            });
            await submit_hubspot_form(formData);
        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle error
            setFormFail('Error Submitting Form')
            setLoading(false);
        }
    };   
          
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setValidationErrors({ ...validationErrors, [e.target.name]: '' });
    };

  return (
    
    <form onSubmit={handleSubmit}>
        <fieldset className='mt-2 p-4' style={{border: '1px solid'}}>
            <legend>Sponsor Details</legend>
            <div className='row'>
                <div className=''>
                    <label for="sponsor_gender">Gender:</label><br/>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' onChange={handleChange} type="radio" value="male" name="sponsor_gender"/>
                        <label>Male</label> 
                    </div>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' onChange={handleChange} type="radio" value="female" name="sponsor_gender"/>
                        <label>Female</label> 
                    </div>
                    {validationErrors.sponsor_gender && ( <p style={{ color: 'red' }}>{validationErrors.sponsor_gender}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="sponsor_fname">First Name:</label>
                    <input className='form-control' type="text" id="sponsor_fname" onChange={handleChange} name="sponsor_fname" />
                    {validationErrors.sponsor_fname && ( <p style={{ color: 'red' }}>{validationErrors.sponsor_fname}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="sponsor_lname">Last Name:</label>
                    <input className='form-control' type="text" id="sponsor_lname" onChange={handleChange} name="sponsor_lname"/>
                    {validationErrors.sponsor_lname && ( <p style={{ color: 'red' }}>{validationErrors.sponsor_lname}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="sponsor_email">Email:</label>
                    <input className='form-control' type="text" id="sponsor_email" onChange={handleChange} name="sponsor_email"/>
                    {validationErrors.sponsor_email && ( <p style={{ color: 'red' }}>{validationErrors.sponsor_email}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="sponsor_mobile">Mobile:</label>
                    <input className='form-control' type="text" id="sponsor_mobile" onChange={handleChange} name="sponsor_mobile"/>
                    {validationErrors.sponsor_mobile && ( <p style={{ color: 'red' }}>{validationErrors.sponsor_mobile}</p> )}
                </div>

                <div className='col-lg-12 mt-2'>
                    <label for="sponsor_address">Contact Address:</label>
                    <input className='form-control' type="text" id="sponsor_address" onChange={handleChange} name="sponsor_address"/>
                    {validationErrors.sponsor_address && ( <p style={{ color: 'red' }}>{validationErrors.sponsor_address}</p> )}
                </div>  

                {/* <div className="mt-2">
                    <label htmlFor="file"><i className='fa fa-file form-control' style={{border:'1px solid', fontSize:18}}> Upload a Valid ID or Passport Photograph</i></label>
                    <input type="file" id="file" onChange={handleFileChange} hidden/>
                </div>  */}
            </div>
        </fieldset>

        <fieldset className='mt-2 p-4' style={{border: '1px solid'}}>
            <legend>Beneficiary Details</legend>
            <div className='row'>
                <div className=''>
                    <label for="beneficiary_gender">Gender:</label><br/>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' onChange={handleChange} type="radio" id="beneficiary_gender" value="male" name="beneficiary_gender"/>
                        <label>Male</label> 
                    </div>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' onChange={handleChange} type="radio" id="beneficiary_gender" value="female" name="beneficiary_gender"/>
                        <label>Female</label> 
                    </div>
                    {validationErrors.beneficiary_gender && ( <p style={{ color: 'red' }}>{validationErrors.beneficiary_gender}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="beneficiary_fname">First Name:</label>
                    <input className='form-control' type="text" id="beneficiary_fname" onChange={handleChange} name="beneficiary_fname"/>
                    {validationErrors.beneficiary_fname && ( <p style={{ color: 'red' }}>{validationErrors.beneficiary_fname}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="beneficiary_lname">Last Name:</label>
                    <input className='form-control' type="text" id="beneficiary_lname" onChange={handleChange} name="beneficiary_lname"/>
                    {validationErrors.beneficiary_lname && ( <p style={{ color: 'red' }}>{validationErrors.beneficiary_lname}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="beneficiary_email">Email:</label>
                    <input className='form-control' type="text" id="beneficiary_email" onChange={handleChange} name="beneficiary_email"/>
                    {validationErrors.beneficiary_email && ( <p style={{ color: 'red' }}>{validationErrors.beneficiary_email}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="beneficiary_mobile">Mobile Number</label>
                    <input className='form-control' type="text" id="beneficiary_mobile" name="beneficiary_mobile" onChange={handleChange}/>
                    {validationErrors.beneficiary_mobile && ( <p style={{ color: 'red' }}>{validationErrors.beneficiary_mobile}</p> )}
                </div>

                <div className='col-lg-6 mt-2'>
                    <label for="beneficiary_state">State</label>
                    <input className='form-control' type="text" id="beneficiary_state" name="beneficiary_state" onChange={handleChange}/>
                    {validationErrors.beneficiary_state && ( <p style={{ color: 'red' }}>{validationErrors.beneficiary_state}</p> )}
                </div>

                <div className='col-lg-6 mt-2'>
                    <label for="beneficiary_town">Town</label>
                    <input className='form-control' type="text" id="beneficiary_town" name="beneficiary_town" onChange={handleChange}/>
                    {validationErrors.beneficiary_town && ( <p style={{ color: 'red' }}>{validationErrors.beneficiary_town}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="beneficiary_age">Age:</label>
                    <input className='form-control' type="number" id="beneficiary_age" onChange={handleChange} name="beneficiary_age"/>
                    {validationErrors.beneficiary_age && ( <p style={{ color: 'red' }}>{validationErrors.beneficiary_age}</p> )}
                </div>

                <div className='col-lg-6 mt-2'>
                    <label for="beneficiary_relationship">Relationship with Beneficiary</label>
                    <select className='form-control form-select'  name="beneficiary_relationship" onChange={handleChange} >
                        <option>Please Select</option>
                        <option value="son">Son</option>
                        <option value="daughter">Daughter</option>
                        <option value="husband">Husband</option>
                        <option value="wife">Wife</option>
                        <option value="brother">Brother</option>
                        <option value="sister">Sister</option>
                        <option value="others">Others</option>
                    </select>
                    {validationErrors.beneficiary_relationship && ( <p style={{ color: 'red' }}>{validationErrors.beneficiary_relationship}</p> )}
                </div>

                <div className='col-lg-6 mt-2'>
                    <label htmlFor="stateSelect">Preferred Hospital Location</label>
                    <select id="stateSelect" className='form-control form-select' name='beneficiary_hosp_location' value={selectedState} onChange={handleStateChange}>
                        <option value="">Select a state</option>
                        {options.map((state, index) => (
                        <option key={index} value={state}>
                            {state}
                        </option>
                        ))}
                    </select>
                    {validationErrors.beneficiary_hosp_location && ( <p style={{ color: 'red' }}>{validationErrors.beneficiary_hosp_location}</p> )}
                </div>

                <div className='col-lg-6 mt-2'>
                    <label htmlFor="hospitalSelect">Select Hospital:</label>
                    <select id="hospitalSelect" name='beneficiary_hospital' onChange={handleChange} className='form-control form-select'>
                        <option value="">Select a hospital</option>
                        {selectedHospitals.map((hospital, index) => (
                        <option key={index} value={hospital.Health_Care_Provider}>
                            {hospital.Health_Care_Provider}
                        </option>
                        ))}
                    </select>
                    {validationErrors.beneficiary_hospital && ( <p style={{ color: 'red' }}>{validationErrors.beneficiary_hospital}</p> )}
                </div>
                <div className='mt-2'>
                    <label for="beneficiary_health_condition">Pre-existing Health Condition:</label><br/>
                    <div className='form-check form-check-inline'>
                    <input type="radio" name="beneficiary_health_condition" value="yes" checked={hasPreExistingCondition} onChange={handlePreExistingConditionChange}/> <label>Yes</label> 
                    </div>
                    <div className='form-check form-check-inline'>
                    <input type="radio" name="beneficiary_health_condition"  value="no" checked={!hasPreExistingCondition} onChange={handlePreExistingConditionChange} /> <label> No</label> 
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
        <Terms/>
        <p className='text-danger'>{ submitError }</p>
        <p className='text-danger'>{formFail}</p>
        <button className='main-btn btn-outline mt-4 mb-4' style={{padding: '10px 20px'}}>{ loading ? 'Submitting...' : 'Submit'}</button>
    </form>
  )
}

export default Form