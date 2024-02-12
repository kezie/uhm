import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PayPalButton = () => {
  const location = useLocation();

  const successAlert = (payerName, payerId) => {
    Swal.fire(`Thank you for your payment ${payerName}`, `Amount Paid: USD${amount} <br/> Payer ID : ${payerId} `, 'success');
  };

  const { firstName, lastName,email, amount } = location.state;

  const currency = 'USD';

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: amount,
          currency_code: currency
        }
      }]
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function(details) {
      successAlert(details.payer.name.given_name, details.payer.name.payer_id)
      localStorage.setItem(JSON.stringify(details));
      console.log(details);
    });
  };
  const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID

  return (
      <div className='mt-5 mb-5 text-center row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
          <h2 className='mt-4 mb-3'>Checkout Summary</h2>
          <h3 className='mt-2 '>Name: {firstName} {lastName}</h3>
          <h3 className='mt-2 '>Email: {email}</h3>
          <h3 className='mt-2 mb-2'>Amount: {amount} {currency}</h3>
          <div className='w-50 m-auto mt-4'>
            <PayPalScriptProvider options={{ 'client-id': clientId }}>
              <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
                />
            </PayPalScriptProvider>
          </div>
        </div>
        <div className='col-lg-2'></div>
      </div>
  );
};

export default PayPalButton;
