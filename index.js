import express from "express";
import path from "path";
import ejslayouts from "express-ejs-layouts";
import ProductController from "./src/controllers/product.controller.js";
import validationmiddleware from "./middleware/validation.middleware.js";
import { uploadFile } from "./middleware/file-upload.middleware.js";
import register from "./src/controllers/register.controller.js";
import session from "express-session";
import { auth } from "./middleware/auth.middleware.js";
const server = express();



server.use(ejslayouts);
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

const productController = new ProductController();
const UserRegister = new register();

server.post('/register',UserRegister.postregister)
server.get('/register',UserRegister.registerUser)
server.get('/login',UserRegister.userLogin)
server.post('/login',UserRegister.postLogin) 
server.get("/",auth, productController.getProducts);
server.get("/new", auth,productController.getaddproduct);
server.get("/updateproduct/:id",auth, productController.getUpdateProductview);
server.post("/deleteproduct/:id",auth, productController.getDeleteProduct);
server.post(
  "/",
  uploadFile.single('imageUrl'),
  auth,
  validationmiddleware,
  productController.addnewproduct
);
server.post("/updateproduct", auth, productController.postUpdateProduct);
server.get("/updateproduct/:id",auth, productController.getUpdateProductview);

server.use(session({
  secret:'SecretKey',
  resave:false,
  saveUninitialized:true,
  cookie:{secure: false}
}))
server.use(express.static("src/views"));
server.listen(3400, () => {
  console.log("Server running on port no 3400");
});
