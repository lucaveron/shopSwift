//check authonticated routes

const User = require("../models/user");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Login first to access this resource", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  next();
});

exports.authorizedRoles = (...roles) => {
    return (req, res, next) => {
      if (roles.includes('admin') && req.user.role === 'admin') {
        return next();
      }
      else if (roles.includes('user') && (req.user.role === 'user' || req.user.role === 'admin')) {
        return next();
      }
      // Si el usuario no tiene permiso para el rol requerido, devuelve un error 403 Forbidden
      return next(new ErrorHandler(`Role ${req.user.role} is not allowed`, 403));
    };
  };