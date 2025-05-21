import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51ROn3pP0FSxgzv4zfXEigynRtlr89lqd5PqDDkqYQrSzWHbqxG7r0jdpvtY4aSXzzuAKxjBS9KlSKGfqKNH4VgJ600ud2ioPux");
createRoot(document.getElementById('root')).render(
 
   <Provider store={store}>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Provider>
    

)
