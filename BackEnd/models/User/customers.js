const mongoose = require('mongoose')

const { Schema } = mongoose;

const CustomerSchema = new Schema({
  name:{
    type: String,
  },
  phone:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  email:{
    type: String
  },
  age:{
    type: Number
  },
  gender:{
    type: String
  },
  date:{
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('users', CustomerSchema)