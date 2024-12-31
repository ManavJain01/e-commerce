// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN
const email = process.env.email;
const password = process.env.password;

// Customers Models
const CustomerModel = require("../models/User/customers")
const CustomerDataModel = require("../models/User/customer_data")
const OrderModel = require("../models/orders")

// NodeMailer Configurations
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  // host: "smtp.gmail.com",
  secure: true,
  port: 465,
  auth: {
    user: email,
    pass: password
  }
});

const mailOptions = {
  from: email,
  to: 'rocker17manav@gmail.com',
  subject: 'Sending Email using Node.js',
  text: "hello world"
};


// All Users
const findUsers = async (req, res) => {
  try {
    const users = await CustomerModel.find({});
    res.status(200).send(users);

  } catch (error) {
    console.error("Error find users: ", error.message);
    res.status(400).send(error.message);
  }
}

// All Orders
const findOrders = async (req, res) => {
  try {
    const users = await CustomerModel
      .find({})
      .select(["_id", "name", "phone"]);
    const orders = await Promise.all(
      users.map(async (user) => {
        
        // Fetch the orders for the current user
        const orders = await OrderModel
          .find({ _id: user._id })
          .select(["_id", "orders"]);

        // Return the user object with their orders
        return {
          ...user.toObject(), // Convert Mongoose document to plain JavaScript object
          orders: orders[0]?.orders, // Add the orders for the user
        };
      })
    );

    res.status(200).send(orders);
  } catch (error) {
    console.error("Error find orders: ", error.message);
    res.status(400).send(error.message);
  }
}

// Delivery Status
const setDeliveryStatus = async (req, res) => {
  try {
    const { status, id } = req.body;
    
    const response = await OrderModel.findOneAndUpdate(
      { "orders._id": id },
      { $set: { [`orders.$.deliveryStatus`]: status } },
      { new: true }
    );
    
    res.status(200).send(response);
  } catch (error) {
    console.error("Error setting delivery Status: ", error.message);
    res.status(400).send(error.message);
  }
}

// Create Products
const createProductService = async (req, res) => {
  try {
    const {
      item,
      company,
      category,
      subcategory,
      img,
      description,
      packaging,
      price,
      quantity
    } = req.body;

    // const date1 = req.query;
    // const date2 = new Date();

    // const diffTime = Math.abs(date2 - date1);
    // const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    // console.log(diffTime + " milliseconds");
    // console.log(diffDays + " days");

    let model = "";

    if(category === "Personal care") model = PersonalCareModel;
    else if(category === "Health Conditions") model = HealthConditionModel;
    else if(category === "Vitamins & Supplements") model = vitamins_supplementModel;
    else if(category === "Diabetes Care") model = DiabetesCareModel
    else if(category === "Healthcare Devices") model = HealthcareDeviceModel

    const addedProduct = await model.findOneAndUpdate(
      { subCategory: subcategory },
      {
        $push: { "subitems": { 
          item: item,
          company: company,
          packaging: packaging,
          price: price,
          quantity: quantity,
          prescription: "not-required",
          img: [img],
          description: description } }
      },
      // { createdAt: { type: Date, expires: 60 } }
    )
    
    // console.log(addedProduct);

    res.status(200).send("success");
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error.message);
  }
}

// Create Links
const createLinkService = async (req, res) => {
  try {
    // const data = req.body;

    // const date1 = new Date();

    const options = {
      hostname: 'localhost',
      port: 5000,
      // path: `/createProduct?${date1}`,
      path: `/createProduct`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Node.js'
      }
    };

    // console.log(options);
    
    transporter.sendMail(mailOptions, async function(error, info){
      if (error) {
        console.log(error.message);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    

    // const date1 = new Date();
    // const date2 = new Date();
    // console.log("new Date:", date1);
    
    // const diffTime = Math.abs(date2 - date1);
    // const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    // console.log(diffTime + " milliseconds");
    // console.log(diffDays + " days");

    res.status(200).send("success");
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error.message);
  }
}

module.exports = { findUsers, findOrders, setDeliveryStatus, createProductService, createLinkService };