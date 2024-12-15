export const isAdmin = (req, res, next) => {
    try {
      // Kiểm tra xem session có tồn tại và role có phải là Admin không
      if (req.session && req.session.user && req.session.user.role === "Admin") {
        next(); // Cho phép truy cập
      } else {
        // Truy cập bị từ chối
        res.status(403).json({ message: "Access denied. Admins only." });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };
  