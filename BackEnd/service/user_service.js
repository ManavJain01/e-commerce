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

// Update The Customer
const getCustomerUpdated = async (data) => {
  try {
    await CustomerModel.findByIdAndUpdate(data.id, {
      address: data.address1,
      age: data.age,
      email: data.email,
      gender: data.gender,
      name: data.name
    });

  } catch (error) {
    return error;
  }
}

// Fetch Cart Data
const getCartData = async (token) => {
  try {
    const id = jwt.decode(token);

    jwt.verify(token, jwtSecret, (err, id) => {
      if (err) {
        throw new Error('Token verification failed:', err);
      }
    });

    const customer = await CustomerDataModel.findById(id).select('cart -_id');

    return await CustomerDataModel.findById(id).select('cart -_id');
  } catch (error) {
    console.log("Error in FetchingCartData", error);
    return error;
  }
}

// AddToCart
const AddToCart = async (data) => {
  try {
    const id = jwt.decode(data.id);

    jwt.verify(data.id, jwtSecret, (err, id) => {
      if (err) {
        throw new Error('Token verification failed:', err);
      }
    });

    await CustomerDataModel.findByIdAndUpdate(id, {$push: {cart: data.data}}); 
    return {status: "Successfull"}
  } catch (error) {
    console.log("Error in AddToCart", error);
    return error;
  }
}

// UpdatingCart
const UpdateCart = async (data) => {
  try {

    const id = jwt.decode(data.id);

    jwt.verify(data.id, jwtSecret, (err, id) => {
      if (err) {
        throw new Error('Token verification failed:', err);
      }
    });

    await CustomerDataModel
    .updateOne(
      {_id: id, "cart.id": data.itemId},
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
    const id = jwt.decode(data.id);

    jwt.verify(data.id, jwtSecret, (err, id) => {
      if (err) {
        throw new Error('Token verification failed:', err);
      }
    });

    await CustomerDataModel
    .updateOne({_id: id},
      {$pull: {cart: {id: data.itemId}}})

    return {status: "Successfull"}
  } catch (error) {
    console.log("Error in DeleteFromCart", error);
    return error;
  }
}

const getOrders = async (_id) => {
  try {
    const id = jwt.decode(_id);

    jwt.verify(_id, jwtSecret, (err, id) => {
      if (err) {
        throw new Error('Token verification failed:', err);
      }
    });

    return  await CustomerDataModel.findById(id).select('orders -_id');
  } catch (error) {
    console.log("Error in FetchingOrders", error);
    return error;
  }
}

const getRefills = async (_id) => {
  try {
    const id = jwt.decode(_id);

    jwt.verify(_id, jwtSecret, (err, id) => {
      if (err) {
        throw new Error('Token verification failed:', err);
      }
    });

    return  await CustomerDataModel.findById(id).select('refills -_id');
  } catch (error) {
    console.log("Error in FetchingRefills", error);
    return error;
  }
}

const getSaveForLater = async (_id) => {
  try {
    const id = jwt.decode(_id);

    jwt.verify(_id, jwtSecret, (err, id) => {
      if (err) {
        throw new Error('Token verification failed:', err);
      }
    });

    return  await CustomerDataModel.findById(id).select('saveForLater -_id');
  } catch (error) {
    console.log("Error in FetchingSaveForLater", error);
    return error;
  }
}

module.exports = { getCustomer, getCustomerData, getCustomerUpdated, getCartData, AddToCart, UpdateCart, DeleteFromCart, getOrders, getRefills, getSaveForLater }