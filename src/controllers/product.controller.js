import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.get();
    res.render("products", { products });
  }

  getaddproduct(req, res) {
    return res.render("new-products", {
      errorMessage: null,
    });
  }

  addnewproduct(req, res) {
    // console.log(req.body)
    const {name, desc , price} = req.body
    const imageUrl = 'images/'+ req.file.filename
    ProductModel.add(name,desc,price,imageUrl);
    let products = ProductModel.get();
    res.render("products", { products });
  }

  getUpdateProductview(req, res, next) {
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    console.log(productFound);
    if (productFound) {
      res.render("update-product", {
        products: productFound,
        errorMessage: null,
      });
    } else {
      res.status(401).send("product not found");
    }
  }
  postUpdateProduct(req, res, next) {
    ProductModel.update(req.body);
    let products = ProductModel.get();
    res.render("products", { products });
  }

  getDeleteProduct(req, res) {
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if (!productFound) {
      return res.status(401).send("product not found");
    } else {
      let products = ProductModel.get();
      ProductModel.delete(id);
      res.render("products", { products });
    }
  }
}
