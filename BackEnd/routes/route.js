// Accessing Express and MongoDB Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { findAllMedicines, findAllCategory, findCategory } = require('../controllers/controller')

// Reading User
router.route('/Medicines').get(findAllMedicines)
router.route('/Categories').get(findAllCategory)
router.route('/Categories/:category').post(findCategory)

// Exporting router
module.exports = router;