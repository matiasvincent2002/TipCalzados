// routes/reviewRouter.js
const express = require('express');
const router = express.Router();
const { getAllReviews } = require('../controllers/reviewController');
const axios = require('axios');

router.get('/reviews', getAllReviews);
// Agregar rutas para crear, actualizar y eliminar opiniones

module.exports = router;
