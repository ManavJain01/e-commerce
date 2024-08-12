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
    throw error.message
  } finally {
    inProgress.delete(data.phone);
  }
}

// Fetch Customer's Data
const getCustomerDetails = async (_id) => {
  try {
    const id = jwt.decode(_id);

    jwt.verify(_id, jwtSecret, (err, id) => {
      if (err) {
        throw new Error('Token verification failed:', err);
      }
    });

    return await CustomerModel.findById(id);
  } catch (error) {
    throw error.message;
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
    throw error.message;
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
    throw `Error in FetchingCartData: ${error.message}`;
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
    throw error;
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
    console.log("", error);
    throw `Error in UpdatingCart: ${error.message}`;
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
    throw `Error in DeleteFromCart: ${error.message}`;
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

    // return await CustomerDataModel.findById(id).select('orders.paymentDetails -_id');
    const orders = await CustomerDataModel.findById(id)
    .select(['orders']);
    const completedOrders = orders.orders.filter(order => order.paymentStatus === "Completed");

    return completedOrders;
  } catch (error) {
    throw error.message;
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
    throw `Error in FetchingRefills: ${error.message}`;
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
    throw `Error in FetchingSaveForLater: ${error}`;
  }
}

module.exports = { getCustomer, getCustomerDetails, getCustomerUpdated, getCartData, AddToCart, UpdateCart, DeleteFromCart, getOrders, getRefills, getSaveForLater }