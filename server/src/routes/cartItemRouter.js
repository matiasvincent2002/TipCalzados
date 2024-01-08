// routes/cartItemRouter.js
const express = require('express');
const router = express.Router();
const { getAllCartItems } = require('../controllers/cartItemController');
const axios = require('axios');

router.get('/cartItems', getAllCartItems);
// Otras rutas para CRUD

module.exports = router;
