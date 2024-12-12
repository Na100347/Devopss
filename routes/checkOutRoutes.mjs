import express from 'express';
import {checkOutPage} from '../controllers/checkOutController.mjs';

const router = express.Router();

// Route cho trang About
router.get('/checkout', checkOutPage);

export default router;
