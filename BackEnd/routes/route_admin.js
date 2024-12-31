// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { findUsers, findOrders, setDeliveryStatus, createProductService, createLinkService } = require('../service/admin_service')

// fetch User data routes
router.route('/users').get(findUsers)
router.route('/orders').get(findOrders)
router.route('/deliveryStatus').post(setDeliveryStatus)
// Create Products
router.route('/createProduct').post(createProductService)
// Create Links
router.route('/createLink').post(createLinkService)

// Exporting router
module.exports = router;