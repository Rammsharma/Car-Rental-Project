const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");

const app = express();

// Define allowed origins
const allowedOrigins = ["http://localhost:5173", "http://localhost:5173/"];

// Middleware to normalize and check the origin
app.use(
  cors({
    origin: function (origin, callback) {
      // Normalize the origin by removing the trailing slash if it exists
      if (origin) {
        const normalizedOrigin = origin.endsWith("/")
          ? origin.slice(0, -1)
          : origin;
        if (allowedOrigins.includes(normalizedOrigin)) {
          return callback(null, true); // Allow request
        } else {
          return callback(new Error("Not allowed by CORS"), false);
        }
      } else {
        // If there is no origin (e.g., when the request is made from the same origin), allow it
        return callback(null, true);
      }
    },
    credentials: true, // Allow credentials to be included in the request (optional)
  })
);

app.use(bodyParser.json());

// Razorpay instance
const razorpay = new Razorpay({
  key_id: "rzp_test_JJvxRM7DqlgeL4", // Replace with your Razorpay Test Key ID
  key_secret: "XSlhN3BAGV51UXHzLz19ql27", // Replace with your Razorpay Test Key Secret
});

// POST route to create order
app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // Convert INR to paise (1 INR = 100 paise)
      currency: "INR",
      receipt: `order_rcptid_${new Date().getTime()}`,
      payment_capture: 1, // 1 for auto capture
    };

    const order = await razorpay.orders.create(options);
    res.json(order); // Send order details to frontend
  } catch (error) {
    res.status(500).send("Error creating order: " + error.message);
  }
});

// Start server on port 6001
app.listen(6001, () => {
  console.log("Server running on port 6001");
});
