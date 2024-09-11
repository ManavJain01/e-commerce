// Importing Services
const user_service = require('../service/user_service')

// Customer Controller
const findCustomer = async (req, res) => {
  try {
    const result = await user_service.getCustomer(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error find customer: ", error.message);
    res.status(400).send(error.message);
  }
}

const signup = async (req, res) => {
  try {
    const result = await user_service.getSignup(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error Login: ", error.message);
    res.status(400).send(error.message);
  }
}

const login = async (req, res) => {
  try {
    const result = await user_service.getLogin(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error Login: ", error.message);
    res.status(400).send(error.message);
  }
}

const findCustomerDetails = async (req, res) => {
  try {
    const result = await user_service.getCustomerDetails(req.query.id);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

const UpdateCustomer = async (req, res) => {
  try {
    const result = await user_service.getCustomerUpdated(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

const findCartData = async (req, res) => {
  try {
    const result = await user_service.getCartData(req.query.token);
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

const findOrders = async (req, res) => {
  try {
    const result = await user_service.getOrders(req.query.id);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

const findRefills = async (req, res) => {
  try {
    const result = await user_service.getRefills(req.query.id);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

const findSaveForLater = async (req, res) => {
  try {
    const result = await user_service.getSaveForLater(req.query.id);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

// Exporting controllers
module.exports = { findCustomer, signup, login, findCustomerDetails, UpdateCustomer, findCartData, ItemAddedInCart, ItemUpdatedInCart, ItemDeletedFromCart, findOrders, findRefills, findSaveForLater }