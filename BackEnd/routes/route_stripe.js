// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { handleStripe, paymentStatus } = require('../controllers/stripe_controller')

// Stripe Routes
router.route('/create-checkout-session').post(handleStripe)
router.route('/verify').get(paymentStatus)

// Exporting router
module.exports = router;