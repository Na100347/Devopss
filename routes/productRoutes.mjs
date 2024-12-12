import express from 'express';
import {getProductPage} from '../controllers/productController.mjs';

const router = express.Router();

// Route cho trang About
router.get('/product', getProductPage);

export default router;
