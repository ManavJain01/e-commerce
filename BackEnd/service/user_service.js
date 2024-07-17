// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN

// Customers Models
const CustomerModel = require("../models/User/customers")
const CustomerDataModel = require("../models/User/customer_data")


// Customer Login request
const getCustomer = async (data) => {
  const inProgress = new Set();

  try {
    const phone = data.phone;

    if(inProgress.has(phone)){
      return("Request already in progress for this phone number")
    }
    inProgress.add(phone);

    let userData = await CustomerModel.findOne({phone}).select(['name', 'phone', 'email', 'cart']);

    if(userData == null){
      const userData = await CustomerModel.create({
        phone: data.phone,
        signupLocation: data.location
      })

      const authToken = jwt.sign(data.phone, jwtSecret)
      return { data: userData, authToken: authToken }
    }else{
      const authToken = jwt.sign(userData.phone, jwtSecret)
      return { data: userData, authToken: authToken };
    }
  } catch (error) {
    console.log("Error Occurred:", error);
    return error
  } finally {
    inProgress.delete(data.phone);
  }
}

// Fetch Customer's Data
const getCustomerData = async (data) => {
  try {
    const _id = data._id;
    let userData = await CustomerDataModel.findById(_id);

    if(userData == null){
      userData = await CustomerDataModel.create({
        _id: _id,
        cart: [],
        saveForLater: {},
        refills: {},
        records: {},
        orders: {}
      })
    }
    return { data: userData }
  } catch (error) {
    return error;
  }
}

// AddToCart
const AddToCart = async (data) => {
  try {
    await CustomerDataModel.findByIdAndUpdate(data.id, {$push: {cart: data.data}});
    
    return {status: "Successfull"}
  } catch (error) {
    console.log("Error in AddToCart", error);
    return error;
  }
}

// UpdatingCart
const UpdateCart = async (data) => {
  try {

    await CustomerDataModel
    .updateOne(
      {_id: data.id, "cart.id": data.itemId},
      { $set: { "cart.$": { id: data.itemId, cartQty: data.data.medicineQTY, list: data.data.e } } }
    )
    // .findById(data.id)
    // .findOneAndUpdate({ cart: {$elemMatch: { id: data.itemId }} }, {cart: [{id: data.itemId, cartQty: data.data.medicineQTY, list: data.data.e}]})

    return {status: "Successfull"}
  } catch (error) {
    console.log("Error in UpdatingCart", error);
    return error;
  }
}

// Deleting From Cart
const DeleteFromCart = async (data) => {
  try {
    console.log("data");
    console.log(data);

    await CustomerDataModel
    .updateOne({_id: data.id},
      {$pull: {cart: {id: data.itemId}}})

    return {status: "Successfull"}
  } catch (error) {
    console.log("Error in UpdatingCart", error);
    return error;
  }
}

module.exports = { getCustomer, getCustomerData, AddToCart, UpdateCart, DeleteFromCart }