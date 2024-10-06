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
    return await CustomerModel.findById(_id);
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

    const userAsPatient = await CustomerDataModel.findOneAndUpdate(
      { _id: data._id, 'patient._id': data._id },
      { $set: { 'patient.$': data } }, // Update the found address
      { new: true }
    );

    if(!userAsPatient){
      await CustomerDataModel.findOneAndUpdate(
        { _id: data._id },
        { $push: { patient: { ...data, _id: data._id } } },
        { new: true } // This option returns the updated document
      );
    }
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
    throw error;
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
    const orders = await OrderModel.findById(id).select(['orders']);

    if (orders && Array.isArray(orders.orders)) {
      const completedOrders = orders.orders
        .filter(order => order.paymentStatus === "Completed")
        .map(order => {
          const year = order?.orderTime.getFullYear();
          const month = String(order?.orderTime.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
          const day = String(order?.orderTime.getDate()).padStart(2, '0');
          const formattedDate = `${day}-${month}-${year}`;
          return {
            ...order.toObject(),  // Convert Mongoose document to plain JS object
            orderTime: formattedDate
          };
        });
      return completedOrders;
    }
  } catch (error) {
    throw error;
  }
}

const cancelOrderService = async (_id, orderId) => {
  try {
    await OrderModel.findByIdAndUpdate(
      { _id: _id },
      { $pull: { orders: { _id: orderId } } },
      { new: true }
    );
  } catch (error) {
    throw error;
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
    throw error;
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
  try {
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
  
    return "success";
  } catch (error) {
    throw error;
  }
}

const deleteAddress = async (_id, address_id) => {
  try {
    await CustomerDataModel.findOneAndUpdate(
      { _id: _id }, // Find the document by its _id
      { $pull: { address: { _id: address_id } } }, // Pull the specific address with the matching _id
      { new: true } // Return the updated document after deletion
    );

    await CustomerDataModel.findByIdAndUpdate(
      { _id: _id, "delivery_details.address._id": address_id },
      { $unset: { "delivery_details.address": "" } }, // Unset the address field within delivery_details
      { new: true, select: ["delivery_details"] } // Return the updated document with selected fields
    );
  
    return "success";
  } catch (error) {
    throw error;
  }
}

const showAllAddress = async (_id) => {
  try {
    const addresses = await CustomerDataModel
      .findById(_id)
      .select(["address"]);
  
    return addresses; 
  } catch (error) {
    throw error;
  } 
}

const savePatient = async (_id, patient) => {
  try {
    if(patient?._id){
      await CustomerDataModel.findOneAndUpdate(
        { _id: _id, 'patient._id': patient._id },
        { $set: { 'patient.$': patient } }, // Update the found address
        { new: true }
      );
      return;
    }

    await CustomerDataModel.findOneAndUpdate(
      { _id: _id },
      { $push: { patient: { ...patient, _id: new mongoose.Types.ObjectId() } } },
      { new: true } // This option returns the updated document
    );
  } catch (error) {
    throw error;
  }
}

const saveUserAsPatient = async (data, _id) => {  
  const { patient } = data;
  let userDetails = { name: data?.name, age: data?.age, gender: data?.gender, email: data?.email, _id: data?._id };

  try {
    if(patient) await savePatient(_id, patient);

    if(userDetails?._id){      
      await CustomerDataModel.findOneAndUpdate(
        { _id: _id, 'patient._id': userDetails._id },
        { $set: { 'patient.$': userDetails } }, // Update the found address
        { new: true }
      );
    } else if(userDetails?.name !== "") {
      await CustomerDataModel.findOneAndUpdate(
        { _id: _id },
        { $push: { patient: { ...userDetails, _id: _id } } },
        { new: true } // This option returns the updated document
      );
    }

    if(userDetails?.name !== ""){
      await CustomerModel.findByIdAndUpdate(_id, {
        age: userDetails?.age,
        email: userDetails?.email,
        gender: userDetails?.gender,
        name: userDetails?.name
      });
    }
  
    return "success"; 
  } catch (error) {
    throw error;
  }
  
}

const deletePatient = async (_id, patient_id) => {
  try {
    const assignedPatient = await CustomerDataModel.findOne(
      { _id: _id, "delivery_details.patient._id": patient_id }
    );

    if(assignedPatient) throw new Error("Patient is already assigned.");

    await CustomerDataModel.findOneAndUpdate(
      { _id: _id }, // Find the document by its _id
      { $pull: { patient: { _id: patient_id } } }, // Pull the specific address with the matching _id
      { new: true } // Return the updated document after deletion
    );
  
    return "success" ; 
  } catch (error) {
    throw error;
  }
}

const showAllPatients = async (_id) => {
  try {
    return await CustomerDataModel
      .findById(_id)
      .select(["patient"]);
  } catch (error) {
    throw error;
  }
}

const setDeliveryDetails = async (_id, details) => {
  try {
    await CustomerDataModel.findByIdAndUpdate(
      _id,
      { delivery_details: details }, // Set the delivery details
      { new: true, select: ["delivery_details"] } // Return the updated document with selected fields
    );
  } catch (error) {
    throw error;
  }
}

const getDeliveryDetails = async (_id) => {
  try {
    return await CustomerDataModel
      .findById(_id)
      .select(["delivery_details"]);
  } catch (error) {
    throw error;
  }
}

module.exports = { getCustomer, getSignup, getLogin, getCustomerDetails, getCustomerUpdated, getCartData, AddToCart,
  UpdateCart, DeleteFromCart, getOrders, cancelOrderService, getRefills, getSaveForLater, saveAddress, deleteAddress, showAllAddress,
  saveUserAsPatient, deletePatient, showAllPatients, setDeliveryDetails, getDeliveryDetails };