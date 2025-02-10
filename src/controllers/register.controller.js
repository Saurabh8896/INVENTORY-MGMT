import registerModel from "../models/register.model.js";
import ProductModel from "../models/product.model.js";
export default class register {
  registerUser(req, res) {
    res.render("register");
  }

  userLogin(req, res) {
    res.render("login", { errorMessage: null });
  }

  postregister(req, res) {
    const { name, email, password } = req.body;
    registerModel.add(name, email, password);
    res.render("login",{ errorMessage: null });
  }

  postLogin(req, res) {
    const { email, password } = req.body;
    const user = registerModel.isValid(email, password);
    if (!user) {
     return res.render("login", { errorMessage: "Invalid credentials" });
    }
        req.session.userEmail = email;
         let products = ProductModel.get();
        res.render("products", { products });
    
}
}
