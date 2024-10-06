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
    const result = await user_service.getCustomerDetails(req.user);
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

const cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.query;
    
    const result = await user_service.cancelOrderService(req.user, orderId);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error.message);
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

const savingAddressDetails = async (req, res) => {
  try {
    const { data} = req.body;

    const result = await user_service.saveAddress(data, req.user);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error);
  }
}

const deleteAddressDetail = async (req, res) => {
  try {
    const { address_id } = req.query;
    const result = await user_service.deleteAddress(req.user, address_id);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error);
  }
}

const sendingAllAddress = async (req, res) => {
  try {
    const result = await user_service.showAllAddress(req.user);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error);
  }
}

const savingPatientDetails = async (req, res) => {
  try {
    const { data } = req.body;
        
    const result = await user_service.saveUserAsPatient(data, req.user);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error);
  }
}

const deletePatientDetail = async (req, res) => {
  try {
    const { patient_id } = req.query;

    const result = await user_service.deletePatient(req.user, patient_id);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error.message);
  }
}

const sendingAllPatients = async (req, res) => {
  try {
    const result = await user_service.showAllPatients(req.user);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error.message);
  }
}

const settingDeliveryDetails = async (req, res) => {
  try {
    const result = await user_service.setDeliveryDetails(req.user, req.body);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error.message);
  }
}

const gettingDeliveryDetails = async (req, res) => {
  try {
    const result = await user_service.getDeliveryDetails(req.user);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error.message);
  }
}

// Exporting controllers
module.exports = { findCustomer, signup, login, findCustomerDetails, UpdateCustomer, findCartData, ItemAddedInCart,
  ItemUpdatedInCart, ItemDeletedFromCart, findOrders, cancelOrder, findRefills, findSaveForLater, savingAddressDetails,
  deleteAddressDetail, sendingAllAddress, savingPatientDetails, deletePatientDetail, sendingAllPatients, savingPatientDetails,
  deletePatientDetail, sendingAllPatients, settingDeliveryDetails, gettingDeliveryDetails }