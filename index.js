import express from "express";
import rootRouter from "./routes/root.mjs";
import userRouter from "./routes/user.mjs";
import apiuserRouter from "./routes/api.mjs";
import { connectDB } from "./config/connectDB.mjs";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import session from "express-session";

// Khởi tạo ứng dụng Express
const app = express();
const port = 3000;

// Kết nối tới cơ sở dữ liệu
connectDB();

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

// Khởi động server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
