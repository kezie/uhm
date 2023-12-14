import React, {useEffect, useState} from 'react'
import { TabData } from './Data'
import {Col, Nav, Row, Tab} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'
import axios from 'axios'

const InsuranceCalc = () => {

    const [validationErrors, setValidationErrors] = useState({});
    const [submitMessage, setSubmitMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [lives, setLives] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [sent, setSent] = useState('')

    const {purchase} = useParams();

    const activeTab = ()=>{
        if(purchase === "classic"){return TabData[0].title}
        else if(purchase === "gold"){return TabData[1].title}
        else if(purchase === "diamond"){return TabData[2].title}
        else if(purchase === "diamond+"){return TabData[3].title}
        else {return TabData[0].title}
    }

    const [option, setOption] = useState('CLASSIC')

    const handleOptionChange = (plan) => {
        setOption(plan);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);


        if(fname === '' || email === '' || lname === '' || lives === ''|| phone ===''){
            setError('Please fill out all fields')
            setLoading(false)
            return;
          }

        const url = process.env.REACT_APP_QUOTE_CALC_API;

        const formData = new FormData();
      
        Array.from(e.currentTarget.elements).forEach((field) => {
          if (!field.name) return;
          formData.append(field.name, field.value);
        });
        
        const dataToSend = {
            ...formData,
            plan: purchase ? `${purchase.toUpperCase()} PLAN` : `${option} PLAN`
        };
        
        try {
            const response = await axios.post(url, dataToSend);
        
            console.log(response.data);
            setFname(''); setEmail('');setLives(''); setPhone(''); setError(''); setLname('');
            setSubmitMessage('Your message was sent successfully, we will contact you shortly.')
            setLoading(false)
            
        } catch (error) {
            console.error("Error submitting form:", error);
            setError(error)
            setLoading(false)
            // Handle error
        }
    };   

    return (
        <>
            <ScrollToTop/>
            <section className="get-insurance">
                <div className="get-insurance__shape-1"
                    style={{backgroundImage: "url(assets/images/bg/get-insurance.png)"}}>
                </div>
                <div className="container">
                    <div className="section-title-three text-left">
                        <div className="section-title section-title-left">
                        <span className="sub-title text-light">Get a Free Quote</span>
                        <h2 className='text-light'>Pick a Plan to Get Started</h2>
                        <h4 className='text-light'>See what the plans entail</h4>
                        </div>
                    </div>
                    <div>
                        <div className="row mt-5">
                            <div className='text-light'>
                                <Tab.Container id="left-tabs-example" defaultActiveKey={activeTab}>
                                    <Row>
                                        <Col sm={4}>
                                            <Nav variant="pills" className="flex-column">
                                                {TabData.map((tab)=>(
                                                    <Nav.Item key={tab.title}>
                                                        <Nav.Link onClick={()=>{handleOptionChange(`${tab.title}`)}} eventKey={tab.title} className='p-3 d-flex'><h3 className='text-light'><i className={`me-3 fs-2 ${tab.icon}`}/> {tab.title}</h3></Nav.Link>
                                                    </Nav.Item>
                                                ))}
                                            </Nav>
                                        </Col>
                                        <Col sm={8}>
                                            <Tab.Content>
                                                {TabData.map((tab)=>(
                                                    <Tab.Pane key={tab.title} eventKey={tab.title} className='mt-sm-4'>
                                                        <h3 className='text-light mb-2'>{tab.title} PLAN</h3>
                                                        <p className="text-light">{tab.content}</p>
                                                    </Tab.Pane>
                                                ))}
                                                <div className="mt-3">
                                                {/* === Contact Form Box === */}
                                                    <div className="insurance_form mb-50 wow fadeInRight">
                                                        <form onSubmit={handleSubmit}>
                                                            <div className='row'>
                                                                <div className="form_group mb-2 col-lg-6 ">
                                                                    <input
                                                                        type="text"
                                                                        className="w-100 p-2 rounded-pill text-center"
                                                                        placeholder="First Name"
                                                                        name="fname"
                                                                        required=""
                                                                        value={fname}
                                                                        onChange={(e) => setFname(e.target.value)}
                                                                    />
                                                                </div>

                                                                <div className="form_group mb-2 col-lg-6 ">
                                                                    <input
                                                                        type="text"
                                                                        className="w-100 p-2 rounded-pill text-center"
                                                                        placeholder="Last Name"
                                                                        name="lname"
                                                                        value={lname}
                                                                        required=""
                                                                        onChange={(e) => setLname(e.target.value)}
                                                                    />
                                                                </div>
                                                            
                                                                <div className="form_group mb-2 col-lg-6 ">
                                                                    <input
                                                                        type="email"
                                                                        className="w-100 p-2 rounded-pill text-center"
                                                                        placeholder="Email"
                                                                        name="email"
                                                                        required=""
                                                                        value={email}
                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                    />
                                                                </div>
                                                            
                                                                <div className="form_group mb-2 col-lg-6 ">
                                                                    <input
                                                                        type="text"
                                                                        className="w-100 p-2 rounded-pill text-center"
                                                                        placeholder="Phone"
                                                                        name="phone"
                                                                        required=""
                                                                        value={phone}
                                                                        onChange={(e) => setPhone(e.target.value)}
                                                                    />
                                                                </div>

                                                                <div className="col-lg-6 form_group mb-2">
                                                                    <input
                                                                        type="number"
                                                                        className="w-100 p-2 rounded-pill text-center"
                                                                        placeholder="Number of Lives"
                                                                        name="lives"
                                                                        min={1}
                                                                        value={lives}
                                                                        required=""
                                                                        onChange={(e) => setLives(e.target.value)}
                                                                    />
                                                                </div>
                                                        
                                                                <div className="col-lg-6 form_group mb-2">
                                                                    <input
                                                                        type="text"
                                                                        className="w-100 p-2 rounded-pill text-center"
                                                                        placeholder="Plan"
                                                                        name="plan"
                                                                        required=""
                                                                        value={ purchase ? `${(purchase).toUpperCase()} PLAN` : `${option} PLAN`}
                                                                        disabled
                                                                    />
                                                                </div>
                                                                <p className='text-light'>{error ? error : submitMessage}</p>
                                                                <div className="form_group">
                                                                    <button className="main-btn btn-red">
                                                                       {loading ? 'Sending Message...' : 'Send Message'} 
                                                                    </button>
                                                                </div>
                                                            </div>  
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="get-insurance__call">
                                                    <div className="get-insurance__call-icon">
                                                        <i className="fas fa-headset"></i>
                                                    </div>
                                                    <div className="get-insurance__call-content">
                                                        <p>Facing problem to get a quote?</p>
                                                        <a href="tel:+2348112893000">+234-811-2893-000</a>
                                                    </div>
                                                </div>
                                                
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InsuranceCalc