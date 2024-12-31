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

const findAllFilters = async (req, res) => {
  try {
    const {title, category, subCategory} = req.query;
    const result = await service.getFilterService(title, category, subCategory);
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

const findCategory = async (req, res) => {
  try {
    const { title, category, subCategory } = req.query;
    
    const result = await service.getCategory(title, category, subCategory);
  
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

const addReviewController = async (req, res) => {
  try {
    const result = await service.addReviewService(req.body);
    res.status(200).send(result)

  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error.message);
  }
}

// Exporting controllers
module.exports = { findNavOptions, findAllFilters, findAllMedicines, findCategory, searchData, addReviewController }