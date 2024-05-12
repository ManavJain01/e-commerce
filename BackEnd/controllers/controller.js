// Importing Services
const service = require('../service/service')

const findAllMedicines = async (req, res) => {
  const result = await service.getMedicines();
  if(result){
    res.send(result)
  } else {
    console.log("Medicines not found");
    res.send("Medicines not found")
  }
}

const findAllCategory = async (req, res) => {
  const result = await service.getAllCategories();
  if(result){
    res.send(result)
  } else {
    console.log("Categories not found");
    res.send("Categories not found")
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
module.exports = { findAllMedicines, findAllCategory, findCategory }