import mongoose from 'mongoose';
import { productDBConnection } from '../config/connectDB.mjs';
import Product from '../models/product.mjs';

const cartSchema = new mongoose.Schema({
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1,
      },
    },
  ],
});

// Sử dụng kết nối 'productDBConnection' để tạo model
const Cart = productDBConnection.model('Cart', cartSchema);

export default Cart;
