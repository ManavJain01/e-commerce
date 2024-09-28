const mongoose = require('mongoose')

const { Schema } = mongoose;

const AddressSchema = new Schema({
  houseNumber: String,
  area: String,
  city: String,
  state: String,
  landmark: String,
  pincode: String,
  saveas: String,
});

const PatientSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  gender: String
});

const CustomerDataSchema = new Schema({
  cart:{
    type: Array,
  },
  saveForLater:{
    type: Object,
  },
  refills:{
    type: Object
  },
  records:{
    type: Object
  },
  address: {
    type: [AddressSchema]
  },
  patient: {
    type: [PatientSchema]
  }
})

module.exports = mongoose.model('users_datas', CustomerDataSchema)