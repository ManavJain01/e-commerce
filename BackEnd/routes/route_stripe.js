// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { handleStripe } = require('../controllers/stripe_controller')

// Stripe Routes
router.route('/create-checkout-session').post(handleStripe)

// Exporting router
module.exports = router;