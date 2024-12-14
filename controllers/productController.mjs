import Product from "../models/product.mjs"; // Model của Product

// Hàm lấy danh sách sản phẩm
const getProductPage = async (req, res) => {
  try {
    // Lấy danh sách sản phẩm từ MongoDB
    const products = await Product.find();

    // Tạo danh sách loại sản phẩm (categories) dựa trên sản phẩm
    const categories = [...new Set(products.map((product) => product.category))];

    res.render("product", {
      categories,
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Hàm lấy chi tiết sản phẩm theo ID
const getProductDetail = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Lấy sản phẩm theo ID
    if (!product) {
      return res.status(404).send('Không tìm thấy sản phẩm.');
    }
    res.render('single_product', { product }); // Render giao diện chi tiết sản phẩm
  } catch (error) {
    res.status(500).send('Lỗi khi lấy chi tiết sản phẩm.');
  }
};


// Export các hàm
export { getProductDetail, getProductPage };

