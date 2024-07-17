const mongoose = require('mongoose')

const { Schema } = mongoose;

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
  orders:{
    type: Object,
  }
})

module.exports = mongoose.model('users_datas', CustomerDataSchema)