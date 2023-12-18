import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './View/Home/Home.jsx';
import Products from './View/Products/Products.jsx';
import ShoppingCartView from './View/ShoppingCartView/ShoppingCartView';
import About from './View/About/About.jsx';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/quienes-somos" element={<About />} />
        {/* Otras rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
