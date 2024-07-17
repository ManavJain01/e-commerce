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

const findCustomerData = async (req, res) => {
  try {
    const result = await user_service.getCustomerData(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

const ItemAddedInCart = async (req, res) => {
  try {
    const result = await user_service.AddToCart(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

const ItemUpdatedInCart = async (req, res) => {
  try {
    const result = await user_service.UpdateCart(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

const ItemDeletedFromCart = async (req, res) => {
  try {
    const result = await user_service.DeleteFromCart(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

// Exporting controllers
module.exports = { findCustomer, findCustomerData, ItemAddedInCart, ItemUpdatedInCart, ItemDeletedFromCart }