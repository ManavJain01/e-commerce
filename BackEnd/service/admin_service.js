// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN

// Customers Models
const CustomerModel = require("../models/User/customers")
const CustomerDataModel = require("../models/User/customer_data")
const OrderModel = require("../models/orders")


// All Users
const findUsers = async (req, res) => {
  try {
    const users = await CustomerModel.find({});
    res.status(200).send(users);

  } catch (error) {
    console.error("Error find users: ", error.message);
    res.status(400).send(error.message);
  }
}

// All Orders
const findOrders = async (req, res) => {
  try {
    const users = await CustomerModel
      .find({})
      .select(["_id", "phone"]);
    const orders = await Promise.all(
      users.map(async (user) => {
        
        // Fetch the orders for the current user
        const orders = await OrderModel
          .find({ _id: user._id })
          .select(["_id", "orders"]);

        // Return the user object with their orders
        return {
          ...user.toObject(), // Convert Mongoose document to plain JavaScript object
          orders: orders[0]?.orders, // Add the orders for the user
        };
      })
    );

    res.status(200).send(orders);
  } catch (error) {
    console.error("Error find orders: ", error.message);
    res.status(400).send(error.message);
  }
}

module.exports = { findUsers, findOrders };