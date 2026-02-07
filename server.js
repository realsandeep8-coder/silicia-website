const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Silicia Backend Running 🚀");
});

// MONGODB CONNECT
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully ✅");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error ❌", err.message);
  });

// SERVER START
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
