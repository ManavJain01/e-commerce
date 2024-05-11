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

function getAPI(Model){
  return Model.find({})
  .then(users => { return users })
  .catch(err => res.json(err))
}

async function getCategories(){
  let Categories = [];

  Categories.push(await getAPI(PersonalCareModel))
  Categories.push(await getAPI(HealthConditionModel))
  Categories.push(await getAPI(vitamins_supplementModel))
  Categories.push(await getAPI(DiabetesCareModel))
  Categories.push(await getAPI(HealthcareDeviceModel))
  return Categories;
}

async function getCategory(Model, category, res){
  Model.find({$or: [
    {'category': category},
    {'item' : category},
    { subitems: {$all: [ { $elemMatch: {item: category}} ]}}
  ]})
  .then(users => res.json(users))
  .catch(err => res.json(err))

  // var data = await Model.aggregate([
  //   {
  //     // $lookup: {
  //     //   from: "health_conditions",
  //     //   localField: "item",
  //     //   foreignField: "item",
  //     //   as: "item"
  //     // }

  //     // $lookup: {
  //     //   from: "health_conditions",
  //     //   let: {
  //     //     "item": "$item"
  //     //   },
  //     //   "pipeline": [
  //     //     {
  //     //       item: category
  //     //     }
  //     //   ],
  //     //   as: "item"
  //     // }
  //   }
  // ])

  // res.json(data);
}



// Reading User
app.get('/Medicines', (req, res)=>{
  MedicineModel.find({})
  .then(users => res.json(users))
  .catch(err => {console.log("hi")})
})

app.get('/Categories', (req, res)=>{
  async function getItem(){
    res.json(await getCategories());
  }
  getItem();
})

app.get('/Categories/:category', (req, res)=>{
  const category = req.params.category;

  getCategory(PersonalCareModel ,category, res)
})


// [
//   {
//     $lookup: {
//       from: PersonalCareModel,
//       localField: "item",
//       foreignField: "item",
//       as: "item"
//     },
//     {
//       from: HealthConditionModel,
//       localField: "item",
//       foreignField: "item",
//       as: "item"
//     }
//   }
// ]



//----------------------------------------------------------------------------------------------------------------------------------------
// Starting the server
app.listen(5000, ()=>{
  console.log("Server is running on port 5000.");
})