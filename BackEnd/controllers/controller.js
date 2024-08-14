// Importing Services
const service = require('../service/service')

// Navbar Structure Controller
const findNavOptions = async (req, res) => {
  try {
    const result = await service.getNavOptions();
    res.status(200).send(result);

  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error.message);
  }
}

// Search Controller
const searchData = async (req, res) => {
  try {
    const result = await service.getSearchData(req.query.query);
    res.status(200).send(result);

  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error.message);
  }
}

// Medicines Controller
const findAllMedicines = async (req, res) => {
  try {
    const result = await service.getMedicines();
    res.status(200).send(result)

  } catch (error) {
    console.error("Medicines not found: ", error.message);
    res.status(400).send("Medicines not found")
  }
}

// Categories Controllers
const findAllCategory = async (req, res) => {
  try {
    const result = await service.getAllCategories();
    res.status(200).send(result)

  } catch (error) {
    console.error("Categories not found: ", error.message);
    res.status(400).send("Categories not found")
  }
}


const findCategory = async (req, res) => {
  try {
    if(Array.isArray(req.body.data)) result = await service.getCategory(req.body.data[1], req.body.data[0]);
    else result = await service.getCategory(req.body.data);
  
  
    if(result){
      res.status(200).send(result)
    } else {
      const msg = req.body.data + " not found!";
      console.log(msg);
      res.status(400).send(msg)
    }
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error.message);
  }
}

// Exporting controllers
module.exports = { findNavOptions, findAllMedicines, findAllCategory, findCategory, searchData }