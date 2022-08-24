const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("connection open.");
    })
    .catch((err) => {
        console.log("error", err);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    price: {
        type: Number, 
        required: true
    },
    onSale: {
        type: boolean, 
        default: false
    }
});

const Product = new mongoose.model("Product", productSchema);
const bike = new Product({name: "mountain bike", price: 599.99});
bike.save()
    .then((data) => {
        console.log("it worked.");
        console.log(data);
    })
    .catch((err) => {
        console.log("oh no, error.")
        console.log(err.errors.name.properties.message);
    })