import express from "express";
import AdminController from "../controllers/adminController.mjs";


const router = express.Router();

// Routes quản lý users
router.get("/users", AdminController.manageUsers);
router.get("/users/new", AdminController.newUser);
router.post("/users/create", AdminController.createUser);
router.post("/users/delete/:id", AdminController.deleteUser);

// Routes quản lý products
router.get("/products", AdminController.manageProducts);
router.get("/products/new", AdminController.newProduct);
router.post("/products/create", AdminController.createProduct);
router.post("/products/delete/:id", AdminController.deleteProduct);

export default router;
