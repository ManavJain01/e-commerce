// Importing path module
const path = require('path');

// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { findNavOptions, findAllFilters, findAllMedicines, findCategory, addReviewController } = require('../controllers/controller')
const { UpdateCustomer, ItemAddedInCart, ItemUpdatedInCart, ItemDeletedFromCart } = require('../controllers/user_controller')

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
// User related routes
router.route('/UpdateCustomer').post(UpdateCustomer)
router.route('/AddToCart').post(ItemAddedInCart)
router.route('/UpdatingCart').post(ItemUpdatedInCart)
router.route('/deleteFromCart').post(ItemDeletedFromCart)

// Category related routes
router.route('/filters').get(findAllFilters)
router.route('/Medicines').get(findAllMedicines)
router.route('/Categories').get(findCategory)

// Dynamic Reviews
router.route('/addReview').post(addReviewController)

// Exporting router
module.exports = router;