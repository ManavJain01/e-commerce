// Importing Routes
const routes = require("./routes/route");
const routes_stripe = require("./routes/route_stripe");
const routes_twilio = require("./routes/route_twilio");
const routes_api = require("./routes/route_api");
const routes_admin = require("./routes/route_admin");

const { errorHandler } = require("./middlewares/errorHandler");

// Importing env file
require("dotenv").config();
const PORT = process.env.PORT;

// Accessing Express Packages
const express = require("express");
const app = express();

// Importing cors and using it.
const cors = require("cors");
app.use(
  cors({
    origin: [process.env.CLIENT_LOCATION, process.env.Admin_LOCATION],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
// app.use((req, res, next)=>{
//   res.setHeader("Access-Control-Allow-Origin",process.env.CLIENT_LOCATION);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// })
app.use(express.json());

// set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (CSS, JS);
app.use(express.static('public'));

// Importing Database
const mongoDB = require("./database/db");

// middleware or to set router
app.use("/", routes);
app.use("/stripe", routes_stripe);
app.use("/twilio", routes_twilio);
app.use("/api", routes_api);
app.use("/admin", routes_admin);

// Connecting MongoDB Server
// mongoDB();
mongoDB().catch((err) => {
  console.error("Error when connecting the database: ", err.message);
  process.exit(1); // Exit the process if the DB connection fails
});

// Using the error handler middleware
app.use(errorHandler);

// Starting the server
app.listen(PORT || 5000, () => {
  console.log("Server is running on port 5000.");
});