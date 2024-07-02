// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN

// Importing Models
  // Navbar Structure
const NavOptionModel = require('../models/categories')
  // Customers
const CustomerModel = require("../models/User/customers")
const CustomerDataModel = require("../models/User/customer_data")
  // Products
const MedicineModel = require('../models/products/medicines')
const PersonalCareModel = require('../models/products/personal_care')
const HealthConditionModel = require('../models/products/health_conditions')
const vitamins_supplementModel = require('../models/products/vitamins&supplements')
const DiabetesCareModel = require('../models/products/disbetes_care')
const HealthcareDeviceModel = require('../models/products/healthcare_devices')

// Sending Navbar Structure
const getNavOptions = async () => {
  try {
    return await NavOptionModel.find({})
  } catch (error) {
    return error
  }
}

// Sending Medicines
const getMedicines = async () => {
  try {
    return await MedicineModel.find({})  
  } catch (error) {
    return error
  }
}

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

const getCustomerData = async (data) => {
  try {
    const _id = data._id;
    let userData = await CustomerDataModel.findById(_id);

    if(userData == null){
      userData = await CustomerDataModel.create({
        _id: _id,
        cart: {},
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

const getCartUpdated = async (data) => {
  const cartData = data.data;
  try {
    if(data.message === 'add'){

    }else if(data.message === 'update'){

    }else if(data.message === 'remove'){

    }else{
      return "message is bad"
    }
  } catch (error) {
    return error;
  }
}

// Creating Categories
function getAPI(Model){
  return Model.find({})
  .then(users => { return users })
  .catch(err => res.json(err))
}

async function getAllCategories(){
  let Categories = [];

  Categories.push(await getAPI(PersonalCareModel))
  Categories.push(await getAPI(HealthConditionModel))
  Categories.push(await getAPI(vitamins_supplementModel))
  Categories.push(await getAPI(DiabetesCareModel))
  Categories.push(await getAPI(HealthcareDeviceModel))
  
  return Categories;
}


function getModel(category){
  if(category == 'Personal care') return PersonalCareModel;
  else if(category == 'Health Conditions') return HealthConditionModel;
  else if(category == 'Vitamins & Supplements') return vitamins_supplementModel;
  else if(category == 'Diabetes Care') return DiabetesCareModel;
  else if(category == 'Healthcare Devices') return HealthcareDeviceModel;
}


function getCategory(category, subCategory){
  const Model = getModel(category)
  
  if(typeof subCategory === 'string'){
    return Model.find({$or: [
      // {'item' : subCategory},
      // { subsitems: {$all: [ { $elemMatch: {item: subCategory}} ]}}
      {"subitems.item" :  "Skin Cream"}
    ]})
    .then(users => { 
      console.log(users);
      return users })
    .catch(err => { return err })
    
  }else{
    return Model.find({ 'category': category })
    .then(users => { return users })
    .catch(err => { return err })
  }
}


module.exports = { getNavOptions, getCustomer, getCustomerData, getCartUpdated, getMedicines, getAllCategories, getCategory }