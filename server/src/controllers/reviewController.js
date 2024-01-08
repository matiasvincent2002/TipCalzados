// controllers/reviewController.js
const { Review } = require('../db');

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Otros controladores para crear, actualizar y eliminar opiniones

module.exports = {
  getAllReviews,
  // Agregar otros controladores según sea necesario
};
