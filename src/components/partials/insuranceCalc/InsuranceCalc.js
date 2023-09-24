import React, {useState} from 'react'
import { TabData } from './Data'
import {Col, Nav, Row, Tab} from 'react-bootstrap'

const InsuranceCalc = () => {

    const [option, setOption] = useState('CLASSIC')

    const handleOptionChange = (plan) => {
        setOption(plan);
    }

    return (
        <section className="get-insurance">
            <div className="get-insurance__shape-1"
                style={{backgroundImage: "url(assets/images/bg/get-insurance.png)"}}>
            </div>
            <div className="container">
                <div className="section-title-three text-left">
                    <div className="section-title section-title-left">
                    <span className="sub-title text-light">Get a Free Quote</span>
                    <h2 className='text-light'>Pick a Plan to Get Started</h2>
                    </div>
                </div>
                <div>
                    <div className="row mt-5">
                        <div className='text-light'>
                            <Tab.Container id="left-tabs-example" defaultActiveKey={`${TabData[0].title}`}>
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
                                                    <form onSubmit={(e) => e.preventDefault()}>
                                                        <div className='row'>
                                                            <div className="form_group mb-2 col-lg-6 ">
                                                                <input
                                                                    type="text"
                                                                    className="w-100 p-2 rounded-pill text-center"
                                                                    placeholder="First Name"
                                                                    name="name"
                                                                    required=""
                                                                />
                                                            </div>

                                                            <div className="form_group mb-2 col-lg-6 ">
                                                                <input
                                                                    type="text"
                                                                    className="w-100 p-2 rounded-pill text-center"
                                                                    placeholder="Last Name"
                                                                    name="name"
                                                                    required=""
                                                                />
                                                            </div>
                                                        
                                                            <div className="form_group mb-2 col-lg-6 ">
                                                                <input
                                                                    type="email"
                                                                    className="w-100 p-2 rounded-pill text-center"
                                                                    placeholder="Email"
                                                                    name="email"
                                                                    required=""
                                                                />
                                                            </div>
                                                        
                                                            <div className="form_group mb-2 col-lg-6 ">
                                                                <input
                                                                    type="text"
                                                                    className="w-100 p-2 rounded-pill text-center"
                                                                    placeholder="Phone"
                                                                    name="phone"
                                                                    required=""
                                                                />
                                                            </div>

                                                            <div className="col-lg-6 form_group mb-2">
                                                                <input
                                                                    type="number"
                                                                    className="w-100 p-2 rounded-pill text-center"
                                                                    placeholder="Number of Lives"
                                                                    name="numb"
                                                                    required=""
                                                                />
                                                            </div>
                                                    
                                                            <div className="col-lg-6 form_group mb-2">
                                                                <input
                                                                    type="text"
                                                                    className="w-100 p-2 rounded-pill text-center"
                                                                    placeholder="Plan"
                                                                    name="plan"
                                                                    required=""
                                                                    value={`${option} PLAN`}
                                                                    disabled
                                                                />
                                                            </div>
                                                        
                                                            <div className="form_group">
                                                                <button className="main-btn btn-red">
                                                                    Get Quote
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
                        {/* form */}
                        {/* <div className="col-lg-4">
                        === Contact Form Box ===
                            <div className="insurance_form mb-50 wow fadeInRight">

                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className='row'>
                                        <div className="form_group mb-2">
                                            <input
                                                type="text"
                                                className="w-100 p-2 rounded-pill text-center"
                                                placeholder="First Name"
                                                name="name"
                                                required=""
                                            />
                                        </div>

                                        <div className="form_group mb-2">
                                            <input
                                                type="text"
                                                className="w-100 p-2 rounded-pill text-center"
                                                placeholder="Last Name"
                                                name="name"
                                                required=""
                                            />
                                        </div>
                                    
                                        <div className="form_group mb-2">
                                            <input
                                                type="email"
                                                className="w-100 p-2 rounded-pill text-center"
                                                placeholder="Email"
                                                name="email"
                                                required=""
                                            />
                                        </div>
                                    
                                        <div className="form_group mb-2">
                                            <input
                                                type="text"
                                                className="w-100 p-2 rounded-pill text-center"
                                                placeholder="Phone"
                                                name="phone"
                                                required=""
                                            />
                                        </div>

                                        <div className="col-lg-6 form_group mb-2">
                                            <input
                                                type="number"
                                                className="w-100 p-2 rounded-pill text-center"
                                                placeholder="Number of Lives"
                                                name="numb"
                                                required=""
                                            />
                                        </div>
                                
                                        <div className="col-lg-6 form_group mb-2">
                                            <input
                                                type="text"
                                                className="w-100 p-2 rounded-pill text-center"
                                                placeholder="Plan"
                                                name="plan"
                                                required=""
                                                value={`${option} PLAN`}
                                            />
                                        </div>
                                    
                                        <div className="form_group">
                                            <button className="main-btn btn-red">
                                                Get Quote
                                            </button>
                                        </div>
                                    </div>  
                                </form>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InsuranceCalc