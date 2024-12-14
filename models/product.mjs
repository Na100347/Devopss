import mongoose from 'mongoose';
import {productDBConnection} from '../config/connectDB.mjs'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    default: null, // Giá gốc, nếu không có thì để null
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  sale: {
    type: Boolean,
    default: false,
  },
  newArrival: {
    type: Boolean,
    default: false,
  },
  bestSeller: {
    type: Boolean,
    default: false,
  },
});


const Product = productDBConnection.model('Product', productSchema);


export default Product;

