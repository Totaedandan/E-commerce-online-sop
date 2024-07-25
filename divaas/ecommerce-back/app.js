const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3001;

// Use the CORS middleware
app.use(cors());

// Use bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/uploads/'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: multer.memoryStorage() });

// Connect to MongoDB
const dbURI = 'mongodb+srv://mkuanyshbekov:Maku257!@cluster0.e4b3bny.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

// Define the Product Schema
const productSchema = new mongoose.Schema({
    productCollection: String,
    collectionDescription: String,
    name: String,
    description: String,
    brend: String,
    stars: Number,
    price: Number,
    priceAndWeight: Boolean,
    priceIn: String,
    list: [String],
    imageUrl: String
});

const Product = mongoose.model('Product', productSchema);


// GET endpoint to retrieve products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();

        res.json(products);
    } catch (error) {
        res.status(500).send('Error retrieving products');
    }
});


// POST endpoint to add a new product
app.post('/products', upload.single('image'), async (req, res) => {
    const { productCollection, collectionDescription, name, description, brend, stars, price, priceAndWeight, priceIn, list } = req.body;
    
    const newProduct = new Product({ productCollection, collectionDescription, name, description, brend, stars, price, priceAndWeight, priceIn, list });

    try {
        if (req.file) {
            const base64Image = req.file.buffer.toString('base64');
            newProduct.imageUrl = `data:${req.file.mimetype};base64,${base64Image}`;
        }
        
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).send('Error saving product');
    }
});

// DELETE endpoint to delete a product
app.delete('/products/:id', async (req, res) => {
    const productId = req.params.id;
    console.log('Deleting product with ID:', productId);

    try {
        await Product.findByIdAndDelete(productId);
        res.status(204).send();
    } catch (error) {
        res.status(500).send('Error deleting product');
    }
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
