import express from 'express';
import {cartPage} from '../controllers/cartController.mjs';

const router = express.Router();

// Route cho trang About
router.get('/cart', cartPage);

export default router;
