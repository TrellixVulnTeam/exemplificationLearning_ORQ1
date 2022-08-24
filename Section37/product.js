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
        maxLength: 20,
        type: String,
        required: true
    }, 
    price: {
        type: Number, 
        required: [true, 'this is capitalism.'], 
        min: 0
    },
    onSale: {
        type: Boolean, 
        default: false
    },
    categories: {
        type: [String]
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        instore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String, 
        enum: ['S', 'M', 'L']
    }
});

const conciseSchema = mongoose.Schema({
    name: String, 
    price: Number
});

conciseSchema.virtual('concise').get(function() {
    return this.name + ", " + this.price;
})
.set(function(concise) {
    this.name = concise.substring(0, concise.indexOf(", "));
    this.price = concise.substring(concise.indexOf(", ") + 1);
});

const ConciseProduct = mongoose.model("ConciseProduct", conciseSchema);

const Product = new mongoose.model("Product", productSchema);

productSchema.statics.fireSale = function() {
    this.updateMany({}, {oneSale: true, price: 0}, {new: true})
};  

productSchema.methods.greet = function() {
    console.log("hello, your computer has virus.");
    console.log(this.name);
};

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
};

productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
};

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: "mountain bike"});
    foundProduct.greet();
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
};

const bike = new Product({name: "mountain bike", price: 599.99, categories: ['Cycling']});
bike.save()
    .then((data) => {
        console.log("it worked.");
        console.log(data);
    })
    .catch((err) => {
        console.log("oh no, error.")
        console.log(err);
    })


Product.findOneAndUpdate({name: "mountain bike"}, {price: -100}, {new: true})