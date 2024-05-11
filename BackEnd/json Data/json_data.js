// Accessing MongoDB Packages
const mongoose = require('mongoose')


// Connecting MongoDB DataBase
mongoose.connect('mongodb://localhost:27017/dismefa')
.then(()=>console.log("MongoDB Connected."))
.catch(err => console.log("Mongo Error" + err))



// Importing Models
// const CategoryModel = require('../models/categories')
const MedicineModel = require('../models/medicines')
const PersonalCareModel = require('../models/personal_care')
const HealthConditionModel = require('../models/health_conditions')
const vitamins_supplementModel = require('../models/vitamins&supplements')
const DiabetesCareModel = require('../models/disbetes_care')
const HealthcareDeviceModel = require('../models/healthcare_devices')



// Function To Get JSON Data
async function ExtractingJSON(Model){
  return await Model.find({})
  .then(users => {  return users  })
  .catch(err => console.log(err))
}


// Getting JSON Data
const MedicinesJSON = ExtractingJSON(MedicineModel)
const PersonalCareJSON = ExtractingJSON(PersonalCareModel)
const HealthConditionJSON = ExtractingJSON(HealthConditionModel)
const vitamins_supplementJSON = ExtractingJSON(vitamins_supplementModel)
const DiabetesCareJSON = ExtractingJSON(DiabetesCareModel)
const HealthcareDeviceJSON = ExtractingJSON(HealthcareDeviceModel)


// Exporting these JSON Data
module.exports =  ExtractingJSON