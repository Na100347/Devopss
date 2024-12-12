import express from 'express';
import {blogPage} from '../controllers/blogController.mjs';

const router = express.Router();

// Route cho trang About
router.get('/blog', blogPage);

export default router;
