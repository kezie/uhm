import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'
import { useSelector } from 'react-redux'

const PaystackIntegration = ({amount, id}) => {

  const {userLocation} = useSelector((state)=>(state.userLocation))

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  // const [amount, setAmount] = useState('')

  const payWithPaystack = (e) => {

    if(email === ""||fname=== "" ||lname === ""){
      return false
    }
    
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key:"pk_test_aefe1fd93af87defd5490c2980524259a21c101f",
      amount:amount*100,
      email,
      fname,
      lname,
      onSuccess(transaction){
        let message = `Payment Completed! Reference ${transaction.reference}`
        alert(message)
      },
      onCancel(){
        alert('You cancelled the transaction')
      }
    })
  }

  return (
      <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="paymentModalLabel" aria-hidden="true">
      <section className="modal-dialog fintex-user-section pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="user-wrapper text-center">
                <div className="user-content modal-content">
                  <h3 className="mb-20">Make Payment</h3>
                  <div className="contact-one_form-box ml-lg-40 mb-50 wow fadeInRight">
                  <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form"
                  >
                      <div className="row">
                      <div className="col-lg-12">
                          <div className="form_group">
                          <input
                              type="text"
                              className="form_control"
                              placeholder="First Name"
                              name="fname"
                              required=""
                              value={fname}
                              onChange={(e)=>setFname(e.target.value)}
                          />
                          <i className="far fa-user" />
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="form_group">
                          <input
                              type="text"
                              className="form_control"
                              placeholder="Last Name"
                              name="lname"
                              required=""
                              value={lname}
                              onChange={(e)=>setLname(e.target.value)}
                          />
                          <i className="far fa-user" />
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="form_group">
                          <input
                              type="email"
                              className="form_control"
                              placeholder="Email Address"
                              name="email"
                              required=""
                              value={email}
                              onChange={(e)=> setEmail(e.target.value)}
                          />
                          <i className="far fa-envelope" />
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="form_group">
                          <input
                              type="text"
                              className="form_control"
                              placeholder="Amount"
                              name="amount"
                              required=""
                              value={ userLocation === "NG" ? '₦' +`${amount}` : '$' +`${amount}`}
                              // onChange={(e)=>setAmount(e.target.value)}
                          />
                          <i className="far fa-money-bill" />
                          </div>
                      </div>
                      
                      <div className="col-lg-12">
                          <div className="form_group">
                          <button className="main-btn btn-red" onClick={payWithPaystack}>
                              Make Payment
                          </button>
                          </div>
                      </div>
                      </div>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaystackIntegration