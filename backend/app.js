const express = require("express");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const bagRoute = require("./routes/bagRoute");
const orderRoute=require("./routes/orderRoute")

const connectDb = require('./Configuration/connectDb');
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors"); // Import cors

dotenv.config();

const app = express();
const port = process.env.PORT;

// Connect to the database
connectDb();

// Use CORS middleware
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from the frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
  credentials: true // Allow cookies and credentials
}));

// Use cookie-parser middleware to parse cookies
app.use(cookieParser());

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/api", userRoute);
app.use("/api", productRoute);
app.use("/api/bag", bagRoute);
app.use("/api/order",orderRoute );


// Start the server
app.listen(port, (error) => {
  if (error) {
    console.log("Server Failed");
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
