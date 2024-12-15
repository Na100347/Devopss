import Message from '../models/message.mjs';

export const contactPage = (req, res) => {
    res.render('contact', { title: 'Contact Page' });
};

export const submitMessage = async (req, res) => {
    try {
        // Lấy dữ liệu từ form
        const { name, email, subject, message } = req.body;

        const newMessage = new Message({
            name,
            email,
            subject,
            message
        });

        // Lưu thông điệp vào MongoDB
        const savedMessage = await newMessage.save();

        // Trả về phản hồi thành công
        res.status(200).json({
            success: true,
            message: 'Message sent successfully!'
        });
    } catch (error) {
        // Log lỗi chi tiết
        console.error('Error details:', error);

        // Trả về phản hồi lỗi
        res.status(500).json({
            success: false,
            message: 'Error sending message. Please try again.',
            error: error.message
        });
    }
};
