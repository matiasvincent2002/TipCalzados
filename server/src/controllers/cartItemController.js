// controllers/cartItemController.js
const { CartItem } = require('../db');

const getAllCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll();
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createCartItem = async (req, res) => {
  try {
    const { quantity, totalAmount } = req.body;
    const newCartItem = await CartItem.create({ quantity, totalAmount });
    res.status(201).json(newCartItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { quantity, totalAmount } = req.body;
    const cartItemId = req.params.id;
    const updatedCartItem = await CartItem.update({ quantity, totalAmount }, {
      where: { id: cartItemId },
      returning: true,
    });
    res.json(updatedCartItem[1][0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const cartItemId = req.params.id;
    const deletedCartItem = await CartItem.destroy({
      where: { id: cartItemId },
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllCartItems,
  createCartItem,
  updateCartItem,
  deleteCartItem,
  // Agregar otros controladores según sea necesario
};
