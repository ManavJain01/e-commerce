// Customers Models
const CustomerDataModel = require("../models/User/customer_data");
const OrderModel = require("../models/orders");

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

    const newOrder = await OrderModel.findOneAndUpdate(
      { _id: id }, { 
      $push: { 
        orders: { 
          paymentStatus: 'Pending', // or 'Completed', 'Failed', etc.
          deliveryStatus: 'Pending', // or 'Shipped', 'Delivered', etc.
          products: products,
          orderTime: new Date(), // or any specific time if needed
        }
      }
    }, { 
      new: true, // Return the updated document
      upsert: true, // Create a new document if none is found
      setDefaultsOnInsert: true // Apply default values when creating
    });    

    // Check if the customer document was updated and has orders
    if (newOrder && newOrder.orders.length > 0) {
      // Get the latest order from the orders array
      const latestOrder = newOrder.orders[newOrder.orders.length - 1];
      
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
        success_url:`${client}/verify?success=true&id=${latestOrder._id}`,
        cancel_url:`${client}/verify?success=false&id=${latestOrder._id}`
      })

      return { id: session.id };
    } else {
      console.log('No orders found.');
    }

  } catch (error) {
    throw error;
  }
}

const postPayment = async (status, _id, orderId) => {
  try {  
    const id = jwt.decode(_id);
    jwt.verify(_id, jwtSecret, (err, id) => {
      if (err) {
        throw new Error('Token verification failed:', err);
      }
    });

    if(status === 'true'){
      await OrderModel.findByIdAndUpdate(
        { _id: id },
        { $set: { 'orders.$[elem].paymentStatus': 'Completed', cart : [] } },
        { arrayFilters: [{ 'elem._id': orderId }],  new: true }
      );

      return {status: true}
    }else{
      throw new Error(`Payment was not successfull! User is ${id}.`);
    }
  } catch (error) {
    throw error.message;
  }
}

module.exports = { getStripePayment, postPayment }