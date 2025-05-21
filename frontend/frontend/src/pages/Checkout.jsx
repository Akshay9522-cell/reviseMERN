// src/pages/CheckoutPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe('pk_test_51ROn3pP0FSxgzv4zfXEigynRtlr89lqd5PqDDkqYQrSzWHbqxG7r0jdpvtY4aSXzzuAKxjBS9KlSKGfqKNH4VgJ600ud2ioPux');

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState('');
  const cartItems = useSelector((state) => state.myca.cart);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await axios.post('http://localhost:5050/create-payment-intent', {
          items: cartItems,
        });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error('Error creating PaymentIntent:', error);
      }
    };

    if (cartItems.length > 0) {
      createPaymentIntent();
    }
  }, [cartItems]);

 const appearance = {
  theme: 'stripe', // Options: 'stripe', 'night', 'flat'
  variables: {
    colorPrimary: '#ff6600',
    colorBackground: '#ffffff',
    colorText: '#333333',
    fontFamily: 'Roboto, sans-serif',
    spacingUnit: '4px',
    borderRadius: '6px',
  },
  rules: {
    '.Input': {
      padding: '12px',
    },
    '.Label': {
      fontWeight: '500',
    },
  },
};
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ) : (
        <p>Loading checkout...</p>
      )}
    </div>
  );
};

export default Checkout
