import express from "express";
import HomeController from "../controllers/home_controller.mjs";


// ẨN VIỆC PHẢI ĐĂNG NHẬP TRƯỚC KHI TRUY CẬP
// function checkLogin(req, res, next) {
//   if (req.session.user) {
//     next();
//   } else {
//     res.redirect("/login");
//   }
// }

const rootRouter = express.Router();
// rootRouter.get("/", checkLogin, HomeController.index);
rootRouter.get("/", HomeController.index);

rootRouter.get("/login", HomeController.login);
rootRouter.post("/login", HomeController.createLogin);

export default rootRouter;
