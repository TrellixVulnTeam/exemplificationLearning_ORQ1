const mongoose = require ("mongoose");

mongoose.connect('mongodb://localhost:27017/storeApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongo connection open.");
    })
    .catch((err) => {
        console.log("mongo error.", err);
    });


const productSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    category: {
        type: String,
        enum: ["fruit", "vegetable", "dairy"],
        lowercase: true
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
