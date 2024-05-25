const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");



// middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//route
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("hello from node API updated");
});


// database collection
mongoose
  .connect(
    "mongodb+srv://sudip:Asdfghjkl123@nodeapidb.ew5vwc7.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeAPIDB"
  )
  .then(() => {
    console.log("connection successful");
    app.listen(8000, () => {
      console.log("server is running on port 8000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
