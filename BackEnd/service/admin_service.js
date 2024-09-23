// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN

// Customers Models
const CustomerModel = require("../models/User/customers")
const CustomerDataModel = require("../models/User/customer_data")


// Customer Login request
const findUsers = async (req, res) => {
  try {
    const users = await CustomerModel.find({});
    res.status(200).send(users);

  } catch (error) {
    console.error("Error find customer: ", error.message);
    res.status(400).send(error.message);
  }
}

module.exports = { findUsers };