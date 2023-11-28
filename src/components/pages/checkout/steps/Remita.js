import React, { useState } from 'react'
import RemitaPayment from "react-remita";

const Remita = (props) => {
    const [paymentData, setpaymentData] = useState({
        key: process.env.REACT_APP_REMITA_KEY,
        customerId: process.env.REACT_APP_REMITA_CUSTOMER_ID,
        firstName: props.user.fname,
        lastName: props.user.lname,
        email: props.user.email,
        amount: null,
        narration: "",
      });
      let data = {
        ...paymentData,
        onSuccess: function (response) {
          // function callback when payment is successful
          console.log("callback Successful Response", response);
        },
        onError: function (response) {
          // function callback when payment fails
          console.log("callback Error Response", response);
        },
        onClose: function () {
          // function callback when payment modal is closed
          console.log("closed");
        },
      };

  return (
    <div className="w-50" style={{margin:'auto'}}>
        <div className='App'>
          <div className='container'>
            <h6 className="text-center mb-4">Make Payment</h6>
            <input
              type='text'
              placeholder='firstname'
              className="checkout-input mb-3"
              onChange={(e) =>
                setpaymentData({ ...paymentData, firstName: e.target.value })
              }
              value={props.user.fname}
            />
            <input
              type='text'
              placeholder='lastname'
              className="checkout-input mb-3"
              onChange={(e) =>
                setpaymentData({ ...paymentData, lastName: e.target.value })
              }
              value={props.user.lname}
            />
            <input
              type='text'
              placeholder='email'
              className="checkout-input mb-3"
              onChange={(e) =>
                setpaymentData({ ...paymentData, email: e.target.value })
              }
              value={props.user.email}
            />
            <input
              type='text'
              placeholder='amount'
              className="checkout-input mb-3"
              onChange={(e) =>
                setpaymentData({ ...paymentData, amount: e.target.value })
              }
              value={200}
            />
            <input
              type='text'
              placeholder='description(optional)'
              className="checkout-input"
              onChange={(e) =>
                setpaymentData({ ...paymentData, narration: e.target.value })
              }
            />
            <RemitaPayment
              remitaData={data}
              className='main-btn btn-outline btn-sm mt-4 mb-4' // class to style the button
              text='Pay Now' //text to show on button
              // add a 'live' prop to use the live urls/keys
            />
          </div>
        </div>
      </div>
  )
}

export default Remita