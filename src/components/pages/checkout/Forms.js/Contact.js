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
    const [selectedFile, setSelectedFile] = useState(null);


    const validateForm = () => {
        const errors = {};
    
        // Validate each form field here
        if (!formData.fname.trim()) {
          errors.fname = 'First Name is required';
        }
    
        if (!formData.lname.trim()) {
          errors.lname = 'Last Name is required';
        }

        if (!formData.gender.trim()) {
            errors.gender = 'Your gender is required';
        }

        if (!formData.genotype.trim()) {
            errors.genotype = 'Your genotype is required';
        }

        if (!formData.dob.trim()) {
            errors.dob = 'Your date of birth is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Your email is required';
        }

        if (!formData.mobile.trim()) {
            errors.mobile = 'Your mobile is required';
        }

        if (!formData.address.trim()) {
            errors.address = 'Your address is required';
        }

        if (!formData.state.trim()) {
            errors.state = 'Your state is required';
        }

        if (!formData.town.trim()) {
            errors.town = 'Your town is required';
        }

        if (!formData.hosp_location.trim()) {
            errors.hosp_location = 'Choose a hospital location';
        }

        if (!formData.hospital.trim()) {
            errors.hospital = 'Choose a hospital';
        }

        if (!formData.confirm.trim()) {
            errors.confirm = 'Please read and confirm the checkbox';
        }
    
        // Add more validations for other fields as needed
    
        setValidationErrors(errors);
    
        // Return true if there are no errors, false otherwise
        return Object.keys(errors).length === 0;
      };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
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
        hosp_location: selectedState, // Update the formData state
    });
    
    setSelectedHospitals(hospitalsInSelectedState);
    
    // Clear the validation error when the state is selected
    setValidationErrors({ ...validationErrors, hosp_location: '' });
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
        genotype:"",
        dob: "",
        mobile: "",
        address: "",
        state: "",
        town:"",
        hosp_location: "",
        hospital: "",
        health_condition: "",
        file: null,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        if (!validateForm()) {
            // If there are validation errors, do not submit the form
            setLoading(false)
            setSubmitError('Please fill out all fields correctly')
            return;
            }

        const url = process.env.REACT_APP_CONTACT_PERSON_API;
        setSubmitError('')
        
        const dataToSend = {
            ...formData,
            hosp_location: selectedState,
            health_condition: hasPreExistingCondition ? selectedConditions.join(', ') : '',
            file: selectedFile,
        };
        
        try {
            const response = await axios.post(url, dataToSend, {headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        
            console.log(response.data);
            // Handle success
            navigate('/checkout/payment', { state: 
            {
                firstName: formData.fname,
                lastName: formData.lname,
                email: formData.email,
                amount:amount
            }
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle error
            setFormFail('Error Submitting Form')
        }
    };   
          
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationErrors({ ...validationErrors, [e.target.name]: '' });
    };

  return (
    
    <form onSubmit={handleSubmit}>
        <fieldset className='mt-2 p-4' style={{border: '1px solid'}}>
            <legend>Personal Information</legend>
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
                    {validationErrors.gender && ( <p style={{ color: 'red' }}>{validationErrors.gender}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="fname">First Name:</label>
                    <input className='form-control' type="text" id="fname" onChange={handleChange} name="fname" />
                    {validationErrors.fname && ( <p style={{ color: 'red' }}>{validationErrors.fname}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="lname">Last Name:</label>
                    <input className='form-control' type="text" id="lname" onChange={handleChange} name="lname"/>
                    {validationErrors.lname && ( <p style={{ color: 'red' }}>{validationErrors.lname}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="genotype">Genotype:</label>
                    <select className='form-control form-select'id='genotype' name='genotype' onChange={handleChange}>
                        <option value=''>Select...</option>
                        <option value = 'AA'>AA</option>
                        <option value ='AS'>AS</option>
                        <option value = 'AC'>AC</option>
                        <option value = 'SS'>SS</option>
                        <option value = 'CC'>CC</option>
                    </select>
                    {validationErrors.genotype && ( <p style={{ color: 'red' }}>{validationErrors.genotype}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="dob">DOB:</label>
                    <input className='form-control' type="date" id="dob" name="dob" onChange={handleChange}/>
                    {validationErrors.dob && ( <p style={{ color: 'red' }}>{validationErrors.dob}</p> )}

                </div>
            </div>
        </fieldset>

        <fieldset className='mt-2 p-4' style={{border: '1px solid'}}>
            <legend>Contact Information</legend>
            <div className='row'>
                <div className='col-lg-6 mt-2'>
                    <label for="email">Email</label>
                    <input className='form-control' type="text" id="email" name="email" onChange={handleChange}/>
                    {validationErrors.email && ( <p style={{ color: 'red' }}>{validationErrors.email}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label for="mobile">Mobile Number</label>
                    <input className='form-control' type="text" id="mobile" name="mobile" onChange={handleChange}/>
                    {validationErrors.mobile && ( <p style={{ color: 'red' }}>{validationErrors.mobile}</p> )}
                </div>

                <div className='col-lg-12 mt-2'>
                    <label for="address">Contact Address/Mailing Address</label>
                    <input className='form-control' type="text" id="address" name="address" onChange={handleChange}/>
                    {validationErrors.address && ( <p style={{ color: 'red' }}>{validationErrors.address}</p> )}
                </div>

                <div className='col-lg-6 mt-2'>
                    <label for="state">State</label>
                    <input className='form-control' type="text" id="state" name="state" onChange={handleChange}/>
                    {validationErrors.state && ( <p style={{ color: 'red' }}>{validationErrors.state}</p> )}
                </div>

                <div className='col-lg-6 mt-2'>
                    <label for="town">Town</label>
                    <input className='form-control' type="text" id="town" name="town" onChange={handleChange}/>
                    {validationErrors.town && ( <p style={{ color: 'red' }}>{validationErrors.town}</p> )}
                </div>

                <div className="mt-2">
                    <label htmlFor="file"><i className='fa fa-file text-success form-control' style={{border:'1px solid', fontSize:18}}> Upload a Valid ID or Passport Photograph</i></label>
                    <input type="file" id="file" onChange={handleFileChange} hidden/>
                </div>
                
            </div>
        </fieldset>

        <fieldset className='mt-2 p-4' style={{border: '1px solid'}}>
            <legend>Other Information</legend>
            <div className='row'>
                <div className='col-lg-6 mt-2'>
                    <label htmlFor="stateSelect">Preferred Hospital Location</label>
                    <select id="stateSelect" className='form-control form-select' name='hosp_location' value={selectedState} onChange={handleStateChange}>
                        <option value="">Select a state</option>
                        {options.map((state, index) => (
                        <option key={index} value={state}>
                            {state}
                        </option>
                        ))}
                    </select>
                    {validationErrors.hosp_location && ( <p style={{ color: 'red' }}>{validationErrors.hosp_location}</p> )}
                </div>
                <div className='col-lg-6 mt-2'>
                    <label htmlFor="hospitalSelect">Select Hospital:</label>
                    <select id="hospitalSelect" name='hospital' onChange={handleChange} className='form-control form-select'>
                        <option value="">Select a hospital</option>
                        {selectedHospitals.map((hospital, index) => (
                        <option key={index} value={hospital.Health_Care_Provider}>
                            {hospital.Health_Care_Provider}
                        </option>
                        ))}
                    </select>
                    {validationErrors.hospital && ( <p style={{ color: 'red' }}>{validationErrors.hospital}</p> )}
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
        <Terms/>
        <p className='text-muted'>{submitError}</p>
        <p className='text-danger'>{formFail}</p>
        <button className='main-btn btn-outline mt-4 mb-4' style={{padding: '10px 20px'}}>{ loading ? 'Submitting...' : 'Submit'}</button>
        
    </form>
  )
}

export default Form