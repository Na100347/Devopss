import Product from "../models/product.mjs"; // Model của Product

const adminPage = async (req, res) => {
  try {
    // Lấy danh sách sản phẩm từ MongoDB
    const products = await Product.find();

    // Tạo danh sách loại sản phẩm (categories) dựa trên sản phẩm
    const categories = [...new Set(products.map((product) => product.category))];

    res.render("admin", {
      categories,
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Thêm sản phẩm
export const createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Sửa sản phẩm
  export const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Xóa sản phẩm
  export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export { adminPage };
