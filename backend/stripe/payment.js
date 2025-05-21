// const Stripe = require("stripe");
// require("dotenv").config();
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// exports.createPaymentIntent = async (req, res) => {
//   const { amount, validatedItems } = req.body;

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: { name: "Test Product" },
//             unit_amount: amount,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: "http://localhost:5000/success",
//       cancel_url: "http://localhost:5000/cancel",
//     });

    

//     res.json({ id: session.id });
//   } catch (error) {
//     console.error("Error creating Checkout Session:", error);
//     res.status(500).json({ error: "An error occurred while creating the Checkout Session." });
//   }
// };



// // const Stripe = require("stripe");
// // require("dotenv").config();
// // const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// // exports.createPaymentIntent = async (req, res) => {
// //   const { validatedItems } = req.body;

// //   try {
// //     const session = await stripe.checkout.sessions.create({
// //       payment_method_types: ["card"],
// //       line_items: validatedItems.map((item) => ({
// //         price_data: {
// //           currency: "usd",
// //           product_data: {
// //             name: item.name,
// //           },
// //           unit_amount: item.price, // Ensure this is an integer (e.g., 1000 for $10.00)
// //         },
// //         quantity: item.qnty,
// //       })),
// //       mode: "payment",
// //       success_url: "http://localhost:5000/success",
// //       cancel_url: "http://localhost:5000/cancel",
// //     });

// //     res.json({ id: session.id });
// //   } catch (error) {
// //     console.error("Error creating Checkout Session:", error);
// //     res.status(500).json({ error: error.message });
// //   }
// // };
