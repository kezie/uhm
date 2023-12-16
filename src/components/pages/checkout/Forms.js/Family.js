import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import './styles.css'
import { uhms_providers } from '../../nigeria/providers/Data';
import { useNavigate } from 'react-router-dom';

const Form = ({amount}) => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedHospitals, setSelectedHospitals] = useState([]);
    const [options, setOptions] = useState([]);
    const [selectedConditions, setSelectedConditions] = useState([]);
    const navigate = useNavigate();
    const [validationErrors, setValidationErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const [loading, setLoading] = useState(false);
    const [formFail, setFormFail] = useState('');
    const [principalHospLocation, setPrincipalHospLocation] = useState('');
    const [beneficiaryHospLocation, setBeneficiaryHospLocation] = useState('');
    const [principalHasPreExistingCondition, setPrincipalHasPreExistingCondition] = useState(false);
    const [beneficiaryHasPreExistingCondition, setBeneficiaryHasPreExistingCondition] = useState(false);


    const validateForm = () => {
        const errors = {};
    
        // Validate each form field here
        if (!formData.principal_fname.trim()) {
          errors.principal_fname = 'First Name is required';
        }
    
        if (!formData.principal_lname.trim()) {
          errors.principal_lname = 'Last Name is required';
        }

        if (!formData.principal_email.trim()) {
            errors.principal_email = 'Your email is required';
        }

        if (!formData.principal_gender.trim()) {
            errors.principal_gender = 'Your gender is required';
        }

        if (!formData.principal_mobile.trim()) {
            errors.principal_mobile = 'Your mobile number is required';
        }

        if (!formData.principal_address.trim()) {
            errors.principal_address = 'Your address is required';
        }

        if (!formData.principal_state.trim()) {
            errors.principal_state = 'Your state is required';
        }

        if (!formData.principal_dob.trim()) {
            errors.principal_dob = 'Your date of birth is required';
        }

        if (!formData.principal_town.trim()) {
            errors.principal_town = 'Your town is required';
        }

        if (!formData.principal_hosp_location.trim()) {
            errors.principal_hosp_location = 'Preferred Hospital Location is required';
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

    const handleStateChange = (e, isPrincipal) => {
    const selectedState = e.target.value;
    const hasPreExistingCondition = e.target.value === 'yes';

    setSelectedState(selectedState);
    if (isPrincipal) {
        setPrincipalHospLocation(selectedState);
        setPrincipalHasPreExistingCondition(hasPreExistingCondition);
        setSelectedConditions([]);
    } else {
        setBeneficiaryHospLocation(selectedState);
        setBeneficiaryHasPreExistingCondition(hasPreExistingCondition);
        setSelectedConditions([]);
        }
    
    const hospitalsInSelectedState = uhms_providers.dataroot.Uhms_providers.filter(
        (provider) => provider.State === selectedState
    );
    
    if (isPrincipal) {
        setSelectedHospitals(hospitalsInSelectedState);
        setFormData({ ...formData, principal_hosp_location: selectedState });
        } else {
        // Update the beneficiary-related states accordingly
        setSelectedHospitals(hospitalsInSelectedState);
        setFormData({ ...formData, beneficiary_hosp_location: selectedState });
        }
    
    // Clear the validation error when the state is selected
    setValidationErrors({ ...validationErrors, beneficiary_hosp_location: '' });
    }; 

    const handlePreExistingConditionChange = (e, isPrincipal) => {
        const hasPreExistingCondition = e.target.value === 'yes';
      
        // Set the selected condition based on whether it's for principal or beneficiary
        if (isPrincipal) {
          setPrincipalHasPreExistingCondition(hasPreExistingCondition);
          setSelectedConditions([]); // Clear selected conditions for the principal
        } else {
          setBeneficiaryHasPreExistingCondition(hasPreExistingCondition);
          setSelectedConditions([]); // Clear selected conditions for the beneficiary
        }
      };
      

    const handleConditionChange = (condition) => {
        const updatedConditions = selectedConditions.includes(condition)
          ? selectedConditions.filter((c) => c !== condition)
          : [...selectedConditions, condition];
        setSelectedConditions(updatedConditions);
    };

    const [formData, setFormData] = useState({
        principal_fname: "",
        principal_lname: "",
        principal_email: "",
        principal_gender: "",
        principal_mobile: "",
        principal_state: "",
        principal_town:"",
        principal_dob: "",
        principal_address: "",
        principal_hosp_location: "",
        principal_hospital: "",
        principal_health_condition: "",
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
        const url = process.env.REACT_APP_PRINCIPAL_DETAILS_API;
        
        const dataToSend = {
            ...formData,
            principal_health_condition: principalHasPreExistingCondition ? selectedConditions.join(', ') : '',
            beneficiary_health_condition: beneficiaryHasPreExistingCondition ? selectedConditions.join(', ') : '',
        };

        console.log('Data to send:', dataToSend);
        
        try {
            const response = await axios.post(url, dataToSend);
        
            console.log(response.data);
            // Handle success
            navigate('/checkout/payment', { state: 
            {
                firstName: formData.principal_fname,
                lastName: formData.principal_lname,
                email: formData.principal_email,
                amount:amount
            }
            });
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
            <legend>Principal Details</legend>
            <div className='row'>
                <div className=''>
                    <label for="principal_gender">Gender:</label><br/>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' onChange={handleChange} type="radio" value="male" name="principal_gender"/>
                        <label>Male</label> 
                    </div>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' onChange={handleChange} type="radio" value="female" name="principal_gender"/>
                        <label>Female</label> 
                    </div>
                    {validationErrors.principal_gender && ( <p style={{ color: 'red' }}>{validationErrors.principal_gender}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="principal_fname">First Name:</label>
                    <input className='form-control' type="text" id="principal_fname" onChange={handleChange} name="principal_fname" />
                    {validationErrors.principal_fname && ( <p style={{ color: 'red' }}>{validationErrors.principal_fname}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="principal_lname">Last Name:</label>
                    <input className='form-control' type="text" id="principal_lname" onChange={handleChange} name="principal_lname"/>
                    {validationErrors.principal_lname && ( <p style={{ color: 'red' }}>{validationErrors.principal_lname}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="principal_email">Email:</label>
                    <input className='form-control' type="text" id="principal_email" onChange={handleChange} name="principal_email"/>
                    {validationErrors.principal_email && ( <p style={{ color: 'red' }}>{validationErrors.principal_email}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="principal_mobile">Mobile:</label>
                    <input className='form-control' type="text" id="principal_mobile" onChange={handleChange} name="principal_mobile"/>
                    {validationErrors.principal_mobile && ( <p style={{ color: 'red' }}>{validationErrors.principal_mobile}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="principal_dob">Date of birth:</label>
                    <input className='form-control' type="date" id="principal_dob" onChange={handleChange} name="principal_dob"/>
                    {validationErrors.principal_dob && ( <p style={{ color: 'red' }}>{validationErrors.principal_dob}</p> )}
                </div>

                <div className='col-lg-6 mt-2'>
                    <label for="principal_address">Contact Address:</label>
                    <input className='form-control' type="text" id="principal_address" onChange={handleChange} name="principal_address"/>
                    {validationErrors.principal_address && ( <p style={{ color: 'red' }}>{validationErrors.principal_address}</p> )}
                </div> 

                <div className='col-lg-6 mt-2'>
                    <label for="principal_state">State</label>
                    <input className='form-control' type="text" id="principal_state" name="principal_state" onChange={handleChange}/>
                    {validationErrors.principal_state && ( <p style={{ color: 'red' }}>{validationErrors.principal_state}</p> )}
                </div>

                <div className='col-lg-6 mt-2'>
                    <label for="principal_town">Town</label>
                    <input className='form-control' type="text" id="principal_town" name="principal_town" onChange={handleChange}/>
                    {validationErrors.principal_town && ( <p style={{ color: 'red' }}>{validationErrors.principal_town}</p> )}
                </div>

                <div className='col-lg-6 mt-2'>
                    <label htmlFor="stateSelectPrincipal">Preferred Hospital Location (Principal)</label>
                    <select
                    id="stateSelectPrincipal"
                    className='form-control form-select'
                    name='principal_hosp_location'
                    value={principalHospLocation}
                    onChange={(e) => handleStateChange(e, true)}
                    >
                    <option value="">Select a state</option>
                    {options.map((state, index) => (
                        <option key={index} value={state}>
                        {state}
                        </option>
                    ))}
                    </select>
                    {validationErrors.principal_hosp_location && (
                    <p style={{ color: 'red' }}>{validationErrors.principal_hosp_location}</p>
                    )}
                </div>

                <div className='col-lg-6 mt-2'>
                    <label htmlFor="hospitalSelect">Select Hospital:</label>
                    <select id="hospitalSelect" name='principal_hospital' onChange={handleChange} className='form-control form-select'>
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
                    <label htmlFor="principal_health_condition">Pre-existing Health Condition (Principal):</label><br />
                    <div className='form-check form-check-inline'>
                    <input
                        type="radio"
                        name="principal_health_condition"
                        value="yes"
                        checked={principalHasPreExistingCondition}
                        onChange={(e) => handlePreExistingConditionChange(e, true)}
                    />{' '}
                    <label>Yes</label>
                    </div>
                    <div className='form-check form-check-inline'>
                    <input
                        type="radio"
                        name="principal_health_condition"
                        value="no"
                        checked={!principalHasPreExistingCondition}
                        onChange={(e) => handlePreExistingConditionChange(e, true)}
                    />{' '}
                    <label>No</label>
                    </div>
                    
                    {principalHasPreExistingCondition && (
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
                    <label htmlFor="stateSelectBeneficiary">Preferred Hospital Location (Beneficiary)</label>
                    <select
                    id="stateSelectBeneficiary"
                    className='form-control form-select'
                    name='beneficiary_hosp_location'
                    value={beneficiaryHospLocation}
                    onChange={(e) => handleStateChange(e, false)}
                    >
                    <option value="">Select a state</option>
                    {options.map((state, index) => (
                        <option key={index} value={state}>
                        {state}
                        </option>
                    ))}
                    </select>
                    {validationErrors.beneficiary_hosp_location && (
                    <p style={{ color: 'red' }}>{validationErrors.beneficiary_hosp_location}</p>
                    )}
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
                    <label htmlFor="beneficiary_health_condition">Pre-existing Health Condition (Beneficiary):</label><br />
                    <div className='form-check form-check-inline'>
                    <input
                        type="radio"
                        name="beneficiary_health_condition"
                        value="yes"
                        checked={beneficiaryHasPreExistingCondition}
                        onChange={(e) => handlePreExistingConditionChange(e, false)}
                    />{' '}
                    <label>Yes</label>
                    </div>
                    <div className='form-check form-check-inline'>
                    <input
                        type="radio"
                        name="beneficiary_health_condition"
                        value="no"
                        checked={!beneficiaryHasPreExistingCondition}
                        onChange={(e) => handlePreExistingConditionChange(e, false)}
                    />{' '}
                    <label>No</label>
                    </div>

                    
                    {beneficiaryHasPreExistingCondition && (
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
            <h6 className='text-center text-success pt-3'>Contact our marketing team on +234-811-2893-000 to add more beneficiaries</h6>
        </fieldset>

        <p className='text-danger'>{ submitError }</p>
        <p className='text-danger'>{formFail}</p>
        <button className='main-btn btn-outline mt-4 mb-4' style={{padding: '10px 20px'}}>{ loading ? 'Submitting...' : 'Submit'}</button>
    </form>
  )
}

export default Form