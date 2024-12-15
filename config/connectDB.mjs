import mongoose from 'mongoose';

// Kết nối đến database "users"
const userDBConnection = mongoose.createConnection(
  'mongodb+srv://vannghia16062004:SjI0tNguNRfgkiOK@users.cc7sl.mongodb.net/users',
);

// Kết nối đến database "productDB"
const productDBConnection = mongoose.createConnection(
  'mongodb+srv://vannghia16062004:SjI0tNguNRfgkiOK@users.cc7sl.mongodb.net/productDB',
);

// Kết nối đến database "blogDB"
const blogDBConnection = mongoose.createConnection(
  'mongodb+srv://vannghia16062004:SjI0tNguNRfgkiOK@users.cc7sl.mongodb.net/blogDB',);

// Kết nối cho Checkout
const checkoutDBConnection = mongoose.createConnection(
  'mongodb+srv://vannghia16062004:SjI0tNguNRfgkiOK@users.cc7sl.mongodb.net/productDB',
);

// Kết nối đến database "contactDB"
const contactDBConnection = mongoose.createConnection(
  'mongodb+srv://vannghia16062004:SjI0tNguNRfgkiOK@users.cc7sl.mongodb.net/contactDB',);

// Xử lý sự kiện kết nối thành công
userDBConnection.once('open', () => {
  console.log('Connected to users database!');
});

productDBConnection.once('open', () => {
  console.log('Connected to productDB database!');
});

export { userDBConnection, productDBConnection, blogDBConnection, checkoutDBConnection, contactDBConnection};
