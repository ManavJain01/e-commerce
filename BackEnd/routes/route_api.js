// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { findCustomer, signup, login, findCustomerDetails, findCartData, findOrders, findRefills, findSaveForLater } = require('../controllers/user_controller')
const { searchData } = require('../controllers/controller')

// fetch User data routes
router.route('/Customer').post(findCustomer)
router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/CustomerDetails').get(findCustomerDetails)
router.route('/cart').get(findCartData)
router.route('/orders').get(findOrders)
router.route('/refills').get(findRefills)
router.route('/saveForLater').get(findSaveForLater)

// fetch public routes
router.route('/search').get(searchData)

// fetching html...
// Render EJS file with CSS and JS
router.get('/html', (req, res) => {
  res.render('index', {
    title: 'Hello from the Backend!',
    message: 'This is rendered with EJS, including CSS and JavaScript.'
  });
});

// Exporting router
module.exports = router;