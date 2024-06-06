const User = require("../models/user");
const Avatar = require("../models/avatar"); // Importar el modelo de Avatar
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  // El ID del avatar predeterminado
  const defaultAvatarId = "66610e38fcb0cbeab5171b59";
    const user = await User.create({
      name,
      email,
      password,
      avatar: defaultAvatarId, 
    });

   sendToken(user, 200, res)
});


exports.loginUser = catchAsyncErrors( async (req, res, next) => {
  const {email,password} = req.body;

  if (!email || !password){
    return next(new ErrorHandler('Please Enter email and password',400))
  }

  const user = await User.findOne({email}).select('+password');

  if (!user){
    return next(new ErrorHandler('Invalid Credentials',400))
  }

  //bad pass

  const isPasswordMatched = await user.comparePassword(password)

  if (!isPasswordMatched){
    return next(new ErrorHandler('Invalid Credentials',401))
  }
  sendToken(user, 200, res)
})

exports.logoutUser = catchAsyncErrors( async (req, res, next) => {

  res.cookie('token', null, {
    expires : new Date(Date.now()),
    httpOnly : true,
  })

  res.status(200).json({
    success : true,
    message : 'Logged out'
  })
})