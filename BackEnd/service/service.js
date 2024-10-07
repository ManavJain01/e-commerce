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

async function getCategory(title, category, subCategory){
  try {
    const Model = await getModel(title);
    
    if(subCategory){
      const products = await Model.find(
        { item: subCategory },
        'subitems'
      );
      return products;
    
    } else if(category){
      const products = await Model.find(
        { subCategory: category },
        'subitems'
      );
      return products;
    }

    const products = await Model.find({}, 'subitems');
    return products;
  } catch (error) {
    throw error;
  }
}


module.exports = { getSearchData, getNavOptions, getFilterService, getMedicines, getCategory }