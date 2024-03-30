import crocinLogo from '../Images/crocin.jpg'
import limceeLogo from '../Images/limcee.webp'

export const medicines = [{
  id: 1,
  type: 'Medicines',
  list: [{
    name: 'Crocin Advance 500mg',
    company: 'Herb Edge Health Care Pvt. Ltd.',
    MRP: 19.93,
    Units: 'Pack of 15 Units',
    QTY: 10,
    prescription: 'required',
    img: crocinLogo
  },{
    name: 'Limcee',
    company: 'Abbott',
    MRP: 23,
    Units: 'Pack of 15 Units',
    QTY: 5,
    prescription: 'not-required',
    img: limceeLogo
  }]
},{
  id: 2,
  type: 'Personal care',
  list:[{
    name:"skin care",
    subList:[{
      subItems:"Skin Cream",
    },{
      subItems:"Sunscreen",
    },{
      subItems:"Face Wash",
    },{
      subItems:"Skin and Body Soap",
    },{
      subItems:"Acne Care",
    },{
      subItems:"Body Lotions",
    },{
      subItems:"Moisturising Lotion",
    },{
      subItems:"Moisturising Cream",
    },{
      subItems:"Mosquito Repellent",
    },{
      subItems:"Moisturising Gel",
    },{
      subItems:"Body Wash",
    }]
  },{
    name:"hair care",
    subList:[{
      subItems:"Hair Oils",
    },{
      subItems:"Hair Shampoo",
    },{
      subItems:"Hair Conditioners",
    },{
      subItems:"Hair Supplements",
    },{
      subItems:"Hair Color",
    },{
      subItems:"Hair Serium",
    },{
      subItems:"Hair Mask",
    },{
      subItems:"Hair Solutions",
    }]
  },{
    name:"Baby and Mom care",
    subList:[{
      subItems:"Baby Diapers and Wipes",
    },{
      subItems:"Baby Lotion and Moisturising Cream"
    },{
      subItems:"Baby Bath Essentials"
    },{
      subItems:"Baby Skin Care"
    },{
      subItems:"Baby and Infant Food"
    },{
      subItems:"Baby Healthcare"
    },{
      subItems:"Women Multivitamins"
    },{
      subItems:"Ovulation Test Kit and Women Intimate Care"
    },{
      subItems:"Sanitary Pads"
    },{
      subItems:"Nutritional Drinks"
    }]
  },{
    name:"Oral care",
    subList:[{
      subItems:"Tooth Paste"
    },{
      subItems:"Mouth Ulcer Gel"
    },{
      subItems:"Mouthwash"
    },{
      subItems:"Toothache and Gum Pain"
    },{
      subItems:"Tooth Brush"
    },{
      subItems:"Gargle Solution"
    }]
  },{
    name:"Elderly Care",
    subList:[{
      subItems:"Orthopaedic Supports"
    },{
      subItems:"Adult Diapers"
    },{
      subItems:"Footwear"
    },{
      subItems:"Mobility and Support Accessories"
    },{
      subItems:"Urinary Support and Care"
    }]
  }] 
},{
  id: 3,
  type: 'Health Conditions',
  list:[{
    name:"Bone and Joint Care"
  },{
    name:"Digestive Care",
    subList:[{
      subItems:"Pre and Probiotics"
    },{
      subItems:"Acidity"
    },{
      subItems:"Gas"
    },{
      subItems:"Constipation"
    },{
      subItems:"Loose Motion/Diarrhoea"
    },{
      subItems:"Digestive Fibres"
    },{
      subItems:"Digestive Enzymes"
    }]
  },{
    name:"Eye Care",
    subList:[{
      subItems:"Eye Lubricant Drops"
    },{
      subItems:"Lens Solution"
    },{
      subItems:"Safety Eye Wear"
    },{
      subItems:"Eye Cream"
    },{
      subItems:"Eye Vitamins and Supplements"
    },{
      subItems:"Eye Drops"
    },{
      subItems:"Eye Ointment and Gel"
    }]
  },{
    name:"Pain Relief"
  },{
    name:"Smoking Cessation",
    subList:[{
      subItems:"Nicotine Patch"
    },{
      subItems:"Nicotine Gum"
    },{
      subItems:"Nicotine Lozenges"
    }]
  },{
    name:"Liver Care"
  },{
    name:"Stomach Care"
  },{
    name:"Cold and Cough",
    subList:[{
      subItems:"Cough Syrups"
    },{
      subItems:"Chest Rubs and BAlms"
    },{
      subItems:"Nasal Spray"
    },{
      subItems:"Lozenges"
    },{
      subItems:"Inhalant Capsules"
    },{
      subItems:"Cold and Cough Tablets"
    }]
  },{
    name:"Heart Care"
  },{
    name:"Kidney Care"
  },{
    name:"Piles, Fissures & Fistula"
  },{
    name:"Respiratory Care"
  },{
    name:"Mental Wellness"
  },{
    name:"Derma Care"
}]
},{
  id: 4,
  type: 'Vitamins & Supplements',
  list:[{
    name:"Multivitamins, Multiminerals and Antioxidants"
  },{
    name:"Calcium & Minerals"
  },{
    name:"Vitamin A to Z"
  },{
    name:"Protein Supplements"
  },{
    name:"Supplement Power"
  },{
    name:"Vitamin B12 and B Complex"
  },{
    name:"Mineral Supplements"
  },{
    name:"Immunity Boosters"
  },{
    name:"Omega and Fish Oil"
}]
},{
  id: 5,
  type: 'Diabetes Care',
  list:[{
    name:"Test Strips and Lancets"
  },{
    name:"Blood Glucose Monitors"
  },{
    name:"Diabetic Diet"
  },{
    name:"Sugar Substitutes"
  },{
    name:"Diabetes Ayurvedic Medicines"
  },{
    name:"Homeopathy"
  },{
    name:"Syringes and Pens"
}]
},{
  id: 6,
  type: 'Healthcare Devices',
  list:[{
    name:"BP Monitors"
  },{
    name:"Nebulizers and Vaporizers"
  },{
    name:"Supports and Braces"
}]
},{
  id: 7,
  type: 'Health Article',
}]