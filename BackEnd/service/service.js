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


// Function to filter subitems based on search query
const filterSubitems = (items, query) => {
  return items.filter(item => {
    return (
      item.item.toLowerCase().includes(query.toLowerCase()) ||
      item.company.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
  });
};


// Search Functionality
const getSearchData = async (query) => {
  try {
    const medicineResults = await MedicineModel.find({ $text: { $search: query } });
    const personalCareResults = await PersonalCareModel.find({ $text: { $search: query } });
    const healthConditionResults = await HealthConditionModel.find({ $text: { $search: query } });
    const vitaminsSupplementResults = await vitamins_supplementModel.find({ $text: { $search: query } });
    const diabetesCareResults = await DiabetesCareModel.find({ $text: { $search: query } });
    const healthcareDeviceResults = await HealthcareDeviceModel.find({ $text: { $search: query } });

    // Filter subitems
    const filteredMedicineResults = medicineResults.map(result => ({
      ...result._doc,
    }));
    const filteredPersonalCareResults = personalCareResults.map(result => ({
      ...result._doc,
      subitems: filterSubitems(result.subitems, query),
    }));
    const filteredHealthConditionResults = healthConditionResults.map(result => ({
      ...result._doc,
      subitems: filterSubitems(result.subitems, query),
    }));
    const filteredVitaminsSupplementResults = vitaminsSupplementResults.map(result => ({
      ...result._doc,
      subitems: filterSubitems(result.subitems, query),
    }));
    const filteredDiabetesCareResults = diabetesCareResults.map(result => ({
      ...result._doc,
      subitems: filterSubitems(result.subitems, query),
    }));
    const filteredHealthcareDeviceResults = healthcareDeviceResults.map(result => ({
      ...result._doc,
      subitems: filterSubitems(result.subitems, query),
    }));

    return {
      medicines: filteredMedicineResults,
      personalCare: filteredPersonalCareResults,
      healthConditions: filteredHealthConditionResults,
      vitaminsSupplements: filteredVitaminsSupplementResults,
      diabetesCare: filteredDiabetesCareResults,
      healthcareDevices: filteredHealthcareDeviceResults,
    };
  } catch (error) {
    throw error.message;
  }
}

// Sending Navbar Structure
const getNavOptions = async () => {
  try {
    return await NavOptionModel.find({})
  } catch (error) {
    throw error.message;
  }
}

const getFilterService = async (category) => {
  try {
    const categories = await NavOptionModel.find(
      {item: category}
    )
    .select(["subitems.item"]);

    const subCategories = await NavOptionModel.find(
      {item: category}
    )
    .select(["subitems.subitems"]);

    return {categories: categories[0]?.subitems, subCategories: subCategories[0]?.subitems};  
  } catch (error) {
    throw error.message;
  }
}

// Sending Medicines
const getMedicines = async () => {
  try {
    return await MedicineModel.find({})  
  } catch (error) {
    throw error.message;
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
      throw error.message;
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
    throw `Error in getModel Function: ${error.message}`;
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
    throw error.message;
  }
}


module.exports = { getSearchData, getNavOptions, getFilterService, getMedicines, getAllCategories, getCategory }