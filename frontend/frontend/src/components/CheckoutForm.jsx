import React from 'react';
import axios from 'axios';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const CheckoutForm = () => {
  const cartItems = useSelector((state) => state.myca.cart);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qnty, 0);

   const [customer, setCustomer] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/order-confirmation',
      },
      redirect: 'if_required',
    });

    if (error) {
      console.error('Stripe Error:', error.message);
      return;
    }

    if (paymentIntent && paymentIntent.status === 'succeeded') {
      const orderData = {
        orderId: paymentIntent.id,
        customer: {
          name: customer.name,
          email: customer.email,
          address: customer.address,
          phone: customer.phone,
        },
        items: cartItems.map((item) => ({
          productId: item.id,
          name: item.name,
          quantity: item.qnty,
          price: item.price,
        })),
        payment: {
          method: 'Stripe',
          status: paymentIntent.status,
          transactionId: paymentIntent.id,
        },
        shipping: {
          address: customer.address,
          city: customer.city,
          state: 'madhya pradesh',
          postalCode: '784578',
          country: 'India',
        },
      };

      try {
        await axios.post('http://localhost:5050/user/orders', orderData);
        navigate('/order-confirmation');
      } catch (err) {
        console.error('Error saving order:', err);
      }
    }
  };

  return (


    <form
  onSubmit={handleSubmit}
  className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col lg:flex-row gap-8"
>
  {/* Customer Info */}
  <div className="flex-1 space-y-6">
    <h2 className="text-2xl font-semibold mb-4">Customer Information</h2>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Name</label>
      <input
        type="text"
        name="name"
        value={customer.name}
        onChange={handleInputChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="John Doe"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Email</label>
      <input
        type="email"
        name="email"
        value={customer.email}
        onChange={handleInputChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="john@example.com"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Address</label>
      <input
        type="text"
        name="address"
        value={customer.address}
        onChange={handleInputChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="123 Main St"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Phone</label>
      <input
        type="tel"
        name="phone"
        value={customer.phone}
        onChange={handleInputChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="123-456-7890"
      />
    </div>
  </div>

  
  <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-md border border-gray-200 shadow-sm flex flex-col">
    <h2 className="text-xl font-semibold mb-6 border-b pb-2">Order Summary</h2>

    <ul className="divide-y divide-gray-300 flex-grow overflow-y-auto max-h-64">
      {cartItems.map((item) => (
        <li key={item.id} className="py-3 flex justify-between items-center">
          <div>
            <p className="text-gray-900 font-medium">{item.name}</p>
            <p className="text-gray-500 text-sm">Qty: {item.qnty}</p>
          </div>
          <p className="font-semibold">₹{item.price * item.qnty}</p>
        </li>
      ))}
    </ul>

    <div className="mt-6 border-t pt-4">
      <div className="flex justify-between text-gray-700 font-medium text-lg">
        <span>Total</span>
        <span>₹{subtotal}</span>
      </div>
    
    </div>
  </div>


  <div className="flex-1 flex flex-col justify-between">
    <div>
      <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
      <div className="p-4 border border-gray-300 rounded-md bg-white">
        <PaymentElement />
      </div>
    </div>

    <button
      type="submit"
      disabled={!stripe}
      className="mt-8 w-full bg-gradient-to-tr from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition text-white py-3 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Pay Now
    </button>
  </div>
</form>

  );
};

export default CheckoutForm;
