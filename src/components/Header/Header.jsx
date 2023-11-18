// Header.jsx
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Header.module.css';
import img1 from '../../assets/headerimg.jpg';
import img2 from '../../assets/headerimg2.jpg';
import img3 from '../../assets/headerimg3.jpg';

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

  return (
    <div className={style.header}>
      <Carousel activeIndex={index} onSelect={handleSelect} className={`w-100 ${style.customCarousel}`} interval={3000} slide>
        {Object.values(imagePaths).map((path, idx) => (
          <Carousel.Item key={idx}>
            <img className={`d-block ${style.image}`} src={path} alt={`Imagen ${idx + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Header;
