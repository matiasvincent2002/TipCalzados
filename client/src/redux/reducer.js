// redux/reduce.js
const initialState = {
    products: [],
    cart: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return { ...state, products: action.payload };
      // Otros casos según sea necesario
      default:
        return state;
    }
  };
  
  export default reducer;
  