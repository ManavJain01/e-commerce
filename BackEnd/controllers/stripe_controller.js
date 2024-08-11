// Importing Services
const stripe = require('../Stripe/stripe')

// Stripe
const handleStripe = async (req, res) => {
  try {
    const result = await stripe.getStripePayment(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error in handleStripe: ", error.message);
    res.status(400).send(error.message);
  }
}

const paymentStatus = async (req, res) => {
  try {
    const { status, id } = req.query;
    const result = await stripe.postPayment(status, id);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error in paymentStatus: ", error);
    res.status(400).send(error.message);
  }
}

// Exporting controllers
module.exports = { handleStripe, paymentStatus }