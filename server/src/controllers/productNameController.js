const axios = require('axios');

const getProductName = async (req, res) => {
    try {
        const queryWord = req.query.name.toLowerCase();
        console.log('Query Word:', queryWord);

        // Consultar la API local para obtener los productos por nombre
        const apiResponse = await axios.get('http://localhost:5000/products'); // Asegúrate de usar el puerto correcto

        // Validar que la respuesta de la API contiene datos antes de intentar acceder a ellos
        if (!apiResponse.data || !Array.isArray(apiResponse.data.products)) {
            throw new Error('API response does not contain valid product data');
        }

        const productsFromAPI = apiResponse.data.products;

        // Filtrar los productos que coinciden con la consulta (insensible a mayúsculas/minúsculas)
        const matchingProducts = productsFromAPI.filter(product =>
            product.titulo?.toLowerCase()?.includes(queryWord)
        );

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

module.exports = { getProductName };
