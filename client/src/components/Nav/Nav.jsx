// Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faComment, faUser, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.jpg';

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className={style.customNavbar}>
        <div className={style.logo}>
          <img src={logo} alt="Logo" />
        </div>
      
        {/* Barra de búsqueda */}
        <div className={`${style.searchBar}`}>
          <input type="text" placeholder="Buscar" className={style.searchInput} />
          <button className={style.searchButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
       
          {/* Botón de hamburguesa para dispositivos móviles */}
          <div className={style.mobileMenuIcon} onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        {/* Opciones de navegación para dispositivos de escritorio */}
        <div className={`${style.navOptions} ${isMobileMenuOpen ? style.showMobileMenu : ''}`}>
          <div className={style.columnIcon}>
            <FontAwesomeIcon icon={faComment} className={style.iconFontAwesome}></FontAwesomeIcon>
            <a href="#home">Ayuda</a>
          </div>
          <div className={style.columnIcon}>
            <FontAwesomeIcon icon={faUser} className={style.iconFontAwesome}></FontAwesomeIcon>
            <a href="#acerca">Acerca de</a>
          </div>
          <div className={style.columnIcon}>
            <FontAwesomeIcon icon={faShoppingCart} className={style.iconFontAwesome}></FontAwesomeIcon>
            <a href="#servicios">Mi carrito</a>
          </div>
        </div>
      </div>

      {/* Menú de navegación para dispositivos móviles */}
      <ul className={`${style.navigationList} ${isMobileMenuOpen ? style.showMobileMenu : ''}`}>
        <li><Link to="/" onClick={toggleMobileMenu}>Inicio</Link></li>
        <li><Link to="/productos" onClick={toggleMobileMenu}>Productos</Link></li>
        <li><Link to="/quienes-somos" onClick={toggleMobileMenu}>Quiénes somos</Link></li>
      </ul>
    </>
  );
};

export default Nav;
