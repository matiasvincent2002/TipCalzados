// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faComment, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';  // Importa los íconos necesarios
import logo from '../../assets/logo.jpg'
const Nav = () => {
  return (
    <>
      <div className={style.customNavbar}>
      <div className={style.logo}>
          <img src={logo}></img>
        </div>
        <div className={`${style.searchBar}`}>
          <input type="text" placeholder="Buscar" className={style.searchInput} />
          <button className={style.searchButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className={`${style.navOptions}`}>
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

      <ul className={style.navigationList}>
        <li><Link to="/inicio">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/quienes-somos">Quiénes somos</Link></li>
      </ul>
    </>
  );
};

export default Nav;
