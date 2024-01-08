const axios = require('axios');
const { Op } = require('sequelize');
const { Product } = require('../db');

const getAllProducts = async (req, res) => {
  try {
    const products = await axios.get(`http://localhost:5000/products`);
    res.json(products);
  } catch (error) {
    console.error(error); // Agrega log para rastrear errores
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProductName = async (req, res) => {
  try {
    const queryWord = req.query.name.toLowerCase();
    console.log('Query Word:', queryWord); // Agrega log para verificar la consulta

    // Consultar la API para obtener los productos por nombre
    const apiResponse = await axios.get(`http://localhost:5000/products`);

    // Validar que la respuesta de la API contiene datos antes de intentar acceder a ellos
    if (!apiResponse.data || !Array.isArray(apiResponse.data)) {
      throw new Error('API response does not contain valid product data');
    }

    const productsFromAPI = apiResponse.data;

    // Consultar la base de datos para obtener los productos
    const dbProducts = await Product.findAll();

    // Filtrar los productos que coinciden con la consulta (insensible a mayúsculas/minúsculas)
    const matchingProductsFromAPI = productsFromAPI.filter(product =>
      product.titulo?.toLowerCase()?.includes(queryWord)
    );

    const matchingProductsFromDB = dbProducts.filter(product =>
      product.titulo?.toLowerCase()?.includes(queryWord)
    );

    // Combinar y formatear los resultados
    const matchingProducts = matchingProductsFromAPI.concat(matchingProductsFromDB).map(product => ({
      id: product.id,
      titulo: product.titulo,
      // Otros campos deseados...
    }));

    if (matchingProducts.length > 0) {
      res.json(matchingProducts);
    } else {
      res.json({ message: 'No matching products found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching products' });
  }
};

module.exports = {
  getAllProducts,
  getProductName
  // Agregar otros controladores según sea necesario
};
