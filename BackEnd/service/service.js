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
  try {
    let phone = data.phone;
    let userData = await CustomerModel.findOne({phone});
    if(userData == null){
      await CustomerModel.create({
        phone: data.phone,
        signupLocation: data.location
      })

      const authToken = jwt.sign(data.phone, jwtSecret)
      return { authToken: authToken }
    }else{
      const authToken = jwt.sign(userData.phone, jwtSecret)
      return { data: userData, authToken: authToken };
    }
  } catch (error) {
    console.log("Error Occurred:", error);
    return error
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


module.exports = { getNavOptions, getCustomer, getMedicines, getAllCategories, getCategory }