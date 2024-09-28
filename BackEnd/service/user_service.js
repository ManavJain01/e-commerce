const mongoose = require('mongoose');

// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN

// Customers Models
const CustomerModel = require("../models/User/customers");
const CustomerDataModel = require("../models/User/customer_data");
const OrderModel = require("../models/orders");


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
    if(await CustomerModel.findOne({phone})){
      throw new Error("User Already Exist");
    }

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

    // Validating of user existance
    const user = await CustomerModel.findOne({
      phone: phone,
    });

    // Validating of user's password
    if(user && user.password === password){
      const authToken = jwt.sign((user._id).toString(), jwtSecret);
      return { data: user, authToken: authToken };

    }else if(user && user.password !== password){
      // if password is Incorrect
      throw new Error("Password is Incorrect");
    }else{
      // If User does not found
      throw new Error("User does not Exist");
    }
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
    await CustomerModel.findByIdAndUpdate(data._id, {
      age: data.age,
      email: data.email,
      gender: data.gender,
      name: data.name
    });

    await savePatient(data, data._id);
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
    const orders = await OrderModel.findById(id)
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

const saveAddress = async (data, _id) => {
  if(data?._id) {    
    await CustomerDataModel.findOneAndUpdate(
      { _id: _id, 'address._id': data?._id },
      { $set: { 'address.$': data } }, // Update the found address
      { new: true }
    );

  } else {
    await CustomerDataModel.findOneAndUpdate(
      { _id: _id },
      { $push: { address: { ...data, _id: new mongoose.Types.ObjectId() } } },
      { new: true } // This option returns the updated document
    );
  }


  return "success"  
}

const deleteAddress = async (_id, address_id) => {
  await CustomerDataModel.findOneAndUpdate(
    { _id: _id }, // Find the document by its _id
    { $pull: { address: { _id: address_id } } }, // Pull the specific address with the matching _id
    { new: true } // Return the updated document after deletion
  );

  return "success"  
}

const showAllAddress = async (_id) => {  
  const addresses = await CustomerDataModel
    .findById(_id)
    .select(["address"]);

  return addresses; 
}

const savePatient = async (data, _id) => {  
  let newPatient = { name: data?.name, age: data?.age, gender: data?.gender, email: data?.email, _id: data?._id };
  const { patient } = data;
  
  if(newPatient && newPatient?.name?.length >= 1 && newPatient?.gender?.length >= 1){
    if(newPatient?._id){      
      const updatedPatient = await CustomerDataModel.findOneAndUpdate(
        { _id: _id, 'patient._id': newPatient._id },
        { $set: { 'patient.$': newPatient } }, // Update the found address
        { new: true }
      );

      if(!updatedPatient) {
        await CustomerDataModel.findOneAndUpdate(
          { _id: _id },
          { $push: { patient: { ...newPatient, _id: _id } } },
          { new: true } // This option returns the updated document
        );
      }
    } else {
      const theUserId = await CustomerModel.findById(_id);
      
      await CustomerDataModel.findOneAndUpdate(
        { _id: theUserId._id },
        { $push: { patient: { ...newPatient, _id: theUserId._id } } },
        { new: true } // This option returns the updated document
      );
      
      newPatient._id = theUserId._id;
      await getCustomerUpdated(newPatient);
    }
  }


  if(patient && patient?._id){
    await CustomerDataModel.findOneAndUpdate(
      { _id: _id, 'patient._id': patient._id },
      { $set: { 'patient.$': patient } }, // Update the found address
      { new: true }
    );
  } else if(patient) {
    await CustomerDataModel.findOneAndUpdate(
      { _id: _id },
      { $push: { patient: { ...patient, _id: new mongoose.Types.ObjectId() } } },
      { new: true } // This option returns the updated document
    );
  }
  return "success";
}

const deletePatient = async (_id, patient_id) => {
  await CustomerDataModel.findOneAndUpdate(
    { _id: _id }, // Find the document by its _id
    { $pull: { patient: { _id: patient_id } } }, // Pull the specific address with the matching _id
    { new: true } // Return the updated document after deletion
  );

  return "success"  
}

const showAllPatients = async (_id) => {
  const patients = await CustomerDataModel
    .findById(_id)
    .select(["patient"]);

  return patients; 
}

module.exports = { getCustomer, getSignup, getLogin, getCustomerDetails, getCustomerUpdated, getCartData, AddToCart, UpdateCart, DeleteFromCart, getOrders, getRefills, getSaveForLater, saveAddress, deleteAddress, showAllAddress, savePatient, deletePatient, showAllPatients };