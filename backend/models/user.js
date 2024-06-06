const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name"],
      maxLength: [30, "The maximum number of characters is 30 characters"],
    },
    email: {
      type: String,
      required: [true, "A user must have an email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "A user must have a password"],
      minLength: [6, "The minimum number of characters is 6 characters"],
      maxLength: [30, "The maximum number of characters is 30 characters"],
      select: false,
    },
    avatar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Avatar",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    collection: "User",
  }
);

userSchema.pre("save", async function (next) { 
  if (!this.isModified('password')){
    next();
  }

  this.password = await bcrypt.hash(this.password,10)
 })

//return jwt for use

userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

//compare pass

userSchema.methods.comparePassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password)
}

userSchema.methods.getResetPasswordToken = function (){
  const resetToken = crypto.randomBytes(20).toString('hex');
  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;
  return resetToken;
}

module.exports = mongoose.model("User", userSchema);
