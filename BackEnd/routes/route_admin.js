// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { findUsers, findOrders } = require('../service/admin_service')

// fetch User data routes
router.route('/users').get(findUsers)
router.route('/orders').get(findOrders)

// Exporting router
module.exports = router;