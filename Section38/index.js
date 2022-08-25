const express = require('express');
const methodOverride = require("method-override");
const app = express();
const path = require('path');
const mongoose = require("mongoose");

const Product = require('./models/product')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/storeApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongo connection open.");
    })
    .catch((err) => {
        console.log("mongo error.", err);
    });

app.get("/products", async (req, res) => {
    const products = await Product.find({});
    res.render("products/index", { products });
});

app.get("/products/:id", async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render("products/show", { product });
});

app.post("/products", async(req, res) => {
    console.log(req.body);
    const product = new Product(req.body);
    await product.save();
    console.log(product);
    res.redirect("/products");
});

app.post("/products/:id", async(req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    if (req.body.name != null) {
        product.name = req.body.name;
    };

    if (req.body.price != null) {
        product.price = req.body.price;
    };

    if (req.body.category != null) {
        product.category = req.body.category;
    };

    await product.save();
    console.log(product);
    res.redirect("/products");
});

app.delete("/products/:id", async(req, res) => {
    const {id} = req.params;
    Product.findByIdAndDelete(id);
    res.redirect("/products");
});

app.listen("9999", () => {
    console.log("app is listening");
});