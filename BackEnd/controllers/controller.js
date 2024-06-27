// Importing Services
const service = require('../service/service')

// Navbar Structure Controller
const findNavOptions = async (req, res) => {
  try {
    const result = await service.getNavOptions();
    res.status(200).send(result);

  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

// Customer Controller
const findCustomer = async (req, res) => {
  try {
    const result = await service.getCustomer(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

// Medicines Controller
const findAllMedicines = async (req, res) => {
  try {
    const result = await service.getMedicines();
    res.status(200).send(result)

  } catch (error) {
    console.log("Medicines not found");
    res.status(400).send("Medicines not found")
  }
}

// Categories Controllers
const findAllCategory = async (req, res) => {
  try {
    const result = await service.getAllCategories();
    res.status(200).send(result)

  } catch (error) {
    console.log("Categories not found");
    res.status(400).send("Categories not found")
  }
}


const findCategory = async (req, res) => {
  let result;
  if(Array.isArray(req.body.data)) result = await service.getCategory(req.body.data[1], req.body.data[0]);
  else result = await service.getCategory(req.body.data);


  if(result){
    res.send(result)
  } else {
    const msg = req.body.data + " not found!";
    console.log(msg);
    res.send(msg)
  }
}


// Exporting controllers
module.exports = { findNavOptions, findCustomer, findAllMedicines, findAllCategory, findCategory }