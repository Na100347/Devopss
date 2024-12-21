// import mongoose from 'mongoose';

// // Kết nối đến database "users"
// const userDBConnection = mongoose.createConnection(
//   'mongodb+srv://vannghia16062004:SjI0tNguNRfgkiOK@users.cc7sl.mongodb.net/users',
// );

// // Kết nối đến database "productDB"
// const productDBConnection = mongoose.createConnection(
//   'mongodb+srv://vannghia16062004:SjI0tNguNRfgkiOK@users.cc7sl.mongodb.net/productDB',
// );

// // Kết nối đến database "blogDB"
// const blogDBConnection = mongoose.createConnection(
//   'mongodb+srv://vannghia16062004:SjI0tNguNRfgkiOK@users.cc7sl.mongodb.net/blogDB',);

// // Kết nối cho Checkout
// const checkoutDBConnection = mongoose.createConnection(
//   'mongodb+srv://vannghia16062004:SjI0tNguNRfgkiOK@users.cc7sl.mongodb.net/productDB',
// );

// // Kết nối đến database "contactDB"
// const contactDBConnection = mongoose.createConnection(
//   'mongodb+srv://vannghia16062004:SjI0tNguNRfgkiOK@users.cc7sl.mongodb.net/contactDB',);

// // Xử lý sự kiện kết nối thành công
// userDBConnection.once('open', () => {
//   console.log('Connected to users database!');
// });

// productDBConnection.once('open', () => {
//   console.log('Connected to productDB database!');
// });

// export { userDBConnection, productDBConnection, blogDBConnection, checkoutDBConnection, contactDBConnection};
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Lấy URI từ biến môi trường
const mongoURI = process.env.MONGO_URI;

// Kết nối đến các cơ sở dữ liệu
const userDBConnection = mongoose.createConnection(`${mongoURI}/users`);
const productDBConnection = mongoose.createConnection(`${mongoURI}/productDB`);
const blogDBConnection = mongoose.createConnection(`${mongoURI}/blogDB`);
const checkoutDBConnection = mongoose.createConnection(`${mongoURI}/productDB`);
const contactDBConnection = mongoose.createConnection(`${mongoURI}/contactDB`);

// Xử lý sự kiện kết nối thành công
userDBConnection.once('open', () => {
  console.log('Connected to users database!');
});

productDBConnection.once('open', () => {
  console.log('Connected to productDB database!');
});

export { userDBConnection, productDBConnection, blogDBConnection, checkoutDBConnection, contactDBConnection };
