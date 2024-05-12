// Importing Routes
const routes = require('./routes/route')

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


// // middleware or to set router
app.use("/", routes)




// Starting the server
app.listen(5000, ()=>{
  console.log("Server is running on port 5000.");
})