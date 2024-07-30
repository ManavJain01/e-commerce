// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { findCustomerDetails, findCartData, findOrders, findRefills, findSaveForLater } = require('../controllers/user_controller')

// cart fetch data routes
router.route('/CustomerDetails').get(findCustomerDetails)
router.route('/cart').get(findCartData)
router.route('/orders').get(findOrders)
router.route('/refills').get(findRefills)
router.route('/saveForLater').get(findSaveForLater)

// Exporting router
module.exports = router;