// Firebase Otp Auth.

// Importing Services
const user_service = require('../service/user_service')
// Customer Controller
const findCustomer = async (req, res) => {
  try {
    const result = await user_service.getCustomer(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

// Exporting controllers
module.exports = { findCustomer }