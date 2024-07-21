// Importing env file
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Stripe
const getStripePayment = async (data) => {
  try {
    const {products} = data;
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
      payment_method_types:["card"],
      line_items:lineItems,
      mode:"payment",
      success_url:"http://localhost:3000/User/myOrders",
      cancel_url:"http://localhost:3000/Cart"
    })

    return { id: session.id };
  } catch (error) {
    console.error('Error creating Stripe session:', error.message);
    return { error: error.message };
  }
}

// Endpoint to handle Stripe webhook events
const AfterPayment = async (req) => {
  console.log("after payment section");
  console.log(req);
  // Simulate post-payment processing (ideally use webhook)
    // if (session.status === 'open') {
      // console.log("comes here");

    //   console.log("comes here after successfull");
    //   // Fetch cart items from database based on userId
    //   // const cartItems = await getCartItems(userId);

    //   // Create a new order with the cart items
    //   // const order = await createOrder(userId, cartItems);

    //   // Clear the cart
    //   // await clearCart(userId);

    //   console.log(`✅ Payment for session ${session.id} succeeded and order created`);
    // }

  // return {status: "successfull"}
};

// Helper functions
async function getCartItems(lineItems) {
  return lineItems.map(item => ({
    name: item.name,
    price: item.amount / 100,
    quantity: item.quantity,
  }));
}

async function createOrder(userId, cartItems) {
  const order = {
    userId,
    items: cartItems,
    createdAt: new Date(),
  };
  // await saveOrder(order);
  return order;
}

async function clearCart(userId) {
  // await deleteCartItems(userId);
}

module.exports = { getStripePayment, AfterPayment }