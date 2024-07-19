// Importing Services
const stripe = require('../Stripe/stripe')

// Stripe
const handleStripe = async (req, res) => {
  try {
    const result = await stripe.getStripePayment(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

const postPaymentHandle = async (req, res) => {
  try {
    console.log("in controller after payment");
    console.log(req);
    const result = await stripe.AfterPayment(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

// Exporting controllers
module.exports = { handleStripe, postPaymentHandle }