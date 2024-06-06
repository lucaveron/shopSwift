const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const errorMiddleware = require('./middleware/errors')

app.use(express.json());
app.use(cookieParser());

const products = require('./routes/product');
const avatars = require('./routes/avatar');
const authRoutes = require('./routes/auth')

app.use('/api/v1',products)
app.use('/api/v1',avatars)
app.use('/api/v1',authRoutes)
app.use(errorMiddleware);
module.exports = app