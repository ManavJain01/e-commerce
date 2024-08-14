// Firebase Otp Auth.

// Importing Controllers
const { findCustomer } = require('../controllers/user_controller')

// User related routes
router.route('/Customer').post(findCustomer)