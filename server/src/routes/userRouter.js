// routes/userRouter.js
const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userController');
const axios = require('axios');

router.get('/users', getAllUsers);
// Agregar rutas para crear, actualizar y eliminar usuarios

module.exports = router;
