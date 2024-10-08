// Accessing MongoDB Packages
const mongoose = require('mongoose')

// Importing env file
require("dotenv").config();
const mongoURI = process.env.MONGODB_URI

// Importing Errors file
const DatabaseError = require('../errors/databaseErrors');

// Connecting MongoDB DataBase
const mongoDB = async () => {
  try {
    await mongoose.connect(`${mongoURI}/dismefa`);
    console.log("MongoDB Connected.");
    
  } catch (error) {
    console.log("err while connecting database:", error.message);
    throw new DatabaseError('Failed to connect to MongoDB', 500);
  }
}

module.exports = mongoDB;