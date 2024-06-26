// Importing path module
const path = require('path');

// Accessing Express and MongoDB Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { findAllMedicines, findAllCategory, findCategory } = require('../controllers/controller')

// Integrating Admin Panel
// Serve static files from the React app
router.use(express.static('../Admin/dist'));

// Catch all other routes and return React frontend
router.route('*').get((req, res) => {
  res.sendFile(path.resolve('../Admin/dist/index.html'));
})


// Reading User
router.route('/Medicines').get(findAllMedicines)
router.route('/Categories').get(findAllCategory)
router.route('/Categories/:category').post(findCategory)

// Exporting router
module.exports = router;