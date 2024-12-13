//models/blog.mjs
import mongoose from 'mongoose';
import { blogDBConnection } from '../config/connectDB.mjs';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, // Tiêu đề của blog
    description: {
        type: String,
        required: true
    }, // Mô tả ngắn gọn
    image: {
        type: String,
        required: true
    }, // URL của hình ảnh blog
    date: {
        type: Date,
        default: Date.now
    }, // Ngày đăng bài
    content: {
        type: String,
        required: true
    }, // Nội dung chi tiết của blog
});

// Tạo và xuất mô hình Blog sử dụng kết nối blogDBConnection
export default blogDBConnection.model('Blog', blogSchema);
