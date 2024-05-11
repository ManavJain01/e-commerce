// Importing Models
const MedicineModel = require('./models/medicines')
const PersonalCareModel = require('./models/personal_care')
const HealthConditionModel = require('./models/health_conditions')
const vitamins_supplementModel = require('./models/vitamins&supplements')
const DiabetesCareModel = require('./models/disbetes_care')
const HealthcareDeviceModel = require('./models/healthcare_devices')



//----------------------------------------------------------------------------------------------------------------------------------------
// Accessing Express and MongoDB Packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())


// Connecting MongoDB DataBase
mongoose.connect('mongodb://localhost:27017/dismefa')
.then(()=>console.log("MongoDB Connected."))
.catch(err => console.log("Mongo Error" + err))

//----------------------------------------------------------------------------------------------------------------------------------------

// Creating Categories

function getPersonalCare(){
  return PersonalCareModel.find({})
  .then(users => { return users })
  .catch(err => res.json(err))
}

function getHealthCondition(){
  return HealthConditionModel.find({})
  .then(users => { return users })
  .catch(err => res.json(err))
}

function getVitamins_supplement(){
  return vitamins_supplementModel.find({})
  .then(users => { return users })
  .catch(err => res.json(err))
}

function getDiabetesCare(){
  return DiabetesCareModel.find({})
  .then(users => { return users })
  .catch(err => res.json(err))
}

function getHealthcareDevice(){
  return HealthcareDeviceModel.find({})
  .then(users => { return users })
  .catch(err => res.json(err))
}

async function getCategories(){
  let Categories = [];

  Categories.push(await getPersonalCare())
  Categories.push(await getHealthCondition())
  Categories.push(await getVitamins_supplement())
  Categories.push(await getDiabetesCare())
  Categories.push(await getHealthcareDevice())
  return Categories;
}



// Reading User
app.get('/Medicines', (req, res)=>{
  MedicineModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get('/Categories', (req, res)=>{
  async function getItem(){
    res.json(await getCategories());
  }
  getItem();
})

app.get('/Categories/:category', (req, res)=>{
  console.log("hi");
  // const id = req.params.id;
  // console.log(id);
})






//----------------------------------------------------------------------------------------------------------------------------------------
// Starting the server
app.listen(5000, ()=>{
  console.log("Server is running on port 5000.");
})