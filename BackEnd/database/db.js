// Accessing MongoDB Packages
const mongoose = require('mongoose')

// Importing env file
require("dotenv").config();
const mongoURI = process.env.MONGODB_URI

// Connecting MongoDB DataBase
const mongoDB = async () => {
  try {
    await mongoose.connect(`${mongoURI}/dismefa`);
    console.log("MongoDB Connected.");
    
  } catch (error) {
    console.log("err:", error);
  }
}

module.exports = mongoDB;