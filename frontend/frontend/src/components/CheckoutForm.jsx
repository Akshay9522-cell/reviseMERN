// src/components/CheckoutForm.js
import React from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate=useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/order-confirmation',
      },
        redirect: 'if_required',
    });

    if (error) {
      console.error(error.message);
    }  else    {
      navigate('/order-confirmation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
