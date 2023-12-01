// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarBurst, faCartShopping, faComment, faCommentSms, faHome, faSearch, faTextHeight, faUser } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick'; // Importa Slider de react-slick
import style from './Header.module.css';
import img1 from '../../assets/ringo.jpg';
import img2 from '../../assets/ringo2.jpg';
import img3 from '../../assets/ringo3.jpg';
import logo from '../../assets/logo.jpg'

const imagePaths = {
  image1: img1,
  image2: img2,
  image3: img3,
  // Agrega más imágenes según sea necesario
};


const Header = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Configuración del carousel de destacados
 

  return (
    <div className={style.header}>
      {/* Navbar */}
   
      <div className={style.customNavbar}>
        {/* Logo */}
        <div className={style.logo}>
          <img src={logo}></img>
        </div>

        {/* Barra de búsqueda */}
        <div className={`${style.searchBar}`}>
          <input type="text" placeholder="Buscar" className={style.searchInput} />
          <button className={style.searchButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          
        </div>

        {/* Opciones de navegación */}
        <div className={`${style.navOptions}`}>
          <div className={style.columnIcon}>
          <FontAwesomeIcon icon={faComment} className={style.iconFontAwesome}></FontAwesomeIcon><a href="#home">Ayuda</a>
          </div>
          <div className={style.columnIcon}>
        <FontAwesomeIcon icon={faUser} className={style.iconFontAwesome}></FontAwesomeIcon><a href="#acerca">Acerca de</a>
          </div>
          <div className={style.columnIcon}>
          <FontAwesomeIcon icon={faCartShopping} className={style.iconFontAwesome}></FontAwesomeIcon><a href="#servicios">Mi carrito</a>
         </div>
        </div>

      </div>
    {/* Nueva sección de navegación */}
    <ul className={style.navigationList}>
        <li><Link to="/inicio">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/quienes-somos">Quiénes somos</Link></li>
      </ul>
     
      {/* Carousel principal */}
      <div className={style.carouselContainer}>
        <Carousel
        
          activeIndex={index}
          onSelect={handleSelect}
          className={`w-100 ${style.customCarousel}`}
          interval={3000}
          slide
        >
          {Object.values(imagePaths).map((path, idx) => (
            <Carousel.Item key={idx}>
              <img className={`d-block ${style.image}`} src={path} alt={`Imagen ${idx + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Sección de destacados */}
      
    </div>
  );
};

export default Header;
