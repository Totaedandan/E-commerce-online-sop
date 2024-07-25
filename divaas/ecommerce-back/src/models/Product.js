const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productCollection: { type: String, required: true, default: 'New Arrivals' },
    collectionDescription: { type: String, required: true, default: 'New Arrivals' },
    name: { type: String, required: true },
    description: { type: String, required: true },
    brend: { type: String, required: true },
    stars: { type: Number, required: true, default: 5  },
    price: { type: Number, required: true },
    priceAndWeight: { type: Boolean, required: true, default: false },
    priceIn: { type: String, required: true, default: 'KZT' },
    list: { type: [String], required: true },
    imageUrl: Buffer
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
