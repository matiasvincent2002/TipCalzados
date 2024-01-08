// controllers/categoryController.js
const axios = require('axios');

const getAllCategories = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/categories');
    const categories = response.data;
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Otros controladores para crear, actualizar y eliminar categorías

module.exports = {
  getAllCategories,
  // Agregar otros controladores según sea necesario
};
