// Importing path module
const path = require('path');

// Accessing Express and MongoDB Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { findNavOptions, findAllMedicines, findAllCategory, findCategory } = require('../controllers/controller')

// Integrating Admin Panel
// Serve static files from the React app
// Uncomment this
// router.use(express.static('../Admin/dist'));

// Catch all other routes and return React frontend
// Uncomment this
// router.route('*').get((req, res) => {
//   res.sendFile(path.resolve('../Admin/dist/index.html'));
// })


// Reading User
router.route('/NavOptions').get(findNavOptions)
router.route('/Medicines').get(findAllMedicines)
router.route('/Categories').get(findAllCategory)
router.route('/Categories/:category').post(findCategory)

// Exporting router
module.exports = router;