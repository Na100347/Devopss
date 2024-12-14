import express from 'express';
import Cart from '../models/cart.mjs'; // Đảm bảo đường dẫn đúng
import { cartPage } from '../controllers/cartController.mjs';
import Product from '../models/product.mjs';  // Đảm bảo đường dẫn đúng


const router = express.Router();

// Route cho trang Cart
router.get('/cart', async (req, res) => {
  try {
    const userId = req.session.userId; // Lấy userId từ session nếu có
    const cart = await Cart.findOne({ userId }).populate('items.productId');
    res.render('cart', { cart });
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi khi tải giỏ hàng');
  }
});

// Giỏ hàng lưu trong bộ nhớ (cookie hoặc session có thể là lựa chọn)
let cart = { items: [] };

router.post('/add-to-cart', async (req, res) => {
    try {
      const { productId, quantity } = req.body;
      if (!productId || !quantity) {
        return res.status(400).json({ message: 'Missing productId or quantity' });
      }
  
      // Tìm sản phẩm trong cơ sở dữ liệu
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Tìm giỏ hàng đã có (hoặc tạo mới nếu chưa có)
      let cart = await Cart.findOne();
      if (!cart) {
        // Tạo giỏ hàng mới nếu chưa có
        cart = new Cart({
          items: [{ productId: product._id, quantity }],
        });
        await cart.save();
        return res.status(200).json({ message: 'Product added to cart successfully' });
      } else {
        // Nếu giỏ hàng đã tồn tại, cập nhật giỏ hàng
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex >= 0) {
          // Nếu sản phẩm đã có trong giỏ, cập nhật số lượng
          cart.items[itemIndex].quantity += quantity;
        } else {
          // Nếu sản phẩm chưa có, thêm mới vào giỏ
          cart.items.push({ productId: product._id, quantity });
        }
        await cart.save();
        return res.status(200).json({ message: 'Product added to cart successfully' });
      }
  
    } catch (error) {
      console.error('Error adding product to cart:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

export default router;
