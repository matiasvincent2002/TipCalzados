// routes/productRouter.js
const express = require('express');
const router = express.Router();
const { getAllProducts, getProductName } = require('../controllers/productController');
const axios = require('axios');

router.get('/', getAllProducts);
router.get('/name',getProductName)
module.exports = router;
