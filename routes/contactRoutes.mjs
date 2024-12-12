import express from 'express';
import {contactPage} from '../controllers/contactController.mjs';

const router = express.Router();

// Route cho trang About
router.get('/contact', contactPage);

export default router;
