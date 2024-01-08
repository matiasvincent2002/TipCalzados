// controllers/userController.js
const { User } = require('../db');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Otros controladores para crear, actualizar y eliminar usuarios

module.exports = {
  getAllUsers,
  // Agregar otros controladores según sea necesario
};
