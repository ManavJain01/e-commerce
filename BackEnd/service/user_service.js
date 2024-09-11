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
  try {
    const phone = data.phone;
    const user = await CustomerModel.find({phone: phone});
    if(user)  return 'success';
    return 'not found';

  } catch (error) {
    throw error.message
  }
}

const getSignup = async (data) => {
  try {
    const { phone, password } = data;
    const user = await CustomerModel.create({
      phone: phone,
      password: password
    });

    const authToken = jwt.sign((user._id).toString(), jwtSecret);
    return { data: user, authToken: authToken };
  } catch (error) {
    throw error;
  }
}

const getLogin = async (data) => {
  try {
    const { phone, password } = data;

    const user = await CustomerModel.findOne({
      phone: phone,
      password: password
    });

    const authToken = jwt.sign((user._id).toString(), jwtSecret);
    return { data: user, authToken: authToken };
  } catch (error) {
    throw error; 
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

    let customerData = await CustomerDataModel.findById(id).select('cart -_id');
    if(customerData) return customerData;
    else{
      customerData = new CustomerDataModel({_id: id});
      await customerData.save();
    }    
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

module.exports = { getCustomer, getSignup, getLogin, getCustomerDetails, getCustomerUpdated, getCartData, AddToCart, UpdateCart, DeleteFromCart, getOrders, getRefills, getSaveForLater }