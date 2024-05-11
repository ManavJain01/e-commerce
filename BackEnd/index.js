// Importing Models
const MedicineModel = require('./models/medicines')
// const PersonalCareModel = require('./models/personal_care')
const HealthConditionModel = require('./models/health_conditions')
const vitamins_supplementModel = require('./models/vitamins&supplements')
// const DiabetesCareModel = require('./models/disbetes_care')
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



// Reading User
app.get('/Medicines', (req, res)=>{
  MedicineModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})






//----------------------------------------------------------------------------------------------------------------------------------------
// Starting the server
app.listen(5000, ()=>{
  console.log("Server is running on port 5000.");
})