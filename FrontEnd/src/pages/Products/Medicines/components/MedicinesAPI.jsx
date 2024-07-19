import crocinLogo from '../Images/crocin.jpg'
import limceeLogo from '../Images/limcee.webp'
import limceeLogo2 from '../Images/Limcee_2.jpg'

import alograceLogo from '../Images/ALOGRACE.webp'
import borolineLogo from '../Images/BOROLINE.webp'
import borolineLogo2 from '../Images/BOROLINE_2.webp'
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
import thermosealProxaLogo from '../Images/thermoseal-proxa.webp'
import stimOrthoMbLogo from '../Images/stim-ortho-mb-super-soft.webp'
import glucozoneCgOrangePineappleLogo from '../Images/GLUCOZONE-CG-SACHET.webp'
import shelcalJointsCapsuleLogo from '../Images/SHELCAL-JOINTS-CAPSULE-10.webp'
import daburChyawanprash3xLogo from '../Images/DABUR-CHYAWANPRASH-3X-IMMUITY-ACTION-950-GM_dabur-chyawanprash-3x.webp'
import daburHoney100Logo from '../Images/dabur-honey-100--pure-1000-gm.webp'
import sblDiaboherbCapLogo from '../Images/sbl-diaboherb-capsule-100.webp'
import drWillmarSchwabeIndiaSyzygiumLogo from '../Images/dr-willmar-schwabe-india-syzygium.webp'
import himalayaSeptilinTabletLogo from '../Images/SEPTILIN-Tablet-60_1.webp'
import vicksVaporub10Logo from '../Images/VICKS-VAPORUB-OINTMENT-10-GM_1.webp'

export const medicines = [{
  id: 1,
  type: 'Medicines',
  path: '/Medicines',
  list: [{
    item: 'Crocin Advance 500mg',
    company: 'Herb Edge Health Care Pvt. Ltd.',
    price: 19.93,
    packaging: 'Pack of 15 packaging',
    quantity: 10,
    prescription: 'required',
    img: [crocinLogo]
  },{
    item: 'Limcee',
    company: 'Abbott',
    price: 23,
    packaging: 'Pack of 15 packaging',
    quantity: 5,
    prescription: 'not-required',
    img: [limceeLogo, limceeLogo2],
  }]
},{
  id: 2,
  type: 'Personal care',
  path: '/Categories/Personal%20care',
  list:[{
    item:"skin care",
    subList:[{
      subItems:"Skin Cream",
      Items:[{
        item: 'Alograce Cream 50 GM',
        company: 'Lifestar',
        price: 165.30,
        packaging: 'Pack of 50 GM',
        quantity: 20,
        prescription: 'not-required',
        img: [alograceLogo]
      },{
        item: 'Boroline Sx Cream 40 GM',
        company: 'G. D. Pharmaceuticals Ltd.',
        price: 74.80,
        packaging: 'Pack of 50 GM',
        quantity: 2,
        prescription: 'not-required',
        img: [borolineLogo, borolineLogo2]
      }]
    },{
      subItems:"Sunscreen",
      Items:[{
        item: 'La Shield Spf 40 Gel 50 GM',
        company: 'Glenmark Pharmaceuticals Ltd.',
        price: 639.90,
        packaging: 'Tube of 50 GM',
        quantity: 2,
        prescription: 'not-required',
        img: [laShieldLogo]
      },{
        item: 'Acne Uv Spf 30 Gel 30 GM',
        company: 'Ipca Laboratories Pvt Ltd.',
        price: 415.80,
        packaging: 'Pack of 30 GM',
        quantity: 40,
        prescription: 'not-required',
        img: [acneLogo]
      }]
    },{
      subItems:"Face Wash",
      Items:[{
        item: 'Cetaphil Gentle Skin Cleanser 125 ML',
        company: 'Galderma India Pvt. Ltd',
        price: 371.07,
        packaging: 'Bottle of 125 ML',
        quantity: 120,
        prescription: 'not-required',
        img: [cetaphilLogo]
      },{
        item: 'Dermadew Glow Facewash 100 ML',
        company: 'Hegde & Hegde',
        price: 336.00,
        packaging: 'Pack of 100 ML',
        quantity: 2,
        prescription: 'not-required',
        img: [dermadewLogo]
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
    item:"hair care",
    subList:[{
      subItems:"Hair Oils",
      Items:[{
        item: 'Indulekha Bringha Hair Oil 100 ML',
        company: 'Hindustan Lab',
        price: 416.88,
        packaging: 'BOTTLE of 100 ML',
        quantity: 20,
        prescription: 'not-required',
        img: [indulekhaLogo]
      },{
        item: 'Dabur Keratone Oil 100 ML',
        company: 'Dabur India Ltd.',
        price: 187.44,
        packaging: 'Pack of 100 ML',
        quantity: 3,
        prescription: 'not-required',
        img: [daburKeratoneLogo]
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
    item:"Baby and Mom care",
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
    item:"Oral care",
    subList:[{
      subItems:"Tooth Paste"
    },{
      subItems:"Mouth Ulcer Gel"
    },{
      subItems:"Mouthwash"
    },{
      subItems:"Toothache and Gum Pain"
    },{
      subItems:"Tooth Brush",
      Items:[{
        item: 'Thermoseal Proxa Ns Brush 5',
        company: 'Icpa Health Products Ltd',
        price: 161.28,
        packaging: 'Pack of 5 packaging',
        quantity: 22,
        prescription: 'not-required',
        img: [thermosealProxaLogo]
      },{
        item: 'Stim Ortho Mb Super Soft Toothbrush 1',
        company: 'Global Dent Aids Pvt Ltd',
        price: 90.00,
        packaging: 'Pack of 1 Unit',
        quantity: 32,
        prescription: 'not-required',
        img: [stimOrthoMbLogo]
      }]
    },{
      subItems:"Gargle Solution"
    }]
  },{
    item:"Elderly Care",
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
  path: '/Categories/Health%20Conditions',
  list:[{
    item:"Bone and Joint Care",
    Items:[{
      item: 'Glucozone Cg Orange Pineapple Flavour Sugar Free Sachet 12 GM',
      company: 'Leeford Healthcare',
      price: 54.48,
      packaging: 'Pack of 12 GM',
      quantity: 100,
      prescription: 'not-required',
      img: [glucozoneCgOrangePineappleLogo]
    },{
      item: 'Shelcal Joints Capsule 10',
      company: 'Torrent Pharmaceuticals Ltd.',
      price: 693.28,
      packaging: 'Pack of 10 packaging',
      quantity: 27,
      prescription: 'not-required',
      img: [shelcalJointsCapsuleLogo]
    }]
  },{
    item:"Digestive Care",
    subList:[{
      subItems:"Pre and Probiotics",
      Items:[{
        item: 'Vibact Ds Capsule 10',
        company: 'Usv Pvt Ltd',
        price: 176.71,
        packaging: 'Pack of 10 packaging',
        quantity: 200,
        prescription: 'not-required',
        img: [vibactLogo]
      },{
        item: 'Velgut 100 MG Capsule 15',
        company: 'Eris Lifesciences Ltd',
        price: 220.35,
        packaging: 'STRIP of 15 packaging',
        quantity: 2,
        prescription: 'not-required',
        img: [velgutLogo]
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
    item:"Eye Care",
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
    item:"Pain Relief"
  },{
    item:"Smoking Cessation",
    subList:[{
      subItems:"Nicotine Patch"
    },{
      subItems:"Nicotine Gum"
    },{
      subItems:"Nicotine Lozenges"
    }]
  },{
    item:"Liver Care"
  },{
    item:"Stomach Care"
  },{
    item:"Cold and Cough",
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
    item:"Heart Care"
  },{
    item:"Kidney Care"
  },{
    item:"Piles, Fissures & Fistula"
  },{
    item:"Respiratory Care",
    Items:[{
      item: 'Himalaya Septilin Tablet 60',
      company: 'Himalaya Drug Company',
      price: 199.50,
      packaging: 'Pack of 60 packaging',
      quantity: 15,
      prescription: 'not-required',
      img: [himalayaSeptilinTabletLogo]
    },{
      item: 'Vicks Vaporub 10 ML',
      company: 'Torrent Pharmaceuticals Ltd.',
      price: 43.65,
      packaging: 'BOTTLE of 10 GM',
      quantity: 23,
      prescription: 'not-required',
      img: [vicksVaporub10Logo]
    }]
  },{
    item:"Mental Wellness"
  },{
    item:"Derma Care"
}]
},{
  id: 4,
  type: 'Vitamins & Supplements',
  path: '/Categories/Vitamins%20&%20Supplements',
  list:[{
    item:"Multivitamins, Multiminerals and Antioxidants",
    Items:[{
      item: 'Revital H Woman Tablet 30',
      company: 'Sun Pharmaceutical Industries Ltd',
      price: 346.40,
      packaging: 'BOTTLE of 30 packaging',
      quantity: 250,
      prescription: 'not-required',
      img: [revitalHLogo]
    },{
      item: 'Antoxipan Tablet 15',
      company: 'Abbott India Ltd.',
      price: 386.78,
      packaging: 'Pack of 15 packaging',
      quantity: 1,
      prescription: 'not-required',
      img: [antoxipanLogo]
    }]
  },{
    item:"Calcium & Minerals"
  },{
    item:"Vitamin A to Z"
  },{
    item:"Protein Supplements"
  },{
    item:"Supplement Power"
  },{
    item:"Vitamin B12 and B Complex"
  },{
    item:"Mineral Supplements"
  },{
    item:"Immunity Boosters",
    Items:[{
      item: 'Dabur Chyawanprash 3x Immuity Action 950 GM',
      company: 'Dabur India Ltd.',
      price: 395.00,
      packaging: 'BOTTLE of 950 GM',
      quantity: 225,
      prescription: 'not-required',
      img: [daburChyawanprash3xLogo]
    },{
      item: 'Dabur Honey 100 % Pure 1000 GM',
      company: 'Dabur India Ltd.',
      price: 386.78,
      packaging: 'Pack of 1000 GM',
      quantity: 16,
      prescription: 'not-required',
      img: [daburHoney100Logo]
    }]
  },{
    item:"Omega and Fish Oil"
}]
},{
  id: 5,
  type: 'Diabetes Care',
  path: '/Categories/Diabetes%20Care',
  list:[{
    item:"Test Strips and Lancets",
    Items:[{
      item: 'Accu Chek Active Strips 50',
      company: 'Roche',
      price: 1053.40,
      packaging: 'PACKET of 50 packaging',
      quantity: 54,
      prescription: 'not-required',
      condition: 'not-returnable',
      img: [accuChekLogo]
    },{
      item: 'Dr Morepen Gluco One Bg 03 Blood Glucose Test Strip 50',
      company: 'Morepen Laboratories Limited',
      price: 679.20,
      packaging: 'Pack of 50 packaging',
      quantity: 16,
      prescription: 'not-required',
      condition: 'not-returnable',
      img: [drMorepinLogo]
    }]
  },{
    item:"Blood Glucose Monitors"
  },{
    item:"Diabetic Diet"
  },{
    item:"Sugar Substitutes"
  },{
    item:"Diabetes Ayurvedic Medicines"
  },{
    item:"Homeopathy",
    Items:[{
      item: 'Sbl Diaboherb Capsule 100',
      company: 'Sbl Pvt Ltd',
      price: 500.00,
      packaging: 'PACKET of 100 packaging',
      quantity: 5,
      prescription: 'not-required',
      condition: 'returnable',
      img: [sblDiaboherbCapLogo]
    },{
      item: 'Dr Willmar Schwabe India Syzygium Jambolanum Trituration 1x Tablet 20 GM',
      company: 'Dr Willmar Schwabe India Pvt Ltd',
      price: 157.50,
      packaging: 'Pack of 20 GM',
      quantity: 17,
      prescription: 'not-required',
      condition: 'returnable',
      img: [drWillmarSchwabeIndiaSyzygiumLogo]
    }]
  },{
    item:"Syringes and Pens"
}]
},{
  id: 6,
  type: 'Healthcare Devices',
  path: '/Categories/Healthcare%20Devices',
  list:[{
    item:"BP Monitors",
    Items:[{
      item: 'Dr Morepen Bp 15 Automatic Bp Monitor (bp Machine) 1',
      company: 'Morepen Laboratories Limited',
      price: 1120.00,
      packaging: 'Pack of 1 UNIT',
      quantity: 27,
      prescription: 'not-required',
      condition: 'non-returnable',
      img: [drMorepinBPLogo]
    },{
      item: 'Omron Hem 7124 In Bp Monitor (bp Machine) 1',
      company: 'Omron Healthcare India Pvt Ltd',
      price: 1908.06,
      packaging: 'Pack of 1 Unit',
      quantity: 16,
      prescription: 'not-required',
      condition: 'non-returnable',
      img: [omronHemLogo]
    }]
  },{
    item:"Nebulizers and Vaporizers"
  },{
    item:"Supports and Braces"
}]
},{
  id: 7,
  type: 'Health Article',
  path: '/Company/Health-Article'
}]