// Importing Routes
const routes = require('./routes/route')

// Importing env file
require("dotenv").config();

// Accessing Express Packages
const express = require('express')
const app = express()

// Importing cors and using it.
const cors = require('cors')
app.use(cors())
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin",process.env.CLIENT_LOCATION);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.use(express.json())


// Importing Database
const mongoDB = require("./database/db")

// middleware or to set router
app.use("/", routes)

// Connecting MongoDB Server
mongoDB();

// Starting the server
app.listen(5000, ()=>{
  console.log("Server is running on port 5000.");
})