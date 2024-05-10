// Importing local files
const MedicinesJSON = require('./json Data/json_data')

//----------------------------------------------------------------------------------------------------------------------------------------
// Accessing Express Packages
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())


  console.log(MedicinesJSON);

// Reading User
// app.get('/', (req, res)=>{
//   res.json(MedicinesJSON)
// })



//----------------------------------------------------------------------------------------------------------------------------------------
// Starting the server
app.listen(5000, ()=>{
  console.log("Server is running on port 5000.");
})