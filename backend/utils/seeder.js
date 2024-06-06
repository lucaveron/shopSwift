const Product = require('../models/product')
const dotenv = require('dotenv')

const connectDb = require ('../config/database')

const products = require('../dataExample/product.json');
const { connect} = require('mongoose');

dotenv.config({ path: 'backend/config/config.env' })

connectDb()


const seedProducts = async () => {
    try {
        await Product.deleteMany()
        console.log('Database deleted successfully')
        await Product.insertMany(products)
        console.log('Database added successfully')
        process.exit();
    } catch (error) {
        console.log(error.message)
        process.exit()
    }
}

seedProducts()