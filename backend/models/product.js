const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have a name"],
      trim: true,
      maxLength: [100, "The maximum number of characters is 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "A product must have a price"],
      maxLength: [5, "The maximum number of characters is 100 characters"],
      default: 0.0,
    },
    description: {
      type: String,
      required: [true, "A product must have a description"],
      maxLength: [1000, "The maximum number of characters is 1000 characters"],
    },
    ratings: {
      type: Number,
      maxLength: [5, "The maximum number of characters is 100 characters"],
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "A product must have a category"],
      enum: {
        values: [
          "Electronics",
          "Cameras",
          "Laptop",
          "Accesories",
          "Books",
          "Food",
          "Clothes",
          "Shoes",
          "Toys",
          "Sports",
          "Home",
          "Others",
        ],
        message: "Please select a valid category",
      },
    },
    seller: {
      type: String,
      required: [true, "A product must have a seller"],
      maxLength: [100, "The maximum number of characters is 100 characters"],
    },
    stock: {
      type: Number,
      required: [true, "A product must have a stock"],
      maxLength: [5, "Product stock cant exceed 5 digits"],
      default: 0,
    },
    reviews: [
      {
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
          maxLength: [
            100,
            "The maximum number of characters is 100 characters",
          ],
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },

  },
  {
    collection: "Product",
  }
);

module.exports = mongoose.model("Product", productSchema);
