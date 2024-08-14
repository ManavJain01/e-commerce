// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN

// Firebase Otp Auth.
// Customers Models
const CustomerModel = require("../models/User/customers")

// Customer Login request
const getCustomer = async (data) => {
  const inProgress = new Set();

  try {
    const phone = data.phone;

    if(inProgress.has(phone)){
      return("Request already in progress for this phone number")
    }
    inProgress.add(phone);

    let userData = await CustomerModel.findOne({phone});

    if(userData == null){
      const userData = await CustomerModel.create({
        phone: data.phone,
        signupLocation: data.location
      })
      
      const authToken = jwt.sign((userData._id).toString(), jwtSecret)
      return { data: userData, authToken: authToken }
    }else{
      const authToken = jwt.sign((userData._id).toString(), jwtSecret)
      return { data: userData, authToken: authToken };
    }
  } catch (error) {
    throw error.message
  } finally {
    inProgress.delete(data.phone);
  }
}

module.exports = { getCustomer }