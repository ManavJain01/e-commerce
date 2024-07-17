// Importing Models
  // Navbar Structure
const NavOptionModel = require('../models/categories')

  // Products
const MedicineModel = require('../models/products/medicines')
const PersonalCareModel = require('../models/products/personal_care')
const HealthConditionModel = require('../models/products/health_conditions')
const vitamins_supplementModel = require('../models/products/vitamins&supplements')
const DiabetesCareModel = require('../models/products/disbetes_care')
const HealthcareDeviceModel = require('../models/products/healthcare_devices')

// Sending Navbar Structure
const getNavOptions = async () => {
  try {
    return await NavOptionModel.find({})
  } catch (error) {
    return error
  }
}

// Sending Medicines
const getMedicines = async () => {
  try {
    return await MedicineModel.find({})  
  } catch (error) {
    return error
  }
}


// Creating Categories
  // Functions for Services
  const getFilters = async (filter, Model) => {
    const categories = await Model.find({}).distinct("subCategory");
    if(filter == 'Personal care' || filter == 'Health Conditions' || filter == 'Vitamins & Supplements' || filter == 'Diabetes Care' || filter == 'Healthcare Devices'){
      const subCategories = await Model.find({}).distinct("item");
      return {category: categories, subCategory: subCategories}
    }else{
      let subCategories = await Model.find({subCategory: filter}).distinct('item');
      if(subCategories.length == 0){
        subCategories = await Model.find({item: filter}).distinct('item');
      }
      return {category: categories, subCategory: subCategories}
    }
  }

  async function getAPI(Model){
    try {
      return await Model.find({});
    } catch (error) {
      return error;
    }
  }

async function getAllCategories(){
  let Categories = [];

  Categories.push(await getAPI(PersonalCareModel))
  Categories.push(await getAPI(HealthConditionModel))
  Categories.push(await getAPI(vitamins_supplementModel))
  Categories.push(await getAPI(DiabetesCareModel))
  Categories.push(await getAPI(HealthcareDeviceModel))
  
  return Categories;
}


async function getModel(category){
  try {
    if(category == 'Personal care') return await PersonalCareModel;
    else if(category == 'Health Conditions') return await HealthConditionModel;
    else if(category == 'Vitamins & Supplements') return await vitamins_supplementModel;
    else if(category == 'Diabetes Care') return await DiabetesCareModel;
    else if(category == 'Healthcare Devices') return await HealthcareDeviceModel;
  } catch (error) {
    console.log("Error in getModel Function", error);
  }
}


async function getCategory(category, subCategory){
  try {
    const Model = await getModel(category)
    
    if(typeof subCategory === 'string'){
      let data = await Model.find({subCategory: subCategory})
      const filters = await getFilters(subCategory, Model);
      
      if(data.length != 0){
        return {data: data, filters: filters};
      }else{
        return {data: await Model.find({item: subCategory}), filters: filters};
      }
    }else{
      const filters = await getFilters(category, Model);
      data = await getAPI(Model);
      return {data: data, filters: filters, filters: filters}
    }

  } catch (error) {
    return error;
  }
}


module.exports = { getNavOptions, getMedicines, getAllCategories, getCategory }