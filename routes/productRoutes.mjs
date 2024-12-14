import express from 'express';
import { getProductPage } from '../controllers/productController.mjs';
import Product from '../models/product.mjs';

const router = express.Router();

// Trên productController
router.get('/product', getProductPage);

// Route: Get the list of products for the homepage
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { products });
  } catch (error) {
    res.status(500).send('Error fetching products');
  }
});

// Route: Add a new product (for testing purposes)
router.post('/add', async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
    const product = new Product({ name, price, description, image });
    await product.save();
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error adding product');
  }
});

export default router;
