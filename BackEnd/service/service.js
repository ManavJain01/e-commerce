// Importing Models
const MedicineModel = require('../models/medicines')
const PersonalCareModel = require('../models/personal_care')
const HealthConditionModel = require('../models/health_conditions')
const vitamins_supplementModel = require('../models/vitamins&supplements')
const DiabetesCareModel = require('../models/disbetes_care')
const HealthcareDeviceModel = require('../models/healthcare_devices')

const getMedicines = () => {
  return MedicineModel.find({})
  .then(users => { return users })
  .catch(err => { return err })
}


// Creating Categories

function getAPI(Model){
  return Model.find({})
  .then(users => { return users })
  .catch(err => res.json(err))
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


function getModel(category){
  if(category == 'Personal care') return PersonalCareModel;
  else if(category == 'Health Conditions') return HealthConditionModel;
  else if(category == 'Vitamins & Supplements') return vitamins_supplementModel;
  else if(category == 'Diabetes Care') return DiabetesCareModel;
  else if(category == 'Healthcare Devices') return HealthcareDeviceModel;
}


function getCategory(category, subCategory){
  const Model = getModel(category)
  
  if(typeof subCategory === 'string'){
    // return Model.find({$or: [
    //   {'item' : subCategory},
    //   // { subsitems: {$all: [ { $elemMatch: {item: subCategory}} ]}}
    // ]})
    // .then(users => { return users })
    // .catch(err => { return err })

    // return Model.find({ "subitems.item" :  "Skin Cream"  })
    return Model.find({ subitems : { $elemMatch: { item: "Skin Cream"}}},
      { "subitems.$": 1 }
    )
    .then(users => { return users })
    .catch(err => { return err })
    
  }else{
    return Model.find({ 'category': category })
    .then(users => { return users })
    .catch(err => { return err })
  }


}


module.exports = { getMedicines, getAllCategories, getCategory }
  
  // var data = await Model.aggregate([{
  //     // $lookup: {
  //     //   from: "health_conditions",
  //     //   localField: "item",
  //     //   foreignField: "item",
  //     //   as: "item"
  //     // }

  //     // $lookup: {
  //     //   from: "health_conditions",
  //     //   let: {
  //     //     "item": "$item"
  //     //   },
  //     //   "pipeline": [
  //     //     {
  //     //       item: category
  //     //     }
  //     //   ],
  //     //   as: "item"
  //     // }
  //   }
  // ])
  
// [
//   {
//     $lookup: {
//       from: PersonalCareModel,
//       localField: "item",
//       foreignField: "item",
//       as: "item"
//     },
//     {
//       from: HealthConditionModel,
//       localField: "item",
//       foreignField: "item",
//       as: "item"
//     }
//   }
// ]