const mongoose = require ("mongoose");
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/storeApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongo connection open.");
    })
    .catch((err) => {
        console.log("mongo error.", err);
    });

const seedProducts = [
    {
        name: "Ruby Grapefruit", 
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })