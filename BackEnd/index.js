const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/dismefa')

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const UserModel = mongoose.model("dismefa", UserSchema)

app.get("/getUsers", (req, res)=>{
  UserModel.find({}).then(function(users){
    res.json(users)
  }).catch(function(err){
    console.log(err);
  })
})

app.listen(5000, ()=>{
  console.log("Server is running on port 5000.");
})