// Customers Models
const CustomerDataModel = require("../models/User/customer_data");

// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const client = process.env.CLIENT_LOCATION

// Stripe
const getStripePayment = async (data) => {
  try {
    const {userId, products} = data;

    const id = jwt.decode(userId);
    jwt.verify(userId, jwtSecret, (err, id) => {
      if (err) {
        throw new Error('Token verification failed:', err);
      }
    });
    
    await CustomerDataModel.findByIdAndUpdate(id, { $push: { 'orders.failure': products } });

    const lineItems = products.map((product) => ({
      price_data:{
        currency:"inr",
        product_data:{
          name:product.list.item,
          images:[product.list?.img]
        },
        unit_amount: Math.round(product.list.price*100),
      },
      quantity:product.cartQty
    }));

    const session = await stripe.checkout.sessions.create({
      // comment below
      // payment_method_types:["card"],
      line_items:lineItems,
      mode:"payment",
      success_url:`${client}/verify?success=true&id=${id}`,
      cancel_url:`${client}/verify?success=false&id=${id}`
    })

    return { id: session.id };
  } catch (error) {
    throw error.message;
  }
}

const postPayment = async (status, id) => {
  try {  
    if(status === 'true'){
      const customer = await CustomerDataModel.findById(id);
      const lastFailureItem = customer.orders.failure.pop();

      await CustomerDataModel.findByIdAndUpdate(id, {
        $set: {
          'orders.failure': customer.orders.failure,
          'cart': []
        },
        $push: { 'orders.success': {deliveryStatus: "processing", products: lastFailureItem} }
      });

      return {status: true}
    }else{
      throw new Error(`Payment was not successfull! User is ${id}.`);
    }
  } catch (error) {
    throw error.message;
  }
}

module.exports = { getStripePayment, postPayment }