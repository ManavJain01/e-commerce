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
  email:{
    type: String,
    unique: true
  },
  cart:{
    type: Object
  },
  signupLocation:{
    type: Object,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('users', CustomerSchema)