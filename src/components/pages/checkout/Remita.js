import React, { useState } from 'react'
import RemitaPayment from "react-remita";
import Framer from '../../partials/Framer';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Remita = () => {
    const location = useLocation();

    const { firstName, lastName, email, amount } = location.state;

    const successAlert = (firstName, transactionId, amount, paymentReference) => {
      Swal.fire(`Thank you for your payment ${firstName}`, `Amount Paid: NGN${amount} <br/> Transaction ID: ${transactionId} <br/>  Payment Reference: ${paymentReference}`, 'success');
    };

    const failAlert = (transactionId) => {
      Swal.fire('Payment Failed Please try again', `Transaction ID: ${transactionId}` ,'danger');
    };

    const [paymentData, setpaymentData] = useState({
        key: process.env.REACT_APP_REMITA_KEY,
        customerId: process.env.REACT_APP_REMITA_CUSTOMER_ID,
        firstName: firstName,
        lastName: lastName,
        email: email,
        amount: amount,
        narration: "Insurance Payment",
      });

      const savePaymentInfo = (transactionId, paymentReference) => {
        const paymentInfo = {
          firstName: firstName,
          amount: amount,
          transactionId: transactionId,
          paymentReference: paymentReference
        };
        localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));
      };

      let data = {
        ...paymentData,
        onSuccess: function (response) {
          // function callback when payment is successful
          const { transactionId, paymentReference } = response;
          successAlert(firstName, transactionId, amount, paymentReference); 
          savePaymentInfo(transactionId, paymentReference);
          console.log("callback Successful Response", response);
        },
        onError: function (response) {
          // function callback when payment fails
          const { transactionId } = response;
          failAlert(transactionId)
          console.log("callback Error Response", response);
        },
        onClose: function () {
          // function callback when payment modal is closed
          console.log("closed");
        },
      };

  return (
    <>
      <Framer/>
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
              value={firstName}
            />
            <input
              type='text'
              placeholder='lastname'
              className="checkout-input mb-3"
              onChange={(e) =>
                setpaymentData({ ...paymentData, lastName: e.target.value })
              }
              value={lastName}
            />
            <input
              type='text'
              placeholder='email'
              className="checkout-input mb-3"
              onChange={(e) =>
                setpaymentData({ ...paymentData, email: e.target.value })
              }
              value={email}
            />
            <input
              type='text'
              disabled
              placeholder='amount'
              className="checkout-input mb-3"
              onChange={(e) =>
                setpaymentData({ ...paymentData, amount: e.target.value })
              }
              value={amount}
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
              className='main-btn btn-outline btn-sm mt-4 mb-4'
              text='Pay Now' //text to show on button
              // add a 'live' prop to use the live urls/keys
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Remita