import Product from "../models/product.mjs"; // Model của Product

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

export { getProductPage };
