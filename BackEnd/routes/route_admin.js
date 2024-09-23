// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { findUsers } = require('../service/admin_service')

// fetch User data routes
router.route('/users').get(findUsers)

// Exporting router
module.exports = router;