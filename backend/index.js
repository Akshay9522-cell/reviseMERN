const express=require('express')
const Stripe = require('stripe');
const app=express()
require('dotenv').config()
const route=require('./router/userRoute')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
const cors=require('cors')

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const path = require('path')
app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use('/upload', express.static(path.join(__dirname, 'upload')))
mongoose.connect('mongodb://localhost:27017/revisionOfMern').then(()=>{
        console.log('db connected successfully')
})

const PORT= process.env.PORT || 5050

app.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body;
  console.log(items)

  // Calculate the total amount in cents
  const amount = items.reduce((total, item) => {
    return total + item.price * item.qnty;
  }, 0);
  console.log(amount)

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    res.status(500).send({ error: error.message });
  }
});

app.use('/user',route)



app.listen(PORT,()=>{
    console.log("server is on")
})