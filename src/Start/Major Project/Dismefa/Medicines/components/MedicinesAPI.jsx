import crocinLogo from '../Images/crocin.jpg'
import limceeLogo from '../Images/limcee.webp'

import alograceLogo from '../Images/ALOGRACE.webp'
import borolineLogo from '../Images/BOROLINE.webp'
import laShieldLogo from '../Images/LA-SHIELD.webp'
import acneLogo from '../Images/ACNE-UV.webp'
import cetaphilLogo from '../Images/CETAPHIL.webp'
import dermadewLogo from '../Images/DERMADEW.webp'
import vibactLogo from '../Images/VIBACT-DS.webp'
import velgutLogo from '../Images/VELGUT.webp'
import revitalHLogo from '../Images/REVITAL-H.webp'
import antoxipanLogo from '../Images/ANTOXIPAN.webp'
import accuChekLogo from '../Images/ACCU-CHEK.webp'
import drMorepinLogo from '../Images/dr-morepen-gluco-one.webp'
import drMorepinBPLogo from '../Images/dr-morepen-bp.webp'
import omronHemLogo from '../Images/omron-hem-7124.webp'
import indulekhaLogo from '../Images/INDULEKHA-BRINGHA-HAIR.webp'
import daburKeratoneLogo from '../Images/KERATONE-OIL-100-ML.webp'

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
      Items:[{
        name: 'Alograce Cream 50 GM',
        company: 'Lifestar',
        MRP: 165.30,
        Units: 'Pack of 50 GM',
        QTY: 20,
        prescription: 'not-required',
        img: alograceLogo
      },{
        name: 'Boroline Sx Cream 40 GM',
        company: 'G. D. Pharmaceuticals Ltd.',
        MRP: 74.80,
        Units: 'Pack of 50 GM',
        QTY: 2,
        prescription: 'not-required',
        img: borolineLogo
      }]
    },{
      subItems:"Sunscreen",
      Items:[{
        name: 'La Shield Spf 40 Gel 50 GM',
        company: 'Glenmark Pharmaceuticals Ltd.',
        MRP: 639.90,
        Units: 'Tube of 50 GM',
        QTY: 2,
        prescription: 'not-required',
        img: laShieldLogo
      },{
        name: 'Acne Uv Spf 30 Gel 30 GM',
        company: 'Ipca Laboratories Pvt Ltd.',
        MRP: 415.80,
        Units: 'Pack of 30 GM',
        QTY: 40,
        prescription: 'not-required',
        img: acneLogo
      }]
    },{
      subItems:"Face Wash",
      Items:[{
        name: 'Cetaphil Gentle Skin Cleanser 125 ML',
        company: 'Galderma India Pvt. Ltd',
        MRP: 371.07,
        Units: 'Bottle of 125 ML',
        QTY: 120,
        prescription: 'not-required',
        img: cetaphilLogo
      },{
        name: 'Dermadew Glow Facewash 100 ML',
        company: 'Hegde & Hegde',
        MRP: 336.00,
        Units: 'Pack of 100 ML',
        QTY: 2,
        prescription: 'not-required',
        img: dermadewLogo
      }]
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
      Items:[{
        name: 'Indulekha Bringha Hair Oil 100 ML',
        company: 'Hindustan Lab',
        MRP: 416.88,
        Units: 'BOTTLE of 100 ML',
        QTY: 20,
        prescription: 'not-required',
        img: indulekhaLogo
      },{
        name: 'Dabur Keratone Oil 100 ML',
        company: 'Dabur India Ltd.',
        MRP: 187.44,
        Units: 'Pack of 100 ML',
        QTY: 3,
        prescription: 'not-required',
        img: daburKeratoneLogo
      }]
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
      subItems:"Pre and Probiotics",
      Items:[{
        name: 'Vibact Ds Capsule 10',
        company: 'Usv Pvt Ltd',
        MRP: 176.71,
        Units: 'Pack of 10 Units',
        QTY: 200,
        prescription: 'not-required',
        img: vibactLogo
      },{
        name: 'Velgut 100 MG Capsule 15',
        company: 'Eris Lifesciences Ltd',
        MRP: 220.35,
        Units: 'STRIP of 15 Units',
        QTY: 2,
        prescription: 'not-required',
        img: velgutLogo
      }]
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
    name:"Multivitamins, Multiminerals and Antioxidants",
    Items:[{
      name: 'Revital H Woman Tablet 30',
      company: 'Sun Pharmaceutical Industries Ltd',
      MRP: 346.40,
      Units: 'BOTTLE of 30 Units',
      QTY: 250,
      prescription: 'not-required',
      img: revitalHLogo
    },{
      name: 'Antoxipan Tablet 15',
      company: 'Abbott India Ltd.',
      MRP: 386.78,
      Units: 'Pack of 15 Units',
      QTY: 1,
      prescription: 'not-required',
      img: antoxipanLogo
    }]
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
    name:"Test Strips and Lancets",
    Items:[{
      name: 'Accu Chek Active Strips 50',
      company: 'Roche',
      MRP: 1053.40,
      Units: 'PACKET of 50 Units',
      QTY: 54,
      prescription: 'not-required',
      condition: 'not-returnable',
      img: accuChekLogo
    },{
      name: 'Dr Morepen Gluco One Bg 03 Blood Glucose Test Strip 50',
      company: 'Morepen Laboratories Limited',
      MRP: 679.20,
      Units: 'Pack of 50 Units',
      QTY: 16,
      prescription: 'not-required',
      condition: 'not-returnable',
      img: drMorepinLogo
    }]
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
    name:"BP Monitors",
    Items:[{
      name: 'Dr Morepen Bp 15 Automatic Bp Monitor (bp Machine) 1',
      company: 'Morepen Laboratories Limited',
      MRP: 1120.00,
      Units: 'Pack of 1 UNIT',
      QTY: 27,
      prescription: 'not-required',
      condition: 'non-returnable',
      img: drMorepinBPLogo
    },{
      name: 'Omron Hem 7124 In Bp Monitor (bp Machine) 1',
      company: 'Omron Healthcare India Pvt Ltd',
      MRP: 1908.06,
      Units: 'Pack of 1 Unit',
      QTY: 16,
      prescription: 'not-required',
      condition: 'non-returnable',
      img: omronHemLogo
    }]
  },{
    name:"Nebulizers and Vaporizers"
  },{
    name:"Supports and Braces"
}]
},{
  id: 7,
  type: 'Health Article',
}]