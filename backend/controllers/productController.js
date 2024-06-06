const Product = require("../models/product");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");

exports.newProduct = catchAsyncErrors(async (req, res, next) => {

  req.body.user = req.user.id;
  
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product: product,
  });
});

exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const apiFeatures = new APIFeatures(Product.find(), req.query)
                          .search().filter()
  const products = await apiFeatures.query;
  res.status(200).json({
    success: true,
    message: "This route will show all products",
    count: products.length,
    products,
  });
});

exports.getProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Information about the product",
    product,
  });
});

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Product updated",
    product,
  });
});

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product deleted",
  });
});
