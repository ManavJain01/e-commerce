// Accessing Express and MongoDB Packages
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Connecting MongoDB DataBase
mongoose.connect('mongodb://localhost:27017/practice')
.then(()=>console.log("MongoDB Connected."))
.catch(err => console.log("Mongo Error" + err))

// Creating Schema and Model
const ItemSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  jobTitle: {
    type: String
  },
  gender: {
    type: String
  }
})

const ItemModel = mongoose.model("users", ItemSchema)


// Routes
app.get("/users", (req, res)=>{
  ItemModel.find({}).then(function(users){
    res.json(users)
  }).catch(function(err){
    console.log(err);
  })
})







// Starting the server
app.listen(5000, ()=>{
  console.log("Server is running on port 5000.");
})