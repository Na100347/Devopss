import express from "express";
import rootRouter from "./routes/root.mjs";
import userRouter from "./routes/user.mjs";
import apiuserRouter from "./routes/api.mjs";
import { userDBConnection, productDBConnection } from "./config/connectDB.mjs";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import session from "express-session";
import aboutRouter from './routes/aboutRoutes.mjs';
import productRouter from './routes/productRoutes.mjs';
import singleProductRouter from './routes/singleProductRoutes.mjs';
import cartRouter from './routes/cartRoutes.mjs';
import checkOutRouter from './routes/checkOutRoutes.mjs';
import blogRouter from './routes/blogRoutes.mjs';
import contactRouter from './routes/contactRoutes.mjs';
import adminRouter from './routes/adminRoutes.mjs';
import User from "./models/user.mjs";
import Product from "./models/product.mjs";
import cors from 'cors';




// Khởi tạo ứng dụng Express
const app = express();
const port = 3000;


app.use(cors());

// Kết nối tới cơ sở dữ liệu
// Kết nối cơ sở dữ liệu
// Để kết nối đến "users" database
userDBConnection.on("connected", () => {
  console.log("Successfully connected to users database.");
});

// Để kết nối đến "productDB"
productDBConnection.on("connected", () => {
  console.log("Successfully connected to productDB.");
});

// Cấu hình middleware
app.use(express.static("public"));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Cấu hình method-override
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

// Cấu hình view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Định nghĩa các route
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/api/v1", apiuserRouter);
// Sử dụng route about
app.use('/', aboutRouter);
app.use('/', productRouter);
app.use('/', singleProductRouter);
app.use('/', cartRouter);
app.use('/', checkOutRouter);
app.use('/', blogRouter);
app.use('/', contactRouter);
app.use('/', checkOutRouter);
app.use('/', adminRouter);



app.post('/place-order', (req, res) => {
  const { firstname, lastname, phone, email } = req.body;

  // Kiểm tra các trường bắt buộc
  if (!firstname || !lastname || !phone || !email) {
    return res.status(400).json({ message: 'Tất cả các trường đều bắt buộc. Vui lòng điền đầy đủ thông tin.' });
  }

  // Xử lý đơn hàng (ví dụ: lưu vào cơ sở dữ liệu hoặc ghi log)
  console.log(`Đơn hàng được đặt bởi ${firstname} ${lastname}. Liên hệ: ${phone}, ${email}.`);

  // Gửi phản hồi thành công
  res.status(200).json({ message: 'Đơn hàng đã được đặt thành công!' });
});


// Khởi động server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});


