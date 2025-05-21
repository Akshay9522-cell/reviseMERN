// src/pages/OrderConfirmation.js
import React from 'react';
import { Link } from 'react-router-dom';


const OrderConfirmation = () => (
   <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex justify-center mb-4">
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Thank You for Your Purchase!</h1>
        <p className="text-gray-600 mb-6">
          Your payment was successful. We've sent a confirmation email with your order details.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full transition duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
);

export default OrderConfirmation;
