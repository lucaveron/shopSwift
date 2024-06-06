const express = require("express");
const product = require("../middleware/product");

const router = express.Router();

const {
  getProducts,
  newProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { isAuthenticated, authorizedRoles } = require("../middleware/auth"); //desestructuro para no llamarla como parte de auth

// router.route('/product/new').post(newProduct);
router.post("/product/new", isAuthenticated,authorizedRoles('user'),newProduct);
router.get("/products", isAuthenticated,authorizedRoles('user'),getProducts);
router.get("/product/:id",isAuthenticated,authorizedRoles('user'), getProduct);
router.put("/product/:id",isAuthenticated,authorizedRoles('user'), updateProduct);
router.delete("/product/:id",isAuthenticated,authorizedRoles('user'), deleteProduct);

module.exports = router;
