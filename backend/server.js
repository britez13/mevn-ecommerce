const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const {data} = require("./data");

dotenv.config();

const app = express();

app.get("/", (req, res) => res.send("Hey!"))

app.listen(5000, async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
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
})