const express = require('express');
const app = express();

// Importa tus routers específicos para la API local
const productRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');
const cartItemRouter = require('./cartItemRouter');
const reviewRouter = require('./reviewRouter');
const userRouter = require('./userRouter');

// Configura las rutas para la API local
app.use(express.json());
app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use('/cartItems', cartItemRouter);
app.use('/reviews', reviewRouter);
app.use('/users', userRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
