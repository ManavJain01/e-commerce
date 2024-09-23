// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing env file
require("dotenv").config();

// Accessing Twilio
const twilio = require('twilio');

// Twilio Credentials (set your Account SID and Auth Token from Twilio)
const accountSid = process.env.TWILIOACCSID;
const authToken = process.env.TWILIOAUTHTOKEN;
const client = new twilio(accountSid, authToken);

// Importing Controllers
// const { handleStripe, paymentStatus } = require('../controllers/stripe_controller')

// Stripe Routes
router.post('/send-whatsapp', async (req, res) => {
  const { to, message } = req.body;
  
  if (!to || !message) {
    return res.status(400).json({ success: false, error: "Recipient number and message are required." });
  }

  try {
    const response = await client.messages.create({
      body: message,
      from: 'whatsapp:+14155238886',
      to: `whatsapp:+91${to}`
    });
    console.log("hi");
    
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log("error:", error.message);
    
    res.status(500).json({ success: false, error: error.message });
  }
});

// Exporting router
module.exports = router;