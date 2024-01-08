// redux/actions.js
import axios from 'axios';

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      dispatch(setProducts(response.data)); // Despacha la acción con los productos
    } catch (error) {
      console.log('Error fetching products', error);
    }
  };
};
export const getProductName = (name) =>{
  return async (dispatch)  =>{
    try{
      const response = await axios.get(`http://localhost:5000/products/name/${name}`);
      const data = response.data;
      dispatch({type: 'GET_PRODUCT_NAME_SUCCESS', payload: data});
    
    }catch(error){
      dispatch({ type: 'GET_PRODUCT_ERROR', payload: error.message });
    }
  }
}
