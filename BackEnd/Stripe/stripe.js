// Importing env file
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Stripe
const getStripePayment = async (data) => {
  try {
    const {products} = data;
    const lineItems = products.map((product) => ({
      price_data:{
        currency:"usd",
        product_data:{
          name:product.list.item,
          images:[product.list?.img]
        },
        unit_amount: Math.round(product.list.price*100),
      },
      quantity:product.cartQty
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types:["card"],
      line_items:lineItems,
      mode:"payment",
      success_url:"http://localhost:3000",
      cancel_url:"http://localhost:3000/Categories"
    })
    return {id:session.id}
  } catch (error) {
    return error
  }
}

module.exports = { getStripePayment }