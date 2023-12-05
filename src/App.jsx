// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './View/Home/Home.jsx';
import Products from './View/Products/Products.jsx'
import ShoppingCartView from './View/ShoppingCartView/ShoppingCartView';

function App() {
  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/shopping-cart" element={<ShoppingCartView />} />
        {/* Puedes agregar más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}


export default App;
