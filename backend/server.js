const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors")
// const {data} = require("./data");

const app = express();
const whitelist = ["http://127.0.0.1:5173"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.urlencoded({extended: false}))

app.use("/api/products", require("./routes/productRoutes.js"))
app.use("/api/users", require("./routes/userRoutes.js"))

// app.get("/api/products/category/:categoryName", (req, res) => { res.send("Your categories") })

app.listen(5000, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    // const Products = mongoose.model(
    //   "Products",
    //   { name: { type: String }, category: {type: String}, price: {type: Number}, photo: {type: String } },
    //   "products"
    // );
    // await Products.insertMany(data);
    console.log("server running on port ", 5000);
  } catch (error) {
    console.log(error);
  }
});
