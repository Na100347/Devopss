import Blog from '../models/blog.mjs';

// Lấy danh sách blog
const getBlogPage = async (req, res) => {
    try {
        // Lấy danh sách blog từ MongoDB
        const blogs = await Blog.find();

        // Tạo danh sách ngày tháng đăng bài (dates) dựa trên blog
        const dates = [...new Set(blogs.map((blog) => blog.date ? blog.date.toDateString() : 'Unknown'))];

        res.render('blog', {
            dates,
            blogs,
        });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Lấy chi tiết blog
const getBlogDetail = async (req, res) => {
    try {
        // Lấy blog theo ID từ MongoDB
        const blog = await Blog.findById(req.params.id);

        // Render trang blog-detail với dữ liệu từ MongoDB
        res.render('blog-detail', { blog });
    } catch (error) {
        console.error('Error fetching blog detail:', error);
        res.status(500).send('Internal Server Error');
    }
};

export {getBlogPage, getBlogDetail  };
